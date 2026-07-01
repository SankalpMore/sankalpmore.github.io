import { useEffect, useState } from 'react'
import { useRouter } from '@/lib/router'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { List } from '@phosphor-icons/react'

type NavItem = {
  label: string
  path?: string
  target?: string
}

const navItems: NavItem[] = [
  { label: 'Company', path: '/about' },
  { label: 'Codex', target: 'codex-integration' },
  { label: 'Industries', path: '/industries' },
  { label: 'Services', path: '/services' },
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

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
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
              <SheetContent side="right" className="w-[300px] sm:w-[380px]">
                <div className="mt-8 flex flex-col gap-8">
                  <button
                    onClick={() => {
                      navigate('/')
                      setMobileOpen(false)
                    }}
                    className="text-left font-sans text-2xl font-bold tracking-normal text-[#181614]"
                  >
                    Dockio
                  </button>
                  <nav className="flex flex-col gap-2">
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
