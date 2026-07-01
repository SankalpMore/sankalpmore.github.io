import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { DownloadSimple, FileText } from '@phosphor-icons/react'
import { toast } from 'sonner'

export function CapabilityDownload() {
  const handleDownload = () => {
    const capabilityContent = `
DOCKIO - CAPABILITY STATEMENT
Dockio Technosolutions Private Limited
OpenAI Codex Integration & Managed Knowledge Work Operations

CORE CAPABILITIES
- OpenAI Codex Consulting
- Enterprise Knowledge Integration
- AWS Codex Deployment
- Azure Codex Implementation
- Managed Codex Operations
- Workshops & Assessments
- Evaluation, Governance & Review Workflows

ENGAGEMENT MODELS
- Codex Integration Assessment
- Production Pilot
- Project-Based Delivery
- Managed Operations Retainer
- Cloud Deployment Planning
- Procurement & Vendor Readiness

TARGET CLIENTS
- Enterprise Organizations
- Consulting Firms
- System Integrators
- Cloud/Platform Partners
- AI Transformation Leaders
- Knowledge-Heavy Business Teams

TECHNICAL EXPERTISE
- OpenAI Codex Workflows
- Source Grounding Across Repositories, Documents, Tickets & Policies
- AWS, Azure & Hybrid Cloud Integration
- Identity, Access, Secrets & Network Controls
- Observability & Evaluation Tools
- Review Gates, Audit Trails & Operational Reporting

DELIVERY STANDARDS
- SOW & MSA Compliant
- Milestone-Based Execution
- Documentation Discipline
- Enterprise Communication Standards
- Security & Compliance Adherence

INDUSTRIES SERVED
- Financial Services
- Healthcare & Life Sciences
- Retail & E-commerce
- Manufacturing & Logistics
- Professional Services
- Government & Public Sector

CONTACT
partnerships@dockio.in

© ${new Date().getFullYear()} Dockio Technosolutions Private Limited. All rights reserved.
    `.trim()

    const blob = new Blob([capabilityContent], { type: 'text/plain' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'Dockio-Capability-Statement.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
    
    toast.success('Capability statement downloaded successfully')
  }

  return (
    <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
          <FileText className="w-7 h-7 text-primary" weight="duotone" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Download Capability Statement
          </h3>
          <p className="text-muted-foreground text-sm">
            One-page overview of our Codex integration capabilities, engagement models, and technical expertise. Suitable for sharing with procurement teams and internal stakeholders.
          </p>
        </div>
        <Button 
          onClick={handleDownload}
          size="lg"
          className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <DownloadSimple className="mr-2 h-5 w-5" weight="bold" />
          Download
        </Button>
      </div>
    </Card>
  )
}
