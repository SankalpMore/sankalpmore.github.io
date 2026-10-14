import { Arrow } from './Brand';
import { industryItems, serviceItems, useCaseItems, type CatalogItem } from './catalog';
import { detailContent, type Point, type Scene } from './detailContent';
const sceneDescriptions: Record<Scene, string> = {
    collaboration: 'Illustrative workplace scene: colleagues of different ages shaping a business workflow together',
    finance: 'Illustrative workplace scene: finance professionals checking a report and its supporting information',
    technology: 'Illustrative workplace scene: colleagues reviewing a laptop and mapping an implementation workflow',
    logistics: 'Illustrative workplace scene: warehouse coordinators checking a dispatch sheet and tablet',
    manufacturing: 'Illustrative workplace scene: quality colleagues inspecting a component and recording their observations',
    healthcare: 'Illustrative workplace scene: non-clinical operations colleagues planning administrative work',
    property: 'Illustrative workplace scene: property colleagues reviewing a floor plan and building information',
};
export function SceneImage({ scene, priority = false, decorative = false, sizes = '(max-width: 800px) 100vw, 50vw' }: {
    scene: Scene;
    priority?: boolean;
    decorative?: boolean;
    sizes?: string;
}) {
    return <img src={`/images/dockio-${scene}-scene.webp`} srcSet={`/images/dockio-${scene}-small.webp 640w, /images/dockio-${scene}-scene.webp 1536w`} sizes={sizes} alt={decorative ? '' : sceneDescriptions[scene]} width="1536" height="1024" loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : undefined}/>;
}
function Photo({ scene, priority = false, className = '' }: {
    scene: Scene;
    priority?: boolean;
    className?: string;
}) {
    return <figure className={`context-photo ${className}`}><SceneImage scene={scene} priority={priority}/><figcaption>Illustrative workplace scene</figcaption></figure>;
}
const solutionStarts = [
    { item: serviceItems[2], id: 'prioritize', title: 'Too many ideas. No agreed priority.', text: 'Find the recurring task worth improving, understand the work around it and give the sponsor a clear investment decision.', output: 'An opportunity map, requirements and a value brief.', short: 'Prioritize the work' },
    { item: serviceItems[0], id: 'govern', title: 'Useful answers. An inconsistent workflow.', text: 'Turn an individual success into a defined task with approved sources, bounded tool actions and an output people can check.', output: 'Task specifications, evaluation examples and an operating playbook.', short: 'Govern the workflow' },
    { item: serviceItems[3], id: 'deliver', title: 'A promising demo. An uncertain route to production.', text: 'Connect business, platform, risk and delivery owners. Make access, integrations, acceptance and support part of one plan.', output: 'A delivery plan, an implementation backlog and a release handover.', short: 'Connect delivery' },
    { item: serviceItems[1], id: 'adopt', title: 'The tool is available. The habits have not changed.', text: 'Work with practitioners on real tasks, remove the friction and help internal owners sustain useful adoption.', output: 'Role-based guidance, practice sessions and an improvement backlog.', short: 'Build adoption' },
];
export function Solutions() {
    return <>
    <section className="shell exploration-hero">
      <div><p className="eyebrow">SOLUTIONS</p><h1>Move from AI ambition to useful work.</h1><p className="exploration-lead">Clear priorities. Governed workflows. Connected delivery. Dockio helps enterprise teams make AI useful, adopted and accountable.</p><a className="button" href="#starting-points">Find your starting point <Arrow /></a></div>
      <Photo scene="collaboration" priority/>
    </section>
    <nav className="shell section-rail" aria-label="Solution starting points">{solutionStarts.map(s => <a href={`#${s.id}`} key={s.id}>{s.short}<Arrow /></a>)}</nav>
    <section className="section shell" id="starting-points"><div className="section-heading"><h2>What needs<br />to change?</h2><p>Enter where the work needs support. The remit can connect discovery, implementation and adoption, or focus on a defined part.</p></div><div className="solution-starts">{solutionStarts.map((s, i) => <article id={s.id} key={s.id}><div><span className="small-number">0{i + 1}</span><h3>{s.title}</h3></div><div><p>{s.text}</p><p className="output-line"><strong>What we shape</strong>{s.output}</p><a className="text-link" href={s.item.path + '/'}>{s.item.label}<Arrow /></a></div></article>)}</div></section>
    <section className="scope-band"><div className="shell scope-grid"><Photo scene="technology"/><div><p className="eyebrow">CONNECTED DELIVERY</p><h2>Define the work.<br />Know who owns it.</h2><p>Dockio can embed business analysis, PM or PMO support alongside your teams, coordinate implementation and include selective development where it serves the agreed outcome.</p><p>Scope, responsibilities, rate, hours or days, review cadence and founder involvement are agreed before work begins. Engagements run on time and materials, with remote or other working arrangements defined around the requirement.</p><a className="text-link" href="/approach/">How engagements work <Arrow /></a></div></div></section>
    <section className="section shell connected-links"><div><h2>Start with the work.<br />Keep the context.</h2><p>A finance close, a warehouse handover and a client release have different evidence, ownership and integration needs.</p></div><div><a href="/industries/" className="related-link">Explore industries we serve <Arrow /></a><a href="/use-cases/" className="related-link">Explore workflow examples <Arrow /></a><a href="/budgetops/" className="related-link">See how evidence informs the next investment <Arrow /></a></div></section>
  </>;
}
export function Industries() {
    const finance = industryItems[0];
    return <>
    <section className="shell industry-opening"><p className="eyebrow">INDUSTRIES WE SERVE</p><h1>Different industries.<br />Specific operating realities.</h1><p className="exploration-lead">Finance leads our focus. The work extends wherever complex information, connected systems and people need to come together.</p></section>
    <section className="shell industry-feature"><Photo scene="finance" priority/><div><p className="eyebrow">FINANCIAL SERVICES</p><h2>Confidence in the work behind the decision.</h2><p>Close commentary, policy changes and evidence preparation—with traceable sources and accountable review.</p><a className="text-link" href={finance.path + '/'}>Explore financial services <Arrow /></a></div></section>
    <section className="section shell"><div className="section-heading"><h2>Find your<br />operating context.</h2><p>Explore representative workflows, the delivery work behind them and the measures that can make progress visible.</p></div><div className="industry-list">{industryItems.slice(1).map(item => <article key={item.path}><a href={item.path + '/'} className="industry-image-link" aria-label={`Explore ${item.label}`}><SceneImage scene={detailContent[item.path].image} sizes="(max-width: 540px) 100vw, 240px" decorative/></a><div><h3><a href={item.path + '/'}>{item.label}</a></h3><p>{item.summary}</p><p className="industry-example">{detailContent[item.path].workflow.title}</p></div><a className="industry-row-link" href={item.path + '/'} aria-label={`Explore ${item.label}`}><Arrow /></a></article>)}</div></section>
    <section className="shell context-invitation"><h2>Your context matters<br />more than the category.</h2><div><p>For each engagement, we define the workflow, the information it can use, the people who review it and the result worth measuring. Global and cross-industry requirements are welcome.</p><a className="text-link" href="/services/">Explore our solutions <Arrow /></a></div></section>
  </>;
}
export function UseCases({ examples = false }: {
    examples?: boolean;
}) {
    return <>
    <section className="shell exploration-hero"><div><p className="eyebrow">{examples ? 'WORKFLOW POSSIBILITIES' : 'USE CASES'}</p><h1>A useful change.<br />A workflow you<br />can evaluate.</h1><p className="exploration-lead">These illustrative starting points show how a business task can connect to approved information, an accountable reviewer and a clear next action.</p><a className="button" href="#workflow-examples">Explore the examples <Arrow /></a></div><Photo scene="technology" priority/></section>
    <section id="workflow-examples" className="section shell"><div className="workflow-catalog">{useCaseItems.map((item, i) => <article key={item.path}><span className="small-number">0{i + 1} / {item.label}</span><h2>{detailContent[item.path].workflow.title}</h2><p>{item.summary}</p><a className="text-link" href={item.path + '/'}>Explore {item.label.toLowerCase()} <Arrow /></a></article>)}</div></section>
  </>;
}
function PointList({ points }: {
    points: Point[];
}) {
    return <ol className="delivery-list">{points.map((p, i) => <li key={p.title}><span className="small-number">0{i + 1}</span><div><h3>{p.title}</h3><p>{p.text}</p></div></li>)}</ol>;
}
const allItems = [...industryItems, ...serviceItems, ...useCaseItems];
export function Detail({ item, category }: {
    item: CatalogItem;
    category: string;
}) {
    const detail = detailContent[item.path];
    const categoryName = category === 'services' ? 'solutions' : category === 'use-cases' ? 'use cases' : 'industries';
    return <>
    <div className="shell detail-back"><a className="text-link" href={`/${category}/`}><Arrow back/>All {categoryName}</a></div>
    <section className="shell exploration-hero detail-hero"><div><p className="eyebrow">{item.label}</p><h1>{detail.headline}</h1><p className="exploration-lead">{item.summary}</p><a className="button" href={'/contact/?topic=' + encodeURIComponent(item.label)}>Discuss this requirement <Arrow /></a></div><Photo scene={detail.image} priority/></section>
    <nav className="shell section-rail" aria-label="On this page"><a href="#opportunity">The opportunity <Arrow /></a><a href="#workflow">Workflow example <Arrow /></a><a href="#contribution">Dockio’s contribution <Arrow /></a><a href="#value">Measures of value <Arrow /></a></nav>
    <section className="section shell opportunity-section" id="opportunity"><h2>The work behind<br />the opportunity.</h2><p>{detail.context}</p></section>
    <section id="workflow" className="workflow-section"><div className="shell"><p className="eyebrow">ILLUSTRATIVE WORKFLOW</p><div className="workflow-heading"><h2>{detail.workflow.title}</h2><p>{detail.workflow.intro}</p></div></div><div className="workflow-band"><ol className="shell workflow-steps">{detail.workflow.steps.map((step, i) => <li key={step.title}><div className="number-line"><span>0{i + 1}</span></div><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></div></section>
    <section id="contribution" className="section shell contribution-grid"><div><h2>What Dockio brings<br />to the work.</h2><p>Deliverables are shaped to the agreed remit, your existing teams and the next decision you need to make.</p></div><PointList points={detail.deliverables}/></section>
    <section className="considerations-section shell"><div className="section-heading"><h2>Designed for<br />the operating reality.</h2><p>Integration, governance and adoption belong in the requirement from the beginning.</p></div><div className="consideration-columns">{detail.considerations.map(p => <article key={p.title}><h3>{p.title}</h3><p>{p.text}</p></article>)}</div></section>
    <section id="value" className="value-review"><div className="shell"><div className="section-heading"><h2>Make progress<br />visible.</h2><p>Agree a baseline, a sample and a review period before work starts. Compare effort and quality together.</p></div><dl className="measure-grid">{detail.measures.map(m => <div key={m.title}><dt>{m.title}</dt><dd>{m.text}</dd></div>)}</dl><div className="investment-note"><p>Use the evidence to decide what to continue, change or scale. That is the connection we are exploring through our BudgetOps vision.</p><a href="/budgetops/" className="text-link">Explore BudgetOps <Arrow /></a></div></div></section>
    <section className="section shell next-step"><div><h2>A useful<br />first conversation.</h2><p>{detail.next}</p><a href={'/contact/?topic=' + encodeURIComponent(item.label)} className="button button-ink">Share your requirement <Arrow /></a><p className="engagement-note">Agreed hours or days on time and materials. Scope, responsibilities, availability and founder involvement are defined before work starts.</p></div><aside aria-label="Related work"><p className="eyebrow">CONNECTED TO THIS WORK</p>{detail.related.map(path => <a href={path + '/'} className="related-link" key={path}>{allItems.find(i => i.path === path)?.label}<Arrow /></a>)}<a href="/approach/" className="related-link">How engagements work <Arrow /></a></aside></section>
  </>;
}
