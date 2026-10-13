import { useRouter } from '@/lib/router'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, CheckCircle } from '@phosphor-icons/react'

const sectionClass = 'mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8'

type CatalogItem = {
  label: string
  path: string
  summary: string
  tasks: string[]
}

export const industryItems: CatalogItem[] = [
  {
    label: 'Financial services',
    path: '/industries/financial-services',
    summary: 'AI adoption and workflow delivery for finance teams, with source access, review, and accountability suited to the work.',
    tasks: ['Policy and circular impact review', 'Audit-evidence preparation', 'Close and exception commentary'],
  },
  {
    label: 'IT services',
    path: '/industries/it-services',
    summary: 'AI adoption, workflow implementation, and delivery support for teams working across clients and systems.',
    tasks: ['Delivery-status updates', 'Requirements comparison', 'Customer handoff preparation'],
  },
  {
    label: 'Global capability centers',
    path: '/industries/global-capability-centers',
    summary: 'ChatGPT adoption and connected workflows for shared services, with a repeatable path from pilot to wider use.',
    tasks: ['Leadership briefs', 'Procedure comparison', 'Shared-services exception summaries'],
  },
  {
    label: 'Logistics',
    path: '/industries/logistics',
    summary: 'AI workflows for operational updates, exception handling, and coordination across teams and suppliers.',
    tasks: ['Operational exception summaries', 'SOP comparison', 'Customer escalation synthesis'],
  },
  {
    label: 'Real estate',
    path: '/industries/real-estate',
    summary: 'AI support for document-intensive investment and portfolio operations, from discovery to implementation.',
    tasks: ['Document comparison', 'Due-diligence pack preparation', 'Portfolio update drafts'],
  },
  {
    label: 'Healthcare operations',
    path: '/industries/healthcare-operations',
    summary: 'AI adoption for non-clinical operations, with appropriate data access and human review built into delivery.',
    tasks: ['Procedure comparison', 'Quality-issue synthesis', 'Training follow-up preparation'],
  },
  {
    label: 'Manufacturing',
    path: '/industries/manufacturing',
    summary: 'AI workflows spanning quality, supplier documentation, and shift communication, supported as needs evolve.',
    tasks: ['Shift-summary preparation', 'Quality documentation review', 'Supplier material synthesis'],
  },
  {
    label: 'Professional services',
    path: '/industries/professional-services',
    summary: 'ChatGPT adoption and workflow implementation for client delivery, research, and reusable team knowledge.',
    tasks: ['Engagement briefing', 'Research synthesis', 'Knowledge-pack maintenance'],
  },
]

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
]

