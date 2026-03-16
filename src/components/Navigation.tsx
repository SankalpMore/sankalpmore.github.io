import { useState, useEffect } from 'react'
import { useRouter } from '@/lib/router'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { List, X } from '@phosphor-icons/react'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Talent Models', path: '/talent' },
  { label: 'Industries', path: '/industries' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Partner Readiness', path: '/partner-readiness' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
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

  const handleNavigation = (path: string) => {
    navigate(path)
    setMobileOpen(false)
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
              Dockiotech
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`px-4 py-2.5 text-[15px] font-medium transition-all duration-200 rounded-lg ${
                  currentPath === item.path
                    ? 'text-primary bg-primary/[0.08]'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button
              onClick={() => navigate('/contact')}
              className="bg-primary hover:bg-primary/90 h-11 px-6 shadow-sm hover:shadow"
            >
              Schedule Discussion
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
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-sm">
                      <span className="text-white font-bold text-lg">D</span>
                    </div>
                    <span className="text-xl font-semibold text-foreground tracking-[-0.01em]">
                      Dockiotech
                    </span>
                  </div>
                  <nav className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <button
                        key={item.path}
                        onClick={() => handleNavigation(item.path)}
                        className={`px-4 py-3.5 text-left text-[15px] font-medium transition-all duration-200 rounded-lg ${
                          currentPath === item.path
                            ? 'text-primary bg-primary/[0.08]'
                            : 'text-foreground hover:bg-muted/60'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                  <Button
                    onClick={() => handleNavigation('/contact')}
                    className="w-full bg-primary hover:bg-primary/90 h-11"
                  >
                    Schedule Discussion
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
