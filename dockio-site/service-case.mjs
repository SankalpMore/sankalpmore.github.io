const requests = [
  {
    label: 'Email on file',
    request: '“Please send my April statement to the email address you have on file.”',
    actions: [
      ['Find the rule', 'Retrieve the approved policy for sending a duplicate statement.'],
      ['Prepare the reply', 'Draft a confirmation for the verified address on file.'],
      ['Update the case', 'Attach the draft and policy reference for the case handler.']
    ],
    decision: 'Ready for review',
    review: 'The case handler checks the recipient and decides whether to send the statement.',
    source: 'Once identity has been verified, a case handler may release a duplicate statement to the verified email address on file.'
  },
  {
    label: 'Different email',
    request: '“Please send my April statement to my new email address.”',
    actions: [
      ['Find the rule', 'Retrieve the policy for a change of recipient.'],
      ['Flag the exception', 'Record that the requested address differs from the verified address.'],
      ['Update the case', 'Place the statement on hold and prepare a referral for account servicing.']
    ],
    decision: 'Refer to account servicing',
    review: 'The case handler approves the referral. Account servicing verifies the address change before anyone can release the statement.',
    source: 'A request to use a different address requires separate verification by account servicing. The statement and account details stay unchanged while verification is pending.'
  }
];

export function serviceCase() {
  const controls = requests.map((r,i) => `<input class="case-choice" type="radio" name="delivery-address" id="address-${i}" aria-controls="reply-${i}" ${i === 0 ? 'checked' : ''}><label for="address-${i}">${r.label}</label>`).join('');
  const replies = requests.map((r,i) => `<article id="reply-${i}" class="case-reply" aria-label="${r.label}">
    <dl><dt>Customer request</dt><dd class="customer-quote">${r.request}</dd></dl>
    <h4>Agent tasks</h4><ol class="action-record">${r.actions.map(([name,result]) => `<li><b>${name}.</b> ${result}</li>`).join('')}</ol>
    <div class="human-decision"><h4>Human decision</h4><strong>${r.decision}</strong><p>${r.review}</p></div>
    <details class="case-source"><summary>Read the sample policy</summary><p>${r.source}</p></details>
  </article>`).join('');
  return `<div class="case-file"><h3 class="file-title">Statement request</h3>
    <fieldset class="case-switch"><legend class="visually-hidden">Choose the requested delivery address</legend>${controls}<div class="case-replies">${replies}</div></fieldset></div>`;
}

export function bankingCaseSection(detail = false) {
  const title = detail ? 'Where the agent stops' : 'From a service request to an agent task.';
  const label = detail ? 'View the acceptance checklist' : 'Explore the banking implementation';
  const url = detail ? '#acceptance' : '/services/banking-ai-workflow-implementation/';
  return `<section class="case-section" id="service-case"><div class="wrap case-layout">
    <div class="case-intro"><h2>${title}</h2><p>The customer has verified their identity. Change the email address they ask to use and see what the agent prepares for the case handler.</p>
    <a class="editorial-link" href="${url}">${label}</a></div>${serviceCase()}</div></section>`;
}
