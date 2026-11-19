import {industries} from './gsi-redesign.mjs';
import {projectHome, implementationPages, projectPaths} from './project-pages.mjs';
const {banking,engineering,sprint,example,partners} = projectPaths;
const booking='https://outlook.office.com/book/Sankalp@dockio.in/?ismsaljsauthenabled';
const a=(route,text,cls='enterprise-link')=>`<a class="${cls}" data-route="${route}" data-enquiry href="#${route}">${text}<span aria-hidden="true">↗</span></a>`;
const book=(label='Book a discussion',cls='enterprise-book')=>`<a class="${cls}" data-booking href="${booking}" target="_blank" rel="noopener noreferrer">${label}<span aria-hidden="true">↗</span></a>`;
const crumbs=(name,parent)=>`<nav class="seo-breadcrumb wrap" aria-label="Breadcrumb"><ol><li>${a('/','Home')}</li>${parent?`<li>${a(parent.route,parent.name)}</li>`:''}<li><span aria-current="page">${name}</span></li></ol></nav>`;
const entry=(title,description,label,route,body,parent)=>({title,description,body:crumbs(label,parent)+body,breadcrumbs:[{name:'Home',route:'/'},...(parent?[parent]:[]),{name:label,route}]});
const badge=()=>`<img src="/assets/openai-select-partner.svg" alt="OpenAI Select Partner" width="126" height="60">`;
const services = [
  {
    route:'/services/integration', name:'AI implementation', intent:'implementation',
    line:'Build AI into a workflow your people already use.',
    intro:'Our engineers work with your application owner to connect one business workflow to approved data and tools. The people responsible for the work test it in their own environment.',
    heading:'From the first case to a release',
    outputs:[
      ['Trace a real case','Your operations lead walks us through a typical request and an exception. Together we agree which steps AI can take and which decisions stay with a person.'],
      ['Build in your systems','Our engineer and your maintainer connect the queue, source and destination. They review permissions, error handling and every system the workflow can change.'],
      ['Put it through its paces','Your reviewers run agreed cases through the working integration. We fix failures and record any limits before the release owner makes a decision.']
    ],
    left:['Who owns the release?','Your system owner controls access and production changes. Dockio owns the agreed build, test evidence and fixes within scope.'],
    right:['What stays with your team?','Reviewed code or configuration, a repeatable test set and a runbook. Your maintainer rehearses recovery and deploys a change with us before taking over.'],
    action:'Discuss an implementation', resources:[['/services/banking-ai-workflow-implementation/','Banking workflow example'],['/services/enterprise-codex-rollout/','Codex for engineering teams']]
  },
  {
    route:'/services/embedded-ai-teams', name:'Embedded AI specialists', intent:'teams',
    line:'Bring the right specialist into your team.',
    intro:'Add one Dockio specialist to an existing team or give us a workstream to lead. We agree on the work, the day-to-day owner and how you will review each person’s contribution.',
    heading:'Who can join your team?',
    outputs:[
      ['Product and delivery leads','Work with your product owner to map value, set priorities and turn the next release into a backlog with clear acceptance criteria.'],
      ['AI and platform engineers','Pair with your developers on data access, integrations and deployment. Review changes together and leave code, tests and recovery instructions in your environment.'],
      ['Evaluation and adoption specialists','Sit with frontline users to find where answers fail. Turn those cases into repeatable tests and coach the people who will review future releases.']
    ],
    left:['Before someone starts','Review the proposed person’s profile, relevant work they can share and their role on that work. Meet them for a technical walkthrough and agree their first deliverable.'],
    right:['While they are with you','Each specialist has a counterpart on your team. They build together, review each other’s work and practise a release or support task. Your counterpart can take the work forward when the engagement ends.'],
    action:'Discuss a specialist', resources:[['/request-ai-team/?intent=profiles','Request specialist profiles'],['/capabilities/ai-talent/','Explore individual roles'],['/resources/embedded-ai-team-guide/','Compare team arrangements']]
  },
  {
    route:'/services/strategy', name:'AI strategy and value mapping', intent:'strategy',
    line:'Find the workflow worth investing in.',
    intro:'Start with the work your people do today. We map where time and money go, what AI could change and how you will know whether the investment paid off.',
    heading:'What goes into a value map?',
    outputs:[
      ['A baseline you can check','A workflow owner and our delivery lead record eligible volumes, handling time, errors and rework. They identify the source of each number and the period it covers.'],
      ['A change you can test','Choose a task and name who benefits. Set a quality threshold, identify required access and estimate build, review and running costs.'],
      ['An investment decision','Agree the smallest useful pilot and its decision date. Your sponsor can compare the benefit with the full cost and decide whether to fund the next stage.']
    ],
    left:['Time saved and money saved','Freed hours only become a cash saving when spending changes. We distinguish time released for other work, avoided cost and savings your finance owner can confirm.'],
    right:['Before the next team joins','Check that the result holds for the next team’s case mix, permissions and review capacity. Assign a local owner and test the exceptions unique to that team.'],
    action:'Discuss a value map', resources:[['/downloads/workflow-value-map.csv','Download the value map (CSV)'],['/services/implementation-sprint/','See the implementation sprint'],['/services/adoption/','Plan a wider rollout']]
  },
  {
    route:'/services/adoption', name:'Adoption and rollout', intent:'adoption',
    line:'Know when a workflow is ready to scale.',
    intro:'A useful pilot still has to work for the next team. We work with service owners and frontline users to check quality, fix the rough edges and prepare the people who will run it.',
    heading:'What changes as you roll out?',
    outputs:[
      ['Observe everyday use','Follow a real task from intake to completion. Compare assisted work with the baseline and find the exceptions that still send people back to the old process.'],
      ['Give owners a way to act','Pair with local leads to adjust the workflow, update tests and rehearse a failed release. Agree who can stop the service and how to recover it.'],
      ['Expand one unit at a time','Carry over the tested integration and operating instructions. Recheck access, case mix, staffing and running costs before each new unit goes live.']
    ],
    left:['What the sponsor reviews','Eligible volume, quality, handling time, rework and the full cost of operating the service. The workflow owner explains what changed and which benefits can be counted.'],
    right:['When to hold the rollout','Hold expansion when quality falls below the agreed threshold, users still redo the work or the next unit has no accountable owner. Fix the issue and rerun the relevant tests.'],
    action:'Discuss a rollout', resources:[['/downloads/workflow-value-map.csv','Download the value map (CSV)'],['/approach/','See how delivery works']]
  }
];

