export type CatalogItem = {
    label: string;
    path: string;
    summary: string;
    tasks: string[];
};
export const industryItems: CatalogItem[] = [
    {
        label: 'Financial services',
        path: '/industries/financial-services',
        summary: 'Connect finance reporting, policy review and evidence preparation to authoritative sources, clear ownership and accountable judgement.',
        tasks: ['Policy and circular impact review', 'Audit-evidence preparation', 'Close and exception commentary'],
    },
    {
        label: 'IT services',
        path: '/industries/it-services',
        summary: 'Keep requirements, engineering changes, client commitments and release evidence connected across delivery workstreams.',
        tasks: ['Delivery-status updates', 'Requirements comparison', 'Customer handoff preparation'],
    },
    {
        label: 'Global capability centers',
        path: '/industries/global-capability-centers',
        summary: 'Coordinate shared-service handoffs and extend useful workflows across locations without losing local procedures or ownership.',
        tasks: ['Leadership briefs', 'Procedure comparison', 'Shared-services exception summaries'],
    },
    {
        label: 'Logistics',
        path: '/industries/logistics',
        summary: 'Connect shipment events, carrier messages and customer escalations so coordinators can review the facts and act on exceptions.',
        tasks: ['Operational exception summaries', 'SOP comparison', 'Customer escalation synthesis'],
    },
    {
        label: 'Real estate',
        path: '/industries/real-estate',
        summary: 'Organize property documents, diligence questions and portfolio reporting around the correct asset, document version and reviewer.',
        tasks: ['Document comparison', 'Due-diligence pack preparation', 'Portfolio update drafts'],
    },
    {
        label: 'Healthcare operations',
        path: '/industries/healthcare-operations',
        summary: 'Support non-clinical procedure changes, administrative coordination and team learning through bounded, reviewable workflows.',
        tasks: ['Procedure comparison', 'Quality-issue synthesis', 'Training follow-up preparation'],
    },
    {
        label: 'Manufacturing',
        path: '/industries/manufacturing',
        summary: 'Carry quality observations, supplier documentation and open actions across shifts with product context and evidence intact.',
        tasks: ['Shift-summary preparation', 'Quality documentation review', 'Supplier material synthesis'],
    },
    {
        label: 'Professional services',
        path: '/industries/professional-services',
        summary: 'Prepare engagement briefs and reusable knowledge with clear evidence, source ownership and client-confidentiality boundaries.',
        tasks: ['Engagement briefing', 'Research synthesis', 'Knowledge-pack maintenance'],
    },
];
export const serviceItems: CatalogItem[] = [
    {
        label: 'Governed AI tasks, skills and tools',
        path: '/services/chatgpt-enterprise-foundation',
        summary: 'Translate a priority use case into repeatable work with approved sources, explicit permissions, accountable review, and clear task instructions.',
        tasks: ['Task and skill definitions', 'Approved tool and source boundaries', 'Evaluation criteria and human review'],
    },
    {
        label: 'Adoption and team enablement',
        path: '/services/chatgpt-work-managed-adoption',
        summary: 'Help the pilot become part of everyday work through practical guidance, owner enablement, feedback, and an adoption backlog.',
        tasks: ['Role-based guidance and onboarding', 'Adoption blockers and feedback review', 'Handover and improvement backlog'],
    },
    {
        label: 'AI business analysis and value prioritization',
        path: '/services/governance-adoption-sprint',
        summary: 'Connect business priorities to a feasible AI requirement. Define the problem, use cases, expected value, dependencies, and acceptance criteria.',
        tasks: ['Use-case and value prioritization', 'Requirements and acceptance criteria', 'Stakeholder alignment and delivery brief'],
    },
    {
        label: 'Delivery coordination and selective development',
        path: '/services/codex-workflow-implementation',
        summary: 'Embedded PM and PMO support connects business, technology, risk, and vendors. Include selective development where it serves the agreed outcome.',
        tasks: ['Milestones, decisions, risks, and dependencies', 'Implementation coordination and sponsor reporting', 'Selectively scoped tools, integrations, and testing'],
    },
];
export const useCaseItems: CatalogItem[] = [
    {
        label: 'Finance',
        path: '/use-cases/finance',
        summary: 'Prepare reviewable commentary and exception views from approved financial sources.',
        tasks: ['Close commentary', 'Variance and exception summaries', 'Finance-review briefs'],
    },
    {
        label: 'Operations',
        path: '/use-cases/ops',
        summary: 'Keep day-to-day operations aligned with clear inputs, named owners, and structured follow-ups.',
        tasks: ['Weekly briefs', 'Project status updates', 'Training follow-ups'],
    },
    {
        label: 'Marketing',
        path: '/use-cases/marketing',
        summary: 'Turn approved research and campaign material into reviewable briefs, drafts, and launch coordination.',
        tasks: ['Campaign briefs', 'Research synthesis', 'Launch-readiness updates'],
    },
    {
        label: 'Sales',
        path: '/use-cases/sales',
        summary: 'Give teams source-backed account context and reviewable follow-up materials without automating judgment.',
        tasks: ['Account briefs', 'Opportunity follow-ups', 'RFP preparation'],
    },
    {
        label: 'Data analytics',
        path: '/use-cases/data-analytics',
        summary: 'Turn approved data, feedback, and reports into structured analysis for accountable human review.',
        tasks: ['KPI readouts', 'Survey and feedback themes', 'Data-quality question summaries'],
    },
    {
        label: 'Engineering',
        path: '/use-cases/engineering',
        summary: 'Support engineering coordination with ChatGPT and use Codex for scoped development workflows and implementation.',
        tasks: ['Release briefs', 'Incident-review preparation', 'Architecture documentation'],
    },
];
