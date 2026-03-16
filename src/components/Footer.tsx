import { useRouter } from '@/lib/router'
import { Separator } from '@/components/ui/separator'
import { EnvelopeSimple, LinkedinLogo, Phone } from '@phosphor-icons/react'

export function Footer() {
  const { navigate } = useRouter()

  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-semibold text-foreground">Dockiotech</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Enterprise AI implementation partner. Premium AI staff augmentation and consulting for serious AI initiatives.
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:partnerships@dockiotech.com"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center"
              >
                <EnvelopeSimple className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/dockiotech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center"
              >
                <LinkedinLogo className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => navigate('/services')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  AI Staff Augmentation
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Enterprise AI Consulting
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  GenAI Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  AI Solution Architecture
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => navigate('/about')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/case-studies')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/industries')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Industries
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/partner-readiness')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Partner Readiness
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:partnerships@dockiotech.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <EnvelopeSimple className="w-4 h-4" />
                  partnerships@dockiotech.com
                </a>
              </li>
              <li>
                <button
                  onClick={() => navigate('/contact')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Book a Discovery Call
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/contact')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Vendor Inquiries
                </button>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dockiotech. All rights reserved.</p>
          <p className="text-xs">
            Enterprise AI Implementation & Staff Augmentation Partner
          </p>
        </div>
      </div>
    </footer>
  )
}