function close(label='What are you working on?',intent='') {
  const url = intent ? '/contact/?service='+intent : '/project-enquiry/';
  return `<section class="delivery-end"><div class="wrap"><h2>${label}</h2><a class="delivery-action light" href="${url}">${intent==='teams'?'Discuss a specialist':'Discuss a project'}</a></div></section>`;
}

function servicePage(s) {
  const req = s.intent === 'implementation' ? '/project-enquiry/' : '/contact/?service='+s.intent;
  return entry(s.name+' for enterprise teams',s.intro,s.name,s.route,`
    <section class="practice-head wrap"><h1>${s.line}</h1><p>${s.intro}</p>
      <div class="practice-actions"><a class="delivery-action dark" href="${req}">${s.action}</a>${book()}</div></section>
    <section class="practice-detail"><div class="wrap"><h2>${s.heading}</h2><dl class="role-list">
      ${s.outputs.map(([title,copy]) => `<div><dt>${title}</dt><dd>${copy}</dd></div>`).join('')}
    </dl></div></section>
    <section class="practice-notes wrap">${[s.left,s.right].map(([title,copy]) => `<div><h2>${title}</h2><p>${copy}</p></div>`).join('')}</section>
    <nav class="practice-links wrap" aria-label="Related resources">${s.resources.map(([url,label]) => `<a class="editorial-link" href="${url}">${label}</a>`).join('')}</nav>`+close(s.intent==='teams'?'Who does your team need?':'What are you working on?',s.intent),{name:'Services',route:'/services'});
}

