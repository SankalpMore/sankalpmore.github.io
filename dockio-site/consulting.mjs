const roles = [
  {
    name: 'AI business analyst',
    label: 'Business analyst',
    title: 'An acceptance test for a changed email address',
    notes: [
      ['Trigger', 'A verified customer asks for a statement at an address that differs from the one on file.'],
      ['Permitted action', 'Read the approved policy, record the mismatch and prepare a referral to account servicing.'],
      ['Acceptance test', 'The case records the reason for the hold. The agent has neither sent the statement nor changed the customer record.'],
      ['Owner', 'The account-servicing lead checks the referral before accepting the test.']
    ]
  },
  {
    name: 'AI product manager',
    label: 'Product manager',
    title: 'A release decision for the same service queue',
    notes: [
      ['First release', 'Prepare a draft for verified customers using their registered email. Send exceptions to a case handler.'],
      ['Out of scope', 'Changing account details and sending statements stay with the bank.'],
      ['Release decision', 'Hold the release if any changed-address test bypasses verification. Compare handling time, reviewer corrections and running costs on eligible cases.'],
      ['Owner', 'The service owner decides whether to launch. The product manager records the decision and puts unresolved exceptions into the next review.']
    ]
  }
];

export function roleSample() {
  const switches = roles.map((r,i) => `<input type="radio" class="case-choice" id="role-${i}" name="work-sample" aria-controls="sample-${i}" ${i===0?'checked':''}><label for="role-${i}">${r.label}</label>`).join('');
  const records = roles.map((r,i) => {
    const query = new URLSearchParams({service:'teams',role:r.name});
    return `<article class="role-record" id="sample-${i}"><h3>${r.title}</h3><dl class="sample-notes">${r.notes.map(([term,copy])=>`<div><dt>${term}</dt><dd>${copy}</dd></div>`).join('')}</dl><a class="editorial-link" href="/contact/?${query.toString().replaceAll('&','&amp;')}">Discuss an ${r.name}</a></article>`;
  }).join('');
  return `<section class="case-section" id="work-samples"><div class="wrap case-layout">
    <div class="case-intro"><h2>Two roles in one release.</h2><p>A bank wants help handling statement requests. See the work each specialist would bring to the same release.</p><a class="editorial-link" href="/services/banking-ai-workflow-implementation/#service-case">Explore the service case</a></div>
    <div class="case-file role-file"><fieldset class="case-switch"><legend class="file-title">Work sample</legend>${switches}<div class="role-records">${records}</div></fieldset></div></div></section>`;
}

export function teamIntroduction() {
  return `<section class="team-feature"><div class="team-feature-copy"><h1>AI specialists for your delivery team.</h1><p>Add a business analyst, product manager or engineer. Meet the person who would do the work and review how they handle a case from your industry.</p><div class="practice-actions"><a class="delivery-action dark" href="/contact/?service=teams">Discuss a role</a><a class="editorial-link" href="#work-samples">View work samples</a></div></div><figure><img src="/assets/people-ai-work.webp" width="1672" height="941" alt="Three colleagues reviewing a workflow together at a desk." fetchpriority="high"></figure></section>`;
}

export function capacityWorksheet() {
  const number = (name,label,step,optional = false) => `<label for="capacity-${name}">${label}<input type="number" id="capacity-${name}" name="${name}" min="0" step="${step}" ${optional?'':'required'} inputmode="${step==='1'?'numeric':'decimal'}"></label>`;
  return `<section class="capacity-section" id="capacity"><div class="wrap capacity-layout">
    <div class="case-intro"><h2>How much time could your team get back?</h2><p>Use figures from the same queue and period. Include human review and rework in both handling times.</p><p>Time released is capacity. Record a cash saving only when your finance owner can confirm a change in spending.</p><a class="editorial-link" href="/downloads/workflow-value-map.csv">Download the value map (CSV)</a></div>
    <div class="capacity-sheet"><h3>Monthly capacity estimate</h3><form id="capacity-form"><div class="capacity-inputs">
      ${number('volume','Eligible cases per month','1')}
      ${number('before','Staff minutes per case today','any')}
      ${number('after','Staff minutes per case with the agent','any')}
      ${number('cost','Monthly operating cost (optional)','any',true)}
    </div><label class="currency-label" for="capacity-currency">Cost currency <select name="currency" id="capacity-currency"><option value="INR">INR</option><option value="USD">USD</option><option value="GBP">GBP</option><option value="EUR">EUR</option></select></label>
    <div class="capacity-result" aria-live="polite" aria-atomic="true"><h4>Estimated monthly impact</h4><output id="capacity-result" for="capacity-volume capacity-before capacity-after capacity-cost capacity-currency">Enter the case volume and both handling times.</output></div>
    <noscript><p>Multiply monthly cases by the minutes saved per case, then divide by 60 to get hours.</p></noscript></form></div></div></section>`;
}

export function gccPage() {
  const route = '/global-capability-centres';
  const description = 'Put AI agents to work across a global capability centre. Define a shared task, test market-specific controls and prepare local teams to run it.';
  return {title:'Enterprise AI for global capability centres', description,
    breadcrumbs:[{name:'Home',route:'/'},{name:'Global capability centres',route}],
    body:`<nav class="seo-breadcrumb wrap" aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li><li><span aria-current="page">Global capability centres</span></li></ol></nav>
      <section class="team-feature gcc-feature"><div class="team-feature-copy"><h1>Enterprise AI for global capability centres.</h1><p>A shared service can run the same task in several markets. Permissions, policy and the person who approves a decision can differ in each one.</p><div class="practice-actions"><a class="delivery-action dark" href="/project-enquiry/">Discuss a GCC workflow</a></div></div><figure><img src="/assets/industry-banking.webp" width="1440" height="960" alt="Operations colleagues reviewing a case together." fetchpriority="high"></figure></section>
      <section class="practice-detail"><div class="wrap"><h2>One queue, two markets</h2><dl class="role-list">
      <div><dt>Define the shared task</dt><dd>For a bank’s service desk, start with a verified statement request. The agent retrieves the current policy for that market and prepares a response for a case handler.</dd></div>
      <div><dt>Keep decisions local</dt><dd>The global platform owner maintains the integration. The market owner approves the policy source, who may view it and where to send exceptions.</dd></div>
      <div><dt>Qualify the next market</dt><dd>Test its language, recipient rules and escalation route against local cases. Its service owner reviews quality, staff time and cost before approving release.</dd></div></dl></div></section>
      <section class="practice-notes wrap"><div><h2>For the delivery team</h2><p>A Dockio analyst documents the common task and its local exceptions. A product manager owns the release backlog with your team, and an engineer builds and tests the integration.</p><a class="editorial-link" href="/services/embedded-ai-teams/">Review specialist work samples</a></div><div><h2>For the sponsor</h2><p>Compare the cost of extending the shared service with the benefit in the next market. Include reviewer time and ongoing support in that decision.</p><a class="editorial-link" href="/services/strategy/#capacity">Estimate the capacity released</a></div></section>`};
}
