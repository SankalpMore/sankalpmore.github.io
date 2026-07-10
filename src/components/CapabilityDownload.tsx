import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CheckCircle, DownloadSimple, FileText } from '@phosphor-icons/react'
import { toast } from 'sonner'

const memoContent = `
DOCKIO - AI ADOPTION MEMO
Dockio Technosolutions Private Limited
Managed ChatGPT Enterprise and ChatGPT Work delivery for regulated day-to-day enterprise tasks

WHAT THIS MEMO COVERS
An introduction to the ChatGPT Work Governance Adoption Sprint: a fixed-scope, two-week engagement that gives enterprise leaders an approval-ready path to introduce ChatGPT Work into regulated day-to-day tasks.

PRIMARY FIT
- Enterprise teams with repeatable, sensitive, source-backed day-to-day tasks
- Transformation, operations, risk, compliance, finance, technology, and task owners
- Organizations that need clear ownership, approved data access, reviewer paths, and governance before AI can be scaled

ADOPTION SPRINT DELIVERABLES
- Task whitelist: enable, pilot, restrict, or keep out of scope
- Approved data-source, app, and plugin permission plan
- Human-review and accountability design
- Pilot group, success measures, and implementation path
- Risk register and executive rollout memo

REPRESENTATIVE DAY-TO-DAY TASKS
- Regulatory circular impact analysis
- Policy and SOP comparison
- Audit-evidence pack preparation
- Credit or risk memo support
- Finance-close commentary and exception summaries
- Procurement or vendor-risk review
- Customer complaint and root-cause synthesis

WHERE CODEX FITS
ChatGPT Work is used for regulated day-to-day enterprise tasks. Dockio uses Codex where deeper implementation, integration, and repeatable task automation are needed.

ENGAGEMENT PATH
Workspace AI Compliance Audit -> Paid ChatGPT Work Governance Adoption Sprint -> One task pilot -> Multi-task rollout

NOTE
The AI adoption audit is a 30-minute working conversation to determine whether a paid Workspace AI Compliance Audit is appropriate. It is not a free audit. Pilot and implementation work are separately scoped.

CONTACT
partnerships@dockio.in

Copyright ${new Date().getFullYear()} Dockio Technosolutions Private Limited. All rights reserved.
`.trim()

export function CapabilityDownload() {
  const handleDownload = () => {
    const blob = new Blob([memoContent], { type: 'text/plain' })
    const url = window.URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'Dockio-AI-Adoption-Memo.txt'
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
    window.URL.revokeObjectURL(url)
    toast.success('AI Adoption Memo downloaded')
  }

  return (
    <Card className="rounded-md border-[#d9dedb] bg-white p-7 shadow-[0_18px_55px_rgba(37,31,28,0.06)]">
      <div className="flex flex-col gap-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-md bg-[#edf3f1]"><FileText className="h-7 w-7 text-[#1f6d73]" weight="duotone" /></div>
        <div><p className="font-mono text-xs uppercase tracking-[0.16em] text-[#7d746e]">For enterprise teams</p><h3 className="mt-3 font-serif text-2xl font-normal leading-tight text-[#343230]">Request the AI Adoption Memo</h3><p className="mt-3 text-sm leading-6 text-[#67615d]">A concise view of the two-week Adoption Sprint, its deliverables, representative tasks, and the controlled-pilot path.</p></div>
        <div className="grid gap-2 text-sm text-[#67615d]">{['Regulated day-to-day task fit', 'Audit, pilot, and rollout path'].map((item) => <span key={item} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#1f6d73]" weight="fill" />{item}</span>)}</div>
        <Button onClick={handleDownload} className="w-full rounded-full bg-[#193a42] px-5 text-white shadow-sm hover:bg-[#102b32]"><DownloadSimple className="mr-2 h-5 w-5" weight="bold" />Request the AI Adoption Memo</Button>
      </div>
    </Card>
  )
}
