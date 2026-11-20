import {industries} from './gsi-redesign.mjs';
import {bankingCaseSection} from './service-case.mjs';

const sprint = '/services/implementation-sprint/';
const banking = '/services/banking-ai-workflow-implementation/';
const engineering = '/services/enterprise-codex-rollout/';
const project = '/project-enquiry/';
const example = '/delivery-example/';
const partners = '/partners/implementation/';
const statement = '/assets/dockio-project-capability.pdf';
const link = (url, label, primary = false) => `<a class="${primary ? 'project-button' : 'project-link'}" href="${url}">${label}</a>`;
const actions = (...links) => `<div class="project-actions">${links.join('')}</div>`;
const section = (title, body, id = '') => `<section class="project-block wrap"${id ? ` id="${id}"` : ''}><h2>${title}</h2>${body}</section>`;
const rows = entries => `<dl class="project-rows">${entries.map(([term, description]) => `<div><dt>${term}</dt><dd>${description}</dd></div>`).join('')}</dl>`;
const table = (caption, headings, entries) => `<table class="project-table"><caption>${caption}</caption><thead><tr>${headings.map(h => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${entries.map(([name,detail]) => `<tr><th scope="row">${name}</th><td>${detail}</td></tr>`).join('')}</tbody></table>`;
const photo = (key, alt, priority = false) => `<img src="/assets/industry-${key}.webp" width="1440" height="960" alt="${alt}" ${priority ? 'fetchpriority="high"' : 'loading="lazy"'}>`;
const hero = (label, title, text, buttons, picture) => `<section class="project-intro"><div class="wrap project-intro-grid${picture ? ' has-picture' : ''}"><div><p class="project-kicker">${label}</p><h1>${title}</h1><p class="project-lead">${text}</p>${buttons}</div>${picture ? `<figure>${picture}</figure>` : ''}</div></section>`;
const band = (title, text, buttons) => `<section class="project-band"><div class="wrap"><div><h2>${title}</h2><p>${text}</p></div>${buttons}</div></section>`;
const routeKey = url => url.replace(/\/$/, '');
function page(url, label, title, description, body, service = false) {
  const breadcrumbs = [{name:'Home',route:'/'}, ...(service ? [{name:'Services',route:'/services'}] : []), {name:label,route:routeKey(url)}];
  const crumb = `<nav class="seo-breadcrumb wrap" aria-label="Breadcrumb"><ol>${breadcrumbs.map((item,i) => `<li>${i === breadcrumbs.length-1 ? `<span aria-current="page">${item.name}</span>` : `<a href="${item.route === '/' ? '/' : item.route + '/'}">${item.name}</a>`}</li>`).join('')}</ol></nav>`;
  return {title, description, breadcrumbs, body:crumb + body};
}

const bankingChecks = [
  ['Policy evidence','For each ordinary case, the reviewer checks the cited passage, policy version and effective date against the approved answer.'],
  ['Access boundaries','Test the same question with two approved roles. A reviewer records whether either role could see a restricted passage.'],
  ['Exceptions','Include a missing policy, conflicting instructions and an out-of-scope request. Each should reach the agreed review queue with its reason.'],
  ['Service performance','For comparable case types, record time to an approved response, the share of drafts accepted without correction, and the share escalated.']
];
const codexMeasures = [
  ['Time to first review','Compare the median working hours from a pull request being ready to its first substantive human review. Separate waiting time from editing time.'],
  ['Rework','Count review rounds per merged change. Match changes by type and size and record the number in each group.'],
  ['Quality','Review accepted and dismissed suggestions, failed checks and defects found after merge. A maintainer classifies the findings.'],
  ['Cost','Record pilot usage charges and reviewer time. Report cost per eligible change alongside the change mix and sample size.']
];
function diagram(label, stages) {
  return `<figure class="project-flow"><figcaption>${label}</figcaption><ol>${stages.map(([system,work]) => `<li><strong>${system}</strong><span>${work}</span></li>`).join('')}</ol></figure>`;
}
function offerCards() {
  return `<div class="project-cards"><article>${photo('banking','Colleagues reviewing a document at a bank')}<div><p class="project-kicker">Banking operations</p><h3>Policy answers for the service desk</h3><p>Connect a service queue to approved policy. Give the case handler a draft with the relevant passage and route exceptions to a reviewer.</p>${link(banking,'Explore banking workflow implementation')}</div></article><article>${photo('technology','Software engineers working together at their desks')}<div><p class="project-kicker">Software engineering</p><h3>Codex in pull request review</h3><p>Run Codex with one repository team. Measure review time, rework and cost while maintainers keep control of every merge.</p>${link(engineering,'Explore the Codex rollout')}</div></article></div>`;
}
const sectorWork = [
  ['logistics','Logistics','Shipment exceptions'],
  ['pharma','Pharma','Quality reviews'],
  ['technology','IT','Code review'],
  ['banking','Banking','Service cases'],
  ['retail','Retail','Product enquiries']
];