export function applyEnterpriseRelease(site){
 const r=site.routes;
 r['/']=projectHome();
 r['/services']=entry('Enterprise AI services and specialists','Choose an embedded specialist, commission a workflow implementation, map business value or prepare an existing AI service for a wider rollout.','Services','/services',`<section class="practice-head wrap"><h1>How we can work with you.</h1><p>Bring us a workflow to build, a team that needs a specialist or a decision about where to invest. We agree who owns the work and what you should have at the end.</p></section>
   <section class="practice-directory wrap" aria-label="Services">${services.map(s=>`<article><h2><a href="${s.route}/">${s.name}</a></h2><div><p>${s.line}</p><a class="editorial-link" href="${s.route}/">Explore the service</a></div></article>`).join('')}</section>`+close());
 for(const s of services)r[s.route]=servicePage(s);
 Object.assign(r, implementationPages());
 r['/industries']=entry('Enterprise AI by industry','Explore Dockio AI workflows in banking, pharma, logistics, IT and retail. Find the relevant business context, delivery approach and requirement discussion.','Industries','/industries',`<section class="enterprise-page-head wrap"><span class="gsi-label">OUR INDUSTRIES</span><h1>AI in your industry.</h1><p>Explore the work we can build with your people, from handling shipment exceptions to reviewing scientific documents.</p></section><section class="enterprise-sector-hub wrap">${industries.map(s=>`<article><a class="enterprise-sector-image" data-route="${s.route}" data-enquiry href="#${s.route}" aria-label="Explore ${s.name}"><img src="/assets/industry-${s.key}.webp" alt="${s.alt}" width="1440" height="960" loading="lazy"></a><div><h2>${s.name}</h2><p>${s.summary}</p>${a(s.route,'Explore '+s.short)}</div></article>`).join('')}</section><section class="enterprise-section wrap"><div class="enterprise-related"><div><h2>Across the wider enterprise.</h2><p>Explore cross-functional and portfolio-company applications.</p></div><div>${a('/industries/enterprise-operations','Enterprise operations')}${a('/industries/professional-services','Professional services')}${a('/industries/private-equity','Private equity')}</div></div></section>`+close('Bring us the industry challenge.'));
 r['/why-dockio']=entry('Why Dockio | People, products and delivery','Meet Dockio’s founder, review a product the company operates and see how we agree specialist responsibilities, release decisions and handover.','Why Dockio','/why-dockio',`<section class="practice-head wrap"><h1>The people responsible for the work.</h1><p>Dockio is an enterprise AI firm based in Mumbai. We supply specialists and lead implementations. You meet the proposed people and agree what they will deliver before the engagement starts.</p><div class="practice-actions"><a class="delivery-action dark" href="/contact/?service=teams">Discuss your team</a><a class="editorial-link" href="/procurement/">Supplier information</a></div></section>
   <section class="practice-detail"><div class="wrap"><h2>Leadership and experience</h2><div><h3>Sankalp Shirish More</h3><p>Founder and director. Sankalp has six years of professional experience spanning enterprise AI platforms in banking and AI engineering in life sciences and consumer goods. He holds an MSc in Artificial Intelligence from the University of Mumbai.</p><a class="editorial-link" href="/about/">About the founder</a></div></div></section>
   <section class="practice-notes wrap"><div><h2>A product you can visit</h2><p>Dockio owns and operates ChangingBox. Explore how a business finds storage space, checks a listing and contacts the host.</p><a class="editorial-link" href="/delivery-example/">Explore ChangingBox</a></div><div><a class="partner-lockup" href="/openai/">${badge()}</a><p>Dockio is an OpenAI Select Partner. We independently scope, build and support the work we agree with you.</p><a class="editorial-link" href="/openai/">Partnership details</a></div></section>`+close());
 r['/approach']=entry('Enterprise AI delivery, value mapping and rollout','Follow one workflow from a baseline through joint delivery, release rehearsal and a decision to scale. Download a value map for your own team.','Our approach','/approach',`<section class="practice-head wrap"><h1>From one workflow to a wider rollout.</h1><p>Every engagement starts with a business owner, a team that knows the work and a change worth testing. The scope can grow as the evidence does.</p><div class="practice-actions"><a class="delivery-action dark" href="/project-enquiry/">Discuss a workflow</a><a class="editorial-link" href="/downloads/workflow-value-map.csv">Download the value map (CSV)</a></div></section>
   <section class="practice-detail"><div class="wrap"><h2>How the teams work together</h2><dl class="role-list">
   <div><dt>Map the value</dt><dd>Your workflow owner shows us how cases move today. We record volume, handling time and rework, estimate the full cost and agree the result worth pursuing.</dd></div>
   <div><dt>Build side by side</dt><dd>Our specialists and your maintainers connect the approved systems. Frontline reviewers help turn ordinary cases, exceptions and access rules into tests.</dd></div>
   <div><dt>Practise running it</dt><dd>Your team releases a reviewed change, investigates a failed case and practises recovery with us. We leave the code or configuration, tests, decisions and operating instructions with the agreed owner.</dd></div>
   <div><dt>Decide where to expand</dt><dd>The sponsor and operating owner compare actual quality, time and cost with the baseline. They can fund another unit, revise the workflow or stop. Each new unit has its own owner and acceptance checks.</dd></div>
   </dl></div></section><nav class="practice-links wrap" aria-label="Delivery resources"><a class="editorial-link" href="/services/implementation-sprint/">Commission a first sprint</a><a class="editorial-link" href="/services/adoption/">Plan adoption and rollout</a><a class="editorial-link" href="/procurement/">Supplier information</a></nav>`+close());
 // Retain industry depth on its own pages and carry that context into the short brief.
 for(const s of industries){r[s.route].body=r[s.route].body.replace(/<a class="gsi-primary" data-booking[\s\S]*?<\/a>/g,a('/contact?industry='+s.key,'Discuss a requirement','enterprise-button'));}
 // Existing contact URLs now enter a real short enquiry; booking remains an explicit choice.
 for(const route of ['/services/workflows','/services/implementation-sprint','/industries/banking-ai-teams']){if(r[route])r[route].body=r[route].body.replace(/<a\b([^>]*?)data-booking([^>]*?)>([\s\S]*?)<\/a>/g,(m,left,right,label)=>label.includes('discussion')?a('/contact','Share a requirement','button primary'):m);}
 const companion = (heading, links) => `<section class="project-companion"><div class="wrap"><strong>${heading}</strong><div class="project-actions">${links.map(([url,label])=>`<a class="project-link" href="${url}">${label}</a>`).join('')}</div></div></section>`;
 const related = [
  ['/industries/financial-services','Implement a banking service workflow',[[banking,'Banking workflow scope'],[sprint,'Paid sprint']]],
  ['/industries/banking-ai-teams','Commission a defined banking project',[[banking,'Banking workflow implementation']]],
  ['/industries/it-software','Evaluate Codex in your repository',[[engineering,'Enterprise Codex rollout']]],
  ['/industries/logistics-supply-chain','ChangingBox storage marketplace',[[example,'See the operating platform']]],
  ['/services','Implementation projects',[[sprint,'Paid implementation sprint'],[banking,'Banking operations'],[engineering,'Codex rollout']]],
  ['/openai','Enterprise implementation with Dockio',[[engineering,'Codex rollout'],[banking,'Banking service workflows'],[partners,'Implementation partnerships']]]
 ];
 for(const [route,heading,links] of related){
  r[route].body = r[route].body.replace('</section>', '</section>'+companion(heading,links));
 }
 const brand=site.before.match(/<a class="brand"[\s\S]*?<\/a>/)?.[0];
 const chevron='<svg class="chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
 const navItem=(route,title,sub)=>`<a data-route="${route}" href="#${route}"><span>${title}</span><small>${sub}</small></a>`;
 const menu=(title,items)=>`<details class="nav-disclosure"><summary>${title}${chevron}</summary><div class="nav-panel">${items}</div></details>`;
 const industryMenu=menu('Industries',navItem('/industries','All industries','Explore the work in each sector.')+industries.map(s=>navItem(s.route,s.name,s.summary)).join(''));
 const serviceMenu=menu('Services',navItem('/services','All services','Projects, specialists and rollout support.')+services.map(s=>navItem(s.route,s.name,s.line)).join('')+navItem('/services/implementation-sprint','Implementation sprint','One workflow with agreed tests and handover.'));
 const companyMenu=menu('Company',navItem('/why-dockio','Why Dockio','Our people, experience and operating responsibilities.')+navItem('/approach','Our approach','Value mapping, delivery and rollout.')+navItem('/about','Leadership','Meet our founder.')+navItem('/partners/implementation','Implementation partners','Scope a joint project.')+navItem('/procurement','Supplier information','Review the company and contracting details.'));
 const nav=`<header class="site-header"><div class="nav-wrap">${brand}<nav id="site-navigation" aria-label="Main navigation">${industryMenu}${serviceMenu}${a('/delivery-example','Our work','nav-link')}${companyMenu}</nav><div class="header-actions">${book('Book a discussion','header-book')}<button id="mobile-toggle" class="mobile-toggle" aria-label="Open navigation" aria-controls="site-navigation" aria-expanded="false"><span></span><span></span></button></div></div></header>`;
 site.before=site.before.replace(/<header class="site-header">[\s\S]*?<\/header>/,nav);
 // Keep the footer concise; the directory links hold the depth.
 site.after=site.after.replace(/<footer class="site-footer">[\s\S]*?<\/footer>/,`<footer class="site-footer"><div class="wrap"><div class="enterprise-footer-main"><div class="footer-brand">${brand}<p>Enterprise AI delivery and embedded specialists.</p><a href="mailto:sankalp@dockio.in">sankalp@dockio.in</a><span>Mumbai, India</span></div><div class="footer-links"><h3>Explore</h3>${a('/services','Services')}${a('/industries','Industries')}${a('/why-dockio','Why Dockio')}${a('/contact','Share a requirement')}</div><div class="footer-links"><h3>Resources</h3>${a('/delivery-example','Delivery example')}${a('/partners/implementation','Implementation partnerships')}${a('/approach','Our approach')}${a('/insights','Perspectives')}${a('/budgetops','BudgetOps')}</div><div class="footer-links"><h3>Company</h3>${a('/about','Leadership')}${a('/openai','OpenAI partnership')}${a('/procurement','Supplier information')}${a('/privacy','Privacy')}</div></div><div class="enterprise-footer-bottom"><span>© 2026 Dockio Technosolutions Private Limited</span><a class="footer-partner" href="/openai/">${badge()}</a></div></div></footer>`);
 return site;
}
