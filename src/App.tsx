import { Router, Route } from '@/lib/router'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ContactPage } from '@/components/ContactPage'
import { Toaster } from '@/components/ui/sonner'
import { ServicesPage, TalentPage, IndustriesPage, CaseStudiesPage, PartnerReadinessPage, AboutPage, HomePage } from '@/components/AllPages'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/services">
            <ServicesPage />
          </Route>
          <Route path="/talent">
            <TalentPage />
          </Route>
          <Route path="/industries">
            <IndustriesPage />
          </Route>
          <Route path="/case-studies">
            <CaseStudiesPage />
          </Route>
          <Route path="/partner-readiness">
            <PartnerReadinessPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  )
}

export default App