function industryLinks() {
  return `<nav class="sector-strip" aria-label="Industry workflows"><div class="wrap">
    ${sectorWork.map(([key,label,work]) => {
      const sector = industries.find(item => item.key === key);
      return `<a href="${sector.route}/"><img src="/assets/industry-${key}-thumb.webp" alt="" width="84" height="64"><span><strong>${label}</strong><small>${work}</small></span></a>`;
    }).join('')}
  </div></nav>`;
}

export function projectHome() {
  return {
    title:'Enterprise AI strategy, consulting and delivery',
    description:'Dockio helps you choose which work to give AI agents. Our business analysts, product managers and engineers build it with your team and support rollout.',
    body:`
      <section class="delivery-hero">
        <img class="delivery-hero-photo" src="/assets/team-at-work.webp" width="1774" height="887" alt="Three colleagues review an operations sheet at a shared workstation." fetchpriority="high">
        <div class="wrap hero-inner"><div class="hero-message"><h1>Enterprise AI<br>strategy and<br> delivery.</h1>
        <p>We help you decide which tasks an AI agent can run. Our analysts, product managers and engineers work with your team to put those tasks into production.</p>
        <div class="hero-actions"><a class="delivery-action light" href="/project-enquiry/">Discuss a project</a><a class="delivery-action outline" href="/services/embedded-ai-teams/">Build your AI team</a></div></div></div>
      </section>
      ${industryLinks()}
      ${bankingCaseSection()}
      <section class="home-people"><div class="wrap">
        <h2>Who joins your team?</h2>
        <div class="people-layout"><div class="people-intro"><p>Bring in one specialist or give Dockio a workstream to lead. Review a relevant work sample with the person we propose, then agree their first deliverable and who they’ll build it with.</p>
          <a class="editorial-link" href="/services/embedded-ai-teams/">See the roles and work samples</a></div>
          <dl class="role-list">
            <div><dt>AI business analyst</dt><dd>Traces a case with your operations team, identifies the tasks an agent can take on and writes tests for the exceptions.</dd></div>
            <div><dt>AI product manager</dt><dd>Agrees the smallest useful release with your product owner and brings the evidence for the next investment decision.</dd></div>
            <div><dt>AI engineer</dt><dd>Connects your systems, tests the agent’s actions and rehearses a release with the developers who will maintain it.</dd></div>
          </dl>
        </div>
      </div></section>
      <section class="scale-panel"><div class="wrap scale-grid"><div><h2>Is the workflow worth scaling?</h2><p>Compare time per case before and after the pilot, including review and rework. Then weigh the capacity released against quality, running costs and what your team could do with that time.</p><a class="editorial-link" href="/services/strategy/#capacity">Estimate the capacity released</a></div>
        <div class="scale-operate"><h3>After the first release</h3><p>Your people keep the code, tests and runbook. We help them investigate recurring exceptions, change the process and test the next release themselves.</p><a class="editorial-link" href="${sprint}">Implementation sprint</a></div></div></section>
      <section class="owned-product"><div class="wrap"><a class="product-photo" href="${example}" aria-label="Explore the ChangingBox storage marketplace"><img src="/assets/industry-logistics.webp" width="1440" height="960" alt="Storage bays and warehouse operations" loading="lazy"></a><div><p class="product-context">A Dockio product</p><h2>ChangingBox</h2><p>We own and operate a storage marketplace. Follow a warehouse search through listing terms, host enquiries and reservation requests.</p><a class="editorial-link" href="${example}">Explore ChangingBox</a></div></div></section>
      <section class="delivery-end"><div class="wrap"><h2>What are you working on?</h2><a class="delivery-action light" href="/project-enquiry/">Discuss a project</a></div></section>`
  };
}

