import {industries} from './gsi-redesign.mjs';

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
export function projectHome() {
  return {title:'Enterprise AI systems integration for banking and engineering',description:'Dockio integrates AI into banking operations and software delivery. Start with a paid implementation sprint, scope a project or discuss a specialist team.',body:`
    <section class="enterprise-home-hero project-home"><div class="enterprise-home-copy"><p class="project-kicker">Enterprise AI implementation</p>
    <h1>AI systems integration <em>for banking and engineering.</em></h1>
    <p>We connect AI to the systems your teams use. Start with one workflow, test it with the people who own it, and decide what to put into production.</p>
    ${actions(link(project,'Scope an implementation',true),link(example,'View delivery example'))}
    ${link(sprint,'Explore the paid implementation sprint')}
    <div class="enterprise-home-credential"><img src="/assets/openai-select-partner.svg" alt="OpenAI Select Partner" width="126" height="60"><span>Dockio Technosolutions Private Limited<br>Mumbai, India</span></div></div>
    <figure class="enterprise-home-photo">${photo('banking','Banking professionals reviewing information together',true)}</figure></section>
    <section class="enterprise-industry-strip wrap" aria-label="Industry navigation"><span>Industries</span><div>${industries.map(s => link(s.route+'/',s.short)).join('')}</div>${link('/industries/','All industries')}</section>
    ${section('Implementation projects',offerCards())}
    ${band('Commission a project or add specialists','Engage Dockio to deliver an agreed scope, or bring specialists into a programme your team leads.',actions(link('/request-ai-team/','Request an AI team'),link('/services/','All services')))}
    <section class="project-company wrap"><p>Dockio is led by Sankalp Shirish More, whose enterprise AI experience spans banking, life sciences and consumer goods.</p>${actions(link('/why-dockio/','Meet Dockio'),link('/procurement/','Supplier information'))}</section>`};
}

export function implementationPages() {
  const pages = {};
  pages[routeKey(sprint)] = page(sprint,'Implementation sprint','Paid AI Implementation & Value Sprint','Scope one paid AI implementation sprint with Dockio. Agree workflow access, integrations, acceptance tests, handover and the conditions for a production rollout.',
    hero('Paid engagement','AI Implementation &amp; Value Sprint','Commission a working implementation of one workflow in your approved environment. Your team receives the integration, test results and a recommendation on whether to release, revise or stop.',
      actions(link(project+'?offer=sprint','Scope a sprint',true),link(statement,'Project capability statement (PDF)'))) +
    section('What the sprint includes',rows([
      ['Before the build','The workflow owner supplies representative cases, the current process and acceptance criteria. Your platform owner agrees access, environments and the actions a user must approve.'],
      ['Build and evaluation','Dockio connects the agreed sources and systems, implements the review path and tests ordinary cases and exceptions against the baseline.'],
      ['Handover and decision','You receive the working configuration, evaluation record, open issues and operating instructions. The business and platform owners decide what is ready for production.']
    ])) + section('Choose a starting workflow',offerCards()) +
    band('Commercial terms and support','We quote the sprint after reviewing access approvals, systems to connect, test coverage and reviewer availability. Production rollout and ongoing support can be scoped separately, with service hours, escalation and change ownership agreed in writing.',actions(link(project+'?offer=sprint','Discuss scope and timing',true))),true);

  pages[routeKey(banking)] = page(banking,'Banking workflow implementation','Banking AI workflow implementation in India','Connect a banking service queue to approved policy with source-linked drafts, access controls, human review and an agreed acceptance test for a bank or GCC.',
    hero('Banking and financial services','AI workflow implementation for banking operations','Give service teams an answer they can check against the bank’s policy. Dockio connects one service queue to an approved policy collection inside your bank or global capability centre.',
      actions(link(project+'?offer=banking','Scope a banking workflow',true),link('#acceptance','Sample acceptance checklist')),photo('banking','Two banking colleagues reviewing a case together',true)) +
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
