(() => {
  'use strict';
  const sources = {
    google:'Google search', bing:'Bing search', chatgpt:'AI referral', openai:'OpenAI referral',
    perplexity:'AI referral', claude:'AI referral', gemini:'AI referral', copilot:'AI referral', linkedin:'LinkedIn', partner:'Partner link'
  };
  const offers = {general:'AI implementation', sprint:'Implementation sprint', banking:'Banking workflow implementation', codex:'Enterprise Codex rollout', rfi:'Project RFI / RFP', partner:'Implementation partnership'};
  const parameters = new URLSearchParams(location.search);

  function entrySource() {
    const tagged = (parameters.get('utm_source') || '').toLowerCase();
    if (Object.hasOwn(sources, tagged)) return sources[tagged];
    if (!document.referrer) return 'Direct / unknown';
    let host;
    try { host = new URL(document.referrer).hostname; } catch { return 'Direct / unknown'; }
    if (host === location.hostname) return 'Direct / unknown';
    if (/^(?:[\w-]+\.)*(?:chatgpt\.com|chat\.openai\.com|perplexity\.ai|claude\.ai|gemini\.google\.com|copilot\.microsoft\.com)$/.test(host)) return 'AI referral';
    if (/^(?:www\.)?google\.(?:com|co\.[a-z]{2}|com\.[a-z]{2}|[a-z]{2})$/.test(host)) return 'Google search';
    if (/(^|\.)bing\.com$/.test(host)) return 'Bing search';
    if (/(^|\.)linkedin\.com$/.test(host) || host === 'lnkd.in') return 'LinkedIn';
    if (/(^|\.)openai\.com$/.test(host)) return 'OpenAI referral';
    return 'Other referral';
  }

  const canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) return;
  let entry = {landingPage:new URL(canonical.href).pathname, referralSource:entrySource()};
  try {
    const key = 'dockio.project.origin';
    const saved = JSON.parse(sessionStorage.getItem(key));
    if (saved && typeof saved.landingPage === 'string' && typeof saved.referralSource === 'string') entry = saved;
    else sessionStorage.setItem(key,JSON.stringify(entry));
  } catch { /* The form also works without tab storage. */ }

  const form = document.getElementById('project-enquiry');
  if (!form) return;
  const offer = parameters.get('offer');
  if (offer && Object.hasOwn(offers,offer)) {
    form.elements.offer.value = offer;
    const context = document.getElementById('project-context');
    context.textContent = offers[offer];
    context.hidden = false;
  }
  const status = document.getElementById('project-status');
  const confirmation = document.getElementById('project-confirmation');
  const button = form.querySelector('[type="submit"]');
  const endpoint = location.hostname === 'sankalpmore.github.io' ? 'https://www.dockio.in/api/enquiries' : '/api/enquiries';
  const requestKey = () => {
    const bytes = crypto.getRandomValues(new Uint8Array(16));
    bytes[6] = (bytes[6] & 15) | 64;
    bytes[8] = (bytes[8] & 63) | 128;
    const hex = Array.from(bytes,b => b.toString(16).padStart(2,'0')).join('');
    return [hex.slice(0,8),hex.slice(8,12),hex.slice(12,16),hex.slice(16,20),hex.slice(20)].join('-');
  };
  let key = requestKey();
  let reference = '';
  form.addEventListener('input', () => { key = requestKey(); status.textContent = ''; });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!form.reportValidity() || button.disabled) return;
    const file = form.elements.document.files[0];
    if (!file && form.elements.message.value.trim().length < 15) {
      status.textContent = 'Describe your workflow in at least 15 characters, or attach a PDF.';
      form.elements.message.focus();
      return;
    }
    if (file && (!file.size || file.size > 5 * 1024 * 1024 || !file.name.toLowerCase().endsWith('.pdf'))) {
      status.textContent = 'Choose a non-empty PDF up to 5 MB.';
      form.elements.document.focus();
      return;
    }
    const data = new FormData(form);
    data.set('requestId',key);
    data.set('landingPage',entry.landingPage);
    data.set('referralSource',entry.referralSource);
    button.disabled = true;
    status.textContent = 'Sending your project brief…';
    try {
      const response = await fetch(endpoint,{method:'POST',body:data});
      const result = await response.json();
      if (!response.ok || !result.reference) throw Error(result.error || 'Your brief could not be saved.');
      reference = result.reference;
      document.getElementById('project-reference').textContent = reference;
      document.getElementById('project-received').textContent = result.preview ? 'Preview submission saved locally.' : 'Dockio has received your project enquiry.';
      form.hidden = true;
      confirmation.hidden = false;
      confirmation.querySelector('h2').focus();
    } catch (error) {
      status.textContent = (error.message || 'Your brief could not be saved.') + ' You can retry or contact sankalp@dockio.in.';
    } finally { button.disabled = false; }
  });
  document.getElementById('project-copy-reference').addEventListener('click',async () => {
    const feedback = document.getElementById('project-copy-status');
    try {
      await navigator.clipboard.writeText(reference);
      feedback.textContent = 'Reference copied.';
    } catch { feedback.textContent = 'Select and copy the reference shown above.'; }
  });
})();
