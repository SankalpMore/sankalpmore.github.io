import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CheckCircle, DownloadSimple, FileText } from '@phosphor-icons/react'
import { toast } from 'sonner'

const memoContent = `
DOCKIO - ENTERPRISE AI SERVICES MEMO
Dockio Technosolutions Private Limited
Founder: Sankalp More

WHO WE HELP
Enterprise AI product owners, programme and delivery leads, and sponsors who need implementation or adoption support. Finance is the preferred starting point; cross-industry and global enquiries are welcome.

WHERE WE HELP
- AI business analysis: requirements, use-case and value prioritization, stakeholder alignment, acceptance criteria.
- Embedded PM/PMO: decisions, milestones, dependencies, risks, implementation coordination, and sponsor reporting.
- Governed AI tasks, skills, and tools: approved sources, permissions, task instructions, evaluation, and human review.
- Adoption: practical guidance, team enablement, feedback, and an improvement backlog.
- Selective development: focused tools or integrations where agreed and useful to the outcome.

HOW ENGAGEMENTS WORK
Share the requirement -> Agree remit and time -> Coordinate delivery -> Support adoption -> Review and adjust.
Agreed hours or days on time and materials. Scope, rate, review cadence, founder involvement, availability, and delivery responsibilities are confirmed before work starts. Remote delivery or another working arrangement is agreed around the work. Discovery is available where the requirement needs definition; it is not a mandatory entry stage.

ILLUSTRATIVE STARTING POINTS
Finance-close commentary, variance and exception summaries, programme status reporting, policy comparison, and source-backed operational briefs. These are examples, not Dockio client wins or claims of completed results.

CONTACT
Send a short requirement, desired outcome, current stage, systems/constraints (non-confidential), timing, and support needed.
sankalp@dockio.in
https://www.dockio.in/
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
        <div><p className="font-mono text-xs uppercase tracking-[0.16em] text-[#7d746e]">For enterprise teams and partners</p><h3 className="mt-3 font-serif text-2xl font-normal leading-tight text-[#343230]">Download the AI Services Memo</h3><p className="mt-3 text-sm leading-6 text-[#67615d]">A concise view of who we work with, our AI services, and engagement terms for embedded delivery and adoption support.</p></div>
        <div className="grid gap-2 text-sm text-[#67615d]">{['Requirements, coordination, and adoption', 'Agreed hours or days; founder involvement'].map((item) => <span key={item} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#1f6d73]" weight="fill" />{item}</span>)}</div>
        <Button onClick={handleDownload} className="h-auto min-h-10 w-full whitespace-normal rounded-full bg-[#193a42] px-5 text-white shadow-sm hover:bg-[#102b32]"><DownloadSimple className="mr-2 h-5 w-5" weight="bold" />Download services memo</Button>
      </div>
    </Card>
  )
}
