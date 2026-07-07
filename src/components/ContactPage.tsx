import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MICROSOFT_BOOKINGS_URL } from '@/lib/bookings'
import { Calendar, EnvelopeSimple } from '@phosphor-icons/react'

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-24 text-[#282523]">
      <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <h1 className="mb-5 font-serif text-4xl font-normal leading-tight text-[#343230] lg:text-5xl">
            Start a Conversation
          </h1>
          <p className="text-lg leading-8 text-[#67615d]">
            Whether you need Codex implementation support, project delivery, implementation planning, or
            advisory support, Dockio can help enterprise teams move AI work into governed operations.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="rounded-md border-[#d9dedb] p-8 shadow-[0_18px_55px_rgba(37,31,28,0.06)]">
              <div className="max-w-2xl">
                <h2 className="mb-3 font-serif text-3xl font-normal leading-tight text-[#343230]">
                  Book a discovery call
                </h2>
                <p className="mb-8 leading-7 text-[#67615d]">
                  Schedule a time through Microsoft Bookings. You can add context about your Codex workflow,
                  deployment needs, or partnership discussion while booking.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="rounded-full bg-[#193a42] px-6 hover:bg-[#102b32]">
                    <a href={MICROSOFT_BOOKINGS_URL} target="_blank" rel="noopener noreferrer">
                      Schedule online
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full border-[#ded8d2] px-6">
                    <a href="mailto:partnerships@dockio.in">Email partnerships@dockio.in</a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="rounded-md border-[#d9dedb] p-6 shadow-none">
              <h3 className="mb-4 font-semibold text-[#282523]">Direct Contact</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <EnvelopeSimple className="mt-0.5 h-5 w-5 text-[#1f6d73]" />
                  <div>
                    <p className="mb-1 font-medium text-[#282523]">Email</p>
                    <a
                      href="mailto:partnerships@dockio.in"
                      className="text-[#67615d] transition-colors hover:text-[#1f6d73]"
                    >
                      partnerships@dockio.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="mt-0.5 h-5 w-5 text-[#1f6d73]" />
                  <div>
                    <p className="mb-1 font-medium text-[#282523]">Book a Call</p>
                    <a
                      href={MICROSOFT_BOOKINGS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#67615d] transition-colors hover:text-[#1f6d73]"
                    >
                      Schedule online
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="rounded-md border-[#d9dedb] p-6 shadow-none">
              <h3 className="mb-4 font-semibold text-[#282523]">Response Time</h3>
              <p className="mb-4 text-sm leading-6 text-[#67615d]">
                Enterprise inquiries are prioritized and typically receive a response within 24 business hours.
              </p>
              <p className="text-sm leading-6 text-[#67615d]">
                For urgent AI deployment needs, email partnerships@dockio.in with "URGENT" in your subject.
              </p>
            </Card>

            <Card className="rounded-md border-none bg-[#f7f8f5] p-6 shadow-none">
              <h3 className="mb-3 font-semibold text-[#282523]">What Happens Next?</h3>
              <ul className="space-y-3 text-sm leading-6 text-[#67615d]">
                <li className="flex gap-2">
                  <span className="font-semibold text-[#1f6d73]">1.</span>
                  <span>We review your inquiry and implementation context</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-[#1f6d73]">2.</span>
                  <span>Schedule a discovery call to understand needs</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-[#1f6d73]">3.</span>
                  <span>Provide capability overview and proposed approach</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-[#1f6d73]">4.</span>
                  <span>Discuss engagement structure and next steps</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
