(()=>{
 const form=document.querySelector('#team-enquiry');if(!form)return;
 const status=document.querySelector('#team-submit-status'),button=form.querySelector('[type="submit"]'),confirmation=document.querySelector('#team-confirmation');
 const intent=new URLSearchParams(location.search).get('intent');const intents={proposal:'Request a team proposal',profiles:'Request capability profiles',sponsor:'Discuss workforce requirements',rfp:'Submit an RFI/RFP'};
 if(intents[intent])form.elements.intent.value=intents[intent];
 const endpoint=location.hostname==='sankalpmore.github.io'?'https://www.dockio.in/api/enquiries':'/api/enquiries';
 const newId=()=>{const b=crypto.getRandomValues(new Uint8Array(16));b[6]=(b[6]&15)|64;b[8]=(b[8]&63)|128;const h=Array.from(b,x=>x.toString(16).padStart(2,'0')).join('');return `${h.slice(0,8)}-${h.slice(8,12)}-${h.slice(12,16)}-${h.slice(16,20)}-${h.slice(20)}`;};
 let pendingKey=newId();
 form.addEventListener('input',()=>{pendingKey=newId();status.textContent='';});
 form.addEventListener('submit',async e=>{
  e.preventDefault();if(!form.reportValidity())return;
  const file=form.elements.document.files[0];
  if(file&&(file.size>5*1024*1024||!file.name.toLowerCase().endsWith('.pdf'))){status.textContent='Please attach a PDF no larger than 5 MB.';return;}
  button.disabled=true;status.textContent='Sending your requirement…';
  try{
   const data=new FormData(form);data.set('requestId',pendingKey);
   const response=await fetch(endpoint,{method:'POST',body:data});
   const result=await response.json();if(!response.ok)throw Error(result.error||'We could not save your requirement.');
   form.hidden=true;confirmation.hidden=false;document.querySelector('#team-reference').textContent=result.reference;
   confirmation.querySelector('h2 + p').firstChild.textContent=result.preview?'Preview only: this test requirement was saved locally, not sent to Dockio. Reference: ':'Your requirement has been saved for Dockio to review. Reference: ';
   confirmation.querySelector('h2').focus();confirmation.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
  }catch(error){status.textContent=(error.message||'We could not save your requirement.')+' Your form is still here. Please retry, or email sankalp@dockio.in.';}
  finally{button.disabled=false;}
 });
 document.querySelector('#team-new-enquiry').addEventListener('click',()=>{form.reset();form.hidden=false;confirmation.hidden=true;status.textContent='';pendingKey=newId();form.elements.name.focus();});
})();
