import { industries } from './gsi-redesign.mjs';
import { bankingCaseSection } from './service-case.mjs';
import { addBusinessFunctions, breadcrumbs, button, departmentCards, figure, textLink } from './business-functions.mjs';

const sectorExamples = {
  banking: ['Banking','Service requests','A customer asks for a statement at a different address.','The agent compares the request with the verified contact record and approved servicing policy. It prepares a referral for the case handler. The handler decides whether further verification is needed.','/services/banking-ai-workflow-implementation/#service-case','Try the statement request'],
  pharma: ['Pharma','Document control','A revised procedure is ready for quality review.','The agent compares the proposed revision with the current approved version, links each changed passage and flags missing references. The quality reviewer resolves the gaps and signs off the controlled document.','/functions/#risk','Explore control evidence'],
  logistics: ['Logistics','Shipment exceptions','A missed collection puts the delivery window at risk.','The agent checks the booking, dispatch notes and carrier update, then prepares alternate windows and a draft message. The dispatcher confirms capacity with the carrier before offering a new time.','/functions/service-operations/','Explore service operations'],
  technology: ['IT & software','Release readiness','An alert arrives after a software release.','The agent brings the service ticket, release record and current runbook together. It flags gaps in the timeline. A service owner assesses the cause and authorises any production change.','/functions/technology-operations/','Explore technology operations'],
  retail: ['Retail','Product information','A supplier’s new specification disagrees with the listing.','The agent compares the supplier file, current catalogue and approval history. It highlights the conflicting field and its sources. The category owner verifies the change before a new description reaches stores.','/functions/#procurement','Explore supplier commitments']
};

function industryGallery() {
  return `<section class="sector-gallery wrap" aria-labelledby="sectors-title"><div class="consult-section-bar"><h2 id="sectors-title">Explore by industry</h2>${textLink('/industries/','All industries')}</div><div class="sector-tiles">${industries.map(({key,route})=>{
    const [name,work]=sectorExamples[key];
    return `<a href="${route}/"><img src="/assets/industry-${key}-thumb.webp" srcset="/assets/industry-${key}-thumb.webp 168w, /assets/industry-${key}.webp 1440w" sizes="(max-width:680px) 46vw, 18vw" alt="" width="320" height="195" loading="lazy"><strong>${name}</strong><span>${work}</span></a>`;
  }).join('')}</div></section>`;
}

function home() {
  return {
    title:'Enterprise AI strategy, implementation and specialist teams',
    description:'Dockio helps enterprises choose where AI can create value, build agents into everyday operations and equip their own teams to run and improve the work.',
    body:`<section class="consult-cover"><div class="consult-cover-inner"><div class="consult-cover-copy"><h1>Enterprise AI,<br>from strategy<br>to production.</h1><p>We turn business processes into tasks AI agents can run. Our analysts, product managers and engineers work alongside your team to build, measure and improve them.</p><div class="consult-actions">${button('/project-enquiry/','Discuss your project')}${textLink('/services/embedded-ai-teams/','Find an AI specialist')}</div></div><figure class="cover-image"><img src="/assets/port-operations.webp" width="1774" height="887" alt="Two operations specialists review a work order overlooking a container terminal." fetchpriority="high"></figure></div></section>
      ${industryGallery()}
      <section class="consult-tasks"><div class="wrap consult-section consult-split"><header><h2>Where can AI earn its place?</h2><p>Start with a decision the business already owns. We map the work behind it, establish a baseline and test whether an agent improves the outcome after review time and running costs.</p>${textLink('/services/strategy/#capacity','Estimate the value of a workflow')}</header><div>${departmentCards()}${textLink('/functions/','Explore all business functions')}</div></div></section>
      ${bankingCaseSection()}
      <section class="consult-team-feature"><div class="consult-feature-inner">${figure('people-ai-work','Two colleagues working through a delivery requirement')}<div class="consult-feature-copy"><h2>Meet the people who will do the work.</h2><p>See how a Dockio business analyst tests an exception and how a product manager decides what is ready to ship. Discuss the work with the specialist before agreeing an assignment.</p>${button('/services/embedded-ai-teams/#work-samples','Review specialist work samples')}${textLink('/contact/?service=teams','Share a team requirement')}</div></div></section>
      <section class="consult-section wrap consult-split"><header><h2>From the first brief to rollout.</h2>${textLink('/approach/','Our delivery approach')}</header><dl class="consult-rows"><div><dt>${textLink('/services/implementation-sprint/','Commission a first sprint')}</dt><dd>Agree the scope, fee and acceptance tests for one workflow. Review the working integration and its running costs before funding a wider rollout.</dd></div><div><dt>${textLink('/services/agent-controls/','Review production controls')}</dt><dd>Set permissions, human approvals and recovery steps with the people who own your systems.</dd></div><div><dt>${textLink('/delivery-example/','See how Dockio operates ChangingBox')}</dt><dd>Follow the booking, payment and support responsibilities behind our own storage marketplace.</dd></div></dl></section>
      <section class="consult-end"><div class="wrap"><h2>What would you like to change?</h2>${button('/project-enquiry/','Discuss your project')}</div></section>`
  };
}

