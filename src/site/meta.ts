import { services, industries, insights } from './catalog';
export const origin = 'https://www.dockio.in';
const core = [
  ['/', 'Enterprise AI Transformation & Systems Integration', 'Dockio is an OpenAI Select Partner in Mumbai. Enterprise AI strategy, agentic integration, ChatGPT and Codex enablement, embedded teams and evidence of ROI.'],
  ['/examples', 'Explore Example AI Workflows & Investment Briefs', 'Inspect illustrative Dockio work: a governed banking workflow with exception handling and an editable AI investment decision brief.'],
  ['/services', 'Enterprise AI Services | Strategy to ROI', 'Explore six Dockio services: AI strategy, agentic integration, ChatGPT and Codex, governance, embedded delivery and data intelligence.'],
  ['/industries', 'AI Transformation for BFSI & Enterprise Industries', 'Explore Dockio AI services for banking, financial services, insurance, GCCs, life sciences and consumer businesses.'],
  ['/approach', 'How We Work | Enterprise AI Delivery', 'Connect business discovery, investment preparation, AI implementation, adoption and outcome evidence with clear engagement responsibilities.'],
  ['/budgetops', 'BudgetOps | AI Investment Decisions, Better Prepared', 'BudgetOps is a Dockio platform in development for preparing evidence-backed AI investment proposals. Discuss your requirements or design-partner interest.'],
  ['/about', 'About Dockio | Company & Leadership', 'Dockio is a Mumbai-based enterprise AI transformation and systems-integration company. Meet its direction and leadership under Sankalp Shirish More.'],
  ['/value-realization', 'AI Value & ROI | From Baseline to Business Evidence', 'Define baselines, task quality, adoption, operating cost and business outcomes. Dockio helps enterprises build evidence for AI investment decisions.'],
  ['/openai', 'OpenAI Select Partner in Mumbai | Dockio', 'Dockio is an OpenAI Select Partner connecting ChatGPT, Codex and enterprise AI implementation with business priorities, adoption and measurable value.'],
  ['/book', 'Book a Dockio Conversation | Enterprise AI', 'Choose a time through Dockio Microsoft Bookings to discuss an enterprise AI initiative, RFI, RFP, embedded engagement or BudgetOps requirement.'],
  ['/contact', 'Share an AI Requirement | RFI, RFP & Embedded Support', 'Share an AI initiative, RFI or RFP, embedded delivery, partnership or BudgetOps requirement. Review and submit your brief, then receive a reference.'],
  ['/rfp', 'Enterprise AI RFI & RFP Enquiries | Dockio', 'Share an enterprise AI procurement requirement, RFI or RFP. Discuss scope, deadlines, delivery models and specialist embedded support.'],
  ['/insights', 'Enterprise AI Perspectives | Value, Delivery & ROI', 'Practical Dockio perspectives on useful AI work, credible investment cases and dependable enterprise workflow design.'],
  ['/partner-readiness', 'Work with Dockio | Consulting & Technology Partners', 'Bring Dockio into an enterprise AI workstream with defined responsibilities, specialist capability and a practical delivery arrangement.'],
  ['/privacy', 'Website Privacy | Enquiries & Booking', 'How Dockio handles submitted enquiries, consent, receipt references, browser-local examples, Microsoft Bookings links and technical information.'],
] as const;
export const pages = [...core.map(([path, title, description]) => ({ path, title, description })), ...services.map(s => ({ path: s.path, title: s.title, description: s.summary })), ...industries.map(i => ({ path: i.path, title: `${i.title} AI Transformation`, description: i.summary })), ...insights.map(i => ({ path: i.path, title: i.title, description: i.description }))];
export const aliases: Record<string, string> = {
  '/services/strategy':'/services/ai-strategy-value', '/services/integration':'/services/agentic-ai-integration', '/services/workflows':'/services/agentic-ai-integration', '/services/adoption':'/services/chatgpt-codex-enablement',
  '/services/chatgpt-enterprise-foundation':'/services/chatgpt-codex-enablement', '/services/chatgpt-work-managed-adoption':'/services/chatgpt-codex-enablement', '/services/governance-adoption-sprint':'/services/governance-evaluation', '/services/codex-workflow-implementation':'/services/chatgpt-codex-enablement',
  '/industries/global-capability-centers':'/industries/gcc', '/industries/healthcare-operations':'/industries/life-sciences', '/industries/enterprise-operations':'/industries/gcc',
  '/industries/it-services':'/industries/gcc', '/industries/professional-services':'/industries/gcc', '/industries/logistics':'/industries', '/industries/manufacturing':'/industries', '/industries/real-estate':'/industries',
  '/use-cases':'/services', '/case-studies':'/examples', '/use-cases/finance':'/industries/financial-services', '/use-cases/ops':'/services/agentic-ai-integration', '/use-cases/marketing':'/services/data-customer-intelligence', '/use-cases/sales':'/services/data-customer-intelligence', '/use-cases/data-analytics':'/services/data-customer-intelligence', '/use-cases/engineering':'/services/chatgpt-codex-enablement',
  '/insights/choosing-an-ai-use-case':'/services/ai-strategy-value', '/insights/from-pilot-to-owned-workflow':'/services/agentic-ai-integration', '/insights/evidence-for-ai-investment':'/value-realization',
};
export function canonical(path: string) { return origin + (path === '/' ? '/' : path + '/'); }
