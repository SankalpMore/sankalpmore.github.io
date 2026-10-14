import { Arrow } from './Brand';
import { SceneImage } from './Exploration';
import { type CatalogItem, serviceItems } from './catalog';
import { detailContent } from './detailContent';

const priorityPath = '/services/governance-adoption-sprint';
const governPath = '/services/chatgpt-enterprise-foundation';
const deliveryPath = '/services/codex-workflow-implementation';

export function ServicePage({ item }: { item: CatalogItem }) {
  const d = detailContent[item.path];
  const type = item.path === priorityPath ? 'priority' : item.path === governPath ? 'govern' : item.path === deliveryPath ? 'delivery' : 'adoption';
  return <>
    <div className="shell detail-back"><a className="text-link" href="/services/"><Arrow back />All solutions</a></div>
    <section className={`shell service-opening service-${type}`}>
      <div><p className="eyebrow">{item.label}</p><h1>{d.headline}</h1><p className="exploration-lead">{item.summary}</p><a className="button" href={'/contact/?topic=' + encodeURIComponent(item.label)}>Discuss this requirement <Arrow /></a></div>
      <figure><SceneImage scene={d.image} priority /><figcaption>Illustrative workplace scene</figcaption></figure>
    </section>
    <nav className="shell section-rail" aria-label="On this page"><a href="#starting-point">When this helps <Arrow /></a><a href="#working-model">The working model <Arrow /></a><a href="#deliverables">What you take forward <Arrow /></a><a href="#engagement">Shape the engagement <Arrow /></a></nav>
    <section id="starting-point" className="section shell service-context"><p className="eyebrow">THE STARTING POINT</p><h2>{type === 'priority' ? 'A decision before a commitment.' : type === 'govern' ? 'Define the work around the answer.' : type === 'delivery' ? 'The gaps between teams are delivery work.' : 'Adoption happens inside a working day.'}</h2><p>{d.context}</p></section>
    {type === 'priority' ? <PrioritizationModel /> : type === 'govern' ? <GovernedModel /> : type === 'delivery' ? <DeliveryModel /> : <AdoptionModel />}
    <section id="deliverables" className="section shell service-deliverables"><div><p className="eyebrow">WHAT YOU TAKE FORWARD</p><h2>{type === 'priority' ? 'A requirement people can act on.' : type === 'govern' ? 'A task specification. An operating agreement.' : type === 'delivery' ? 'An accepted release with an owner.' : 'A team able to keep improving.'}</h2><p>The final deliverables follow the agreed remit. They should be usable by the people making the next decision and doing the next piece of work.</p></div><ol className="delivery-list">{d.deliverables.map((p,i)=><li key={p.title}><span className="small-number">0{i+1}</span><div><h3>{p.title}</h3><p>{p.text}</p></div></li>)}</ol></section>
    <section className="shell service-example"><div><p className="eyebrow">AN ILLUSTRATIVE APPLICATION</p><h2>{d.workflow.title}</h2><p>{d.workflow.intro}</p></div><ol>{d.workflow.steps.map((p,i)=><li key={p.title}><span>0{i+1}</span><div><h3>{p.title}</h3><p>{p.text}</p></div></li>)}</ol></section>
    <section className="value-review"><div className="shell"><div className="section-heading"><h2>{type === 'priority' ? 'Make uncertainty visible.' : type === 'govern' ? 'Check more than completion.' : type === 'delivery' ? 'Track the route into use.' : 'Look beyond attendance.'}</h2><p>Agree the evidence, its owner and the review period. These are proposed measures to shape together, not claimed results.</p></div><dl className="measure-grid">{d.measures.map(m=><div key={m.title}><dt>{m.title}</dt><dd>{m.text}</dd></div>)}</dl><div className="investment-note"><p>Connect the evidence to the decision it should inform.</p><a className="text-link" href="/value-realization/">Our approach to value <Arrow /></a></div></div></section>
    <section id="engagement" className="section shell next-step"><div><p className="eyebrow">SHAPE THE ENGAGEMENT</p><h2>Start with a defined piece of work.</h2><p>{d.next}</p><a className="button" href={'/contact/?topic=' + encodeURIComponent(item.label)}>Prepare your brief <Arrow /></a><p className="engagement-note">Agreed hours or days on time and materials. Scope, rate, responsibilities, availability and founder involvement are specified before commitment. Remote or other working arrangements are agreed around the requirement.</p></div><aside><p className="eyebrow">WHAT WE NEED FROM YOUR TEAM</p><ul className="plain-list">{(type==='priority'?['A workflow owner and access to the people doing the task.','Representative inputs and outputs through approved channels.','A sponsor able to resolve priorities and agree the next decision.']:type==='govern'?['Business and technical owners for the task and its sources.','Approved environments, access and representative evaluation examples.','Reviewers who can define acceptable outputs and important failure cases.']:type==='delivery'?['Named workstream owners and a sponsor for unresolved decisions.','Your approved architecture, delivery and change processes.','Practitioner time for acceptance, handover and early operational use.']:['A workflow owner, practitioners and people who review the outputs.','Time to observe representative work cycles and practice the task.','A route to resolve tool, source and process issues raised by the team.']).map(t=><li key={t}>{t}</li>)}</ul><a className="text-link" href="/approach/">Responsibilities and ways of working <Arrow /></a></aside></section>
    <section className="shell service-next"><p className="eyebrow">CONNECTED SUPPORT</p>{serviceItems.filter(s=>s.path!==item.path).map(s=><a className="related-link" key={s.path} href={s.path+'/'}>{s.label}<Arrow /></a>)}</section>
  </>;
}

