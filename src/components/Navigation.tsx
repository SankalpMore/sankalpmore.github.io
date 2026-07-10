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
  { label: 'ChatGPT Work Governance Adoption Sprint', target: 'adoption-sprint' },
]
type NavItem = {
  label: string
  path?: string
  target?: string
}
const navItems: NavItem[] = [
  { label: 'Company', path: '/about' },
  { label: 'ChatGPT Work', target: 'chatgpt-work' },
  { label: 'Task Examples', target: 'workflow-examples' },
  { label: 'Co-Delivery', target: 'co-delivery' },
  { label: 'AI Adoption Audit', target: 'ai-adoption-audit' },
]

export function Navigation() {
  const { currentPath, navigate } = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSectionNavigation = (_target: string) => {
    navigate('/')
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

  const handleServiceNavigation = (_target?: string) => {
    navigate('/services')
    setMobileOpen(false)
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

          <div className="hidden items-center rounded-full border border-[#eee9e5] bg-[#fbfaf8] p-1 xl:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    currentPath === '/services'
                      ? 'bg-white text-[#282523] shadow-sm'
                      : 'text-[#69635e] hover:bg-white hover:text-[#282523] hover:shadow-sm data-[state=open]:bg-white data-[state=open]:text-[#282523] data-[state=open]:shadow-sm'
                  }`}
                  aria-label="Open services menu"
                >
                  Adoption Sprint
                  <CaretDown className="h-3.5 w-3.5" weight="bold" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-80 p-2">
                <DropdownMenuLabel className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Adoption Sprint
                </DropdownMenuLabel>
                <DropdownMenuItem
                  onSelect={() => handleServiceNavigation()}
                  className="cursor-pointer rounded-md px-3 py-2.5 font-medium"
                >
                  View the Adoption Sprint
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
                key={item.label}
                onClick={() => handleNavigation(item)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  item.path && currentPath === item.path
                    ? 'bg-white text-[#282523] shadow-sm'
                    : 'text-[#69635e] hover:bg-white hover:text-[#282523] hover:shadow-sm'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden xl:block">
            <Button
              onClick={handleContact}
              className="h-11 rounded-lg bg-[#193a42] px-5 text-sm font-medium text-white shadow-sm hover:bg-[#102b32]"
            >
              Plan Your AI Adoption Audit
            </Button>
          </div>

          <div className="xl:hidden">
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
                        Adoption Sprint
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
                    className="h-11 rounded-lg bg-[#193a42] text-white hover:bg-[#102b32]"
                  >
                    Plan Your AI Adoption Audit
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
