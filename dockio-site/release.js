/* Progressive enhancements. General contact drafts remain local; dedicated team intake is handled separately. */
(() => {
 'use strict';
 const $ = (s, r=document) => r.querySelector(s);
 const $$ = (s, r=document) => [...r.querySelectorAll(s)];
 const mobile = $('#mobile-toggle');
 const closeNav = () => { document.body.classList.remove('nav-open'); mobile?.setAttribute('aria-expanded','false');mobile?.setAttribute('aria-label','Open navigation');$$('.nav-disclosure').forEach(d=>d.open=false); };
 mobile?.addEventListener('click',()=>{const open=!document.body.classList.contains('nav-open');document.body.classList.toggle('nav-open',open);mobile.setAttribute('aria-expanded',String(open));mobile.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
 $$('.nav-disclosure').forEach(d=>{d.addEventListener('toggle',()=>{if(d.open)$$('.nav-disclosure').forEach(o=>{if(o!==d)o.open=false;});});d.addEventListener('focusout',()=>setTimeout(()=>{if(!d.contains(document.activeElement))d.open=false;},0));});
 document.addEventListener('click',e=>{if(!e.target.closest('.nav-disclosure'))$$('.nav-disclosure').forEach(d=>d.open=false);if(e.target.closest('#site-navigation a'))closeNav();if(document.body.classList.contains('nav-open')&&!e.target.closest('.site-header'))closeNav();});
 document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){const d=$('.nav-disclosure[open]');const wasMobile=document.body.classList.contains('nav-open');closeNav();if(wasMobile)mobile?.focus();else d?.querySelector('summary')?.focus();}
  if(e.key==='Tab'&&document.body.classList.contains('nav-open')){const items=$$('.site-header a,.site-header button,.site-header summary').filter(n=>n.getClientRects().length&&!n.disabled);const first=items[0],last=items.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}}
 });
 window.addEventListener('resize',()=>{if(innerWidth>880)closeNav();});
 const top=$('#back-to-top');window.addEventListener('scroll',()=>top?.classList.toggle('visible',scrollY>650),{passive:true});top?.addEventListener('click',()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'}));
 $('.skip-link')?.addEventListener('click',e=>{e.preventDefault();$('#main')?.focus();$('#main')?.scrollIntoView();});
 function bindPage(){
  const current=document.body.dataset.page||'/';
  $$('a[data-route]').forEach(a=>{if(a.dataset.route.split('?')[0]===current)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  $$('.nav-disclosure').forEach(d=>d.classList.toggle('is-current',!!$('a[aria-current="page"]',d)));
  const form=$('#release-enquiry');if(!form||form.dataset.bound)return;form.dataset.bound='true';
  const query=window.DOCKIO_PREVIEW?location.hash.split('?')[1]:location.search;
  const service=new URLSearchParams(query||'').get('service');const select=$('[name="service"]',form);
  if(service&&[...select.options].some(o=>o.value===service))select.value=service;
  const draft=$('#release-draft'),text=$('#release-draft-text');
  form.addEventListener('submit',e=>{
   e.preventDefault();if(!form.reportValidity())return;
   const data=new FormData(form),serviceName=select.options[select.selectedIndex].text;
   const name=String(data.get('name')||'').trim(),email=String(data.get('email')||'').trim(),company=String(data.get('company')||'').trim(),message=String(data.get('message')||'').trim();
   if(!name||!company||message.length<15){$('[name="message"]',form).setCustomValidity('Please describe your priority in at least 15 non-space characters.');form.reportValidity();return;}
   const body=`Hello Dockio,\n\nI would like to discuss: ${serviceName}\n\nName: ${name}\nWork email: ${email}\nOrganisation: ${company}\n\nBusiness priority:\n${message}\n\nPlease contact me to discuss the next step.`;
   text.textContent=body;
   $('#release-draft-send').href=`mailto:sankalp@dockio.in?subject=${encodeURIComponent('Dockio enquiry — '+serviceName+' — '+company)}&body=${encodeURIComponent(body)}`;
   form.hidden=true;draft.hidden=false;$('h3',draft).focus();
  });
  form.addEventListener('input',()=>{$('[name="message"]',form).setCustomValidity('');});
  $('#release-draft-edit')?.addEventListener('click',()=>{draft.hidden=true;form.hidden=false;$('[name="name"]',form).focus();});
  $('#release-draft-copy')?.addEventListener('click',async()=>{const status=$('#release-copy-status');try{if(!navigator.clipboard?.writeText)throw Error('Clipboard unavailable');await navigator.clipboard.writeText(text.textContent);status.textContent='Draft copied. Review and send it from your email app.';}catch{const range=document.createRange();range.selectNodeContents(text);const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);status.textContent='Draft selected. Use your browser’s Copy command, then paste it into your email app.';}});
 }
 window.addEventListener('dockio:page',bindPage);bindPage();
 if(!window.DOCKIO_PREVIEW&&location.hash.startsWith('#/')){
  const url=new URL(location.href),requested=location.hash.slice(1).split('?')[0].replace(/\/$/,'')||'/';
  const aliases={'/case-studies':'/insights','/partner-readiness':'/about','/engagements/workflow-sprint':'/services/implementation-sprint','/engagements/embedded':'/services/integration','/engagements/embedded-delivery':'/services/integration'};
  const route=aliases[requested]||requested;
  const known=['/delivery-example','/engagements/workflow-sprint','/engagements/embedded','/engagements/embedded-delivery','/','/services','/services/strategy','/services/integration','/services/workflows','/services/adoption','/services/implementation-sprint','/industries','/industries/financial-services','/industries/private-equity','/industries/enterprise-operations','/industries/professional-services','/openai','/approach','/budgetops','/about','/contact','/privacy','/insights','/insights/beyond-the-pilot','/insights/start-with-the-work','/insights/beyond-usage'];
  if(known.includes(route)){const q=location.hash.split('?')[1];location.replace((route==='/'?'/':route+'/')+(q?'?'+q:''));}
 }
})();
