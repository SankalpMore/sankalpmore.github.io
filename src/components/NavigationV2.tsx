import { useEffect, useState } from 'react'
import { useRouter } from '@/lib/router'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { CaretDown, List } from '@phosphor-icons/react'
import { industryItems, serviceItems, useCaseItems } from '@/components/CatalogPages'

type NavLink = { label: string; path: string }

const companyItems: NavLink[] = [
  { label: 'About Dockio', path: '/about' },
  { label: 'Co-Delivery', path: '/partner-readiness' },
]

function NavigationDropdown({ label, overviewPath, items, currentPath, onNavigate }: { label: string; overviewPath: string; items: NavLink[]; currentPath: string; onNavigate: (path: string) => void }) {
  const isActive = currentPath === overviewPath || items.some((item) => currentPath === item.path)
  return <DropdownMenu><DropdownMenuTrigger asChild><button className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${isActive ? 'bg-white text-[#282523] shadow-sm' : 'text-[#69635e] hover:bg-white hover:text-[#282523] hover:shadow-sm data-[state=open]:bg-white data-[state=open]:text-[#282523] data-[state=open]:shadow-sm'}`}>{label}<CaretDown className="h-3.5 w-3.5" weight="bold" /></button></DropdownMenuTrigger><DropdownMenuContent align="start" className="max-h-[430px] w-80 overflow-y-auto p-2"><DropdownMenuLabel className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</DropdownMenuLabel><DropdownMenuItem onSelect={() => onNavigate(overviewPath)} className="cursor-pointer rounded-md px-3 py-2.5 font-medium">View all {label.toLowerCase()}</DropdownMenuItem><DropdownMenuSeparator />{items.map((item) => <DropdownMenuItem key={item.path} onSelect={() => onNavigate(item.path)} className="cursor-pointer rounded-md px-3 py-2.5">{item.label}</DropdownMenuItem>)}</DropdownMenuContent></DropdownMenu>
}

function MobileMenuGroup({ label, overviewPath, items, onNavigate }: { label: string; overviewPath: string; items: NavLink[]; onNavigate: (path: string) => void }) {
  return <div className="rounded-lg bg-muted/30 p-2"><button onClick={() => onNavigate(overviewPath)} className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-[15px] font-semibold text-foreground transition hover:bg-muted/70">{label}<CaretDown className="h-4 w-4" weight="bold" /></button><div className="mt-1 grid gap-1">{items.map((item) => <button key={item.path} onClick={() => onNavigate(item.path)} className="rounded-md px-3 py-2.5 text-left text-sm font-medium text-muted-foreground transition hover:bg-background hover:text-foreground">{item.label}</button>)}</div></div>
}

export function NavigationV2() {
  const { currentPath, navigate } = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const goTo = (path: string) => {
    navigate(path)
    setMobileOpen(false)
  }

  const industryLinks = industryItems.map(({ label, path }) => ({ label, path }))
  const serviceLinks = serviceItems.map(({ label, path }) => ({ label, path }))
  const useCaseLinks = useCaseItems.map(({ label, path }) => ({ label, path }))

  return <nav className={`fixed left-0 right-0 top-0 z-50 border-b border-[#ece7e2] bg-white transition-all duration-300 ${isScrolled ? 'shadow-[0_8px_30px_rgba(40,37,35,0.05)]' : ''}`}><div className="mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8"><div className="flex h-20 items-center justify-between"><button onClick={() => goTo('/')} className="font-sans text-2xl font-bold tracking-normal text-[#181614]" aria-label="Dockio home">Dockio</button><div className="hidden items-center rounded-full border border-[#eee9e5] bg-[#fbfaf8] p-1 xl:flex"><NavigationDropdown label="Industries" overviewPath="/industries" items={industryLinks} currentPath={currentPath} onNavigate={goTo} /><NavigationDropdown label="Services" overviewPath="/services" items={serviceLinks} currentPath={currentPath} onNavigate={goTo} /><NavigationDropdown label="Use Cases" overviewPath="/use-cases" items={useCaseLinks} currentPath={currentPath} onNavigate={goTo} /><NavigationDropdown label="Company" overviewPath="/about" items={companyItems} currentPath={currentPath} onNavigate={goTo} /></div><div className="hidden xl:block"><Button onClick={() => goTo('/contact')} className="h-11 rounded-lg bg-[#193a42] px-5 text-sm font-medium text-white shadow-sm hover:bg-[#102b32]">Plan Your AI Adoption Audit</Button></div><div className="xl:hidden"><Sheet open={mobileOpen} onOpenChange={setMobileOpen}><SheetTrigger asChild><Button variant="ghost" size="icon" aria-label="Open navigation"><List className="h-6 w-6" /></Button></SheetTrigger><SheetContent side="right" className="w-[300px] overflow-y-auto sm:w-[400px]"><SheetTitle className="sr-only">Dockio navigation</SheetTitle><SheetDescription className="sr-only">Navigate Dockio industries, services, use cases, and company pages.</SheetDescription><div className="mt-8 flex flex-col gap-6"><div className="flex items-center gap-2.5"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-sm"><span className="text-lg font-bold text-white">D</span></div><span className="text-xl font-semibold tracking-[-0.01em] text-foreground">Dockio</span></div><nav className="flex flex-col gap-2"><MobileMenuGroup label="Industries" overviewPath="/industries" items={industryLinks} onNavigate={goTo} /><MobileMenuGroup label="Services" overviewPath="/services" items={serviceLinks} onNavigate={goTo} /><MobileMenuGroup label="Use Cases" overviewPath="/use-cases" items={useCaseLinks} onNavigate={goTo} /><MobileMenuGroup label="Company" overviewPath="/about" items={companyItems} onNavigate={goTo} /></nav><Button onClick={() => goTo('/contact')} className="h-11 rounded-lg bg-[#193a42] text-white hover:bg-[#102b32]">Plan Your AI Adoption Audit</Button></div></SheetContent></Sheet></div></div></div></nav>
}
