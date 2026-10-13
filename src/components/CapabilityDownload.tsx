import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CheckCircle, DownloadSimple, FileText } from '@phosphor-icons/react'
import { toast } from 'sonner'

const memoContent = `
DOCKIO - ENTERPRISE AI SERVICES MEMO
Dockio Technosolutions Private Limited
Your enterprise AI services partner: discovery, delivery, and ongoing improvement

WHAT THIS MEMO COVERS
How Dockio helps enterprise teams adopt ChatGPT, implement AI workflows and agents, integrate systems, and support ongoing use. Engagements move from paid discovery to scoped delivery and recurring support based on the team's needs.

WHO WE WORK WITH
- Enterprise sponsors turning AI priorities into a practical delivery plan
- Operations and workflow owners improving repeatable work
- AI and technology leaders connecting tools, data, and systems
- Delivery partners seeking implementation and adoption support

SERVICE AREAS
- ChatGPT adoption: workspace planning, workflow selection, onboarding, and team enablement
- AI workflow and agent implementation: design, build, evaluation, and operational handoff
- Integration: connect approved systems and sources to the workflow
- Managed improvement: adoption support, maintenance, usage review, and an improvement backlog

PAID DISCOVERY
Agree a focused brief, understand the current workflow, and define the next delivery scope. A two-week discovery format can be used for a focused engagement; scope and timing are agreed before work begins.

Typical outputs:
- Prioritized workflow and intended business outcome
- Success measures and accountable owners
- Data, integration, and operational requirements
- Access, review, and risk requirements where needed
- Scoped implementation plan and support considerations

REPRESENTATIVE WORKFLOWS
- Leadership and account briefs
- Project-status updates and operational exception summaries
- Policy, procedure, and document comparison
- Finance-close commentary and variance summaries
- Research synthesis and proposal preparation
- Engineering coordination and development workflows

HOW DELIVERY WORKS
Discuss your AI initiative -> Paid discovery -> Scoped implementation or adoption -> Recurring support and improvement

Technology choices follow the workflow and requirements. ChatGPT can support team adoption and day-to-day work; Codex can support development and implementation. Integration, agent behavior, evaluation, and human review are defined within the agreed scope.

Where an engagement involves sensitive data or regulated work, discovery includes the relevant control and review requirements.

CONTACT
Discuss your AI initiative or a delivery partnership:
partnerships@dockio.in
www.dockio.in

Copyright ${new Date().getFullYear()} Dockio Technosolutions Private Limited. All rights reserved.
`.trim()

export function CapabilityDownload() {
  const handleDownload = () => {
    const blob = new Blob([memoContent], { type: 'text/plain' })
    const url = window.URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'Dockio-Enterprise-AI-Services-Memo.txt'
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
    window.URL.revokeObjectURL(url)
    toast.success('Enterprise AI Services Memo downloaded')
  }

  return (
    <Card className="rounded-md border-[#d9dedb] bg-white p-7 shadow-[0_18px_55px_rgba(37,31,28,0.06)]">
      <div className="flex flex-col gap-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-md bg-[#edf3f1]"><FileText className="h-7 w-7 text-[#1f6d73]" weight="duotone" /></div>
        <div><p className="font-mono text-xs uppercase tracking-[0.16em] text-[#7d746e]">For enterprise teams and partners</p><h3 className="mt-3 font-serif text-2xl font-normal leading-tight text-[#343230]">Download the AI Services Memo</h3><p className="mt-3 text-sm leading-6 text-[#67615d]">A concise view of who we work with, our AI services, and the path from paid discovery to delivery and ongoing support.</p></div>
        <div className="grid gap-2 text-sm text-[#67615d]">{['Adoption, workflows, agents, and integration', 'Discovery, delivery, and recurring support'].map((item) => <span key={item} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#1f6d73]" weight="fill" />{item}</span>)}</div>
        <Button onClick={handleDownload} className="w-full rounded-full bg-[#193a42] px-5 text-white shadow-sm hover:bg-[#102b32]"><DownloadSimple className="mr-2 h-5 w-5" weight="bold" />Download the AI Services Memo</Button>
      </div>
    </Card>
  )
}
