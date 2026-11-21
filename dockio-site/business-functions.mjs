import { address, escape } from './search-metadata.mjs';

export const functions = [
  {
    slug:'portfolio-delivery', focus:'portfolio', name:'Portfolio & programme delivery', short:'Portfolio delivery',
    headline:'See a slipping milestone before the steering meeting.',
    intro:'A milestone can look on track in a slide deck while a dependency sits unresolved in Jira. We build a joined-up view of commitments, decisions and owners for the programme director.',
    photo:'enterprise-workshop', alt:'Programme colleagues reviewing a plan together',
    question:'Which quarterly commitments need an intervention this week?',
    steps:[
      ['Read the commitments','Read agreed milestones and dependencies in Jira alongside approved scope in Confluence or SharePoint. Link each finding to its dated source.'],
      ['Prepare the decision pack','Group blocked work by the milestone it affects. Include the dependency owner, the last decision and the consequence of waiting. Flag conflicting updates for review.'],
      ['Record the intervention','The programme director chooses what to re-sequence, fund or escalate. With permission, the agent drafts the Jira follow-up for the named owner.']
    ],
    review:'The steering chair owns funding and scope changes. An unconfirmed dependency stays open until its owner verifies it.',
    measures:'Track time spent preparing the pack, how early a dependency is surfaced and how long an agreed action takes to close.',
    handover:'Your PMO owns the risk definitions, escalation rules and evidence trail. Each steering cycle gives the team a new set of decisions to check against subsequent delivery.',
    related:['/services/strategy/#capacity','Estimate capacity for one workflow']
  },
  {
    slug:'service-operations', focus:'operations', name:'Service operations', short:'Service operations',
    headline:'Find where a service queue is losing time.',
    intro:'A case can meet one team’s target and still keep a customer waiting. We connect its history across teams so operations leads can see which approval or handoff is holding it up.',
    photo:'industry-logistics', alt:'Operations colleagues checking a work item on a warehouse floor',
    question:'Which open requests need an owner today?',
    steps:[
      ['Reconstruct the handoff','Read queue age and assignment history from ServiceNow alongside authorisation status in SAP or the relevant system of record. Keep the timestamps.'],
      ['Separate the exceptions','Group cases by the step that stopped them. Prepare a short list with the missing information, likely owner and action needed to restart work.'],
      ['Route the work','The service lead reviews proposed reassignments and disputed ownership. The agent records approved follow-ups within the agreed queue.']
    ],
    review:'The process owner approves reassignment and any change to approval rules. Missing or stale records return to the team for clarification.',
    measures:'Track end-to-end turnaround, repeat handoffs and overdue exceptions. Include reviewer effort and the cost per completed case.',
    handover:'Your operations team keeps the queue rules and an exception log. Recurring blockers become candidates for a process change that the team can test and measure.',
    related:['/industries/logistics-supply-chain/','Explore logistics workflows']
  },
  {
    slug:'technology-operations', focus:'technology', name:'Technology operations', short:'Technology operations',
    headline:'Give change owners the context behind an alert.',
    intro:'When an incident follows a release, the change record, service history and runbook often sit in different tools. We bring them together for the people accountable for service recovery.',
    photo:'industry-technology', alt:'Technology specialists at a service operations desk',
    question:'What changed before this service alert, and who should review it?',
    steps:[
      ['Build the timeline','Read service alerts, the approved change ticket and recent GitHub release records within the team’s access. Show timestamps and source links.'],
      ['Prepare the incident brief','Match the affected service to its runbook and owner. Distinguish confirmed changes from possible causes and flag missing evidence.'],
      ['Hand off for a decision','The incident manager reviews the brief and decides whether to open a change request. Production actions follow the organisation’s change process.']
    ],
    review:'A service alert can trigger an investigation. A deployment or rollback still needs an authorised change owner and the normal release checks.',
    measures:'Track time to assemble incident context, reviewer corrections, repeat incidents and the share of incidents linked to an up-to-date runbook.',
    handover:'Maintainers own the source mappings, runbooks and recovery tests. New incident reviews feed the next round of evaluations.',
    related:['/services/enterprise-codex-rollout/','Explore Codex for engineering teams']
  }
];