export function implementationPages() {
  const pages = {};
  pages['/services/workflows'] = page('/services/workflows/','Agent workflows','Business processes and AI agent implementation','Turn a business process into a set of agent tasks, with named owners, approved actions and tests for the exceptions.',
    hero('Agent workflows','Which parts of a process can an agent run?','Start with one case your team handles today. We follow it through the queue, identify where an agent can act and agree who takes over when the case needs judgement.',
      actions(link(project,'Discuss a workflow',true),link(banking+'#service-case','Explore a service case'))) +
    section('What goes into an agent task',rows([
      ['Trigger and source','Define which event starts the task, whose permissions apply and which records the agent may read. A missing or conflicting source goes to an owner.'],
      ['Action and authority','Specify what the agent may prepare, record or change. In a banking service queue it can attach a policy-linked draft. The case handler decides what reaches the customer.'],
      ['Exception and test','Use a case that should stop. Check that the agent records the reason, leaves the restricted action untouched and routes the case to the right person.'],
      ['Owner and improvement','Your process owner reviews recurring exceptions with our analyst. Together they test a process change and add any newly accepted behaviour to the release tests.']
    ])) + band('Before extending the workflow','Review handling time, correction rates and running costs with the team operating the first release. Check permissions and exception ownership again in each new business unit.',
      actions(link('/services/adoption/','Adoption and rollout',true),link('/global-capability-centres/','Delivery across markets'))),true);
  pages[routeKey(sprint)] = page(sprint,'Implementation sprint','Paid AI Implementation & Value Sprint','Scope one paid AI implementation sprint with Dockio. Agree workflow access, integrations, acceptance tests, handover and the conditions for a production rollout.',
    hero('Paid engagement','AI Implementation &amp; Value Sprint','Commission a working implementation of one workflow in your approved environment. Your team receives the integration, test results and a recommendation on whether to release, revise or stop.',
      actions(link(project+'?offer=sprint','Scope a sprint',true),link(statement,'Project capability statement (PDF)'))) +
    section('What the sprint includes',rows([
      ['Before the build','Your workflow owner and our delivery lead map the steps, volumes and rework. We agree the baseline, the smallest useful release and the tests it must pass. Your platform owner confirms the access we can use.'],
      ['Build and evaluation','Our engineer pairs with your maintainer to connect the approved sources and systems. Operations reviewers test everyday cases and exceptions and record where the workflow needs to change.'],
      ['Handover and decision','Your maintainer runs the tests, releases a reviewed change and rehearses recovery with us. The business and platform owners review the evidence and decide whether to extend the rollout, revise the workflow or stop.']
    ])) + section('Choose a starting workflow',offerCards()) +
    band('Commercial terms and support','Your proposal names the workflow, integrations, acceptance tests and fee for the agreed sprint. It shows model and hosting costs separately. If scope changes, you review the cost before we proceed. Production rollout and support have their own terms.',actions(link(project+'?offer=sprint','Discuss scope and timing',true))),true);

  pages[routeKey(banking)] = page(banking,'Banking workflow implementation','Banking AI workflow implementation in India','Connect a banking service queue to approved policy with source-linked drafts, access controls, human review and an agreed acceptance test for a bank or GCC.',
    hero('Banking and financial services','AI workflow implementation for banking operations','Give service teams an answer they can check against the bank’s policy. Dockio connects one service queue to an approved policy collection inside your bank or global capability centre.',
      actions(link(project+'?offer=banking','Scope a banking workflow',true),link('#service-case','Try the service case'))) +
    bankingCaseSection(true) +
    section('From service case to approved response',
      diagram('Service desk workflow', [['Service queue','An authorised handler opens a case.'],['Policy repository','Retrieve current passages within the handler’s access.'],['Approved AI service','Draft an answer with policy references, or return an exception.'],['Case handler','Verify the passage and record the response or escalate it.']]) +
      '<p class="project-note">Dockio configures the connections, retrieval and review routing. The bank provisions identities, owns the policy collection and retains authority over the response sent to the customer.</p>') +
    section('What the operations owner signs off',table('Sample banking acceptance checklist',['Check','Evidence to record'],bankingChecks) +
      actions(link('/downloads/banking-acceptance-checklist.csv','Download the checklist (CSV)')),'acceptance') +
    band('Release decision','Compare the trial queue with the agreed baseline. Review exceptions and access tests with the bank’s operations and platform owners before widening access.',actions(link(project+'?offer=banking','Discuss your service queue',true),link(sprint,'Sprint scope and terms'))),true);

  pages[routeKey(engineering)] = page(engineering,'Enterprise Codex rollout','Enterprise Codex rollout services for engineering teams','Plan an enterprise Codex rollout using one repository and pull request workflow. Evaluate reviewer time, code quality, rework and cost before expanding.',
    hero('Engineering and technology','Codex rollout for engineering teams','Find out where Codex helps your maintainers review changes. Start with one repository, one pull request workflow and the people responsible for the code.',
      actions(link(project+'?offer=codex','Request a Codex rollout plan',true),link('#scorecard','Sample evaluation scorecard')),photo('technology','An engineering team discussing work at a monitor',true)) +
    section('How the pilot fits your repository',
      diagram('Pull request review workflow',[['Repository','Select eligible pull requests and agree access with the owner.'],['Codex review','Review the change under the team’s repository rules.'],['Existing checks','Run CI checks and record findings alongside the change.'],['Maintainer','Assess suggestions and approve, request changes or decline.']]) +
      '<p class="project-note">Dockio sets up the agreed workflow and evaluation. The repository owner controls credentials, branch protection and merge approval. Maintainers and the platform owner receive the runbook and usage reporting at handover.</p>') +
    section('Evaluate the rollout', '<p class="project-note">A sample pilot compares two weeks before rollout with two weeks of assisted review in the same repository. Agree eligible change types up front, exclude automated dependency updates and extend the window if volumes are too small.</p>' +
      table('Sample Codex evaluation scorecard',['Measure','How to compare it'],codexMeasures) + actions(link('/downloads/codex-evaluation-scorecard.csv','Download the scorecard (CSV)')),'scorecard') +
    band('Decide where to expand','Review time, quality and cost together. Use the result to choose the next repository, adjust the workflow or stop the trial.',actions(link(project+'?offer=codex','Discuss your repository',true),link(sprint,'Sprint scope and terms'))),true);

  pages[routeKey(example)] = page(example,'Delivery example','ChangingBox | A storage marketplace operated by Dockio','See how ChangingBox, the storage marketplace operated by Dockio, connects a storage search to a listing, a host and a reservation request.',
    hero('Dockio product operations','ChangingBox storage marketplace','Dockio Technosolutions Private Limited owns and operates ChangingBox. Businesses use the marketplace to find storage space, check a facility’s terms and start a reservation with the host.',
      actions(link('https://www.changingbox.com/','Explore ChangingBox',true),link('/industries/logistics-supply-chain/','Logistics and supply chain')),photo('logistics','People working in a warehouse',true)) +
    section('From storage search to reservation',rows([
      ['Find suitable space','Buyers filter inventory by location, floor area, storage type and daily price. Each listing brings the host’s conditions alongside the space on offer.'],
      ['Check the terms','On the Bhiwandi listing, a buyer can check access hours, the minimum area and rental period, insurance requirements and items the facility excludes.'],
      ['Contact the host or reserve','The listing offers separate routes to message the host and start a reservation. Both require the buyer to sign in.']
    ]) + actions(link('https://changingbox.com/warehouse/18','View the Bhiwandi listing'))) +
    band('Discuss an operations workflow','Bring the queue, documents or decisions your team handles. We can scope the connections, review steps and evidence needed to put it into use.',actions(link(project,'Scope an implementation',true))));

  pages[routeKey(partners)] = page(partners,'Implementation partnerships','Enterprise AI implementation partnerships','Introduce an enterprise AI project to Dockio. Review its banking and Codex implementation scope, client responsibilities and procurement brief.',
    hero('Implementation partnerships','Bring Dockio into an enterprise AI project','Dockio works with platform and delivery partners on defined implementations. An introduction can start with the workflow, the systems involved and the person responsible for accepting the work.',
      actions(link(project+'?offer=partner','Discuss a joint project',true),link(statement,'Project capability statement (PDF)'))) +
    section('Work we can take on',rows([
      ['Banking operations',`A service team needs to answer cases from approved policy, with a named reviewer for exceptions. ${link(banking,'Banking implementation scope')}`],
      ['Software engineering',`An engineering leader needs to assess Codex across a repository before extending access. ${link(engineering,'Codex rollout scope')}`],
      ['Delivery responsibilities','Agree who contracts for the work, provisions access, owns the integration, accepts the outcome and supports the release. Dockio provides the agreed build, evaluation evidence and handover.']
    ])) + band('Start with the scope','Send a short description or a sanitised project brief. Include a sponsor’s contact details only with their permission.',actions(link(project+'?offer=partner','Share the project',true),link('/procurement/','Supplier information'))));
  return pages;
}