function PrioritizationModel() {
 return <section id="working-model" className="decision-model"><div className="shell"><p className="eyebrow">THE DECISION SHEET</p><h2>A decision you can explain.</h2><p className="model-intro">Put the opportunity, evidence and open questions on the same page. A useful priority has a reason to proceed and a clear account of what remains uncertain.</p><dl className="decision-rows">{[
 ['Value','What changes in the business?','Name the task, its frequency, current effort and intended outcome. Keep an expected benefit distinct from an observed baseline.'],
 ['Readiness','Can the sources and systems support it?','Identify authoritative information, permissions, source quality and integration dependencies. Give each unresolved question an owner.'],
 ['Ownership','Who accepts the result?','Connect the sponsor, workflow owner, practitioners and reviewers. Agree the evidence they need to accept the next increment.'],
 ['Boundaries','Where must the workflow stop?','Define the output, exclusions, human decisions and exception paths. Make the cost of an incorrect or unsupported result part of the requirement.'],
 ].map(([label,title,text])=><div key={label}><dt>{label}</dt><dd><h3>{title}</h3><p>{text}</p></dd></div>)}</dl><div className="decision-outcomes">{[
 ['Proceed','The next increment is bounded, ownership is clear and the key dependencies can be resolved within the commitment.'],
 ['Investigate','There is potential, but a source, quality or value assumption needs a smaller test before implementation.'],
 ['Defer','The case or readiness is insufficient. Record what must change and when the decision should be revisited.'],
 ].map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>;
}

function GovernedModel() {
 return <section id="working-model" className="governed-model"><div className="shell"><p className="eyebrow">THE WORKFLOW CONTRACT</p><h2>Sources. Task. Review. Action.</h2><p className="model-intro">Make each boundary explicit before connecting a task to a tool. The specification should explain what is permitted, what must be checked and what happens when the task cannot proceed.</p><ol className="contract-flow">{[
 ['Approved sources','Which version is authoritative?','Source ownership, freshness and permissions travel with the information. Missing or conflicting evidence remains visible.'],
 ['A bounded task','What is the expected output?','Instructions, context and tools support a defined job. Examples show acceptable work, ambiguous cases and when to stop.'],
 ['Accountable review','Who can accept the result?','Give the reviewer source references, uncertainties and a clear difference between generated content and approved information.'],
 ['An authorized action','What may happen next?','Publication, messages and system updates follow the agreed authorization path, with fallback and change ownership.'],
 ].map(([title,q,text],i)=><li key={title}><span className="path-index">0{i+1}<Arrow /></span><h3>{title}</h3><strong>{q}</strong><p>{text}</p></li>)}</ol><div className="action-boundary"><h3>Read, draft and write are different permissions.</h3><p>A task may read an approved source and prepare a draft without being allowed to send it or update a system. Those action boundaries belong in both the requirement and the tests.</p></div><div className="two-notes"><article><h3>Evaluate the exceptions.</h3><p>Include unavailable tools, restricted sources, old versions and questions beyond the task. Review failures with business owners, not only successful examples.</p></article><article><h3>Keep the specification alive.</h3><p>Agree who reviews changes to instructions, tools and sources. Reuse the evaluation pack when a dependency changes and maintain a manual route when needed.</p></article></div></div></section>;
}

function DeliveryModel() {
 return <section id="working-model" className="delivery-model"><div className="shell"><p className="eyebrow">ONE VIEW OF DELIVERY</p><h2>Connect the dependencies.<br />Name the decisions.</h2><p className="model-intro">An embedded PM or PMO remit connects work already owned across the organization. Selective development is defined separately, with explicit acceptance and handover.</p><div className="delivery-map"><div className="delivery-center"><span>SHARED DELIVERY VIEW</span><h3>Requirement → implementation → accepted use</h3><p>One sequence of decisions, dependencies and evidence.</p></div><div className="delivery-owners">{[
 ['Business & workflow','Priority, requirements, acceptance and operational ownership.'],
 ['Platform & data','Identity, approved sources, architecture and environment access.'],
 ['Risk & review','Controls, exception handling and required approval evidence.'],
 ['Delivery & support','Build, test, release, fallback and ongoing maintenance.'],
 ].map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div><div className="release-gates"><h3>Three questions before a release.</h3><ol><li><strong>Ready to build?</strong><span>Inputs, outputs, owners and integration assumptions are understood.</span></li><li><strong>Ready to accept?</strong><span>Representative tasks and failure paths have evidence against the agreed criteria.</span></li><li><strong>Ready to operate?</strong><span>Practitioners, support owners, guidance and fallback routes are in place.</span></li></ol></div><div className="two-notes"><article><h3>Coordinate the work.</h3><p>Maintain dependencies, risks, decisions and sponsor updates. Bring the right owner to an unresolved issue and keep business acceptance connected to technical delivery.</p></article><article><h3>Build where it serves the remit.</h3><p>Scope a specific tool, integration or workflow increment where appropriate. Agree what Dockio develops, what existing teams deliver and who maintains it.</p></article></div></div></section>;
}

function AdoptionModel() {
 return <section id="working-model" className="adoption-model"><div className="shell"><p className="eyebrow">DESIGNED AROUND REAL WORK</p><h2>Three roles.<br />One usable workflow.</h2><p className="model-intro">Enablement works best when it helps people complete their actual task, judge its output and resolve what goes wrong. Bring each role into the working model.</p><div className="adoption-roles">{[
 ['01','The practitioner','Can I use it in my normal work?',['A relevant task and approved starting material.','Practice with ordinary and difficult examples.','Clear guidance on when to pause or escalate.']],
 ['02','The reviewer','Can I accept what it produces?',['Sources and uncertainties visible in the output.','Examples of quality and material corrections.','An agreed route for returning work or recording feedback.']],
 ['03','The workflow owner','Can the team sustain it?',['Ownership of guidance, feedback and source changes.','A support route and an improvement backlog.','Evidence from completed work cycles.']],
 ].map(([n,title,q,points])=><article key={String(n)}><span className="small-number">{n}</span><h3>{title}</h3><p>{q}</p><ul>{(points as string[]).map(p=><li key={p}>{p}</li>)}</ul></article>)}</div><div className="adoption-loop"><h3>Observe → practice → use → review</h3><p>Work through normal cycles with the team. Use feedback to distinguish a learning need from a source, access or process problem, then assign the right improvement.</p></div><div className="friction-list"><h3>Respond to the reason adoption stalls.</h3>{[
 ['“I cannot find the right information.”','Resolve source access or information design with the owner.'],
 ['“Checking the draft takes longer.”','Review task boundaries, output structure and evaluation examples.'],
 ['“I do not know who can fix this.”','Make support and change ownership explicit in the handover.'],
 ].map(([problem,response])=><div key={problem}><p>{problem}</p><p>{response}</p></div>)}</div></div></section>;
}
