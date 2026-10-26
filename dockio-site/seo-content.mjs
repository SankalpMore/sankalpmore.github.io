/** Source-aligned visible content and contextual navigation for visitors and crawlers. */
const arrow = '<svg class="icon arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const escape = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const link = (route, label) => `<a data-route="${route}" href="#${route}">${label}</a>`;
const metadata = {
 '/':['Enterprise AI implementation in India','Dockio is an OpenAI Select Partner in Mumbai, India. Prioritise AI use cases, implement governed workflows and connect adoption to business value.'],
 '/services':['Enterprise AI implementation services','Explore AI opportunity assessments, embedded implementation and adoption services. Choose a defined engagement with agreed outcomes, controls and handover.'],
 '/services/strategy':['AI use-case prioritisation & investment assessment','Prioritise enterprise AI use cases with a value hypothesis, feasibility review and delivery dependencies. Prepare a scoped implementation proposal.'],
 '/services/integration':['Embedded AI implementation & systems integration','Embed Dockio alongside your enterprise AI team to connect approved models, sources and tools, with evaluation, human review and an operating handover.'],
 '/services/workflows':['Governed agentic workflow implementation','Design AI workflows that connect multiple steps, approved tools and people, with source permissions, exception handling and human review.'],
 '/services/adoption':['Enterprise AI adoption & value realisation','Improve meaningful AI adoption and connect task quality and operational change to validated revenue, savings or reduced losses. Inform the next investment.'],
 '/services/implementation-sprint':['AI Implementation & Value Sprint','Start with one scoped, paid AI workflow. Agree access, controls, acceptance criteria, evaluation and handover before deciding whether to extend or scale.'],
 '/industries':['AI implementation by industry','Enterprise AI implementation for banking and financial services, private equity portfolio companies, enterprise operations and professional services.'],
 '/industries/financial-services':['AI implementation for banking & financial services','Help enterprise AI platform owners and banking GCCs prioritise use cases, implement governed workflows and connect adoption to evidence of business value.'],
 '/industries/private-equity':['AI implementation for private equity portfolios','Assess AI opportunities and implement defined workflows with portfolio-company teams. Reuse validated patterns and connect adoption to operating value.'],
 '/industries/enterprise-operations':['AI workflow automation for enterprise operations','Connect AI to document-heavy tasks and handoffs across business functions, with approved information, clear ownership and accountable human decisions.'],
 '/industries/professional-services':['AI implementation for professional services','Support research, synthesis and knowledge-intensive delivery with AI workflows designed around professional review, source quality and confidentiality.'],
 '/approach':['Enterprise AI delivery approach','See how Dockio scopes, connects, evaluates and hands over enterprise AI workflows, with defined ownership, approved controls and adoption evidence.'],
 '/budgetops':['BudgetOps — AI investment intelligence','BudgetOps is in development: recommendation-first AI investment intelligence linking delivery, adoption and realised value to the next funding decision.'],
 '/about':['Enterprise AI implementation company in Mumbai','Dockio Technosolutions Private Limited is a Mumbai-based enterprise AI implementation company and OpenAI Select Partner. Meet the company and its leadership.'],
 '/insights':['Enterprise AI implementation & value insights','Practical perspectives on AI use-case selection, moving beyond pilots, adoption, workflow quality and evidence of business value.'],
 '/insights/beyond-the-pilot':['Moving an AI pilot into production','What changes after an AI pilot works? Review source access, integration dependencies, failure handling, operational ownership and acceptance criteria.'],
 '/insights/start-with-the-work':['Choosing AI use cases from business needs','Define the business task before choosing AI tools. Make scope, assumptions, human judgement and evidence requirements clear before implementation.'],
 '/insights/beyond-usage':['Measuring enterprise AI adoption & business value','Connect AI usage to task completion, quality, rework and validated business outcomes. Keep estimated time savings distinct from realised financial value.'],
 '/delivery-example':['AI investment-case review — illustrative workflow','Explore a synthetic investment-case review: connect a business brief to evidence, identify gaps and prepare an accountable human decision.'],
 '/openai':['OpenAI Select Partner in India','Dockio is an OpenAI Select Partner based in Mumbai, offering independent ChatGPT adoption, API integration, agentic workflow and Codex enablement services.'],
 '/contact':['Discuss an AI implementation or RFI/RFP','Book a Dockio meeting or prepare an enquiry about AI implementation, embedded delivery, adoption, an RFI/RFP or the BudgetOps product direction.'],
 '/privacy':['Website privacy & enquiry information','Understand how information is handled when you visit this website, prepare an email enquiry or use Dockio’s Microsoft Bookings calendar.']
};
const labels = {
 '/':'Home','/services':'Services','/services/strategy':'Opportunity assessment','/services/integration':'Embedded implementation','/services/workflows':'Agentic workflows','/services/adoption':'Adoption & value','/services/implementation-sprint':'Implementation sprint','/industries':'Industries','/industries/financial-services':'Banking & financial services','/industries/private-equity':'Private equity','/industries/enterprise-operations':'Enterprise operations','/industries/professional-services':'Professional services','/approach':'Our approach','/budgetops':'BudgetOps','/about':'About','/insights':'Perspectives','/insights/beyond-the-pilot':'Beyond the pilot','/insights/start-with-the-work':'Choosing the work','/insights/beyond-usage':'Adoption and business value','/delivery-example':'Delivery example','/openai':'OpenAI partnership','/contact':'Contact','/privacy':'Privacy'
};
const related = {
 '/services/strategy':[['/services/implementation-sprint','Move from assessment to implementation','A scoped starting point for the priority use case.'],['/industries/financial-services','AI investment priorities in banking','Connect the business need, platform and controls.'],['/insights/start-with-the-work','How to choose the right AI use case','Start with the task and make assumptions visible.']],
 '/services/integration':[['/services/workflows','Design governed agentic workflows','Coordinate tools, sources and human review.'],['/services/adoption','Plan adoption and value measurement','Carry the implementation into useful everyday work.'],['/delivery-example','Explore an illustrative delivery workflow','Inspect the brief, evidence and decision.']],
 '/services/workflows':[['/services/integration','Connect the workflow to enterprise systems','Embed implementation alongside your team.'],['/delivery-example','See the review and approval pattern','A synthetic investment-case review example.'],['/insights/beyond-the-pilot','Prepare a workflow for production','Address dependencies, exceptions and ownership.']],
 '/services/adoption':[['/insights/beyond-usage','Understand what usage can tell you','Connect activity to quality and validated outcomes.'],['/budgetops','Explore the BudgetOps product direction','Investment intelligence, currently in development.'],['/services/strategy','Use the evidence in the next funding case','Prioritise the next opportunity worth implementing.']],
 '/services/implementation-sprint':[['/approach','Review our delivery approach','Understand ownership, controls and acceptance.'],['/delivery-example','Explore a representative workflow','See evidence gaps and human decision points.'],['/services/integration','Extend into embedded implementation','Support a defined enterprise AI workstream.']],
 '/industries/financial-services':[['/services/strategy','Prioritise the next AI investment','Assess business value, feasibility and dependencies.'],['/services/workflows','Implement governed banking workflows','Connect approved sources, tools and review steps.'],['/services/adoption','Build evidence of adoption and value','Link useful task completion to business outcomes.']],
 '/industries/private-equity':[['/services/strategy','Assess a portfolio-company opportunity','Frame the operating need and value hypothesis.'],['/services/implementation-sprint','Start with one defined workflow','Agree an achievable scope and acceptance criteria.'],['/services/adoption','Validate the operating impact','Measure adoption and distinguish potential from realised value.']],
 '/industries/enterprise-operations':[['/services/workflows','Connect multi-step operational work','Define sources, handoffs, exceptions and approvals.'],['/services/implementation-sprint','Scope a first implementation','Focus the engagement on one accountable workflow.'],['/insights/beyond-the-pilot','Prepare for everyday use','Make the operational dependencies visible.']],
 '/industries/professional-services':[['/services/workflows','Design a reviewable knowledge workflow','Keep sources and professional judgement connected.'],['/services/integration','Implement within your environment','Connect approved information and tools.'],['/insights/start-with-the-work','Frame the business requirement','Choose technology after understanding the task.']],
 '/insights/beyond-the-pilot':[['/services/integration','Plan the implementation','Connect the capability to your enterprise environment.'],['/services/implementation-sprint','Scope the first delivery increment','One workflow, clear criteria and an operating handover.']],
 '/insights/start-with-the-work':[['/services/strategy','Assess your AI opportunity','Turn the business need into a prioritised implementation proposal.'],['/industries/financial-services','Explore the banking context','Connect platform priorities to governed business workflows.']],
 '/insights/beyond-usage':[['/services/adoption','Improve adoption and value realisation','Link usage, quality and operational change.'],['/budgetops','Explore BudgetOps','A developing product for evidence-led investment decisions.']],
 '/openai':[['/services/integration','Implement OpenAI in your workflow','Connect approved technology, sources and controls.'],['/services/adoption','Support ChatGPT adoption','Make usage meaningful and business impact visible.']],
 '/delivery-example':[['/services/workflows','Design an accountable workflow','Explore the implementation service behind the example.'],['/services/implementation-sprint','Define your first workflow','Agree scope, evidence and human review with Dockio.']]
};
const faqs = [
 ['What does Dockio do?','Dockio Technosolutions Private Limited is an enterprise AI implementation and systems-integration company based in Mumbai, India. As an OpenAI Select Partner, Dockio helps teams prioritise use cases, implement governed AI workflows and establish evidence of adoption and business value.'],
 ['Who does Dockio work with?','Dockio’s primary focus is banking and financial services, including enterprise and group AI platform teams, business sponsors and banking GCCs. Relevant engagements also include private equity portfolio companies, enterprise operations and professional services.'],
 ['How does an AI implementation engagement start?','Start with a business priority and an accountable workflow owner. An opportunity assessment can define the case and dependencies, or an AI Implementation & Value Sprint can scope one workflow. Deliverables, access, timing, acceptance criteria and commercial terms are agreed before delivery.'],
 ['How is AI adoption connected to business value?','Dockio’s approach connects useful task completion, repeat adoption, quality and operational change to an agreed baseline. Financial owners validate any revenue, cash savings or reduced losses; an estimate of time released is kept distinct from realised financial value.'],
 ['Is BudgetOps available as a finished product?','BudgetOps is in development. Its intended role is to connect AI delivery, adoption and realised-value evidence to recommendations for product managers, Finance and business sponsors. Contact Dockio to discuss the current prototype and design-partner scope.']
];
function insertBeforeClosingCta(body, html) {
 const match = body.match(/<section class="(?:premium-end|release-end)[^"]*"/);
 return match ? body.slice(0,match.index)+html+body.slice(match.index) : body+html;
}
function relatedSection(route, items) {
 const heading=route.startsWith('/insights/')?'Put the idea into practice.':'Connect the next step.';
 return `<section class="seo-related wrap" aria-label="Related services and guidance"><div><span class="section-label">RELATED SERVICES & GUIDANCE</span><h2>${heading}</h2></div><div class="seo-related-links">${items.map(([to,title,description])=>`<a data-route="${to}" href="#${to}"><span><strong>${title}</strong><small>${description}</small></span>${arrow}</a>`).join('')}</div></section>`;
}
export function applySearchContent(input) {
 const {routes}=input;
 for(const [route,entry] of Object.entries(routes)) {
  if(route.startsWith('/engagements/')) continue;
  if(metadata[route]) [entry.title,entry.description]=metadata[route];
  if(route!=='/') {
   const parent=route.split('/').filter(Boolean).length>1?'/'+route.split('/')[1]:null;
   const crumbs=[{name:'Home',route:'/'}];
   if(parent&&routes[parent]) crumbs.push({name:labels[parent]||routes[parent].title,route:parent});
   crumbs.push({name:labels[route]||entry.title,route}); entry.breadcrumbs=crumbs;
   const html=`<nav class="seo-breadcrumb wrap" aria-label="Breadcrumb"><ol>${crumbs.map((crumb,i)=>`<li>${i===crumbs.length-1?`<span aria-current="page">${escape(crumb.name)}</span>`:link(crumb.route,escape(crumb.name))}</li>`).join('')}</ol></nav>`;
   entry.body=html+entry.body.replace(/^\s*<div class="breadcrumb wrap">[\s\S]*?<\/div>/,'');
  }
  if(related[route]) entry.body=insertBeforeClosingCta(entry.body,relatedSection(route,related[route]));
 }
 const faqMarkup=`<section class="seo-faq wrap" aria-labelledby="dockio-faq-title"><div><span class="section-label">BEFORE WE START</span><h2 id="dockio-faq-title">A few useful answers.</h2><p>Scope, fit and the evidence behind the work.</p>${link('/contact','Discuss your requirement')}</div><div class="seo-faq-list">${faqs.map(([question,answer],i)=>`<details${i===0?' open':''}><summary>${question}<span aria-hidden="true">+</span></summary><p>${answer}</p></details>`).join('')}</div></section>`;
 routes['/'].body=insertBeforeClosingCta(routes['/'].body,faqMarkup);
 routes['/'].faq=faqs.map(([question,answer])=>({question,answer}));
 const officialLinks=`<section class="seo-official wrap" aria-labelledby="openai-resources-title"><div><span class="section-label">OFFICIAL OPENAI RESOURCES</span><h2 id="openai-resources-title">Review the source.</h2><p>Use OpenAI’s own information when assessing its partner ecosystem and business-data commitments.</p></div><div><a href="https://openai.com/business/partners/" target="_blank" rel="noopener noreferrer">OpenAI Partner Network ${arrow}</a><a href="https://openai.com/enterprise-privacy/" target="_blank" rel="noopener noreferrer">OpenAI enterprise privacy ${arrow}</a><p>These are general OpenAI resources. Dockio’s implementation scope and responsibilities are agreed separately.</p></div></section>`;
 if(!routes['/openai'].body.includes('https://openai.com/business/partners/')) routes['/openai'].body=insertBeforeClosingCta(routes['/openai'].body,officialLinks);
 return input;
}
