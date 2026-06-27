import { useState, useEffect } from 'react'
import { useRouter } from '@/lib/router'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { CaretDown, List } from '@phosphor-icons/react'

const serviceItems = [
  { label: 'AI Deployment Support', target: 'ai-deployment-support' },
  { label: 'Enterprise AI Consulting', target: 'enterprise-ai-consulting' },
  { label: 'GenAI Application Development', target: 'genai-application-development' },
  { label: 'AI Agents & Workflow Automation', target: 'ai-agents-workflow-automation' },
  { label: 'RAG & Enterprise Knowledge Systems', target: 'rag-enterprise-knowledge-systems' },
  { label: 'AI Solution Architecture', target: 'ai-solution-architecture' },
]

const navItems = [
  { label: 'Problem', target: 'use-cases' },
  { label: 'Pricing', target: 'pricing' },
  { label: 'Founder', target: 'founder-experience' },
  { label: 'Book Assessment', target: 'book-assessment' },
]


export function Navigation() {
  const { currentPath, navigate } = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (target: string) => {
    if (currentPath !== '/') {
      navigate('/')
      window.setTimeout(() => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileOpen(false)
  }

  const handleServiceNavigation = (target?: string) => {
    navigate('/services')
    setMobileOpen(false)

    if (target) {
      window.setTimeout(() => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/98 backdrop-blur-md shadow-sm border-b border-border/40' : 'bg-white border-b border-border/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-sm transition-all duration-200 group-hover:shadow-md">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="text-xl font-semibold text-foreground tracking-[-0.01em]">
              Dockio
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-[15px] font-medium text-muted-foreground transition-all duration-200 hover:bg-muted/60 hover:text-foreground data-[state=open]:bg-muted/60 data-[state=open]:text-foreground"
                  aria-label="Open services menu"
                >
                  Services
                  <CaretDown className="h-3.5 w-3.5" weight="bold" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-80 p-2">
                <DropdownMenuLabel className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Services
                </DropdownMenuLabel>
                <DropdownMenuItem
                  onSelect={() => handleServiceNavigation()}
                  className="cursor-pointer rounded-md px-3 py-2.5 font-medium"
                >
                  View all services
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {serviceItems.map((item) => (
                  <DropdownMenuItem
                    key={item.target}
                    onSelect={() => handleServiceNavigation(item.target)}
                    className="cursor-pointer rounded-md px-3 py-2.5"
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleNavigation(item.target)}
                className="px-4 py-2.5 text-[15px] font-medium transition-all duration-200 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button
              onClick={() => handleNavigation('book-assessment')}
              className="bg-primary hover:bg-primary/90 h-11 px-6 shadow-sm hover:shadow"
            >
              Book AI Readiness Audit
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <List className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="sr-only">Dockio navigation</SheetTitle>
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-sm">
                      <span className="text-white font-bold text-lg">D</span>
                    </div>
                    <span className="text-xl font-semibold text-foreground tracking-[-0.01em]">
                      Dockio
                    </span>
                  </div>
                  <nav className="flex flex-col gap-2">
                    <div className="rounded-lg bg-muted/30 p-2">
                      <button
                        onClick={() => handleServiceNavigation()}
                        className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-[15px] font-semibold text-foreground transition-all duration-200 hover:bg-muted/70"
                      >
                        Services
                        <CaretDown className="h-4 w-4" weight="bold" />
                      </button>
                      <div className="mt-1 grid gap-1">
                        {serviceItems.map((item) => (
                          <button
                            key={item.target}
                            onClick={() => handleServiceNavigation(item.target)}
                            className="rounded-md px-3 py-2.5 text-left text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-background hover:text-foreground"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    {navItems.map((item) => (
                      <button
                        key={item.target}
                        onClick={() => handleNavigation(item.target)}
                        className="px-4 py-3.5 text-left text-[15px] font-medium transition-all duration-200 rounded-lg text-foreground hover:bg-muted/60"
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                  <Button
                    onClick={() => handleNavigation('book-assessment')}
                    className="w-full bg-primary hover:bg-primary/90 h-11"
                  >
                    Book AI Readiness Audit
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
