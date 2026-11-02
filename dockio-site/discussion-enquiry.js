(()=>{
 const form=document.querySelector('#discussion-enquiry');if(!form)return;
 const status=document.querySelector('#discussion-submit-status'),button=form.querySelector('[type="submit"]'),confirmation=document.querySelector('#discussion-confirmation');
 const query=new URLSearchParams(location.search);
 const services={implementation:'AI implementation',integration:'AI implementation',workflows:'AI implementation','implementation-sprint':'AI implementation',teams:'Embedded AI teams','embedded-ai-teams':'Embedded AI teams',assessment:'AI strategy',embedded:'Embedded AI teams',budgetops:'Product / other enquiry',collaboration:'Product / other enquiry',strategy:'AI strategy',adoption:'Adoption & value',value:'Adoption & value',rfp:'RFI/RFP',rfi:'RFI/RFP'};
 const industries={banking:'Banking & financial services','financial-services':'Banking & financial services',pharma:'Pharma & life sciences','pharma-life-sciences':'Pharma & life sciences',logistics:'Logistics & supply chain','logistics-supply-chain':'Logistics & supply chain',technology:'IT & software','it-software':'IT & software',retail:'Retail & consumer goods','retail-consumer-goods':'Retail & consumer goods'};
 const audiences={delivery:'Product or delivery',product:'Product or delivery',executive:'Executive',leadership:'Executive',procurement:'Procurement'};
 const context=[];
 const service=services[query.get('service')];if(service){form.elements.intent.value=service;context.push(service);}
 const industry=industries[query.get('industry')];if(industry){form.elements.industry.value=industry;context.push(industry);}
 const audience=audiences[query.get('audience')];if(audience)form.elements.audience.value=audience;
 if(context.length){const note=document.querySelector('#discussion-context');note.textContent='Your discussion: '+context.join(' / ');note.hidden=false;}
 const endpoint=location.hostname==='sankalpmore.github.io'?'https://www.dockio.in/api/enquiries':'/api/enquiries';
 const newId=()=>{const b=crypto.getRandomValues(new Uint8Array(16));b[6]=(b[6]&15)|64;b[8]=(b[8]&63)|128;const h=Array.from(b,x=>x.toString(16).padStart(2,'0')).join('');return `${h.slice(0,8)}-${h.slice(8,12)}-${h.slice(12,16)}-${h.slice(16,20)}-${h.slice(20)}`;};
 let pendingKey=newId(),meetingBrief='';
 const changed=()=>{pendingKey=newId();status.textContent='';};
 form.addEventListener('input',changed);form.addEventListener('change',changed);
 form.addEventListener('submit',async e=>{
  e.preventDefault();if(!form.reportValidity())return;
  if(form.elements.message.value.trim().length<30){status.textContent='Please add at least 30 characters about the work you need to change.';form.elements.message.focus();return;}
  const file=form.elements.document.files[0];
  if(file&&(file.size>5*1024*1024||!file.name.toLowerCase().endsWith('.pdf'))){status.textContent='Please attach a PDF no larger than 5 MB.';form.querySelector('.discussion-details').open=true;form.elements.document.focus();return;}
  button.disabled=true;status.textContent='Sending your brief…';
  try{
   const data=new FormData(form);data.set('requestId',pendingKey);
   const response=await fetch(endpoint,{method:'POST',body:data});
   const result=await response.json();if(!response.ok)throw Error(result.error||'We could not save your requirement.');
   form.hidden=true;confirmation.hidden=false;document.querySelector('#discussion-reference').textContent=result.reference;
   document.querySelector('#discussion-received').textContent=result.preview?'Preview only: this test brief was saved locally, not sent to Dockio.':'Your requirement has been saved for Dockio to review.';
   meetingBrief=`Dockio discussion\nEnquiry reference: ${result.reference}\nCompany: ${String(data.get('company')).trim()}\nRequirement: ${data.get('intent')}\n${data.get('timeline')?'Timing: '+data.get('timeline')+'\n':''}${data.get('industry')?'Industry: '+data.get('industry')+'\n':''}\n${String(data.get('message')).trim()}`;
   confirmation.querySelector('h2').focus();confirmation.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
  }catch(error){status.textContent=(error.message||'We could not save your requirement.')+' Your brief is still here. Please retry, or email sankalp@dockio.in.';}
  finally{button.disabled=false;}
 });
 document.querySelector('#discussion-copy-brief').addEventListener('click',async()=>{const copyStatus=document.querySelector('#discussion-copy-status');try{if(!navigator.clipboard?.writeText)throw Error('Clipboard unavailable');await navigator.clipboard.writeText(meetingBrief);copyStatus.textContent='Brief and reference copied. Paste them into the meeting details if useful.';}catch{copyStatus.textContent='Copy is unavailable in this browser. Keep the enquiry reference above for your discussion.';}});
 document.querySelector('#discussion-new-enquiry').addEventListener('click',()=>{form.reset();form.hidden=false;confirmation.hidden=true;status.textContent='';document.querySelector('#discussion-copy-status').textContent='';meetingBrief='';pendingKey=newId();document.querySelector('#discussion-context').hidden=true;form.elements.name.focus();});
})();
