import { Header, Footer, EnquiryBand } from './brand/Brand';
import { Home } from './brand/Home';
import { About, Approach, BudgetOps, Partners, Privacy } from './brand/Pages';
import { Solutions, Industries, UseCases, Detail } from './brand/Exploration';
import { Contact } from './brand/Contact';
import { industryItems, serviceItems, useCaseItems } from './brand/content';
export default function App({ initialPath = '/' }: {
    initialPath?: string;
}) {
    const path = initialPath.replace(/\/$/, '') || '/';
    let content: React.ReactNode;
    const item = [...industryItems, ...serviceItems, ...useCaseItems].find(i => i.path === path);
    if (item)
        content = <Detail item={item} category={path.split('/')[1]}/>;
    else
        switch (path) {
            case '/':
                content = <Home />;
                break;
            case '/services':
                content = <Solutions />;
                break;
            case '/approach':
                content = <Approach />;
                break;
            case '/budgetops':
                content = <BudgetOps />;
                break;
            case '/about':
                content = <About />;
                break;
            case '/contact':
                content = <Contact />;
                break;
            case '/industries':
                content = <Industries />;
                break;
            case '/use-cases':
                content = <UseCases />;
                break;
            case '/case-studies':
                content = <UseCases examples />;
                break;
            case '/partner-readiness':
                content = <Partners />;
                break;
            case '/privacy':
                content = <Privacy />;
                break;
            default: content = <section className="section shell page-intro"><p className="eyebrow">LET’S GET YOU BACK</p><h1>There’s more<br />to explore.</h1><p>This page could not be found.</p><a href="/" className="button">Explore Dockio</a></section>;
        }
    return <><a className="skip-link" href="#main">Skip to content</a><Header path={path}/><main id="main" tabIndex={-1}>{content}{!item && !['/contact', '/privacy'].includes(path) && <EnquiryBand />}</main><Footer /></>;
}