const otherFunctions = [
  ['finance','Finance','Close and reconciliation','Match outstanding ledger items to approved supporting schedules. The controller reviews differences and signs off adjustments. Track reconciliation effort and re-opened items.'],
  ['people','People operations','Employee onboarding','Check the hire’s approved onboarding plan against outstanding access and induction tasks. HR handles policy exceptions and managers confirm access. Track time to readiness and repeat queries.'],
  ['risk','Risk and compliance','Control evidence','Gather the current control description, evidence and previous findings into a source-linked review pack. The control owner assesses gaps and signs off corrective action. Track missing evidence and review effort.'],
  ['procurement','Procurement','Supplier commitments','Compare signed terms with delivery and invoice records. Flag a missed obligation with the underlying clause and transaction. The category manager decides whether to contact the supplier.'],
  ['leadership','Executive decisions','Investment review','Prepare a decision brief from approved funding, adoption and operating results. Finance verifies the value and the sponsor decides whether to extend or redirect funding.']
];

export function breadcrumbs(items) {
  const trail = [{name:'Home',route:'/'}, ...items];
  return {
    trail,
    html:`<nav class="seo-breadcrumb wrap" aria-label="Breadcrumb"><ol>${trail.map(({name,route},i) =>
      i === trail.length-1 ? `<li><span aria-current="page">${escape(name)}</span></li>` : `<li><a href="${address(route)}">${escape(name)}</a></li>`).join('')}</ol></nav>`
  };
}

export const textLink = (href,label) => `<a class="consult-link" href="${href}">${label}</a>`;
export const button = (href,label) => `<a class="consult-button" href="${href}">${label}</a>`;
export const requireLink = focus => '/project-enquiry/?offer=' + focus;
export const functionUrl = item => '/functions/' + item.slug + '/';
export const figure = (file,alt,eager = false) => `<figure class="consult-image"><img src="/assets/${file}.webp" alt="${escape(alt)}" width="1440" height="960" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'}></figure>`;

function departmentPage(item) {
  const route = '/functions/'+item.slug;
  const {trail,html} = breadcrumbs([{name:'Business functions',route:'/functions'},{name:item.name,route}]);
  return {
    title:item.name+' with enterprise AI', description:item.intro, breadcrumbs:trail,
    body:`${html}<section class="consult-feature"><div class="consult-feature-inner"><div class="consult-feature-copy"><p class="consult-kicker">${escape(item.name)}</p><h1>${item.headline}</h1><p>${item.intro}</p>${button(requireLink(item.focus),'Discuss this workflow')}</div>${figure(item.photo,item.alt,true)}</div></section>
      <section class="consult-section wrap"><div class="consult-split"><header><p class="consult-kicker">Workflow example</p><h2>${item.question}</h2></header><dl class="consult-rows">${item.steps.map(([title,copy])=>`<div><dt>${title}</dt><dd>${copy}</dd></div>`).join('')}</dl></div></section>
      <section class="consult-notes"><div class="wrap consult-section"><h2>What your team owns</h2><div class="consult-three">${[['Approval',item.review],['Measures',item.measures],['After handover',item.handover]].map(([title,copy])=>`<article><h3>${title}</h3><p>${copy}</p></article>`).join('')}</div><div class="consult-inline">${textLink('/services/agent-controls/','Review agent controls')}${textLink(...item.related)}</div></div></section>`
  };
}

export function departmentCards() {
  return `<div class="department-cards">${functions.map(item => `<a href="${functionUrl(item)}"><span class="consult-kicker">${escape(item.short)}</span><strong>${item.question}</strong></a>`).join('')}</div>`;
}

export function addBusinessFunctions(routes) {
  const route='/functions';
  const {trail,html}=breadcrumbs([{name:'Business functions',route}]);
  routes[route]={
    title:'Enterprise AI by business function',description:'Trace a portfolio, operations or technology decision through its source records, agent tasks, approval and measures. Explore applications across eight business functions.',breadcrumbs:trail,
    body:`${html}<section class="consult-title wrap"><h1>AI across business functions.</h1><p>Start with a decision your team makes every week. See which records an agent needs, what it can prepare and where the accountable person takes over.</p></section>
      <section class="wrap func-index" aria-label="Department workflows">${functions.map(item=>`<a href="${functionUrl(item)}">${figure(item.photo,item.alt)}<span class="consult-kicker">${escape(item.name)}</span><h2>${item.headline}</h2></a>`).join('')}</section>
      <section class="consult-notes"><div class="wrap consult-section consult-split"><header><h2>Across the enterprise</h2><p>Choose a function to see a workflow and its approval point.</p></header><div class="function-details">${otherFunctions.map(([focus,name,title,copy])=>`<details id="${focus}"><summary>${name}</summary><h3>${title}</h3><p>${copy}</p>${textLink(requireLink(focus),'Discuss this workflow')}</details>`).join('')}</div></div></section>`
  };
  for (const item of functions) routes['/functions/'+item.slug]=departmentPage(item);
}
