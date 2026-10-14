import { Arrow } from './Brand';
import { insights, type Insight } from './insightContent';

export function Insights() {
 return <>
 <section className="shell insights-opening"><p className="eyebrow">DOCKIO PERSPECTIVES</p><h1>Questions worth<br />working through.</h1><p className="exploration-lead">Practical guidance for the decisions between an AI idea and an owned, useful workflow. Start with the question closest to your current work.</p></section>
 <section className="shell insight-index">{insights.map((item,i)=><article key={item.path}><div><span className="insight-number">0{i+1}</span><p className="eyebrow">{item.theme}</p></div><div><h2><a href={item.path+'/'}>{item.title}<span>.</span></a></h2><p>{item.description}</p><a className="text-link" href={item.path+'/'}>Read the perspective <Arrow /></a></div></article>)}</section>
 <section className="shell insight-note"><p>These are Dockio’s working perspectives on enterprise AI delivery. Examples illustrate an approach; they are not client case studies or claims of achieved results.</p><a className="text-link" href="/services/">Connect the thinking to your requirement <Arrow /></a></section>
 </>;
}

export function InsightArticle({ insight }: { insight: Insight }) {
 return <article className="insight-article">
 <header className="shell article-opening"><a className="text-link" href="/insights/"><Arrow back />All perspectives</a><p className="eyebrow">{insight.theme}</p><h1>{insight.title}<span>.</span></h1><p className="article-byline">A Dockio perspective · Practical guidance</p><p className="article-lead">{insight.intro}</p></header>
 <div className="shell article-layout"><nav aria-label="In this perspective"><p className="eyebrow">IN THIS PERSPECTIVE</p>{insight.sections.map((s,i)=><a key={s.id} href={'#'+s.id}><span>0{i+1}</span>{s.title}</a>)}</nav><div className="article-body">{insight.sections.map(s=><section id={s.id} key={s.id}><h2>{s.title}</h2>{s.paragraphs.map(p=><p key={p}>{p}</p>)}{s.questions&&<aside className="article-questions"><h3>Questions to take into the work</h3><ul>{s.questions.map(q=><li key={q}>{q}</li>)}</ul></aside>}</section>)}<aside className="article-takeaway"><p className="eyebrow">A USEFUL NEXT STEP</p><p>{insight.takeaway}</p><a className="text-link" href={insight.nextPath+'/'}>{insight.nextLabel}<Arrow /></a></aside></div></div>
 <section className="shell further-reading"><p className="eyebrow">CONTINUE EXPLORING</p>{insights.filter(i=>i.path!==insight.path).map(i=><a href={i.path+'/'} className="related-link" key={i.path}>{i.title}<Arrow /></a>)}</section>
 </article>;
}
