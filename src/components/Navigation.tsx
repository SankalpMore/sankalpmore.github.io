import { useEffect, useState } from 'react'
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
  { label: 'OpenAI Codex consulting', target: 'openai-codex-consulting' },
  { label: 'Enterprise knowledge integration', target: 'enterprise-knowledge-integration' },
  { label: 'AWS Codex deployment', target: 'aws-codex-deployment' },
  { label: 'Azure Codex implementation', target: 'azure-codex-implementation' },
  { label: 'Managed Codex operations', target: 'managed-codex-operations' },
  { label: 'Workshops and assessments', target: 'workshops-assessments' },
]
type NavItem = {
  label: string
  path?: string
  target?: string
}
const primaryNavItems: NavItem[] = [
  { label: 'Company', path: '/about' },
  { label: 'Codex', target: 'codex-integration' },
  { label: 'Industries', path: '/industries' },
  { label: 'Resources', path: '/case-studies' },
]

export function Navigation() {
  const { currentPath, navigate } = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSectionNavigation = (target: string) => {
    if (currentPath !== '/') {
      navigate('/')
      window.setTimeout(() => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleNavigation = (item: NavItem) => {
    if (item.path) {
      navigate(item.path)
    }

    if (item.target) {
      handleSectionNavigation(item.target)
    }

    setMobileOpen(false)
  }

  const handleContact = () => {
    navigate('/contact')
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
      className={`fixed left-0 right-0 top-0 z-50 border-b border-[#ece7e2] bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-[0_8px_30px_rgba(40,37,35,0.05)]' : ''
      }`}
    >
      <div className="mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="font-sans text-2xl font-bold tracking-normal text-[#181614]"
            aria-label="Dockio home"
          >
            Dockio
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
            {primaryNavItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item)}
                className="text-sm font-medium text-[#69635e] transition hover:text-[#282523]"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button
              onClick={handleContact}
              variant="outline"
              className="h-11 rounded-lg border-[#ded8d2] bg-white px-5 text-sm font-medium text-[#282523] hover:bg-[#f7f4f1]"
            >
              Contact Us
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open navigation">
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
                    {primaryNavItems.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => handleNavigation(item)}
                        className="rounded-md px-2 py-3 text-left text-base font-medium text-[#69635e] transition hover:bg-[#f7f4f1] hover:text-[#282523]"
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                  <Button
                    onClick={handleContact}
                    className="h-11 rounded-lg bg-[#282523] text-white hover:bg-[#3a3632]"
                  >
                    Contact Us
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
