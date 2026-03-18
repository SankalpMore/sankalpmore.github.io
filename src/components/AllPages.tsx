import { useRouter } from '@/lib/router'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Code, Users, Network, Shield, FileText, CheckCircle, ArrowRight, Briefcase, ChartLine, Rocket, Brain, Cube, Database, GitBranch, MagnifyingGlass, Robot } from '@phosphor-icons/react'
import { CapabilityDownload } from '@/components/CapabilityDownload'

export function HomePage() {
  const { navigate } = useRouter()

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent pointer-events-none" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-in fade-in duration-700">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-foreground">Enterprise AI Implementation Partner</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-semibold text-foreground leading-[1.1] tracking-tight mb-6 animate-in slide-in-from-bottom-4 duration-700">
              Scale AI Initiatives with <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-accent to-primary">Premium Engineering Talent</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl animate-in fade-in duration-700 delay-100">
              Dockio delivers specialized AI engineering teams and technical leadership for enterprise AI programs. Built for the quality standards procurement teams expect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-4 duration-700 delay-200">
              <Button
                size="lg"
                onClick={() => navigate('/contact')}
                className="bg-primary hover:bg-primary/90 text-base px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              >
                Book a Discovery Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/services')}
                className="text-base px-8 hover:bg-muted/80 transition-all duration-300"
              >
                Explore Capabilities
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-transparent border-y border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
              Built for Enterprise AI Ecosystems
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl hover:bg-background/50 transition-all duration-300 group">
              <Code weight="duotone" className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">LLM Applications</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl hover:bg-background/50 transition-all duration-300 group">
              <Network weight="duotone" className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">AI Architecture</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl hover:bg-background/50 transition-all duration-300 group">
              <Robot weight="duotone" className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">Agentic Systems</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl hover:bg-background/50 transition-all duration-300 group">
              <Database weight="duotone" className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">RAG Systems</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-4">
              What We Deliver
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive AI implementation capabilities for enterprise programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
              <Users className="w-10 h-10 text-accent mb-4" weight="duotone" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                AI Staff Augmentation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Vetted AI engineers, solution architects, and consultants ready to embed with your teams. Fast access to quality talent for critical initiatives.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
              <Briefcase className="w-10 h-10 text-accent mb-4" weight="duotone" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Enterprise AI Consulting
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Strategic AI roadmapping, feasibility assessment, and implementation planning for large-scale enterprise transformations.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
              <Brain className="w-10 h-10 text-accent mb-4" weight="duotone" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                GenAI & Agentic AI Delivery
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                LLM application development, AI agent orchestration, and custom GenAI solutions for high-value business workflows.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
              <MagnifyingGlass className="w-10 h-10 text-accent mb-4" weight="duotone" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                RAG & Knowledge Systems
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Enterprise search, retrieval-augmented generation, and knowledge management systems built on your proprietary data.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
              <GitBranch className="w-10 h-10 text-accent mb-4" weight="duotone" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                AI Workflow Automation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Intelligent automation of complex business processes using AI agents, APIs, and integration orchestration.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
              <Cube className="w-10 h-10 text-accent mb-4" weight="duotone" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                LLM Product Engineering
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Full-stack development of production-grade LLM applications with evaluation, observability, and deployment infrastructure.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-4">
              Why Premium Organizations Choose Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Built for enterprise expectations and serious AI programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-accent" weight="duotone" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Fast Access to Quality AI Talent
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Pre-vetted engineers and architects available for immediate deployment. No lengthy hiring cycles or quality compromises.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <ChartLine className="w-6 h-6 text-accent" weight="duotone" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Outcome-Driven Implementation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Focus on delivering measurable business results, not billable hours. Clear scoping, milestone tracking, and ownership mindset.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Code className="w-6 h-6 text-accent" weight="duotone" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Strong Technical Depth
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deep expertise in modern AI stacks: LangChain, LlamaIndex, vector databases, observability tools, and cloud AI services.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Network className="w-6 h-6 text-accent" weight="duotone" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Cross-Industry AI Delivery
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Experience delivering AI solutions across retail, finance, healthcare, logistics, and professional services contexts.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" weight="duotone" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Flexible Engagement Models
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Support for embedded teams, project-based delivery, fractional leadership, and pod-based execution—whatever fits your structure.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent" weight="duotone" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Enterprise-Grade Execution
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Professional communication, documentation discipline, SOW alignment, and structured delivery governance expected by enterprise teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers for enterprise buyers evaluating AI implementation partners
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-left hover:no-underline">
                What's the typical engagement timeline?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                For staff augmentation, we can provide vetted engineers within 1-2 weeks. Project-based work requires a discovery phase (1-2 weeks) followed by implementation sprints. Most enterprise projects range from 3-6 months, though we support both shorter pilots and longer platform buildouts.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-left hover:no-underline">
                How do you ensure AI talent quality?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our screening process includes technical depth interviews, system design assessments, hands-on coding evaluations with modern AI stacks (LangChain, LlamaIndex, vector databases), and communication standards verification. We don't present candidates who can't demonstrate production AI experience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-left hover:no-underline">
                Can you work within our existing procurement processes?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. We support standard enterprise procurement including MSAs, SOWs, NDA execution, milestone-based contracts, and integration with vendor management systems. Our team is experienced with the documentation and approval workflows required by large organizations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-left hover:no-underline">
                What if we need to scale the team up or down?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Flexibility is built into our engagement models. Staff augmentation roles can be scaled with reasonable notice periods (typically 2-4 weeks). Project-based work is milestone-driven, allowing natural transition points. We prioritize matching your organizational rhythm over rigid contract terms.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-left hover:no-underline">
                Do you handle data security and compliance requirements?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our teams work within client infrastructure and adhere to your security policies. We sign NDAs as standard practice, follow secure development protocols, and adapt to industry-specific compliance requirements. Detailed security documentation can be provided during vendor onboarding discussions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-left hover:no-underline">
                How do you differentiate from offshore staffing vendors?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We're not a volume staffing firm. Our focus is exclusively on AI implementation with rigorous talent screening, deep technical expertise in modern AI stacks, enterprise communication standards, and ownership mindset. We prioritize quality and long-term partnerships over transactional placements.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-4">
              Ready to Discuss Your AI Initiative?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
              Whether you need AI staff augmentation, project delivery, or strategic consulting—we support enterprise AI programs with the execution quality you expect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => navigate('/contact')}
                className="bg-primary hover:bg-primary/90 px-8 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              >
                Book a Discovery Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/partner-readiness')}
                className="px-8 hover:bg-muted/80 transition-all duration-300"
              >
                View Vendor Readiness
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export function ServicesPage() {
  const { navigate } = useRouter()

  const services = [
    {
      title: 'AI Staff Augmentation',
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
            <Card key={index} className="p-8">
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
              <h2 className="text-2xl font-semibold text-foreground mb-4">Staff Augmentation</h2>
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
                    <li>• Bridge staffing while hiring</li>
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
      applications: ['Internal knowledge search', 'RFP response automation', 'Market intelligence systems', 'Project staffing optimization'],
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
      category: 'Staff Augmentation',
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
                <p className="text-muted-foreground">Enterprise AI implementation and staff augmentation for serious AI programs</p>
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
              <a href="mailto:partnerships@dockio.com">Contact Partnerships Team</a>
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
              Dockio is an AI-first implementation firm focused on helping enterprise organizations execute AI initiatives with quality and speed. We provide both the AI talent and delivery capability that enterprise teams need to move from strategy to production.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We're not a generic staffing vendor or broad IT services firm. We specialize exclusively in modern AI implementation—GenAI applications, LLM development, RAG systems, AI agents, and workflow automation. This focus allows us to maintain deep technical expertise and deliver at the execution standard enterprise programs require.
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
                  <p className="text-muted-foreground">Support for staff augmentation, project delivery, fractional leadership—whatever fits your organizational structure.</p>
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
              Whether you need AI staff augmentation, project delivery, or partnership discussions—we're built to support enterprise AI programs.
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
