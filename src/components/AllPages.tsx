import { useRouter } from '@/lib/router'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CapabilityDownload } from '@/components/CapabilityDownload'
import { MICROSOFT_BOOKINGS_URL } from '@/lib/bookings'
import heroImage from '@/assets/dockio-knowledge-work-hero.png'
import { ArrowRight, Briefcase, CheckCircle } from '@phosphor-icons/react'

const sectionClass = 'mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8'

export function HomePage() {
  const { navigate } = useRouter()

  const scrollToAssessment = () => {
    document.getElementById('book-assessment')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const proofPillars = [
    {
      title: 'Platform-aware implementation',
      body: 'Codex, OpenAI, Azure AI Foundry, AWS Bedrock, cloud architecture, and enterprise app integration.',
    },
    {
      title: 'Governed workflow delivery',
      body: 'Source maps, permission boundaries, review paths, acceptance checks, and reusable operating playbooks.',
    },
    {
      title: 'Procurement-ready execution',
      body: 'Structured pilots, clear owners, delivery documentation, SOW alignment, and measurable rollout gates.',
    },
  ]

  const applicationAreas = [
    {
      title: 'Finance and procurement',
      owner: 'CFO office / procurement operations',
      body: 'Prepare reviewable analysis, summarize exceptions, compare vendor material, and package evidence for approvals.',
      signal: 'Strong fit when the process already has audit checks, named reviewers, and repeatable decision cycles.',
    },
    {
      title: 'Revenue and GTM',
      owner: 'Sales, partner, and revenue operations',
      body: 'Create account research, proposal drafts, follow-up summaries, and CRM-ready notes from approved sources.',
      signal: 'Strong fit when teams already track handoffs, CRM hygiene, and enterprise follow-through.',
    },
    {
      title: 'Delivery operations',
      owner: 'COO office / program operations',
      body: 'Turn SOPs, tickets, runbooks, and project notes into trackable next actions, summaries, and delivery updates.',
      signal: 'Strong fit when work is process-heavy, documented, and owned by operations leaders who can enforce review.',
    },
    {
      title: 'Technology and data teams',
      owner: 'CTO office / AI transformation team',
      body: 'Connect repositories, internal docs, cloud workflows, and data tools so Codex can support implementation safely.',
      signal: 'Strong fit when there are access controls, technical owners, and a clear path from pilot to production.',
    },
    {
      title: 'Strategy and transformation',
      owner: 'Strategy / transformation office',
      body: 'Synthesize research, compare internal documents, and create decision memos that keep assumptions visible.',
      signal: 'Strong fit when leadership buys through structured pilots, governance review, and evidence-backed decisions.',
    },
  ]

  const deliveryStages = [
    {
      stage: '01',
      title: 'Assess',
      body: 'Identify workflows that are frequent, context-heavy, reviewable, and valuable enough for a focused pilot.',
      output: 'Workflow shortlist',
    },
    {
      stage: '02',
      title: 'Architect',
      body: 'Map sources, permissions, systems, acceptance criteria, and the minimum integration path for safe delegation.',
      output: 'Pilot architecture',
    },
    {
      stage: '03',
      title: 'Implement',
      body: 'Configure workflows, prompts, skills, checks, and operating routines around approved business tasks.',
      output: 'Working system',
    },
    {
      stage: '04',
      title: 'Enable',
      body: 'Train owners and reviewers with hands-on labs, approved-source habits, and clear definitions of done.',
      output: 'Adoption playbook',
    },
    {
      stage: '05',
      title: 'Govern',
      body: 'Track quality, reuse, coverage, risks, and rollout readiness so leaders can scale with control.',
      output: 'Governance rhythm',
    },
  ]

  return (
    <div className="min-h-screen bg-white text-[#22211f]">
      <section id="codex-integration" className="pt-24 pb-14 sm:pt-28 sm:pb-16">
        <div className={`${sectionClass} grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start`}>
          <div>
            <h1 className="max-w-3xl font-serif text-5xl font-normal leading-[0.98] text-[#343230] sm:text-6xl lg:text-6xl xl:text-[66px]">
              Codex implementation for teams with clear owners and review paths
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#67615d] sm:text-lg">
              Dockio helps transformation, operations, finance, and GTM leaders turn Codex into governed
              workflows across approved tools, documents, and review paths.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={scrollToAssessment}
                className="h-12 rounded-full bg-[#193a42] px-7 text-white hover:bg-[#102b32]"
              >
                Book Assessment <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => navigate('/services')}
                variant="outline"
                className="h-12 rounded-full border-[#ded8d2] bg-white px-7 text-[#282523] hover:bg-[#f7f4f1]"
              >
                Explore services
              </Button>
            </div>
            <div className="mt-11 grid gap-5 border-t border-[#ece7e2] pt-7 text-sm leading-6 text-[#615c58] sm:grid-cols-3">
              <p>
                <span className="block font-semibold text-[#282523]">Niche focus</span>
                Codex, LLM workflows, RAG, cloud AI, and enterprise knowledge operations.
              </p>
              <p>
                <span className="block font-semibold text-[#282523]">Delivery structure</span>
                Architecture, delivery governance, enablement, documentation, and rollout gates.
              </p>
              <p>
                <span className="block font-semibold text-[#282523]">Buyer fit</span>
                Teams with procurement maturity, ethical vendor onboarding, and named owners.
              </p>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-[#d8e1df] bg-[#132b31] p-4 text-white shadow-[0_30px_90px_rgba(19,43,49,0.22)]">
            <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-5">
              <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">Dockio delivery board</p>
                  <h2 className="mt-2 font-serif text-3xl font-normal">Enterprise Codex pilot</h2>
                </div>
                <span className="w-fit rounded-full border border-[#7ca3a5]/40 bg-[#7ca3a5]/15 px-3 py-1 text-xs font-medium text-[#d8f0ef]">
                  Reviewable
                </span>
              </div>

              <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-white">
                <img
                  src={heroImage}
                  alt="Dockio implementation materials including architecture notes, workflow maps, and review documents"
                  className="h-44 w-full object-cover object-center"
                />
              </div>

              <div className="mt-5 rounded-xl bg-white p-5 text-[#282523]">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#7d746e]">Pilot package</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    'Workflow intake and business outcome',
                    'Source map and access boundaries',
                    'Reviewer path and acceptance checks',
                    'Rollout gates and governance rhythm',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1f6d73]" weight="fill" />
                      <span className="text-sm leading-6 text-[#5f5954]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e9e4df] bg-[#f7f8f5] py-10">
        <div className={`${sectionClass} grid gap-5 md:grid-cols-3`}>
          {proofPillars.map((pillar) => (
            <div key={pillar.title} className="border-l border-[#ccd7d4] pl-5">
              <h2 className="font-semibold text-[#282523]">{pillar.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#67615d]">{pillar.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="where-applies" className="bg-white py-20 sm:py-24">
        <div className={sectionClass}>
          <div className="grid gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#8b817a]">Workflow fit</p>
              <h2 className="mt-4 max-w-xl font-serif text-4xl font-normal leading-tight text-[#343230] sm:text-5xl">
                Where teams should use Codex first
              </h2>
            </div>
            <div className="max-w-2xl text-base leading-8 text-[#615c58] sm:text-lg">
              <p>
                The best starting points are not generic AI experiments. They are recurring workflows
                where sources are known, ownership is clear, and business reviewers can judge output quality.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="rounded-md bg-[#f7f8f5] p-7 ring-1 ring-[#dde5e2] lg:sticky lg:top-28">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#7d746e]">Best-fit buyer profile</p>
              <h3 className="mt-5 font-serif text-3xl font-normal leading-tight text-[#343230]">
                Dockio works best when the buyer has owners, sources, and review steps in place.
              </h3>
              <div className="mt-8 space-y-5 text-sm leading-6 text-[#67615d]">
                {[
                  ['Buying motion', 'Clear vendor approval steps, ethical onboarding, and reliable payment behavior.'],
                  ['Implementation owner', 'A transformation, operations, finance, GTM, or technology leader who can sponsor a pilot.'],
                  ['Workflow shape', 'Source-backed, repeatable work where output quality can be reviewed by business owners.'],
                ].map(([label, text]) => (
                  <div key={label} className="border-t border-[#dde5e2] pt-5">
                    <p className="font-semibold text-[#282523]">{label}</p>
                    <p className="mt-2">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {applicationAreas.map((area, index) => (
                <div
                  key={area.title}
                  className="grid gap-5 rounded-md border border-[#dfe3df] bg-white p-5 shadow-none transition hover:border-[#bdc8c4] hover:shadow-[0_16px_45px_rgba(40,37,35,0.06)] md:grid-cols-[0.72fr_1fr]"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#edf3f1] font-mono text-xs text-[#31575d]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className="font-serif text-2xl text-[#46423f]">{area.title}</p>
                    </div>
                    <p className="mt-4 text-sm font-medium text-[#31575d]">{area.owner}</p>
                  </div>
                  <div className="grid gap-4 text-sm leading-6 text-[#67615d] sm:grid-cols-2">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase text-[#8b817a]">Codex delegation</p>
                      <p>{area.body}</p>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase text-[#8b817a]">ICP fit signal</p>
                      <p>{area.signal}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-dockio-helps"
        className="bg-[#132b31] py-20 text-white sm:py-24"
      >
        <div className={sectionClass}>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/45">Delivery model</p>
              <h2 className="mt-4 max-w-xl font-serif text-4xl font-normal leading-tight sm:text-5xl">
                A focused AI systems integrator for Codex workflows
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              Dockio brings the delivery habits buyers expect from a service integrator, but keeps the scope
              narrow: Codex, LLM workflow automation, RAG, cloud AI, and governed knowledge work.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-white/10 bg-white/10 lg:grid-cols-5">
            {deliveryStages.map((step) => (
              <div key={step.stage} className="bg-[#17343b] p-6">
                <p className="font-mono text-xs text-white/42">{step.stage}</p>
                <h3 className="mt-6 font-serif text-2xl font-normal">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/68">{step.body}</p>
                <p className="mt-8 border-t border-white/10 pt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#b9d8d7]">
                  {step.output}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-5 rounded-md border border-white/10 bg-white/[0.06] p-6 md:grid-cols-3">
            {['Architecture documentation', 'Security and data handling model', 'Operating cadence for adoption'].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#a8d8d5]" weight="fill" />
                <p className="text-sm leading-6 text-white/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book-assessment" className="border-t border-[#e9e4df] bg-[#fbfaf8] py-20 sm:py-24">
        <div className={`${sectionClass} grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start`}>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#8b817a]">Codex assessment</p>
            <h2 className="mt-4 font-serif text-4xl font-normal leading-tight text-[#343230] sm:text-5xl">
              Find the first workflow worth delegating.
            </h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-[#67615d] sm:text-lg">
              Share the team, workflow, and timing. Dockio will review whether Codex can safely help,
              what systems need to be connected, and what a practical pilot should measure.
            </p>
          </div>

          <Card className="rounded-md border-[#d9dedb] bg-white p-7 shadow-[0_18px_55px_rgba(37,31,28,0.06)]">
            <div className="space-y-5">
              <h3 className="font-serif text-3xl font-normal leading-tight text-[#343230]">Schedule online</h3>
              <p className="text-base leading-7 text-[#67615d]">
                Choose a time through Microsoft Bookings and share the workflow details in the booking notes.
              </p>
              <div className="grid gap-3 text-sm leading-6 text-[#67615d] sm:grid-cols-2">
                {['Workflow owner and business outcome', 'Systems, sources, and review expectations'].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-md bg-[#f7f8f5] p-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1f6d73]" weight="fill" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button
                asChild
                className="h-12 rounded-full bg-[#193a42] px-7 text-white hover:bg-[#102b32]"
              >
                <a href={MICROSOFT_BOOKINGS_URL} target="_blank" rel="noopener noreferrer">
                  Book a Codex assessment <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <p className="text-sm leading-6 text-[#67615d]">
                Prefer email? Write to{' '}
                <a href="mailto:partnerships@dockio.in" className="font-medium text-[#282523] underline-offset-4 hover:underline">
                  partnerships@dockio.in
                </a>
                .
              </p>
            </div>
          </Card>
        </div>
      </section>

      <div className="h-px bg-[#e9e4df]" />
    </div>
  )
}

export function ServicesPage() {
  const { navigate } = useRouter()
  const services = [
    {
      id: 'codex-workflow-assessment',
      title: 'Codex Workflow Assessment',
      description: 'Identify the first workflows where Codex can create measurable value without adding governance risk.',
      details: [
        'Workflow intake with business owner, reviewer, and success criteria',
        'Source, tool, and permission mapping',
        'Pilot backlog ranked by value, effort, and reviewability',
        'Rollout recommendation for the first governed use case',
      ],
      outcome: 'A practical pilot scope with clear owners, sources, and acceptance checks.',
    },
    {
      id: 'codex-workspace-integration',
      title: 'Codex Workspace Integration',
      description: 'Connect Codex to the approved context it needs: repositories, documents, cloud workflows, and operating tools.',
      details: [
        'Repository, documentation, and internal tool connection planning',
        'Access-control and source-boundary recommendations',
        'Reusable workflow setup for repeatable business tasks',
        'Review and escalation paths for human-in-the-loop delivery',
      ],
      outcome: 'A Codex workspace model that supports real work without bypassing enterprise controls.',
    },
    {
      id: 'rag-knowledge-grounding',
      title: 'RAG and Knowledge Grounding',
      description: 'Design retrieval and evidence flows for teams that need answers, summaries, and decisions grounded in approved knowledge.',
      details: [
        'Document ingestion and source-quality assessment',
        'Retrieval strategy across SharePoint, docs, tickets, and internal files',
        'Evidence-linking and response review patterns',
        'Evaluation checks for relevance, coverage, and hallucination risk',
      ],
      outcome: 'Knowledge workflows that business reviewers can inspect, trust, and improve.',
    },
    {
      id: 'ai-agent-workflow-automation',
      title: 'AI Agent Workflow Automation',
      description: 'Automate repeatable knowledge work with tool use, orchestration, guardrails, and reviewable handoffs.',
      details: [
        'Tool-calling and API integration design',
        'Agent workflow orchestration for multi-step tasks',
        'Failure handling, logs, and reviewer checkpoints',
        'Reusable operating playbooks for common work patterns',
      ],
      outcome: 'Automation that improves cycle time while keeping accountability visible.',
    },
    {
      id: 'cloud-ai-architecture',
      title: 'Cloud AI Architecture',
      description: 'Plan the cloud, security, and integration foundation for Codex, LLM, and RAG systems.',
      details: [
        'Azure AI Foundry, AWS Bedrock, OpenAI, and private cloud planning',
        'Data handling and deployment model documentation',
        'Security questionnaire and architecture artifact support',
        'Production-readiness roadmap for pilot-to-scale movement',
      ],
      outcome: 'A production-minded architecture path that procurement and technical reviewers can evaluate.',
    },
    {
      id: 'enablement-governance',
      title: 'Enablement and Governance',
      description: 'Turn one-off pilots into repeatable operating habits for owners, reviewers, and delivery teams.',
      details: [
        'Hands-on delegation labs using approved team tasks',
        'Reviewer playbooks, definitions of done, and quality checks',
        'Adoption reporting across reuse, coverage, quality, and risk',
        'Governance cadence for scale decisions',
      ],
      outcome: 'A measured operating rhythm for scaling Codex responsibly.',
    },
  ]

  const engagementStandards = [
    'Named business owner and reviewer for each workflow',
    'Documented source map, access model, and delivery assumptions',
    'Procurement-ready artifacts for SOW, MSA, security, and governance review',
  ]

  return (
    <div className="min-h-screen bg-white pt-28 text-[#282523]">
      <div className={`${sectionClass} py-16 sm:py-20`}>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#8b817a]">Services</p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl font-normal leading-tight text-[#343230] lg:text-6xl">
              Codex implementation services for enterprise teams
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#67615d]">
              Dockio helps teams with clear owners assess, integrate, govern, and scale Codex workflows across
              approved knowledge, cloud platforms, business systems, and review paths.
            </p>
          </div>

          <div className="rounded-md border border-[#d9dedb] bg-[#f7f8f5] p-7">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#7d746e]">Engagement standard</p>
            <div className="mt-5 space-y-4">
              {engagementStandards.map((item) => (
                <div key={item} className="flex items-start gap-3 border-t border-[#d9dedb] pt-4 first:border-t-0 first:pt-0">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1f6d73]" weight="fill" />
                  <p className="text-sm leading-6 text-[#615c58]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 space-y-4">
          {services.map((service, index) => (
            <Card key={service.id} id={service.id} className="scroll-mt-28 rounded-md border-[#d9dedb] p-6 shadow-none">
              <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#edf3f1] font-mono text-xs text-[#31575d]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-serif text-2xl font-normal leading-tight text-[#343230]">{service.title}</h2>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[#67615d]">{service.description}</p>
                </div>
                <div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1f6d73]" weight="duotone" />
                        <span className="text-sm leading-6 text-[#67615d]">{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-md bg-[#f7f8f5] p-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#8b817a]">Outcome</p>
                    <p className="text-sm leading-6 text-[#615c58]">{service.outcome}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild className="h-12 rounded-full bg-[#193a42] px-7 text-white hover:bg-[#102b32]">
            <a href={MICROSOFT_BOOKINGS_URL} target="_blank" rel="noopener noreferrer">
              Book Assessment <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            onClick={() => navigate('/contact')}
            variant="outline"
            className="h-12 rounded-full border-[#ded8d2] bg-white px-7 text-[#282523] hover:bg-[#f7f4f1]"
          >
            Contact Dockio
          </Button>
        </div>
      </div>
    </div>
  )
}

export function IndustriesPage() {
  const industries = [
    'Financial services',
    'IT services',
    'Global capability centers',
    'Logistics',
    'Real estate',
    'Healthcare operations',
    'Manufacturing',
    'Professional services',
  ]

  return (
    <div className="min-h-screen bg-white pt-28">
      <div className={`${sectionClass} py-16`}>
        <h1 className="max-w-3xl font-serif text-4xl font-normal tracking-normal text-[#46423f] lg:text-5xl">
          Industries Dockio supports
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          We prioritize knowledge-heavy teams where better search, writing, analysis, and workflow execution can reduce cycle time.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <Card key={industry} className="rounded-md border-slate-200 p-6 shadow-none">
              <Briefcase className="mb-4 h-7 w-7 text-[#284d59]" />
              <h2 className="font-semibold text-slate-950">{industry}</h2>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export function CaseStudiesPage() {
  const examples = [
    ['Policy and procedure knowledge assistant', 'Grounded answers across controlled document libraries with evidence links and review history.'],
    ['Engineering change assistant', 'Codex-supported code review, tests, pull-request summaries, and release notes.'],
    ['Operations decision brief workflow', 'Source-ranked summaries and recommendations from tickets, spreadsheets, and approved reports.'],
    ['Cloud deployment readiness sprint', 'AWS/Azure architecture, security model, access design, and rollout plan before build.'],
  ]

  return (
    <div className="min-h-screen bg-white pt-28">
      <div className={`${sectionClass} py-16`}>
        <h1 className="max-w-3xl font-serif text-4xl font-normal tracking-normal text-[#46423f] lg:text-5xl">
          Representative engagement areas
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Example solution patterns Dockio can design and deploy. These are representative areas, not disclosed client case studies.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {examples.map(([title, body]) => (
            <Card key={title} className="rounded-md border-slate-200 p-7 shadow-none">
              <Badge variant="outline" className="mb-4 rounded-md">
                Example
              </Badge>
              <h2 className="text-xl font-semibold text-slate-950">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export function PartnerReadinessPage() {
  const standards = [
    'SOW and MSA alignment',
    'Architecture documentation',
    'Security questionnaire support',
    'Data handling model',
    'Delivery governance',
    'Operational reporting',
  ]

  return (
    <div className="min-h-screen bg-white pt-28">
      <div className={`${sectionClass} py-16`}>
        <h1 className="max-w-3xl font-serif text-4xl font-normal tracking-normal text-[#46423f] lg:text-5xl">
          Enterprise and vendor readiness
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Information for procurement teams, partner managers, and organizations evaluating Dockio for Codex integration delivery.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {standards.map((item) => (
            <Card key={item} className="rounded-md border-slate-200 p-6 shadow-none">
              <CheckCircle className="mb-4 h-7 w-7 text-[#284d59]" />
              <h2 className="font-semibold text-slate-950">{item}</h2>
            </Card>
          ))}
        </div>
        <div className="mt-10">
          <CapabilityDownload />
        </div>
      </div>
    </div>
  )
}

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-28">
      <div className={`${sectionClass} py-16`}>
        <h1 className="max-w-3xl font-serif text-4xl font-normal tracking-normal text-[#46423f] lg:text-5xl">
          About Dockio
        </h1>
        <div className="mt-8 max-w-4xl space-y-5 text-lg leading-8 text-slate-600">
          <p>
            Dockio Technosolutions Private Limited is an AI implementation firm focused on enterprise Codex, LLM, RAG,
            workflow automation, and cloud AI deployments.
          </p>
          <p>
            We help decision makers move from experimentation to governed production systems by connecting AI workflows
            to approved knowledge, cloud platforms, business systems, and operating controls.
          </p>
        </div>
      </div>
    </div>
  )
}
