import { ArrowRight, EnvelopeSimple } from '@phosphor-icons/react'

const briefItems = [
  ['Your requirement', 'What needs to move forward, and where is it getting stuck?'],
  ['Outcome and stage', 'What would a useful result look like? Is this discovery, delivery, or adoption?'],
  ['Context and constraints', 'Your role, relevant systems, review requirements, and preferred working arrangement.'],
  ['Timing and support', 'Target dates, expected hours or days, and the kind of BA, PM, PMO, or implementation support needed.'],
]
const body = 'Hello Sankalp,\n\nOur requirement:\n\nDesired outcome and current stage:\n\nOrganization and my role:\n\nSystems and constraints (non-confidential):\n\nTiming and support needed:\n\nPreferred working arrangement:\n'
const enquiry = `mailto:sankalp@dockio.in?subject=${encodeURIComponent('Dockio — enterprise AI requirement')}&body=${encodeURIComponent(body)}`

export function ContactPage() {
  return <div className="min-h-screen bg-white pt-28 text-[#282523]"><div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-6 lg:px-8">
    <div className="max-w-3xl"><h1 className="font-serif text-4xl font-normal leading-tight text-[#343230] sm:text-5xl lg:text-6xl">Tell us what needs to move forward.</h1><p className="mt-6 text-lg leading-8 text-[#67615d]">Bring an AI requirement, a delivery gap, or an adoption challenge. Your note goes directly to Sankalp More, Dockio’s founder.</p></div>
    <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]"><section aria-labelledby="brief-heading"><h2 id="brief-heading" className="font-serif text-3xl font-normal">A short brief is enough to start.</h2><p className="mt-4 leading-7 text-[#67615d]">Include what you know. No need to have every detail resolved.</p><dl className="mt-8 divide-y divide-[#d9dedb] border-y border-[#d9dedb]">{briefItems.map(([title, description]) => <div key={title} className="py-5"><dt className="font-semibold">{title}</dt><dd className="mt-2 text-sm leading-7 text-[#67615d]">{description}</dd></div>)}</dl><a href={enquiry} className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#193a42] px-6 py-3 text-sm font-medium text-white hover:bg-[#102b32]">Open an email draft <ArrowRight aria-hidden="true" className="h-4 w-4" /></a><p className="mt-4 max-w-lg text-sm leading-6 text-[#67615d]">Opens your email app with an editable outline. You review and send it yourself. This website does not collect or submit your brief. Please leave confidential material out of the initial enquiry.</p></section>
      <aside className="self-start bg-[#f7f8f5] p-7 sm:p-9"><EnvelopeSimple aria-hidden="true" className="h-6 w-6 text-[#193a42]" /><h2 className="mt-5 font-serif text-3xl font-normal">Direct, founder-led contact.</h2><a href="mailto:sankalp@dockio.in" className="mt-5 inline-block break-all font-medium text-[#193a42] underline underline-offset-4">sankalp@dockio.in</a><h3 className="mt-9 font-semibold">What happens next</h3><p className="mt-3 text-sm leading-7 text-[#67615d]">We review the requirement and discuss fit, scope, and availability. If there is a fit, we agree the remit, hours or days, time-and-materials rate, review cadence, and founder involvement before work starts.</p><p className="mt-5 text-sm leading-7 text-[#67615d]">Finance is our preferred starting point. Cross-industry and global enquiries are welcome; remote or other delivery arrangements are agreed for the engagement.</p></aside>
    </div>
  </div></div>
}
