import { Router, Route } from '@/lib/router'
import { NavigationV2 } from '@/components/NavigationV2'
import { Footer } from '@/components/Footer'
import { ContactPage } from '@/components/ContactPage'
import { Toaster } from '@/components/ui/sonner'
import { CaseStudiesPage, PartnerReadinessPage, AboutPage, HomePage } from '@/components/AllPages'
import { IndustriesLandingPage, IndustryDetailPage, ServicesLandingPage, ServiceDetailPage, UseCasesLandingPage, UseCaseDetailPage, industryItems, serviceItems, useCaseItems } from '@/components/CatalogPages'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <NavigationV2 />
        <main className="flex-1">
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/services">
            <ServicesLandingPage />
          </Route>
          <Route path="/industries">
            <IndustriesLandingPage />
          </Route>
          <Route path="/use-cases">
            <UseCasesLandingPage />
          </Route>
          {industryItems.map((item) => <Route key={item.path} path={item.path}><IndustryDetailPage slug={item.path.split('/').pop() ?? ''} /></Route>)}
          {serviceItems.map((item) => <Route key={item.path} path={item.path}><ServiceDetailPage slug={item.path.split('/').pop() ?? ''} /></Route>)}
          {useCaseItems.map((item) => <Route key={item.path} path={item.path}><UseCaseDetailPage slug={item.path.split('/').pop() ?? ''} /></Route>)}
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
