import { useRouter } from '@/lib/router'
import { Separator } from '@/components/ui/separator'
import { EnvelopeSimple, LinkedinLogo } from '@phosphor-icons/react'

export function Footer() {
  const { navigate } = useRouter()

  return (
    <footer className="bg-[#fbfaf8]">
      <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_repeat(3,0.7fr)]">
          <div>
            <button
              onClick={() => navigate('/')}
              className="text-left font-sans text-2xl font-bold tracking-normal text-[#181614]"
            >
              Dockio
            </button>
            <p className="mt-5 max-w-sm text-[15px] leading-7 text-[#67615d]">
              Managed ChatGPT Enterprise and ChatGPT Work delivery for regulated day-to-day enterprise tasks.
            </p>
            <div className="mt-7 flex gap-3">
              <a
                href="mailto:partnerships@dockio.in"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#ded8d2] bg-white text-[#282523] transition hover:bg-[#f7f4f1]"
                aria-label="Email Dockio"
              >
                <EnvelopeSimple className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/dockio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#ded8d2] bg-white text-[#282523] transition hover:bg-[#f7f4f1]"
                aria-label="Dockio on LinkedIn"
              >
                <LinkedinLogo className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-[#282523]">Adoption</h3>
            <ul className="mt-5 space-y-3">
              {[
                ['ChatGPT Work Governance Adoption Sprint', '/services'],
                ['Task examples', '/case-studies'],
                ['Discuss Co-Delivery', '/partner-readiness'],
              ].map(([item, path]) => (
                <li key={item}>
                  <button
                    onClick={() => navigate(path)}
                    className="text-[15px] text-[#67615d] transition hover:text-[#282523]"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[#282523]">Company</h3>
            <ul className="mt-5 space-y-3">
              {[
                ['About', '/about'],
                ['Industries', '/industries'],
                ['Case studies', '/case-studies'],
                ['Partner readiness', '/partner-readiness'],
              ].map(([label, path]) => (
                <li key={label}>
                  <button
                    onClick={() => navigate(path)}
                    className="text-[15px] text-[#67615d] transition hover:text-[#282523]"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[#282523]">Contact</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a href="mailto:partnerships@dockio.in" className="text-[15px] text-[#67615d] transition hover:text-[#282523]">
                  partnerships@dockio.in
                </a>
              </li>
              <li>
                <button
                  onClick={() => navigate('/contact')}
                  className="text-left text-[15px] text-[#67615d] transition hover:text-[#282523]"
                >
                  Plan Your AI Adoption Audit
                </button>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-[#e9e4df]" />

        <div className="flex flex-col justify-between gap-4 text-[14px] text-[#7b746f] md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} Dockio Technosolutions Private Limited. All rights reserved.</p>
          <p>Managed ChatGPT Enterprise and ChatGPT Work delivery for regulated day-to-day enterprise tasks</p>
        </div>
      </div>
    </footer>
  )
}
