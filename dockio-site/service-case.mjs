const requests = [
  {
    label: 'Email on file',
    question: '“Please send my August statement to the email address you have on file.”',
    draft: 'We can send a copy to your registered email address.',
    source: 'After identity verification, a duplicate statement may be sent to the verified email address on file.',
    decision: 'Ready for review',
    review: 'The case handler checks the address on file and approves the reply before anything is sent.'
  },
  {
    label: 'Different email',
    question: '“I need my August statement. Can you send it to my new email address?”',
    draft: 'We can help you update your email address before we send the statement.',
    source: 'Refer a request to use a different email address to account servicing. Hold the statement until the new address is verified.',
    decision: 'Refer to account servicing',
    review: 'The case handler routes the request to account servicing. The statement stays on hold.'
  }
];

export function serviceCase() {
  const controls = requests.map((r,i) => `<input class="case-choice" type="radio" name="delivery-address" id="address-${i}" aria-controls="reply-${i}" ${i === 0 ? 'checked' : ''}><label for="address-${i}">${r.label}</label>`).join('');
  const replies = requests.map((r,i) => `<article id="reply-${i}" class="case-reply" aria-label="${r.label}">
    <dl><dt>Customer request</dt><dd class="customer-quote">${r.question}</dd>
    <dt>Draft reply</dt><dd>${r.draft}</dd></dl>
    <details class="case-source" open><summary>Sample policy · Duplicate statements</summary><p>${r.source}</p></details>
    <div class="case-decision"><span class="decision-mark" aria-hidden="true"></span><div><strong>${r.decision}</strong><p>${r.review}</p></div></div>
  </article>`).join('');
  return `<div class="case-file"><div class="case-file-head"><span>Service desk</span><span>Statement request</span></div>
    <fieldset class="case-switch"><legend>Compare delivery addresses</legend>${controls}
    <div class="case-replies">${replies}</div></fieldset>
  </div>`;
}

export function bankingCaseSection(detail = false) {
  const caption = detail ? 'Two requests, two review paths' : 'Inside a banking service case';
  const label = detail ? 'View the acceptance checklist' : 'Explore the banking implementation';
  const url = detail ? '#acceptance' : '/services/banking-ai-workflow-implementation/';
  return `<section class="case-section" id="service-case"><div class="wrap case-layout">
    <div class="case-intro"><h2>${caption}</h2><p>A customer has verified their identity and asks for a copy of a statement. Change the delivery address to see how the draft reply and the case handler’s decision change.</p>
    <a class="editorial-link" href="${url}">${label}</a></div>${serviceCase()}</div></section>`;
}
