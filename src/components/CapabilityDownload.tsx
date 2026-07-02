import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CheckCircle, DownloadSimple, FileText } from '@phosphor-icons/react'
import { toast } from 'sonner'

export function CapabilityDownload() {
  const handleDownload = () => {
    const capabilityContent = `
DOCKIO - CAPABILITY STATEMENT
Dockio Technosolutions Private Limited
Codex Implementation and Governed AI Workflow Delivery

CORE CAPABILITIES
- Codex workflow assessment and pilot design
- Codex workspace integration across approved tools and sources
- RAG and knowledge grounding for reviewable business work
- AI agent workflow automation with human review paths
- Cloud AI architecture for Azure AI Foundry, AWS Bedrock, OpenAI, and private cloud models
- Enablement, governance, evaluation, and rollout cadence

ENGAGEMENT MODELS
- Workflow assessment sprint
- Governed Codex pilot
- Enterprise integration project
- Enablement and reviewer training
- Pilot-to-scale governance support

TARGET CLIENTS
- Enterprise transformation leaders
- Finance, operations, procurement, GTM, and technology owners
- Organizations with mature vendor onboarding and clear review paths
- Teams moving from AI experimentation to governed production workflows

TECHNICAL EXPERTISE
- Codex, OpenAI API, Azure AI Foundry, AWS Bedrock
- Retrieval, evidence linking, evaluation, and source-quality checks
- Tool calling, orchestration, logs, and reviewer checkpoints
- Enterprise data handling, access boundaries, and production-readiness documentation

DELIVERY STANDARDS
- SOW & MSA compliant
- Milestone-based execution
- Documentation discipline
- Enterprise communication standards
- Security, data handling, and governance alignment

BEST-FIT WORKFLOWS
- Finance and procurement analysis
- Revenue and GTM research or follow-up preparation
- Delivery operations, SOPs, tickets, and runbooks
- Technology and data team implementation support
- Strategy and transformation decision memos

CONTACT
partnerships@dockio.in

Copyright ${new Date().getFullYear()} Dockio Technosolutions Private Limited. All rights reserved.
    `.trim()

    const blob = new Blob([capabilityContent], { type: 'text/plain' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'Dockio-Codex-Capability-Statement.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)

    toast.success('Capability statement downloaded successfully')
  }

  return (
    <Card className="rounded-md border-[#d9dedb] bg-white p-7 shadow-[0_18px_55px_rgba(37,31,28,0.06)]">
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-md bg-[#edf3f1]">
          <FileText className="h-7 w-7 text-[#1f6d73]" weight="duotone" />
        </div>
        <div className="flex-1">
          <h3 className="mb-2 font-serif text-2xl font-normal text-[#343230]">
            Download Codex capability statement
          </h3>
          <p className="text-sm leading-6 text-[#67615d]">
            Procurement-ready overview of Dockio's Codex implementation capabilities, engagement models,
            governance standards, and best-fit workflow areas.
          </p>
          <div className="mt-4 grid gap-2 text-sm text-[#67615d] sm:grid-cols-2">
            {['SOW and MSA context', 'Architecture and data handling notes'].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#1f6d73]" weight="fill" />
                {item}
              </span>
            ))}
          </div>
        </div>
        <Button
          onClick={handleDownload}
          size="lg"
          className="rounded-full bg-[#193a42] px-6 text-white shadow-sm transition-all duration-300 hover:bg-[#102b32]"
        >
          <DownloadSimple className="mr-2 h-5 w-5" weight="bold" />
          Download
        </Button>
      </div>
    </Card>
  )
}
