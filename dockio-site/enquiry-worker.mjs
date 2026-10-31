// Sites dispatch supplies authenticated identity headers; never trust them on a standalone server.
const MAX_BODY=6*1024*1024, MAX_FILE=5*1024*1024;
const uuid=/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const allowedOrigins=new Set(['https://www.dockio.in','https://dockio.in','https://dockio-preview-2026.sankalp.chatgpt.site','https://sankalpmore.github.io']);
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const privateHeaders={'Cache-Control':'no-store','X-Robots-Tag':'noindex, nofollow','X-Content-Type-Options':'nosniff'};
function json(data,status=200,headers={}){return new Response(JSON.stringify(data),{status,headers:{...privateHeaders,'Content-Type':'application/json',...headers}});}
function fail(message,status=400){throw Object.assign(new Error(message),{status});}
const digest=async bytes=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))).map(b=>b.toString(16).padStart(2,'0')).join('');
const encode=bytes=>{let s='';for(let i=0;i<bytes.length;i+=8192)s+=String.fromCharCode(...bytes.subarray(i,i+8192));return btoa(s);};
const decode=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
async function boundedBody(request){
 if(Number(request.headers.get('content-length'))>MAX_BODY)fail('The request is too large. Use a PDF up to 5 MB.',413);
 const reader=request.body?.getReader();if(!reader)fail('A requirement is required.');let size=0;const parts=[];
 while(true){const{done,value}=await reader.read();if(done)break;size+=value.length;if(size>MAX_BODY){await reader.cancel();fail('The request is too large. Use a PDF up to 5 MB.',413);}parts.push(value);}
 const bytes=new Uint8Array(size);let offset=0;for(const p of parts){bytes.set(p,offset);offset+=p.length;}return bytes;
}
async function rateLimit(bucket,request,env){
 const now=Date.now(),day=new Date(now).toISOString().slice(0,10);
 const hash=await digest(new TextEncoder().encode(`${day}:${env.INBOX_OWNER_EMAIL}:${request.headers.get('CF-Connecting-IP')||'unknown'}`));
 const key=`limits/${day}/${hash}`;
 for(let retry=0;retry<3;retry++){
  const old=await bucket.get(key),value=old?await old.json():{count:0,window:now};
  if(now-value.window>3600000){value.count=0;value.window=now;}
  if(value.count>=5)fail('Too many submissions. Please try again later or email Dockio.',429);
  value.count++;
  if(await bucket.put(key,JSON.stringify(value),{onlyIf:old?{etagMatches:old.etag}:{etagDoesNotMatch:'*'}})){
   const stale=await bucket.list({prefix:'limits/',limit:100});
   const keys=stale.objects.filter(o=>o.key.slice(7,17)<day).map(o=>o.key);if(keys.length)await bucket.delete(keys);
   return;
  }
 }
 fail('Please retry in a moment.',429);
}
const fields={name:100,email:180,company:180,requesterRole:120,specialistRole:100,seniority:60,location:180,arrangement:40,duration:120,environment:300,procurement:100,intent:80,message:5000};
const enums={intent:['Request a team proposal','Request capability profiles','Discuss workforce requirements','Submit an RFI/RFP'],specialistRole:['AI engineer','Solution architect','AI product lead','Evaluation specialist','Adoption lead','Programme principal','Multiple roles / managed team','Help me define the roles'],seniority:['Mid-level','Senior','Lead / principal','Mixed team','To be agreed'],arrangement:['Remote','Hybrid','On-site','To be agreed'],procurement:['Exploring options','Budget / sponsor approval in progress','Supplier qualification','RFI stage','RFP stage','Ready to contract','Other / to be discussed']};
async function submit(request,env){
 if(!env.BUCKET||!env.INBOX_OWNER_EMAIL)fail('Enquiry capture is temporarily unavailable. Please email sankalp@dockio.in.',503);
 if(!request.headers.get('content-type')?.startsWith('multipart/form-data;'))fail('Use the requirement form.');
 const bytes=await boundedBody(request);let form;
 try{form=await new Response(bytes,{headers:{'Content-Type':request.headers.get('content-type')}}).formData();}catch{fail('The form could not be read.');}
 if(form.get('website'))fail('The requirement could not be accepted.');
 if(form.get('consent')!=='yes')fail('Please agree to the enquiry privacy notice.');
 const id=form.get('requestId');if(typeof id!=='string'||!uuid.test(id))fail('Please reload the form and retry.');
 const data={};for(const[key,max]of Object.entries(fields)){const v=form.get(key);if(typeof v!=='string'||!v.trim()||v.length>max||form.getAll(key).length!==1)fail(`Please check ${key}.`);data[key]=v.trim();}
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))fail('Please enter a valid work email.');
 if(data.message.length<30)fail('Please add at least 30 characters about your requirement.');
 for(const[k,values]of Object.entries(enums))if(!values.includes(data[k]))fail(`Please select a valid ${k}.`);
 data.teamSize=Number(form.get('teamSize'));if(!Number.isInteger(data.teamSize)||data.teamSize<1||data.teamSize>100)fail('Team size must be between 1 and 100.');
 data.startDate=String(form.get('startDate')||'');if(data.startDate&&(!/^\d{4}-\d{2}-\d{2}$/.test(data.startDate)||!Number.isFinite(Date.parse(data.startDate))||new Date(data.startDate).toISOString().slice(0,10)!==data.startDate))fail('Please check the target start date.');
 let document=null;const file=form.get('document');if(file&&typeof file!=='string'&&file.size){
  if(file.size>MAX_FILE||!file.name.toLowerCase().endsWith('.pdf'))fail('Attach a PDF no larger than 5 MB.');
  const content=new Uint8Array(await file.arrayBuffer());if(new TextDecoder().decode(content.slice(0,5))!=='%PDF-')fail('The attachment must be a PDF.');
  document={name:file.name.replace(/[\r\n\x00-\x1f]/g,'').slice(0,180),size:content.length,base64:encode(content)};
 }
 const fingerprint=await digest(new TextEncoder().encode(JSON.stringify({data,document}))),key=`enquiries/${id}.json`;
 const existing=await env.BUCKET.get(key);if(existing){const saved=await existing.json();if(saved.fingerprint!==fingerprint)fail('This submission changed. Please reload and try again.',409);return json({reference:saved.reference,preview:!!env.PREVIEW_MODE});}
 await rateLimit(env.BUCKET,request,env);
 const record={id,reference:`${env.PREVIEW_MODE?'PREVIEW':'DK'}-${id}`,submittedAt:new Date().toISOString(),consent:'Enquiry response and privacy notice accepted',data,document,fingerprint};
 const saved=await env.BUCKET.put(key,JSON.stringify(record),{onlyIf:{etagDoesNotMatch:'*'},httpMetadata:{contentType:'application/json'},customMetadata:{company:data.company,submittedAt:record.submittedAt,reference:record.reference}});
 if(!saved)fail('A submission is already being processed. Please retry.',409);
 return json({reference:record.reference,preview:!!env.PREVIEW_MODE},201);
}
function page(body,status=200){return new Response(`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Dockio enquiry inbox</title><style>body{font:16px/1.6 system-ui;color:#173c2d;background:#f7f8f3;margin:32px auto;padding:0 24px;max-width:1000px}a{color:#173c2d}article{background:white;border:1px solid #ccd9ce;padding:24px;margin:20px 0;overflow-wrap:anywhere}dt{font-weight:700;margin-top:12px}dd{margin:0;white-space:pre-wrap}button{padding:12px;cursor:pointer}</style></head><body><a href="/">dockio.</a> · <a href="/admin/enquiries">Enquiry inbox</a><h1>AI team enquiries</h1><p>Private owner inbox. Enquiries are stored here; automatic email notifications are not configured. Uploaded PDFs are untrusted documents—download only if expected and open with your organisation’s protected viewer.</p>${body}</body></html>`,{status,headers:{...privateHeaders,'Content-Type':'text/html; charset=utf-8','Content-Security-Policy':"default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; frame-ancestors 'none'; base-uri 'none'"}});}
async function admin(request,env,url){
 const email=request.headers.get('oai-authenticated-user-email'),user=request.headers.get('oai-authenticated-user-id');
 if(!user||!email)return page('<p><a href="/signin-with-chatgpt?return_to=%2Fadmin%2Fenquiries">Sign in with ChatGPT</a> using the site owner account.</p>',401);
 if(!env.INBOX_OWNER_EMAIL||email.toLowerCase()!==env.INBOX_OWNER_EMAIL.toLowerCase())return page('<p>This account is not authorised to view enquiries.</p>',403);
 if(!env.BUCKET)return page('<p>The enquiry inbox is not configured.</p>',503);
 const match=url.pathname.match(/^\/admin\/enquiries\/([0-9a-f-]+)(\/document)?\/?$/i);
 if(match){
  const id=match[1];if(!uuid.test(id))return page('<p>Enquiry not found.</p>',404);
  const key=`enquiries/${id}.json`,object=await env.BUCKET.get(key);if(!object)return page('<p>Enquiry not found.</p>',404);
  if(request.method==='POST'){
   if(match[2]||request.headers.get('origin')!==url.origin||url.searchParams.get('action')!=='delete')return page('<p>Invalid request.</p>',403);
   await env.BUCKET.delete(key);return new Response(null,{status:303,headers:{...privateHeaders,Location:'/admin/enquiries'}});
  }
  if(request.method!=='GET')return page('<p>Method not allowed.</p>',405);
  const record=await object.json();
  if(match[2]){if(!record.document)return page('<p>No attachment.</p>',404);return new Response(decode(record.document.base64),{headers:{...privateHeaders,'Content-Type':'application/pdf','Content-Disposition':`attachment; filename="requirement-${id}.pdf"`,'Content-Security-Policy':"sandbox; default-src 'none'"}});}
  return page(`<article><h2>${escape(record.data.company)}</h2><p>${escape(record.reference)} · ${escape(record.submittedAt)}</p><dl>${Object.entries(record.data).map(([k,v])=>`<dt>${escape(k.replace(/[A-Z]/g,m=>' '+m.toLowerCase()))}</dt><dd>${escape(v)}</dd>`).join('')}<dt>Consent</dt><dd>${escape(record.consent)}</dd></dl>${record.document?`<p><a href="/admin/enquiries/${id}/document">Download PDF: ${escape(record.document.name)}</a> (${record.document.size} bytes)</p>`:''}</article><details><summary>Remove this enquiry</summary><p>Deleting permanently removes the enquiry and its attachment. Retain records required for an active engagement before deleting.</p><form method="post" action="/admin/enquiries/${id}?action=delete"><button>Delete enquiry and attachment permanently</button></form></details>`);
 }
 if(url.pathname.replace(/\/$/,'')!=='/admin/enquiries')return page('<p>Not found.</p>',404);
 if(request.method!=='GET')return page('<p>Method not allowed.</p>',405);
 const cursor=url.searchParams.get('cursor')||undefined;if(cursor&&cursor.length>2000)return page('<p>Invalid page.</p>',400);
 const list=await env.BUCKET.list({prefix:'enquiries/',limit:50,cursor,include:['customMetadata']});
 return page(`<p>Up to 50 records per page, ordered by reference.</p>${list.objects.length?list.objects.map(o=>`<article><h2><a href="/admin/enquiries/${o.key.slice(10,-5)}">${escape(o.customMetadata?.company||'Open enquiry')}</a></h2><p>${escape(o.customMetadata?.submittedAt)} · ${escape(o.customMetadata?.reference)}</p></article>`).join(''):'<p>No enquiries on this page.</p>'}${list.truncated?`<a href="?cursor=${encodeURIComponent(list.cursor)}">Next page →</a>`:''}`);
}
export async function handleEnquiry(request,env){
 const url=new URL(request.url);if(!url.pathname.startsWith('/api/enquiries')&&!url.pathname.startsWith('/admin/enquiries'))return null;
 let headers={};try{
  if(url.pathname.startsWith('/admin/enquiries'))return await admin(request,env,url);
  const origin=request.headers.get('origin');if(origin&&origin!==url.origin&&!allowedOrigins.has(origin))return json({error:'Origin not allowed.'},403);
  if(origin)headers={'Access-Control-Allow-Origin':origin,'Vary':'Origin'};
  if(request.method==='OPTIONS')return new Response(null,{status:204,headers:{...headers,'Access-Control-Allow-Methods':'POST, GET, OPTIONS','Access-Control-Allow-Headers':'Content-Type'}});
  if(url.pathname==='/api/enquiries/status'&&request.method==='GET'){if(!env.BUCKET||!env.INBOX_OWNER_EMAIL)return json({ready:false},503,headers);await env.BUCKET.list({prefix:'health/',limit:1});return json({ready:true},200,headers);}
  if(url.pathname!=='/api/enquiries')return json({error:'Not found.'},404,headers);
  if(request.method!=='POST')return json({error:'Method not allowed.'},405,headers);
  const response=await submit(request,env);for(const[k,v]of Object.entries(headers))response.headers.set(k,v);return response;
 }catch(error){return json({error:error.status?error.message:'Enquiry capture is temporarily unavailable. Please retry or email sankalp@dockio.in.'},error.status||503,headers);}
}
