import { Header, Footer, Breadcrumb } from './site/ui';
import { Home } from './site/Home';
import { Contact } from './site/Contact';
import { Services, ServiceDetail, Industries, IndustryDetail, Approach, BudgetOps, About, OpenAI, Book, Procurement, Insights, Article, Privacy, Value, PartnerWork, NotFound } from './site/Pages';
import { services, industries, insights } from './site/catalog';
import { aliases } from './site/meta';
export default function App({ initialPath = '/' }: { initialPath?: string }) {
  const original = initialPath.replace(/\/$/, '') || '/';
  const path = aliases[original] ?? original;
  const service = services.find(s => s.path === path);
  const industry = industries.find(s => s.path === path);
  const insight = insights.find(s => s.path === path);
  let content: React.ReactNode;
  if (service) content = <ServiceDetail service={service} />;
  else if (industry) content = <IndustryDetail industry={industry} />;
  else if (insight) content = <Article article={insight} />;
  else switch (path) {
    case '/': content = <Home />; break;
    case '/services': content = <Services />; break;
    case '/industries': content = <Industries />; break;
    case '/approach': content = <Approach />; break;
    case '/budgetops': content = <BudgetOps />; break;
    case '/about': content = <About />; break;
    case '/value-realization': content = <Value />; break;
    case '/openai': content = <OpenAI />; break;
    case '/book': content = <Book />; break;
    case '/contact': content = <><Breadcrumb title="Contact" /><Contact /><noscript><div className="shell nojs-message">The guided brief needs JavaScript. Email your requirement to <a href="mailto:sankalp@dockio.in">sankalp@dockio.in</a> or <a href="/book/">book a conversation</a>.</div></noscript></>; break;
    case '/rfp': content = <Procurement />; break;
    case '/insights': content = <Insights />; break;
    case '/privacy': content = <Privacy />; break;
    case '/partner-readiness': content = <PartnerWork />; break;
    default: content = <NotFound />;
  }
  return <><a className="skip-link" href="#main">Skip to content</a><Header path={path} /><noscript><div className="nojs-message"><a href="/services/">Services</a> · <a href="/industries/">Industries</a> · <a href="/budgetops/">BudgetOps</a> · <a href="/contact/">Contact</a> · <a href="/book/">Book a conversation</a></div></noscript><main id="main" tabIndex={-1}>{content}</main><Footer /></>;
}