function controlsPage() {
  const route='/services/agent-controls';
  const {trail,html}=breadcrumbs([{name:'Services',route:'/services'},{name:'Agent controls',route}]);
  const controls=[
    ['Sources and access','List the systems the agent can read, which records it may use and the identity it runs under. Retrieval respects role and record-level permissions. A write action needs its own permission and an owner.'],
    ['Triggers and tools','Choose when work starts, whether on request, on a schedule or after a queue event. Give the agent only the tools needed for the task. Set a time limit and a spend limit for each run.'],
    ['Isolated calculations','For a workbook or report, run the calculation in an isolated workspace. Agree the input files, allowed network destinations, retention period and the outputs that may leave it.'],
    ['Approval and recovery','Test routine cases, stale inputs, missing access and failed writes. Capture the evidence for a reviewer. Define how to stop a run, recover an incomplete update and avoid repeating a completed action.'],
    ['Release evidence','For each run, record the source references, tool actions, approval, outcome and cost. Protect sensitive values in logs. Use reviewer corrections and exception rates to decide whether the next release is ready.']
  ];
  return {title:'Agent controls and production readiness',description:'Define access, tools, approvals, isolated execution, recovery and release evidence for AI agents working inside enterprise systems.',breadcrumbs:trail,
    body:`${html}<section class="consult-feature"><div class="consult-feature-inner"><div class="consult-feature-copy"><p class="consult-kicker">Systems integration</p><h1>Decide what an agent can do in production.</h1><p>For each task, Dockio and your platform owner agree which records the agent can read, where it can write and when it must hand work to a person.</p>${button('/project-enquiry/','Discuss an integration')}</div>${figure('industry-technology','Technology colleagues working in an operations centre',true)}</div></section>
    <section class="wrap consult-section consult-split"><header><h2>Before the first live run</h2><p>The business owner, system owner and delivery team review these decisions together.</p></header><dl class="consult-rows">${controls.map(([title,copy])=>`<div><dt>${title}</dt><dd>${copy}</dd></div>`).join('')}</dl></section>
    <section class="consult-end"><div class="wrap"><h2>Follow a change from alert to review.</h2>${button('/functions/technology-operations/','See the technology workflow')}</div></section>`};
}

function workPage() {
  const route='/our-work';
  const {trail,html}=breadcrumbs([{name:'Our work',route}]);
  return {title:'Dockio product operations and delivery work samples',description:'Explore the ChangingBox marketplace operated by Dockio, inspect AI delivery work samples and try a banking service workflow with a human approval boundary.',breadcrumbs:trail,
    body:`${html}<section class="consult-title wrap"><h1>Our work.</h1><p>Visit a product Dockio operates, inspect the work our specialists prepare and try a service decision from the case handler’s side.</p></section>
      <section class="consult-team-feature work-product"><div class="consult-feature-inner">${figure('industry-logistics','A warehouse team checking storage availability',true)}<div class="consult-feature-copy"><p class="consult-kicker">Dockio-operated product</p><h2>ChangingBox</h2><p>Finding storage is only the first step. Dockio runs the marketplace that connects a space requirement to availability, reservation and support.</p>${button('/delivery-example/','Explore the storage marketplace')}</div></div></section>
      <section class="wrap consult-section consult-split"><header><h2>Delivery work samples</h2></header><dl class="consult-rows"><div><dt>${textLink('/services/embedded-ai-teams/#work-samples','Business analyst and product manager')}</dt><dd>Inspect an acceptance test and a release decision for the same service queue.</dd></div><div><dt>${textLink('/services/banking-ai-workflow-implementation/#service-case','Statement servicing workflow')}</dt><dd>Change the requested delivery address to see which agent tasks and approval steps follow.</dd></div><div><dt>${textLink('/services/enterprise-codex-rollout/#scorecard','Engineering evaluation scorecard')}</dt><dd>See what a maintainer checks before extending a Codex rollout to another repository.</dd></div></dl></section>`};
}

const serviceCovers = {
  '/services':['Enterprise AI services.','Choose an investment to assess, a system to build or a skill your delivery team needs.','enterprise-workshop','Colleagues reviewing work during a planning session'],
  '/services/strategy':[null,null,'people-workflow','Strategy and operations colleagues reviewing a workflow'],
  '/services/integration':[null,null,'industry-technology','Two engineers reviewing an integration'],
  '/services/adoption':[null,null,'people-ai-work','Colleagues reviewing a task together'],
  '/approach':[null,null,'team-at-work','A delivery team discussing a work item'],
  '/why-dockio':[null,null,'enterprise-workshop','A working session focused on enterprise delivery']
};