export const useCaseItems: CatalogItem[] = [
  {
    label: 'Finance',
    path: '/use-cases/finance',
    summary: 'Prepare reviewable commentary and exception views from approved financial sources.',
    tasks: ['Close commentary', 'Variance and exception summaries', 'Finance-review briefs'],
  },
  {
    label: 'Ops',
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
]

function PageIntro({ label, title, copy }: { label: string; title: string; copy: string }) {
  return <div className="max-w-3xl"><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#8b817a]">{label}</p><h1 className="mt-4 font-serif text-4xl font-normal leading-tight text-[#343230] sm:text-5xl lg:text-6xl">{title}</h1><p className="mt-6 text-lg leading-8 text-[#67615d]">{copy}</p></div>
}

function CatalogRail({ items }: { items: CatalogItem[] }) {
  const { navigate } = useRouter()
  return <div className="mt-14 divide-y divide-[#d9dedb] border-y border-[#d9dedb]">{items.map((item, index) => <button key={item.path} onClick={() => navigate(item.path)} className="grid w-full gap-4 py-6 text-left transition hover:bg-[#f7f8f5] sm:grid-cols-[56px_minmax(0,1fr)_minmax(220px,0.7fr)_36px] sm:items-center sm:px-4"><span className="font-mono text-xs text-[#31575d]">{String(index + 1).padStart(2, '0')}</span><h2 className="font-serif text-2xl text-[#343230] sm:text-3xl">{item.label}</h2><p className="text-sm leading-6 text-[#67615d]">{item.summary}</p><ArrowRight className="hidden h-5 w-5 text-[#31575d] sm:block" /></button>)}</div>
}

function DetailPage({ item, category }: { item: CatalogItem; category: string }) {
  const { navigate } = useRouter()
  return <div className="min-h-screen bg-white pt-28 text-[#282523]"><div className={`${sectionClass} py-16 sm:py-20`}><button onClick={() => navigate(`/${category}`)} className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-[#31575d] transition hover:text-[#193a42]"><ArrowLeft className="h-4 w-4" />View all {category.replace('-', ' ')}</button><PageIntro label={category === 'use-cases' ? 'Use case' : category === 'industries' ? 'Industry' : 'Service'} title={item.label} copy={item.summary} /><div className="mt-16 grid gap-12 border-t border-[#e9e4df] pt-12 lg:grid-cols-[0.82fr_1.18fr]"><div><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#8b817a]">Where we can help</p><h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-[#343230] sm:text-4xl">Start with a workflow and a clear business outcome.</h2></div><div className="space-y-4">{item.tasks.map((task) => <div key={task} className="flex items-start gap-3 border-t border-[#d9dedb] pt-4 first:border-t-0 first:pt-0"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#1f6d73]" weight="fill" /><p className="text-base leading-7 text-[#67615d]">{task}</p></div>)}</div></div><section className="mt-16 grid gap-10 bg-[#f7f8f5] p-7 sm:p-10 lg:grid-cols-[0.82fr_1.18fr]"><div><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#8b817a]">Managed delivery</p><h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-[#343230] sm:text-4xl">From discovery to delivery, with support as you grow.</h2></div><div><p className="text-base leading-8 text-[#67615d]">Dockio works alongside your team on an agreed BA, PM, PMO, implementation, or adoption remit. We agree hours or days on time and materials, with scope, rate, review cadence, founder involvement, and delivery capacity specified before work starts. Access, review, and acceptance requirements are part of the delivery plan.</p><Button onClick={() => navigate('/contact')} className="mt-7 h-11 rounded-full bg-[#193a42] px-6 text-white hover:bg-[#102b32]">Share your requirement <ArrowRight className="ml-2 h-4 w-4" /></Button></div></section></div></div>
}

export function IndustriesLandingPage() {
  return <div className="min-h-screen bg-white pt-28 text-[#282523]"><div className={`${sectionClass} py-16 sm:py-20`}><PageIntro label="Industries" title="Enterprise AI, built around the way your industry works." copy="Dockio helps teams adopt ChatGPT, implement AI workflows and agents, and connect them to daily operations. We scope delivery around your business priorities, systems, and operating requirements." /><CatalogRail items={industryItems} /></div></div>
}

export function ServicesLandingPage() {
  return <div className="min-h-screen bg-white pt-28 text-[#282523]"><div className={`${sectionClass} py-16 sm:py-20`}><PageIntro label="Services" title="The support between strategy and delivery." copy="Bring Dockio into the part of your initiative that needs hands-on ownership: requirements and value prioritization, governed AI tasks and tools, implementation coordination, or adoption. Engage for agreed hours or days with founder involvement specified." /><CatalogRail items={serviceItems} /></div></div>
}

export function UseCasesLandingPage() {
  return <div className="min-h-screen bg-white pt-28 text-[#282523]"><div className={`${sectionClass} py-16 sm:py-20`}><div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]"><PageIntro label="Use cases" title="Practical AI workflows for everyday enterprise work." copy="Explore starting points by function, from ChatGPT adoption to connected workflows and agents. We shape each engagement around a useful outcome, the systems involved, and the people who will own it." /><div className="divide-y divide-[#d9dedb] border-y border-[#d9dedb]">{useCaseItems.map((item, index) => <UseCaseRow key={item.path} item={item} index={index} />)}</div></div></div></div>
}

function UseCaseRow({ item, index }: { item: CatalogItem; index: number }) {
  const { navigate } = useRouter()
  return <button onClick={() => navigate(item.path)} className="grid w-full gap-4 py-6 text-left transition hover:bg-[#f7f8f5] sm:grid-cols-[52px_minmax(0,0.9fr)_minmax(0,1.1fr)_32px] sm:items-center sm:px-4"><span className="font-mono text-xs text-[#31575d]">{String(index + 1).padStart(2, '0')}</span><h2 className="font-serif text-2xl text-[#343230]">{item.label}</h2><p className="text-sm leading-6 text-[#67615d]">{item.summary}</p><ArrowRight className="hidden h-5 w-5 text-[#31575d] sm:block" /></button>
}

export function IndustryDetailPage({ slug }: { slug: string }) {
  const item = industryItems.find((industry) => industry.path.endsWith(`/${slug}`))
  return item ? <DetailPage item={item} category="industries" /> : null
}

export function ServiceDetailPage({ slug }: { slug: string }) {
  const item = serviceItems.find((service) => service.path.endsWith(`/${slug}`))
  return item ? <DetailPage item={item} category="services" /> : null
}

export function UseCaseDetailPage({ slug }: { slug: string }) {
  const item = useCaseItems.find((useCase) => useCase.path.endsWith(`/${slug}`))
  return item ? <DetailPage item={item} category="use-cases" /> : null
}