export const projectPaths = {banking,engineering,sprint,project,example,partners,statement};

export function projectWorksheets() {
  const csv = records => records.map(row => row.map(value => '"' + value.replaceAll('"','""') + '"').join(',')).join('\r\n') + '\r\n';
  return {
    'workflow-value-map.csv':csv([
      ['Measure or decision','How to record it','Baseline','Pilot result or decision','Period or evidence source','Accountable owner'],
      ['Eligible volume','Count comparable cases. Record exclusions and the time period.','','','',''],
      ['Handling time per case','Separate active work from waiting time. Use minutes and record the sample size.','','','',''],
      ['Quality and rework','Count accepted results and cases needing correction. Use the same checks in both periods.','','','',''],
      ['Running cost','Include model usage, infrastructure, human review and support. Record one-off build costs separately.','','','',''],
      ['Capacity released','Compare hours at equivalent volume and quality. Record how released time will be used.','','','',''],
      ['Financial benefit','Separate avoided costs from spending reductions that finance confirms.','','','',''],
      ['Release decision','Expand, revise or stop. Record reasoning, quality thresholds, the next owner and review date.','','','','']
    ]),
    'banking-acceptance-checklist.csv':csv([
      ['Check','Evidence to record','Case reference','Expected result','Observed result','Reviewer','Decision'],
      ...bankingChecks.map(row => [...row,'','','','',''])
    ]),
    'codex-evaluation-scorecard.csv':csv([
      ['Measure','Comparison method','Baseline dates','Pilot dates','Baseline count','Pilot count','Baseline measure','Pilot measure','Notes and decision'],
      ...codexMeasures.map(row => [...row,'','','','','','',''])
    ])
  };
}
