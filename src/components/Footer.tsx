import { useRouter } from '@/lib/router'
import { Separator } from '@/components/ui/separator'
import { EnvelopeSimple, LinkedinLogo, Phone } from '@phosphor-icons/react'

export function Footer() {
  const { navigate } = useRouter()

  return (
    <footer className="bg-muted/20 border-t border-border/50 mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-semibold text-foreground tracking-[-0.01em]">Dockio</span>
            </div>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-7 max-w-xs">
              Enterprise AI implementation partner. Specialized engineering teams and technical leadership for high-stakes AI initiatives.
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:partnerships@dockio.com"
                className="w-11 h-11 rounded-xl bg-muted/50 hover:bg-accent hover:text-accent-foreground transition-all duration-200 flex items-center justify-center border border-border/40 hover:border-accent/40"
              >
                <EnvelopeSimple className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/dockio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-muted/50 hover:bg-accent hover:text-accent-foreground transition-all duration-200 flex items-center justify-center border border-border/40 hover:border-accent/40"
              >
                <LinkedinLogo className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-5 tracking-tight">Capabilities</h3>
            <ul className="space-y-3.5">
              <li>
                <button
                  onClick={() => navigate('/services')}
                  className="text-[15px] text-muted-foreground hover:text-foreground transition-colors"
                >
                  AI Engineering Teams
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services')}
                  className="text-[15px] text-muted-foreground hover:text-foreground transition-colors"
                >
                  Strategic AI Consulting
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services')}
                  className="text-[15px] text-muted-foreground hover:text-foreground transition-colors"
                >
                  GenAI Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services')}
                  className="text-[15px] text-muted-foreground hover:text-foreground transition-colors"
                >
                  Solution Architecture
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-5 tracking-tight">Company</h3>
            <ul className="space-y-3.5">
              <li>
                <button
                  onClick={() => navigate('/about')}
                  className="text-[15px] text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/case-studies')}
                  className="text-[15px] text-muted-foreground hover:text-foreground transition-colors"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/industries')}
                  className="text-[15px] text-muted-foreground hover:text-foreground transition-colors"
                >
                  Industries
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/partner-readiness')}
                  className="text-[15px] text-muted-foreground hover:text-foreground transition-colors"
                >
                  Partnership Process
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-5 tracking-tight">Get in Touch</h3>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="mailto:partnerships@dockio.com"
                  className="text-[15px] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2.5"
                >
                  <EnvelopeSimple className="w-4 h-4" />
                  partnerships@dockio.com
                </a>
              </li>
              <li>
                <button
                  onClick={() => navigate('/contact')}
                  className="text-[15px] text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Schedule Discussion
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/contact')}
                  className="text-[15px] text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Partnership Inquiries
                </button>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dockio. All rights reserved.</p>
          <p className="text-[13px]">
            Enterprise AI Implementation & Technical Partnership
          </p>
        </div>
      </div>
    </footer>
  )
}
