import { Header, Footer, EnquiryBand } from './brand/Brand';
import { Home } from './brand/Home';
import { Partners, Privacy } from './brand/Pages';
import { Solutions, Industries, UseCases } from './brand/Exploration';
import { ServicePage } from './brand/ServicePages';
import { IndustryPage, WorkflowPage } from './brand/ContextPages';
import { EngagementApproach, BudgetOpsVision, FounderAbout, ValueRealization } from './brand/VisionPages';
import { Insights, InsightArticle } from './brand/Insights';
import { insights } from './brand/insightContent';
import { Contact } from './brand/Contact';
import { industryItems, serviceItems, useCaseItems } from './brand/content';
export default function App({ initialPath = '/' }: {
    initialPath?: string;
}) {
    const path = initialPath.replace(/\/$/, '') || '/';
    let content: React.ReactNode;
    const item = [...industryItems, ...serviceItems, ...useCaseItems].find(i => i.path === path);
    const insight = insights.find(i => i.path === path);
    if (item)
        content = path.startsWith('/services/') ? <ServicePage item={item}/> : path.startsWith('/industries/') ? <IndustryPage item={item}/> : <WorkflowPage item={item}/>;
    else if (insight)
        content = <InsightArticle insight={insight}/>;
    else
        switch (path) {
            case '/':
                content = <Home />;
                break;
            case '/services':
                content = <Solutions />;
                break;
            case '/approach':
                content = <EngagementApproach />;
                break;
            case '/budgetops':
                content = <BudgetOpsVision />;
                break;
            case '/about':
                content = <FounderAbout />;
                break;
            case '/value-realization':
                content = <ValueRealization />;
                break;
            case '/insights':
                content = <Insights />;
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
