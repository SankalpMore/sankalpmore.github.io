import { useState } from 'react'
import { useRouter } from '@/lib/router'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CapabilityDownload } from '@/components/CapabilityDownload'
import heroImage from '@/assets/dockio-knowledge-work-hero.png'
import { ArrowRight, Briefcase, CheckCircle, Minus, Plus, Users } from '@phosphor-icons/react'

const sectionClass = 'mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8'

export function HomePage() {
  const { navigate } = useRouter()
  const [openArea, setOpenArea] = useState('Finance')
  const [activeStep, setActiveStep] = useState('Find')

  const applicationAreas = [
    {
      title: 'Finance',
      body: 'Reconcile spreadsheet evidence, summarize policy exceptions, and prepare reviewable analysis for finance operations.',
    },
    {
      title: 'Marketing',
      body: 'Turn campaign notes, research, docs, and performance exports into briefs, launch plans, and reusable working assets.',
    },
    {
      title: 'Sales and GTM',
      body: 'Create account research, proposal drafts, follow-up notes, and CRM-ready summaries from approved internal sources.',
    },
    {
      title: 'Operations',
      body: 'Connect procedures, tickets, runbooks, and internal tools so repetitive knowledge work becomes trackable execution.',
    },
    {
      title: 'Strategy',
      body: 'Compare documents, synthesize market inputs, and produce decision memos that keep assumptions visible.',
    },
  ]

  const helpSteps = [
    {
      label: 'Find',
      title: 'Find the right workflows',
      body: 'We identify work that is frequent, painful, context-heavy, and reviewable. Those are the best starting points.',
    },
    {
      label: 'Set up',
      title: 'Set up the workspace',
      body: 'We connect Codex to repositories, documents, tools, and permissions without bypassing enterprise controls.',
    },
    {
      label: 'Run',
      title: 'Run hands-on labs',
      body: 'Teams practice delegation with real work: research, analysis, code changes, documents, and operational follow-through.',
    },
    {
      label: 'Build',
      title: 'Build reusable skills',
      body: 'Successful patterns become reusable workflows, prompts, checks, and operating playbooks for the team.',
    },
    {
      label: 'Measure',
      title: 'Measure adoption and impact',
      body: 'We track time saved, review quality, reuse, and workflow coverage so leaders know what is actually working.',
    },
  ]

  const currentStep = helpSteps.find((step) => step.label === activeStep) ?? helpSteps[0]

  return (
    <div className="min-h-screen bg-white text-[#282523]">
      <section id="codex-integration" className="pt-28 sm:pt-32">
        <div className={sectionClass}>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-5xl font-normal leading-[0.98] text-[#44413f] sm:text-6xl lg:text-7xl">
              Work faster with Codex
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#67615d] sm:text-lg">
              Dockio helps business teams move from AI chat to real work delegation: research, analysis,
              documents, code changes, and internal operations.
            </p>
          </div>

          <div className="mt-20 overflow-hidden rounded-[2rem] border border-[#eee9e5] bg-[#f7f5f2] shadow-[0_24px_70px_rgba(33,27,22,0.08)]">
            <img
              src={heroImage}
              alt="Enterprise knowledge work materials arranged for Codex delegation"
              className="h-[360px] w-full object-cover object-center sm:h-[500px] lg:h-[560px]"
            />
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className={`${sectionClass} grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start`}>
          <h2 className="max-w-xl font-serif text-4xl font-normal leading-tight text-[#46423f] sm:text-5xl">
            The next shift is from chat to delegation.
          </h2>
          <div className="space-y-6 text-base leading-8 text-[#615c58] sm:text-lg">
            <p>
              Codex becomes useful when it can take real context, follow a reviewable path, and return
              work that fits how a team already operates.
            </p>
            <p>
              Dockio helps enterprises choose the right workflows, connect the right sources, and build
              operating habits that turn AI from a side experiment into a dependable teammate.
            </p>
            <p>
              The goal is not more prompts. The goal is less handoff friction, clearer evidence, and
              work that can be reviewed, reused, and trusted.
            </p>
          </div>
        </div>
      </section>

      <section id="where-applies" className="border-y border-[#e9e4df] bg-[#fbfaf8] py-24 sm:py-28">
        <div className={`${sectionClass} grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start`}>
          <div>
            <div className="mb-8 flex items-center gap-3 text-sm text-[#9a2550]">
              <span className="h-2.5 w-2.5 rounded-sm bg-[#c11c59]" />
              Codex for knowledge work
            </div>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#46423f] sm:text-5xl">
              Where it applies
            </h2>
            <p className="mt-7 max-w-md text-base leading-7 text-[#67615d] sm:text-lg">
              Codex is not just an engineering tool. It becomes valuable anywhere knowledge has to be
              gathered, shaped, checked, and moved into action.
            </p>
            <Button
              onClick={() => navigate('/contact')}
              variant="outline"
              className="mt-10 h-12 rounded-full border-[#ded8d2] bg-white px-6 text-[#282523] shadow-sm hover:bg-[#f6f3ef]"
            >
              Contact us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            {applicationAreas.map((area) => {
              const isOpen = openArea === area.title

              return (
                <button
                  type="button"
                  key={area.title}
                  onClick={() => setOpenArea(isOpen ? '' : area.title)}
                  aria-expanded={isOpen}
                  className="w-full rounded-2xl border border-[#ded8d2] bg-white px-7 py-6 text-left shadow-[0_14px_40px_rgba(37,31,28,0.04)] transition hover:border-[#cfc6be]"
                >
                  <span className="flex items-center justify-between gap-6">
                    <span className="font-serif text-3xl leading-none text-[#46423f]">{area.title}</span>
                    {isOpen ? (
                      <Minus className="h-5 w-5 shrink-0 text-[#bc1d55]" />
                    ) : (
                      <Plus className="h-5 w-5 shrink-0 text-[#bc1d55]" />
                    )}
                  </span>
                  {isOpen ? (
                    <span className="mt-5 block max-w-xl text-base leading-7 text-[#67615d]">{area.body}</span>
                  ) : null}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className={`${sectionClass} grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start`}>
          <h2 className="font-serif text-4xl font-normal leading-tight text-[#46423f] sm:text-5xl">
            Better tools are not enough. Teams need new habits.
          </h2>
          <div className="grid gap-8 text-base leading-8 text-[#615c58] md:grid-cols-2">
            <p>
              The teams that benefit most do not ask Codex to improvise in isolation. They give it
              clear context, constraints, source material, and a definition of done.
            </p>
            <p>
              Dockio turns those habits into working systems: source maps, evaluation checks, approval
              paths, reusable skills, and operating rhythms leaders can measure.
            </p>
          </div>
        </div>
      </section>

      <section
        id="how-dockio-helps"
        className="bg-[radial-gradient(circle_at_50%_10%,#7390a0_0%,#284d59_46%,#152d34_100%)] py-24 text-white sm:py-28"
      >
        <div className={sectionClass}>
          <div className="text-center">
            <h2 className="font-serif text-5xl font-normal leading-none sm:text-6xl">How Dockio helps</h2>
            <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
              We help teams build the habit of delegation.
            </p>
          </div>

          <div className="mt-16 overflow-hidden rounded-[1.75rem] bg-white text-[#302b28] shadow-[0_24px_90px_rgba(11,35,42,0.24)]">
            <div className="grid lg:grid-cols-[1.35fr_repeat(4,0.55fr)]">
              <div className="min-h-[340px] p-8 sm:p-12 lg:p-16">
                <div className="mb-12 flex h-8 w-8 items-center justify-center text-[#46423f]">
                  <span className="relative block h-5 w-5">
                    <span className="absolute left-0 top-0 h-2.5 w-2.5 border-l-2 border-t-2 border-current" />
                    <span className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b-2 border-r-2 border-current" />
                  </span>
                </div>
                <h3 className="max-w-lg font-serif text-4xl font-normal leading-tight text-[#46423f] sm:text-5xl">
                  {currentStep.title}
                </h3>
                <p className="mt-8 max-w-xl text-lg leading-8 text-[#67615d]">{currentStep.body}</p>
                <p className="mt-12 font-serif text-2xl text-[#46423f]">{currentStep.label}</p>
              </div>

              {helpSteps.slice(1).map((step) => {
                const isActive = activeStep === step.label

                return (
                  <button
                    type="button"
                    key={step.label}
                    onClick={() => setActiveStep(step.label)}
                    aria-pressed={isActive}
                    className={`flex min-h-[180px] flex-col justify-between border-t border-[#d9e2e3] p-7 text-left transition lg:min-h-[340px] lg:border-l lg:border-t-0 ${
                      isActive ? 'bg-[#f2f7f7]' : 'bg-white hover:bg-[#f7faf9]'
                    }`}
                  >
                    <span className="relative block h-5 w-5 text-[#46423f]">
                      <span className="absolute left-0 top-0 h-2.5 w-2.5 border-l-2 border-t-2 border-current" />
                      <span className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b-2 border-r-2 border-current" />
                    </span>
                    <span className="font-serif text-2xl text-[#46423f]">{step.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 sm:py-28">
        <div className={`${sectionClass} grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end`}>
          <div>
            <h2 className="max-w-3xl font-serif text-5xl font-normal leading-none text-[#46423f] sm:text-6xl">
              Give Codex real work.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#67615d] sm:text-lg">
              Dockio helps teams pick the right starting points, wire them into enterprise systems,
              and build the review habits that make Codex useful beyond the pilot.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <Button
              onClick={() => navigate('/contact')}
              className="h-12 rounded-full bg-[#282523] px-7 text-white hover:bg-[#3a3632]"
            >
              Contact us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              onClick={() => navigate('/services')}
              variant="outline"
              className="h-12 rounded-full border-[#ded8d2] bg-white px-7 text-[#282523] hover:bg-[#f6f3ef]"
            >
              Explore services
            </Button>
          </div>
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
      id: 'openai-codex-consulting',
      title: 'OpenAI Codex consulting',
      description: 'Strategy, architecture, security review, and rollout planning for Codex adoption across knowledge work.',
      details: [
        'Workflow selection for research, analysis, documents, code, and internal operations',
        'Reference architecture, data boundaries, identity model, and review gates',
        'Risk assessment for source access, sensitive data, and approval paths',
        'Executive roadmap for pilot, production, and managed operations',
      ],
      ideal: 'Teams that want Codex to move from experimentation to reviewable business work',
    },
    {
      id: 'enterprise-knowledge-integration',
      title: 'Enterprise knowledge integration',
      description: 'Connect Codex to the repositories, documents, tickets, policies, and business systems teams already use.',
      details: [
        'Approved-source mapping across code, docs, tickets, decisions, and spreadsheets',
        'Retrieval and grounding patterns for source-linked answers and generated work',
        'Permission-aware access design with SSO and role-based boundaries',
        'Reusable source maps and context packs for repeat workflows',
      ],
      ideal: 'Knowledge-heavy teams that need source-grounded outputs instead of generic AI responses',
    },
    {
      id: 'aws-codex-deployment',
      title: 'AWS Codex deployment',
      description: 'Design, build, and operate Codex workflows in AWS with private connectivity and enterprise controls.',
      details: [
        'VPC, IAM, KMS, S3, logging, and observability architecture',
        'Repository and document workflow integration with controlled service access',
        'Deployment model for pilots, production rollout, and audit evidence',
        'Operational runbooks for quality, cost, latency, and exception review',
      ],
      ideal: 'AWS-first organizations that need Codex integrated with existing enterprise infrastructure',
    },
    {
      id: 'azure-codex-implementation',
      title: 'Azure Codex implementation',
      description: 'Integrate Codex workflows with Azure OpenAI patterns, Entra ID, AKS, storage, and Azure Monitor.',
      details: [
        'Azure identity and access model for secure knowledge-work delegation',
        'Document and repository integration with approved business sources',
        'AKS, storage, networking, Key Vault, and monitoring implementation patterns',
        'Governance documentation for security, procurement, and platform teams',
      ],
      ideal: 'Azure-centered enterprises adopting Codex with Microsoft cloud controls',
    },
    {
      id: 'managed-codex-operations',
      title: 'Managed Codex operations',
      description: 'Ongoing quality reviews, workflow updates, cost controls, and operational reporting after launch.',
      details: [
        'Evaluation loops for generated work, source quality, and review outcomes',
        'Prompt, skill, and workflow maintenance as teams learn what works',
        'Usage, cost, quality, and adoption reporting for decision makers',
        'Exception handling, incident review, and continuous improvement cadence',
      ],
      ideal: 'Teams that need Codex to keep improving after the first production release',
    },
    {
      id: 'workshops-assessments',
      title: 'Workshops and assessments',
      description: 'Hands-on sessions that help teams identify the right work, practice delegation, and define success metrics.',
      details: [
        'Use-case discovery by function, pain, frequency, and reviewability',
        'Live Codex delegation labs with real business and technical workflows',
        'Readiness review for data, access, operating model, and procurement needs',
        'Success metrics for time saved, reuse, review quality, and coverage',
      ],
      ideal: 'Business and technology leaders deciding where Codex should start',
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-28">
      <div className={`${sectionClass} py-16`}>
        <div className="mb-12 max-w-3xl">
          <h1 className="font-serif text-4xl font-normal tracking-normal text-[#46423f] lg:text-5xl">
            Codex integration services
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Dockio helps enterprise teams plan, deploy, and operate OpenAI Codex workflows with trustworthy knowledge grounding.
          </p>
        </div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <Card key={service.id} id={service.id} className="scroll-mt-28 p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" weight="duotone" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <p className="text-sm font-medium text-foreground mb-1">Ideal For:</p>
                    <p className="text-sm text-muted-foreground">{service.ideal}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <Button onClick={() => navigate('/contact')} className="mt-10 bg-[#282523] hover:bg-[#3a3632]">
          Discuss your integration
        </Button>
      </div>
    </div>
  )
}

export function TalentPage() {
  const roles = ['AI solution architect', 'LLM application engineer', 'Cloud AI engineer', 'RAG and data engineer']

  return (
    <div className="min-h-screen bg-white pt-28">
      <div className={`${sectionClass} py-16`}>
        <h1 className="max-w-3xl font-serif text-4xl font-normal tracking-normal text-[#46423f] lg:text-5xl">
          Enterprise AI delivery talent
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Dockio can support AI programs with specialized implementation capacity for Codex, LLM, RAG, and cloud deployment work.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {roles.map((role) => (
            <Card key={role} className="rounded-md border-slate-200 p-6 shadow-none">
              <Users className="mb-4 h-7 w-7 text-[#284d59]" />
              <h2 className="font-semibold text-slate-950">{role}</h2>
            </Card>
          ))}
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