const secondaryIntros = {
  '/about':['About Dockio','Dockio is an enterprise AI consultancy and systems integrator based in Mumbai. Our analysts, product managers and engineers help client teams choose, build and run AI workflows.'],
  '/privacy':['How we handle your enquiry','This notice explains how Dockio Technosolutions Private Limited handles the information you share through this website.'],
  '/insights':['Perspectives on enterprise AI','Read about choosing a first workflow, taking a pilot into production and measuring the change once people use it.'],
  '/budgetops':['BudgetOps','Dockio is developing BudgetOps to help a sponsor assess the next funding request against adoption, delivery evidence and realised business value.'],
  '/request-ai-team':['Request an AI specialist or team',null],
  '/industries/professional-services':['Give engagement teams a head start on a client brief.','An agent can assemble approved research, previous methods and source references. The engagement lead checks relevance, confidentiality and the conclusions shared with the client.','people-workflow','Consulting colleagues reviewing a work item','/contact/?service=teams','Discuss an engagement team'],
  '/industries/private-equity':['Which workflow is worth repeating across the portfolio?','Start in one portfolio company with a process owner, an operating baseline and a clear cost to serve. Compare the result with local systems, volumes and controls before funding a second rollout.','enterprise-workshop','A working session on an operating plan','/services/strategy/#capacity','Assess a workflow'],
  '/industries/enterprise-operations':['Find the handoff holding up a request.','A case can cross a service desk, a finance queue and a local approver. We connect timestamps, missing evidence and ownership so the process lead can decide what to change.','industry-logistics','Operations staff reviewing a handoff','/functions/service-operations/','Follow a service queue']
};

function refreshIntro(route,entry) {
  const [title,lead,photo,alt,url,label]=secondaryIntros[route];
  if (photo) {
    const section=`<section class="consult-feature"><div class="consult-feature-inner"><div class="consult-feature-copy"><p class="consult-kicker">${entry.breadcrumbs.at(-1).name}</p><h1>${title}</h1><p>${lead}</p>${button(url,label)}</div>${figure(photo,alt,true)}</div></section>`;
    entry.body=entry.body.replace(/<section\b[^>]*>[\s\S]*?<\/section>/,section);
  } else {
    entry.body=entry.body.replace(/<h1>[\s\S]*?<\/h1>/,`<h1>${title}</h1>`);
    if(lead) entry.body=entry.body.replace(/<p class="lead">[\s\S]*?<\/p>/,`<p class="lead">${lead}</p>`);
  }
  if(lead) entry.description=lead;
}

function designPractice(route, entry) {
  const [title,lead,photo,alt]=serviceCovers[route];
  entry.body=entry.body.replace(/<section class="practice-head wrap">([\s\S]*?)<\/section>/,(_,content)=>{
    if(title) content=content.replace(/<h1>[\s\S]*?<\/h1>/,`<h1>${title}</h1>`);
    if(lead) content=content.replace(/<p>[\s\S]*?<\/p>/,`<p>${lead}</p>`);
    return `<section class="consult-feature"><div class="consult-feature-inner"><div class="consult-feature-copy">${content}</div>${figure(photo,alt,true)}</div></section>`;
  });
}

export function applyConsultingDesign(site) {
  const {routes}=site;
  routes['/']=home();
  addBusinessFunctions(routes);
  routes['/our-work']=workPage();
  routes['/services/agent-controls']=controlsPage();
  for (const [route,entry] of Object.entries(routes)) if (serviceCovers[route]) designPractice(route,entry);
  for (const [route,entry] of Object.entries(routes)) if (secondaryIntros[route]) refreshIntro(route,entry);
  for (const sector of industries) {
    const [,,title,copy,href,label]=sectorExamples[sector.key];
    routes[sector.route].body=routes[sector.route].body.replace(/<section class="sector-delivery">[\s\S]*?<\/section>/,
      `<section class="consult-notes"><div class="wrap consult-section consult-split"><header><p class="consult-kicker">Workflow example</p><h2>${title}</h2></header><div class="consult-reading"><p>${copy}</p><h3>What to measure</h3><p>${sector.measures}</p>${textLink(href,label)}</div></div></section>`);
  }
  site.after=site.after.replace('<h3>Explore</h3>','<h3>Explore</h3><a href="/functions/">Business functions</a>').replace('<h3>Resources</h3>','<h3>Resources</h3><a href="/our-work/">Our work</a>');
  return site;
}
