import { industryItems, serviceItems, useCaseItems } from './catalog';
export { industryItems, serviceItems, useCaseItems };
export const origin = 'https://www.dockio.in';
export const email = 'sankalp@dockio.in';
export const heroCopy = 'Turn business priorities into AI your people can use. Dockio works alongside your teams to shape the right use cases, connect the right tools and carry change through to everyday adoption.';
export const capabilities = [
    { title: 'Choose what matters', text: 'Start with the value you want to create. Turn competing ideas into clear priorities, requirements and measures of success.', items: ['Use-case & value prioritization', 'Business analysis & requirements', 'Success measures & acceptance criteria'], path: '/services/governance-adoption-sprint' },
    { title: 'Make the work happen', text: 'Connect people, platforms and delivery. Bring the requirements, integration and controls together in a workable plan.', items: ['Embedded BA, PM & PMO', 'AI tasks, skills, tools & integration', 'Delivery coordination & selective development'], path: '/services/codex-workflow-implementation' },
    { title: 'Help the change stick', text: 'Make AI useful in the flow of work. Equip your people, listen to what gets in the way and review the outcomes.', items: ['Practical enablement & handover', 'Adoption feedback & improvement', 'Outcome reviews & next decisions'], path: '/services/chatgpt-work-managed-adoption' },
];
export const budgetCopy = 'BudgetOps explores how business priorities, delivery progress, adoption and outcomes can inform the next funding decision. The aim is to make evidence from the work useful when deciding what to continue, change or scale.';
export const faqs = [
    ['Where do we start?', 'With the requirement or ambition you already have. We discuss the outcome, current stage, systems, constraints and support you need, then agree a useful next step.'],
    ['Can you work with our existing teams and platforms?', 'Yes. Dockio can take an embedded remit alongside business, technology, risk and delivery teams. Platform choices, access, integration responsibilities and handover are agreed around your environment.'],
    ['How are engagements structured?', 'Agreed hours or days on time and materials. Scope, rate, availability, review cadence and founder involvement are specified before work starts. Remote delivery or another working arrangement is agreed for the engagement.'],
    ['Is BudgetOps a service or a product?', 'BudgetOps is our vision for connecting investment decisions to evidence from delivery, adoption and outcomes. Our work today focuses on helping enterprises define, implement and adopt useful AI.'],
];
const core = [
    ['/', 'AI systems integration, delivery & adoption', 'AI-value-focused systems integration. Dockio connects business priorities, enterprise AI implementation and everyday adoption. Share your requirement.'],
    ['/services', 'Enterprise AI services', 'AI requirements, value prioritization, governed tasks and tools, systems integration, delivery coordination and adoption support.'],
    ['/approach', 'How we work', 'An embedded enterprise AI remit, agreed hours or days, accountable delivery and founder involvement. See how Dockio works alongside your team.'],
    ['/budgetops', 'BudgetOps | Evidence for investment decisions', 'Explore the Dockio BudgetOps vision: connect priorities, delivery, adoption and outcomes to better-informed funding decisions.'],
    ['/about', 'About Dockio & Sankalp More', 'Founder-led enterprise AI systems integration. Meet Sankalp More and the thinking behind Dockio’s focus on implementation, governance, value and adoption.'],
    ['/contact', 'Share your AI requirement', 'Tell Dockio about your AI priorities, delivery challenge or adoption requirement. Prepare a local email brief for sankalp@dockio.in.'],
    ['/industries', 'Enterprise AI by industry', 'AI systems integration and adoption shaped around industry workflows, with a focus on finance and cross-industry delivery.'],
    ['/use-cases', 'Enterprise AI use cases', 'Explore AI opportunities in finance, operations, data, engineering and customer work. Define the outcome before the implementation.'],
    ['/case-studies', 'AI workflow possibilities', 'Explore illustrative AI workflow opportunities, from finance-close commentary to programme reporting and policy comparison.'],
    ['/partner-readiness', 'Work with Dockio', 'Bring Dockio into a defined AI workstream alongside your delivery team, with clear ownership, integration responsibilities and handover.'],
    ['/privacy', 'Website privacy', 'How the Dockio website handles local enquiry drafts, email links and website information.'],
] as const;
export const pages = [...core.map(([path, title, description]) => ({ path, title, description })), ...[...serviceItems, ...industryItems, ...useCaseItems].map(i => ({ path: i.path, title: i.label, description: i.summary }))];
export function pageMeta(path: string) { return pages.find(p => p.path === path) ?? { path, title: 'Page not found', description: 'Explore Dockio enterprise AI services.' }; }
export function canonical(path: string) { return origin + (path === '/' ? '/' : path + '/'); }
