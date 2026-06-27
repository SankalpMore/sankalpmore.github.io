import { useState, type FormEvent } from 'react'
import { useRouter } from '@/lib/router'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Code, Users, Network, Shield, FileText, CheckCircle, ArrowRight, Briefcase, ChartLine, Rocket, Brain, Cube, Database, GitBranch, MagnifyingGlass, Robot } from '@phosphor-icons/react'
import { CapabilityDownload } from '@/components/CapabilityDownload'

export function HomePage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const scrollToLeadForm = () => {
    document.getElementById('book-assessment')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleLeadSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    // TODO: Connect this lead form to Dockio's email/CRM workflow.
    setFormSubmitted(true)
    window.setTimeout(() => {
      document.getElementById('calendar-booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const problemPoints = [
    'Use cases are not tied to a business metric, process owner, or decision workflow.',
    'Operational knowledge is split across email, shared drives, CRMs, ERPs, tickets, PDFs, and spreadsheets.',
    'Security teams need access control, logging, data boundaries, and review paths before rollout.',
    'Answers must be grounded in approved sources, not generic model responses.',
    'Business, IT, cloud, and data teams do not have one accountable deployment owner.',
    'After a prototype, teams still need monitoring, fixes, cost control, and user adoption support.',
  ]

  const approach = [
    'Select workflows where AI can reduce effort, response time, leakage, or rework.',
    'Run a readiness audit covering data sources, users, risk, integrations, and ROI assumptions.',
    'Build a controlled pilot with source grounding, guardrails, permissions, and human review.',
    'Integrate with existing tools such as CRM, helpdesk, document stores, cloud, and internal portals.',
    'Move to production with monitoring for answer quality, latency, usage, cost, and exceptions.',
    'Operate the system after launch with prompt/model updates, reporting, and managed support.',
  ]

  const services = [
    ['AI Readiness Audit', 'A focused review of use cases, data readiness, risk, integration effort, and ROI before committing to a build.'],
    ['Enterprise RAG / Knowledge Assistant', 'Search and answer systems grounded in approved policies, SOPs, contracts, manuals, reports, and internal documents.'],
    ['AI Agents & Workflow Automation', 'Controlled agents that trigger actions, prepare outputs, and route exceptions with human approval where needed.'],
    ['Sales / Support Copilot', 'Role-specific copilots for enquiry handling, qualification, response drafting, product knowledge, and sales enablement.'],
    ['Document Intelligence', 'Extraction, classification, comparison, summarization, and validation for invoices, contracts, KYC packs, and forms.'],
    ['Managed AI Operations', 'Ongoing monitoring, quality review, cost optimization, prompt/model changes, and production support after go-live.'],
    ['Cloud AI Deployment', 'Implementation using OpenAI, Azure AI Foundry, AWS Bedrock, vector databases, APIs, and enterprise cloud services.'],
  ]

  const roiExamples = [
    'Reduce manual report preparation for operations and leadership teams',
    'Make internal knowledge searchable across approved repositories',
    'Shorten support response time with drafted, source-backed responses',
    'Improve lead qualification and follow-up consistency for sales teams',
    'Reduce document processing effort in finance, legal, operations, and compliance',
    'Improve field and inside-sales productivity with guided next actions',
  ]

  const packages = [
    ['AI Readiness Audit', 'Starting ₹25,000', 'Use-case shortlist, risk review, ROI estimate, architecture direction, and deployment roadmap.'],
    ['Pilot AI Agent', 'Starting ₹1.5L', 'A limited-scope pilot connected to selected data, tools, users, and review workflows.'],
    ['Managed AI Retainer', 'Starting ₹75,000/month', 'Monitoring, quality improvements, prompt/model updates, cost control, and managed support.'],
  ]

  const industries = ['BFSI', 'GCCs', 'IT Services', 'Real Estate', 'Logistics & Warehousing', 'Ports & Infrastructure', 'Mid-market enterprises']
  const trustSignals = ['Deployment plan before build', 'Role-based access and data boundaries', 'Human approval for sensitive actions', 'Cloud-native architecture', 'Monitoring for quality, latency, cost, and usage', 'Founder-led delivery and review']
  const examples = ['BFSI policy search assistant', 'Real estate sales enquiry copilot', 'Logistics document automation', 'Internal HR/IT knowledge assistant', 'Invoice and contract intelligence workflow']
  const inputClass = 'mt-2 h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
  const selectClass = `${inputClass} text-foreground`

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden px-6 pb-20 pt-32 lg:px-8 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.04),transparent_45%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <Badge className="mb-6 bg-primary/10 px-4 py-2 text-primary hover:bg-primary/10">
              AI Deployment & Managed AI Services for Indian Enterprises
            </Badge>
            <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-7xl">
              We deploy secure AI agents and copilots for Indian enterprises.
            </h1>
            <p className="mb-6 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              From AI readiness audit to production deployment and managed support — Dockio helps teams turn GenAI ideas into working business systems.
            </p>
            <p className="mb-9 text-sm font-medium text-foreground/80">
              Implementation across OpenAI, Azure AI Foundry, AWS Bedrock, RAG, workflow automation, and enterprise cloud stacks.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button size="lg" onClick={scrollToLeadForm} className="h-12 px-7">
                Book AI Readiness Audit <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToLeadForm} className="h-12 px-7">
                Get ROI Estimate
              </Button>
              <Button size="lg" variant="secondary" onClick={scrollToLeadForm} className="h-12 px-7">
                Request Deployment Call
              </Button>
            </div>
          </div>

          <Card className="border-border/60 bg-white/85 p-6 shadow-2xl shadow-primary/10 backdrop-blur lg:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-muted-foreground">Deployment sequence</span>
              <Badge variant="outline">Production-first</Badge>
            </div>
            <div className="space-y-4">
              {['Readiness audit', 'Secure pilot', 'Business integration', 'Production release', 'Managed support'].map((step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-2xl border border-border/60 bg-muted/20 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{step}</p>
                    <p className="text-sm text-muted-foreground">Clear scope, accountable owner, measurable acceptance criteria.</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section id="use-cases" className="border-y border-border bg-card px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight lg:text-4xl">
              Why enterprise AI initiatives stall before production
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Many teams have explored ChatGPT, Copilot, or internal prototypes. The harder step is deploying a secure workflow that business users can rely on every day.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {problemPoints.map((item) => (
              <Card key={item} className="p-5">
                <CheckCircle className="mb-3 h-5 w-5 text-primary" />
                <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight lg:text-4xl">Dockio’s delivery approach</h2>
            <p className="text-lg text-muted-foreground">
              Dockio works backwards from a business workflow, then designs the AI, data, security, and support model needed for production use.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {approach.map((item, index) => (
              <Card key={item} className="p-6">
                <Badge className="mb-4">0{index + 1}</Badge>
                <p className="font-medium leading-relaxed text-foreground">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-border bg-muted/20 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight lg:text-4xl">Services built around deployment, not demos</h2>
            <p className="text-lg text-muted-foreground">
              Practical implementation support for teams that need secure AI systems connected to real data, tools, and operating processes.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, description]) => (
              <Card key={title} className="p-7 transition hover:-translate-y-1 hover:shadow-xl">
                <Robot className="mb-5 h-9 w-9 text-primary" weight="duotone" />
                <h3 className="mb-3 text-xl font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight lg:text-4xl">Built for measurable ROI</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The goal is not another chatbot. The goal is a workflow that reduces manual effort, improves turnaround time, or increases team throughput.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {roiExamples.map((item) => (
              <Card key={item} className="p-5">
                <ChartLine className="mb-3 h-6 w-6 text-primary" />
                <p className="font-medium text-foreground">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="border-y border-border bg-card px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight lg:text-4xl">Simple starting packages</h2>
            <p className="text-lg text-muted-foreground">Start with a scoped assessment or pilot before committing to a larger production rollout.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {packages.map(([name, price, description]) => (
              <Card key={name} className="p-7">
                <h3 className="mb-3 text-xl font-semibold">{name}</h3>
                <p className="mb-4 text-3xl font-semibold text-primary">{price}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
              </Card>
            ))}
          </div>
          <p className="mt-6 max-w-4xl text-sm text-muted-foreground">
            Final pricing depends on scope, integrations, data readiness, and security requirements. Cloud, model, and third-party API costs are separate unless explicitly included.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-3xl font-semibold tracking-tight lg:text-4xl">Industries Dockio is built to support</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <Card key={industry} className="p-6">
                <Briefcase className="mb-4 h-7 w-7 text-primary" />
                <h3 className="font-semibold">{industry}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/20 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight lg:text-4xl">Trust signals that matter before go-live</h2>
            <p className="text-lg text-muted-foreground">
              Enterprise buyers need clear ownership, secure architecture, review workflows, and monitoring before AI becomes part of daily operations.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {trustSignals.map((signal) => (
              <Card key={signal} className="p-5">
                <Shield className="mb-3 h-6 w-6 text-primary" />
                <p className="font-medium">{signal}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="founder-experience" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Card className="p-8 lg:p-10">
            <Badge className="mb-5">Founder-led delivery</Badge>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight lg:text-4xl">Practical AI implementation leadership</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Sankalp More, Founder of Dockio, has experience across Generative AI, enterprise AI deployment, cloud AI services, LLM applications, and automation workflows. Dockio is built to help businesses move from AI experimentation to production-grade implementation.
            </p>
          </Card>
        </div>
      </section>

      <section className="border-y border-border bg-card px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight lg:text-4xl">Example deployments</h2>
            <p className="text-lg text-muted-foreground">
              Possible solutions Dockio can design and deploy. These are example solutions, not completed client case studies.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {examples.map((example) => (
              <Card key={example} className="p-5">
                <FileText className="mb-4 h-7 w-7 text-primary" />
                <h3 className="font-semibold leading-snug">{example}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="book-assessment" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight lg:text-4xl">Have an AI idea but no production system yet?</h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Share the workflow you want to improve. Dockio will review feasibility, readiness, security considerations, and potential ROI before recommending a next step.
            </p>
          </div>
          <Card className="p-6 shadow-xl shadow-primary/5 lg:p-8">
            <form onSubmit={handleLeadSubmit} className="grid gap-5 md:grid-cols-2">
              {[
                ['name', 'Name', 'text'],
                ['company', 'Company', 'text'],
                ['email', 'Email', 'email'],
                ['phone', 'Phone', 'tel'],
              ].map(([name, label, type]) => (
                <label key={name} className="text-sm font-medium text-foreground">
                  {label}
                  <input name={name} type={type} required className={inputClass} />
                </label>
              ))}
              <label className="text-sm font-medium text-foreground md:col-span-2">
                Use Case
                <textarea
                  name="useCase"
                  required
                  rows={4}
                  placeholder="Describe the process, data source, team, and expected business outcome."
                  className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
              </label>
              <label className="text-sm font-medium text-foreground">
                Budget Range
                <select required name="budget" className={selectClass}>
                  <option value="">Select</option>
                  <option>₹25,000–₹1.5L</option>
                  <option>₹1.5L–₹5L</option>
                  <option>₹5L–₹15L</option>
                  <option>₹15L+</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label className="text-sm font-medium text-foreground">
                What do you need first?
                <select required name="intent" className={selectClass}>
                  <option value="">Select</option>
                  <option>Book AI Readiness Audit</option>
                  <option>Get ROI Estimate</option>
                  <option>Request Deployment Call</option>
                </select>
              </label>
              <div className="flex flex-col gap-3 md:col-span-2 sm:flex-row">
                <Button type="submit" size="lg">Book AI Readiness Audit</Button>
                <Button type="submit" size="lg" variant="outline">Request ROI Estimate</Button>
              </div>
            </form>
          </Card>
          {formSubmitted && (
            <Card id="calendar-booking" className="mt-8 bg-primary p-8 text-primary-foreground">
              <h3 className="mb-3 text-2xl font-semibold">Thank you — your request has been captured.</h3>
              <p className="text-primary-foreground/80">
                Dockio will review the use case details and follow up with a suitable readiness audit, ROI estimate, or deployment discussion.
              </p>
            </Card>
          )}
        </div>
      </section>
    </div>
  )
}

export function ServicesPage() {
  const { navigate } = useRouter()

  const services = [
    {
      id: 'ai-deployment-support',
      title: 'AI Deployment Support',
      description: 'Embed vetted AI engineers, ML specialists, and solution architects directly into your team for immediate impact.',
      details: [
        'Pre-screened AI/ML engineers with hands-on experience',
        'Fast onboarding with minimal ramp-up time',
        'Flexible engagement duration based on project needs',
        'Senior to mid-level talent across AI specializations',
      ],
      ideal: 'Organizations needing to scale AI teams quickly without lengthy hiring cycles',
    },
    {
      id: 'enterprise-ai-consulting',
      title: 'Enterprise AI Consulting',
      description: 'Strategic guidance for AI adoption, from feasibility assessment to production readiness.',
      details: [
        'AI readiness assessment and opportunity identification',
        'Technology stack recommendation and architecture design',
        'Business case development and ROI modeling',
        'Implementation roadmap and governance framework',
      ],
      ideal: 'Leadership teams planning enterprise-wide AI transformation initiatives',
    },
    {
      id: 'genai-application-development',
      title: 'GenAI Application Development',
      description: 'Build production-grade LLM applications tailored to your business workflows.',
      details: [
        'Custom LLM application development using GPT-4, Claude, Llama',
        'Prompt engineering and optimization for accuracy',
        'Integration with existing enterprise systems',
        'User interface development and deployment',
      ],
      ideal: 'Teams ready to deploy GenAI solutions for specific business use cases',
    },
    {
      id: 'ai-agents-workflow-automation',
      title: 'AI Agents & Workflow Automation',
      description: 'Intelligent automation using AI agents, orchestration frameworks, and API integrations.',
      details: [
        'Multi-agent system design and implementation',
        'Tool calling and external API integration',
        'Workflow orchestration using LangGraph, CrewAI',
        'Error handling, monitoring, and reliability engineering',
      ],
      ideal: 'Organizations automating complex processes requiring decision-making logic',
    },
    {
      id: 'rag-enterprise-knowledge-systems',
      title: 'RAG & Enterprise Knowledge Systems',
      description: 'Build internal search and retrieval systems powered by your proprietary data.',
      details: [
        'Document ingestion pipelines and chunking strategies',
        'Vector database selection and optimization',
        'Retrieval quality tuning and relevance testing',
        'Integration with SharePoint, Confluence, internal docs',
      ],
      ideal: 'Enterprises struggling with knowledge silos and information discovery',
    },
    {
      id: 'ai-solution-architecture',
      title: 'AI Solution Architecture',
      description: 'Design scalable, secure, and maintainable AI system architectures.',
      details: [
        'End-to-end AI system architecture design',
        'Cloud infrastructure planning (AWS, Azure, GCP)',
        'Data pipeline and model serving architecture',
        'Security, compliance, and governance considerations',
      ],
      ideal: 'Technical leaders planning large-scale AI platform buildouts',
    },
  ]

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            AI Implementation Services
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive AI capabilities designed for enterprise delivery expectations
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

        <div className="mt-16 text-center">
          <Button size="lg" onClick={() => navigate('/contact')} className="bg-primary hover:bg-primary/90">
            Discuss Your AI Initiative
          </Button>
        </div>
      </div>
    </div>
  )
}

export function TalentPage() {
  const { navigate } = useRouter()

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Talent & Engagement Models
          </h1>
          <p className="text-lg text-muted-foreground">
            Flexible structures to support how enterprise teams work
          </p>
        </div>

        <Tabs defaultValue="dedicated" className="mb-16">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
            <TabsTrigger value="dedicated">Dedicated Team</TabsTrigger>
            <TabsTrigger value="staff-aug">Staff Aug</TabsTrigger>
            <TabsTrigger value="project">Project-Based</TabsTrigger>
            <TabsTrigger value="fractional">Fractional</TabsTrigger>
            <TabsTrigger value="pod">Pod Delivery</TabsTrigger>
          </TabsList>

          <TabsContent value="dedicated" className="space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Dedicated AI Talent</h2>
              <p className="text-muted-foreground mb-6">
                Full-time AI professionals embedded with your team for extended engagements, typically 6-12+ months.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-medium text-foreground mb-3">How It Works</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Engineer joins your team full-time</li>
                    <li>• Integrates with your tools, processes, workflows</li>
                    <li>• Reports to your tech leadership</li>
                    <li>• Monthly billing with flexible notice period</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-3">Best For</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Long-term AI platform development</li>
                    <li>• Building internal AI capabilities</li>
                    <li>• Scaling existing AI teams</li>
                    <li>• Ongoing LLM application maintenance</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="staff-aug" className="space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Deployment Support</h2>
              <p className="text-muted-foreground mb-6">
                Flexible AI talent to supplement your existing team during high-demand periods or specific project phases.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-medium text-foreground mb-3">How It Works</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Engineers join for defined duration (3-6 months typical)</li>
                    <li>• Work alongside your internal team</li>
                    <li>• Participate in your sprints and ceremonies</li>
                    <li>• Flexible scaling up or down as needed</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-3">Best For</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Temporary capacity needs</li>
                    <li>• Seasonal AI project surges</li>
                    <li>• Specialized skills for specific phases</li>
                    <li>• Bridge deployment while hiring</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="project" className="space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Project-Based Delivery</h2>
              <p className="text-muted-foreground mb-6">
                Fixed-scope AI projects with defined deliverables, milestones, and outcomes.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-medium text-foreground mb-3">How It Works</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Clearly defined scope and deliverables</li>
                    <li>• Milestone-based execution and payment</li>
                    <li>• We manage team composition and delivery</li>
                    <li>• Regular status reporting and demos</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-3">Best For</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Specific AI use case implementation</li>
                    <li>• POC to production transitions</li>
                    <li>• Well-defined technical requirements</li>
                    <li>• Organizations preferring outcome-based contracts</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="fractional" className="space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Fractional AI Leadership</h2>
              <p className="text-muted-foreground mb-6">
                Part-time AI architects, consultants, and advisors providing strategic guidance and oversight.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-medium text-foreground mb-3">How It Works</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 10-20 hours per week engagement</li>
                    <li>• Strategic planning and architecture guidance</li>
                    <li>• Review sessions with technical teams</li>
                    <li>• On-demand advisory and decision support</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-3">Best For</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Early-stage AI program setup</li>
                    <li>• Organizations without senior AI leadership</li>
                    <li>• Architecture review and validation</li>
                    <li>• Strategic AI roadmapping</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="pod" className="space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Pod-Based Delivery</h2>
              <p className="text-muted-foreground mb-6">
                Complete cross-functional AI teams (engineers, architects, product) for complex enterprise initiatives.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-medium text-foreground mb-3">How It Works</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Self-contained team with all needed skills</li>
                    <li>• Includes engineering, architecture, product roles</li>
                    <li>• Works as cohesive unit on your initiative</li>
                    <li>• Managed internally with your oversight</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-3">Best For</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Large-scale AI platform development</li>
                    <li>• Multiple concurrent AI workstreams</li>
                    <li>• Organizations needing full team coverage</li>
                    <li>• Complex enterprise AI transformations</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="p-8 bg-gradient-to-br from-primary/5 to-transparent border-2">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Not Sure Which Model Fits?</h2>
          <p className="text-muted-foreground mb-6">
            We can help you determine the right engagement structure based on your project scope, timeline, budget, and organizational constraints.
          </p>
          <Button onClick={() => navigate('/contact')} className="bg-primary hover:bg-primary/90">
            Schedule a Consultation
          </Button>
        </Card>
      </div>
    </div>
  )
}

export function IndustriesPage() {
  const industries = [
    {
      name: 'Retail & E-commerce',
      challenges: ['Product discovery and recommendation', 'Customer service automation', 'Inventory optimization', 'Personalization at scale'],
      applications: ['AI-powered search and recommendations', 'Chatbots and virtual shopping assistants', 'Demand forecasting', 'Dynamic pricing'],
    },
    {
      name: 'Financial Services',
      challenges: ['Regulatory compliance burden', 'Fraud detection', 'Risk assessment', 'Document processing'],
      applications: ['Automated compliance monitoring', 'Anomaly detection systems', 'Credit risk modeling', 'Intelligent document extraction'],
    },
    {
      name: 'Healthcare & Pharma',
      challenges: ['Clinical documentation', 'Patient data analysis', 'Drug discovery acceleration', 'Administrative overhead'],
      applications: ['Clinical note generation', 'Medical image analysis', 'Literature review automation', 'Patient triage systems'],
    },
    {
      name: 'Logistics & Supply Chain',
      challenges: ['Route optimization', 'Demand forecasting', 'Warehouse automation', 'Documentation processing'],
      applications: ['AI-powered route planning', 'Predictive inventory management', 'Automated shipment tracking', 'BOL and invoice processing'],
    },
    {
      name: 'Manufacturing',
      challenges: ['Quality control', 'Predictive maintenance', 'Production optimization', 'Supply chain visibility'],
      applications: ['Computer vision QA systems', 'Equipment failure prediction', 'Process optimization', 'Supplier intelligence'],
    },
    {
      name: 'Professional Services',
      challenges: ['Knowledge management', 'Proposal generation', 'Client research', 'Resource allocation'],
      applications: ['Internal knowledge search', 'RFP response automation', 'Market intelligence systems', 'Project deployment optimization'],
    },
  ]

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Cross-Industry AI Delivery
          </h1>
          <p className="text-lg text-muted-foreground">
            AI capability that travels across sectors while adapting to specific business contexts
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">{industry.name}</h2>
              
              <div className="mb-6">
                <h3 className="font-medium text-foreground mb-3">Common AI Challenges</h3>
                <ul className="space-y-2">
                  {industry.challenges.map((challenge, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-foreground mb-3">Example AI Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {industry.applications.map((app, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {app}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 mt-12 bg-muted/30 border-none">
          <h2 className="text-xl font-semibold text-foreground mb-4">Our Cross-Industry Approach</h2>
          <p className="text-muted-foreground mb-4">
            While the specific use cases vary by industry, the underlying AI capabilities—LLM applications, RAG systems, workflow automation, and ML models—are transferable. What changes is the business context, compliance requirements, and integration patterns.
          </p>
          <p className="text-muted-foreground">
            We bring technical AI expertise that adapts to your sector's unique requirements without needing to learn your industry from scratch.
          </p>
        </Card>
      </div>
    </div>
  )
}

export function CaseStudiesPage() {
  const { navigate } = useRouter()

  const engagements = [
    {
      category: 'GenAI Implementation',
      title: 'Customer Support Automation',
      challenge: 'Enterprise needed to scale customer support without proportional headcount growth while maintaining response quality.',
      approach: 'Designed and deployed RAG-powered support agent with knowledge base integration, ticket classification, and intelligent escalation routing.',
      deliveryScope: '3-month implementation with 2 senior AI engineers. Included data pipeline development, prompt engineering, evaluation framework, and production deployment.',
      impact: 'Enabled 24/7 first-line support with consistent quality. Reduced average response time and freed human agents for complex issues.',
    },
    {
      category: 'Deployment Support',
      title: 'AI Platform Team Scaling',
      challenge: 'Fast-growing AI platform team needed senior engineers during critical product launch period but couldn\'t wait for traditional hiring cycles.',
      approach: 'Embedded 3 senior AI engineers with LLM application and vector database expertise to work alongside internal team.',
      deliveryScope: '6-month engagement. Engineers participated in sprints, code reviews, and technical design sessions. Full integration with internal workflows.',
      impact: 'Met aggressive launch timeline without compromising engineering quality. Internal team gained knowledge transfer on modern AI architecture patterns.',
    },
    {
      category: 'Enterprise Search',
      title: 'Internal Knowledge System',
      challenge: 'Organization struggled with knowledge silos across Confluence, SharePoint, Google Drive, and internal documentation systems.',
      approach: 'Built enterprise RAG system with document ingestion pipelines, semantic search, and user-friendly query interface.',
      deliveryScope: 'Project-based delivery over 4 months. Included architecture design, data pipeline development, retrieval tuning, and deployment infrastructure.',
      impact: 'Improved information discovery across the organization. Reduced time spent searching for context and institutional knowledge.',
    },
    {
      category: 'AI Architecture',
      title: 'LLM Application Architecture',
      challenge: 'Technical leadership needed to design scalable architecture for multi-tenant LLM application but lacked in-house AI architecture expertise.',
      approach: 'Provided fractional AI architect to design system architecture, select technology stack, and establish engineering patterns.',
      deliveryScope: 'Part-time engagement (15 hours/week) over 3 months. Delivered architecture documentation, technology recommendations, and engineering guidelines.',
      impact: 'Gave engineering team clear technical direction. Avoided common architectural pitfalls and established foundation for scaling.',
    },
    {
      category: 'Workflow Automation',
      title: 'Document Processing Pipeline',
      challenge: 'Manual processing of supplier invoices and contracts created bottlenecks and quality issues in procurement workflow.',
      approach: 'Developed AI-powered document processing system using LLMs for extraction, classification, and validation with human-in-the-loop review.',
      deliveryScope: '5-month project with cross-functional pod. Included OCR integration, LLM pipeline development, validation UI, and ERP integration.',
      impact: 'Accelerated document processing cycle. Improved accuracy of data extraction and enabled procurement team to focus on strategic vendor relationships.',
    },
    {
      category: 'AI Product Engineering',
      title: 'GenAI Feature Development',
      challenge: 'SaaS company wanted to add AI capabilities to existing product but internal team had no LLM development experience.',
      approach: 'Embedded AI engineers to build GenAI features while training internal team on LLM application development practices.',
      deliveryScope: '8-month engagement with 2 AI engineers and 1 fractional architect. Delivered production features and conducted knowledge transfer workshops.',
      impact: 'Successfully launched AI features to customers. Internal team capable of maintaining and extending AI capabilities independently.',
    },
  ]

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Representative Engagement Areas
          </h1>
          <p className="text-lg text-muted-foreground">
            Examples of the AI challenges we help enterprise teams solve. Details modified to protect client confidentiality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {engagements.map((engagement, index) => (
            <Card key={index} className="p-8">
              <Badge variant="outline" className="mb-4">{engagement.category}</Badge>
              <h2 className="text-xl font-semibold text-foreground mb-6">{engagement.title}</h2>
              
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-foreground mb-2">Challenge</p>
                  <p className="text-muted-foreground">{engagement.challenge}</p>
                </div>
                
                <div>
                  <p className="font-medium text-foreground mb-2">Approach</p>
                  <p className="text-muted-foreground">{engagement.approach}</p>
                </div>
                
                <div>
                  <p className="font-medium text-foreground mb-2">Delivery Scope</p>
                  <p className="text-muted-foreground">{engagement.deliveryScope}</p>
                </div>
                
                <div>
                  <p className="font-medium text-foreground mb-2">Business Impact</p>
                  <p className="text-muted-foreground">{engagement.impact}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 mt-12 bg-gradient-to-br from-primary/5 to-transparent border-2">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Ready to Discuss Your AI Challenge?</h2>
          <p className="text-muted-foreground mb-6">
            Every organization's AI journey is unique. Let's discuss how our implementation capabilities can support your specific needs.
          </p>
          <Button onClick={() => navigate('/contact')} className="bg-primary hover:bg-primary/90">
            Start a Conversation
          </Button>
        </Card>
      </div>
    </div>
  )
}

export function PartnerReadinessPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Enterprise & Vendor Readiness
          </h1>
          <p className="text-lg text-muted-foreground">
            Information for procurement teams, partner managers, and organizations evaluating Dockio for vendor onboarding, subcontracting, or partnership discussions
          </p>
        </div>

        <div className="space-y-8">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Company Overview</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="font-medium text-foreground mb-2">Core Business</p>
                <p className="text-muted-foreground">Enterprise AI deployment and managed AI services for serious AI programs</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-2">Specialization</p>
                <p className="text-muted-foreground">GenAI applications, LLM development, RAG systems, AI agents, workflow automation</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-2">Delivery Models</p>
                <p className="text-muted-foreground">Staff augmentation, project-based delivery, fractional leadership, dedicated teams</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-2">Target Clients</p>
                <p className="text-muted-foreground">Enterprise organizations, consulting firms, system integrators, cloud/platform partners</p>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Engagement Processes</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">SOW & Contract Alignment</h3>
                <p className="text-sm text-muted-foreground">
                  We support standard enterprise procurement processes including MSAs, SOWs, and NDA-based discussions. Comfortable working within client procurement systems and contracting requirements.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-3">Project Onboarding Flow</h3>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li>1. Discovery call to understand requirements and assess fit</li>
                  <li>2. Detailed scoping discussion with technical stakeholders</li>
                  <li>3. Proposal with recommended approach, team composition, timeline</li>
                  <li>4. Contract negotiation and legal/procurement alignment</li>
                  <li>5. Team onboarding and kickoff</li>
                </ol>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Delivery Governance</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Milestone-based delivery with clear acceptance criteria</li>
                  <li>• Regular status reporting (weekly/biweekly based on preference)</li>
                  <li>• Structured communication channels and escalation paths</li>
                  <li>• Documentation and knowledge transfer as part of delivery</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Operational Standards</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Communication</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Professional, timely responses</li>
                  <li>• Adapt to client tools (Slack, Teams, etc.)</li>
                  <li>• Clear status updates and blocker escalation</li>
                  <li>• Executive-ready reporting when needed</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-3">Documentation</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Technical documentation as deliverable</li>
                  <li>• Architecture decision records</li>
                  <li>• Handover documentation for transitions</li>
                  <li>• Code documentation and testing</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Security & Compliance</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• NDA execution as standard practice</li>
                  <li>• Secure handling of project information</li>
                  <li>• Compliance with client data policies</li>
                  <li>• Detailed compliance info shared upon request</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Quality Assurance</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Code review processes</li>
                  <li>• Testing as part of delivery</li>
                  <li>• Quality checks before handover</li>
                  <li>• Post-deployment support period</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Partnership Opportunities</h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium text-foreground mb-2">Subcontracting for System Integrators</p>
                <p className="text-muted-foreground">
                  Provide AI engineering capacity for your client engagements. We can work as extension of your delivery team under your client relationship.
                </p>
              </div>
              
              <div>
                <p className="font-medium text-foreground mb-2">Cloud/Platform Partner Ecosystem</p>
                <p className="text-muted-foreground">
                  Support your customers with AI implementation services. We bring AI expertise while you maintain platform/cloud relationship.
                </p>
              </div>

              <div>
                <p className="font-medium text-foreground mb-2">Consulting Firm Collaboration</p>
                <p className="text-muted-foreground">
                  Augment your consulting teams with AI engineering and implementation capability for client AI programs.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-transparent border-2">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Additional Information</h2>
            <p className="text-muted-foreground mb-6">
              For detailed compliance documentation, insurance certificates, security questionnaires, or capability presentations, please contact us. We're equipped to support standard enterprise vendor onboarding processes.
            </p>
            <Button className="bg-primary hover:bg-primary/90">
              <a href="mailto:partnerships@dockio.in">Contact Partnerships Team</a>
            </Button>
          </Card>

          <div className="mt-8">
            <CapabilityDownload />
          </div>
        </div>
      </div>
    </div>
  )
}

export function AboutPage() {
  const { navigate } = useRouter()

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            About Dockio
          </h1>
          <p className="text-lg text-muted-foreground">
            Enterprise AI implementation partner built for serious programs
          </p>
        </div>

        <div className="space-y-8">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dockio Technosolutions Private Limited is an AI-first implementation firm focused on helping enterprise organizations execute AI initiatives with quality and speed. We provide both the AI talent and delivery capability that enterprise teams need to move from strategy to production.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We're not a generic deployment vendor or broad IT services firm. We specialize exclusively in modern AI implementation—GenAI applications, LLM development, RAG systems, AI agents, and workflow automation. This focus allows us to maintain deep technical expertise and deliver at the execution standard enterprise programs require.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" weight="duotone" />
                  Execution-Focused
                </h3>
                <p className="text-sm text-muted-foreground">
                  We focus on delivering working solutions, not presentations. Our measure of success is production deployments and business outcomes, not billable hours.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Code className="w-5 h-5 text-accent" weight="duotone" />
                  Technical Depth
                </h3>
                <p className="text-sm text-muted-foreground">
                  Deep expertise in modern AI stacks—LangChain, LlamaIndex, vector databases, observability tools, and cloud AI services. We stay current as the technology evolves.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" weight="duotone" />
                  Enterprise Orientation
                </h3>
                <p className="text-sm text-muted-foreground">
                  We understand enterprise constraints—procurement processes, security requirements, documentation standards, and stakeholder management. Built for how enterprises work.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Network className="w-5 h-5 text-accent" weight="duotone" />
                  Cross-Industry Capability
                </h3>
                <p className="text-sm text-muted-foreground">
                  AI expertise that adapts to different business contexts. We bring technical capability that works across retail, finance, healthcare, logistics, and professional services.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Why Organizations Work With Us</h2>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" weight="duotone" />
                <div>
                  <p className="font-medium text-foreground mb-1">Fast Access to Quality AI Talent</p>
                  <p className="text-muted-foreground">Pre-vetted engineers and architects available for immediate deployment without lengthy hiring cycles.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" weight="duotone" />
                <div>
                  <p className="font-medium text-foreground mb-1">Outcome-Driven Implementation</p>
                  <p className="text-muted-foreground">Focus on measurable results and production deployments, not theoretical consulting or endless discovery phases.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" weight="duotone" />
                <div>
                  <p className="font-medium text-foreground mb-1">Flexible Engagement Structures</p>
                  <p className="text-muted-foreground">Support for AI deployment support, project delivery, fractional leadership—whatever fits your organizational structure.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" weight="duotone" />
                <div>
                  <p className="font-medium text-foreground mb-1">Enterprise-Ready Processes</p>
                  <p className="text-muted-foreground">Professional communication, documentation discipline, and delivery governance expected by enterprise teams.</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-transparent border-2">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Work With Us</h2>
            <p className="text-muted-foreground mb-6">
              Whether you need AI AI deployment support, project delivery, or partnership discussions—we're built to support enterprise AI programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => navigate('/contact')} className="bg-primary hover:bg-primary/90">
                Start a Conversation
              </Button>
              <Button variant="outline" onClick={() => navigate('/services')}>
                Explore Capabilities
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
