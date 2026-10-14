import { useId, useState } from 'react';
import { Arrow, Breadcrumb, LinkButton, NextStep, bookingUrl } from './ui';

type ScenarioKey = 'ready' | 'access' | 'conflict';
type StepState = 'complete' | 'blocked' | 'waiting' | 'review';
type WorkflowStep = { title: string; detail: string; state: StepState };
type WorkflowScenario = {
  label: string;
  status: string;
  title: string;
  description: string;
  steps: WorkflowStep[];
  sources: { title: string; detail: string; state: string }[];
  output: { title: string; reference: string }[];
  owner: string;
  summary: string;
};

const workflowScenarios: Record<ScenarioKey, WorkflowScenario> = {
  ready: {
    label: 'Sources available',
    status: 'Draft prepared · Human review pending',
    title: 'A checklist with its evidence attached.',
    description: 'The requested information is available to the staff member. The workflow prepares a bounded draft and leaves the decision with the reviewer.',
    steps: [
      { title: 'Set the scope', detail: 'Prepare an onboarding checklist. No client decision or system update.', state: 'complete' },
      { title: 'Check permission', detail: 'Confirm that this staff role may read both demo sources.', state: 'complete' },
      { title: 'Retrieve approved sources', detail: 'Use the two approved documents and retain their versions.', state: 'complete' },
      { title: 'Draft with references', detail: 'Attach the relevant section to each checklist item.', state: 'complete' },
      { title: 'Route to a person', detail: 'The relationship manager reviews the draft before use.', state: 'review' },
    ],
    sources: [
      { title: 'S1 / Onboarding Guide · v3', detail: 'Sections 2–3 · Identification and supporting evidence', state: 'Available' },
      { title: 'S2 / Operations Addendum · v2', detail: 'Section 1 · Questionnaire completion', state: 'Available' },
    ],
    output: [
      { title: 'Check the identification pack for completeness.', reference: 'S1 · §2' },
      { title: 'Confirm that supporting source-of-funds evidence is recorded.', reference: 'S1 · §3' },
      { title: 'Include the suitability questionnaire completion status.', reference: 'S2 · §1' },
    ],
    owner: 'Relationship manager · Check applicability and evidence before use.',
    summary: 'Sources available. A three-item draft checklist is prepared with references. Human review is pending. No client approval or system update has taken place.',
  },
  access: {
    label: 'Access unavailable',
    status: 'Paused · Source access required',
    title: 'An access gap becomes a clear handoff.',
    description: 'One required document is outside the staff member’s permissions. The workflow stops before retrieval and explains the dependency to its owner.',
    steps: [
      { title: 'Set the scope', detail: 'Prepare an onboarding checklist from approved information.', state: 'complete' },
      { title: 'Check permission', detail: 'Access to the Operations Addendum is unavailable for this role.', state: 'blocked' },
      { title: 'Retrieve approved sources', detail: 'Required source retrieval is paused. No bypass is attempted.', state: 'waiting' },
      { title: 'Draft with references', detail: 'A complete checklist is not drafted from incomplete access.', state: 'waiting' },
      { title: 'Route to a person', detail: 'The information owner receives the access dependency.', state: 'review' },
    ],
    sources: [
      { title: 'S1 / Onboarding Guide · v3', detail: 'Permission check passed · Retrieval paused', state: 'Permitted' },
      { title: 'S2 / Operations Addendum · v2', detail: 'Permission check failed · Content not retrieved', state: 'Unavailable' },
    ],
    output: [
      { title: 'Record the missing access and the source required.', reference: 'Permission check' },
      { title: 'Ask the information owner to resolve the dependency through the approved process.', reference: 'Human handoff' },
      { title: 'Recheck permissions before resuming the workflow.', reference: 'Resume condition' },
    ],
    owner: 'Information owner · Resolve access or provide an authorised alternative.',
    summary: 'Access unavailable. Source retrieval and drafting are paused. The information owner must resolve the access dependency. The workflow has not substituted an unsupported answer.',
  },
  conflict: {
    label: 'Sources conflict',
    status: 'Held · Policy owner decision required',
    title: 'Make the disagreement visible.',
    description: 'Both sources can be read, but they state different review periods. The workflow preserves the two references and asks the policy owner which instruction applies.',
    steps: [
      { title: 'Set the scope', detail: 'Prepare an onboarding checklist, including the review period.', state: 'complete' },
      { title: 'Check permission', detail: 'Confirm that this staff role may read both demo sources.', state: 'complete' },
      { title: 'Retrieve approved sources', detail: 'Retain both source versions and the conflicting passages.', state: 'complete' },
      { title: 'Draft with references', detail: 'Hold the review-period item rather than choose a rule.', state: 'blocked' },
      { title: 'Route to a person', detail: 'The policy owner confirms the controlling instruction.', state: 'review' },
    ],
    sources: [
      { title: 'S1 / Onboarding Guide · v3', detail: 'Section 4 · Review within five working days', state: 'Conflict' },
      { title: 'S2 / Operations Addendum · v2', detail: 'Section 2 · Review within three working days', state: 'Conflict' },
    ],
    output: [
      { title: 'Onboarding Guide v3 specifies five working days.', reference: 'S1 · §4' },
      { title: 'Operations Addendum v2 specifies three working days.', reference: 'S2 · §2' },
      { title: 'Confirm the controlling version, effective date and applicable scope.', reference: 'Owner decision' },
    ],
    owner: 'Policy owner · Resolve the conflict before the affected item is used.',
    summary: 'Sources conflict. The draft review-period item is held. Both source instructions are shown, and the policy owner must confirm which applies. No rule has been selected automatically.',
  },
};

const stepStateLabels: Record<StepState, string> = {
  complete: 'Complete', blocked: 'Held', waiting: 'Waiting', review: 'Human review',
};

function StepMark({ state, number }: { state: StepState; number: number }) {
  return <span className={`step-mark step-mark-${state}`} aria-hidden="true">{state === 'complete' ? <svg viewBox="0 0 20 20" fill="none"><path d="m5 10 3.2 3.2L15 6.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg> : state === 'blocked' ? '!' : String(number).padStart(2, '0')}</span>;
}

function WorkflowExample() {
  const [scenarioKey, setScenarioKey] = useState<ScenarioKey>('ready');
  const scenario = workflowScenarios[scenarioKey];

  return <section id="workflow" className="section shell workflow-example">
    <div className="example-heading">
      <div><p className="section-label">01 / Governed knowledge workflow</p><h2>A useful answer.<br />An accountable process.</h2></div>
      <p>Follow a banking onboarding request through access, evidence and human review. Change the situation to see how the handoff changes.</p>
    </div>
    <div className="example-toolbar">
      <div><span className="lab-kicker">Change the situation</span><div className="scenario-switcher" role="group" aria-label="Workflow situation">{(Object.keys(workflowScenarios) as ScenarioKey[]).map(key => <button key={key} type="button" aria-pressed={scenarioKey === key} onClick={() => setScenarioKey(key)}>{workflowScenarios[key].label}</button>)}</div></div>
      <span className="example-tag">Scripted example · Fictional policies</span>
    </div>
    <div className="workflow-lab" data-scenario={scenarioKey}>
      <div className="workflow-process">
        <p className="lab-kicker">The workflow</p>
        <ol className="workflow-steps">{scenario.steps.map((step, index) => <li className={`workflow-step is-${step.state}`} key={step.title}>
          <StepMark state={step.state} number={index + 1} />
          <div><div className="workflow-step-heading"><h3>{step.title}</h3><span className="step-state">{stepStateLabels[step.state]}</span></div><p>{step.detail}</p></div>
        </li>)}</ol>
      </div>
      <div className="workflow-workspace">
        <div className="example-request"><span className="lab-kicker">Staff request</span><p>“Prepare an onboarding checklist from the approved guidance. Flag anything a person needs to resolve.”</p></div>
        <div className="source-register"><p className="lab-kicker">Illustrative source register</p>{scenario.sources.map(source => <div className="source-row" key={source.title}><div><h3>{source.title}</h3><p>{source.detail}</p></div><span className="source-state">{source.state}</span></div>)}</div>
        <div className={`workflow-output output-${scenarioKey}`}>
          <p className="workflow-status"><span aria-hidden="true" />{scenario.status}</p><h3>{scenario.title}</h3><p>{scenario.description}</p>
          <ol className="output-items">{scenario.output.map((item, index) => <li key={item.title}><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><p>{item.title}</p><small>{item.reference}</small></li>)}</ol>
          <div className="reviewer-note"><span className="lab-kicker">Accountable next step</span><p>{scenario.owner}</p></div>
        </div>
        <p className="workflow-summary" aria-live="polite" aria-atomic="true">{scenario.summary}</p>
      </div>
    </div>
    <div className="example-footnote"><p>All requests, source names and policy text in this example are fictional. This is a scripted walkthrough, with no live AI, client data or external system connection.</p><a className="link-arrow" href="/contact/?topic=Governed%20banking%20workflow">Discuss your workflow<Arrow /></a></div>
  </section>;
}

type AssumptionKey = 'volume' | 'baseline' | 'assisted' | 'hourlyCost' | 'runCost';
type Assumptions = Record<AssumptionKey, string>;
const defaultAssumptions: Assumptions = { volume: '1200', baseline: '18', assisted: '10', hourlyCost: '1200', runCost: '45000' };
const assumptionFields: { key: AssumptionKey; label: string; unit: string; hint: string; min: number; max: number; step: number }[] = [
  { key: 'volume', label: 'Monthly task volume', unit: 'tasks / month', hint: 'Tasks expected to use the assisted workflow.', min: 0, max: 10000000, step: 1 },
  { key: 'baseline', label: 'Current effort', unit: 'minutes / task', hint: 'Average staff effort per task today.', min: 0.1, max: 1440, step: 0.1 },
  { key: 'assisted', label: 'Estimated assisted effort', unit: 'minutes / task', hint: 'Include review, correction and exceptions.', min: 0, max: 1440, step: 0.1 },
  { key: 'hourlyCost', label: 'Loaded staff cost', unit: '₹ / hour', hint: 'Used to value capacity, not to infer a cash saving.', min: 0, max: 1000000, step: 1 },
  { key: 'runCost', label: 'Monthly operating cost', unit: '₹ / month', hint: 'Include model usage, hosting and support.', min: 0, max: 1000000000, step: 1 },
];
const numberFormat = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 1 });
const moneyFormat = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
const integerFormat = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 });

export function DecisionBrief({ compact = false }: { compact?: boolean }) {
  const inputId = useId();
  const [assumptions, setAssumptions] = useState<Assumptions>({ ...defaultAssumptions });
  const [edited, setEdited] = useState(false);
  const errors: Partial<Record<AssumptionKey, string>> = {};
  const values = {} as Record<AssumptionKey, number>;
  for (const field of assumptionFields) {
    const raw = assumptions[field.key];
    const value = Number(raw);
    values[field.key] = value;
    if (!raw.trim() || !Number.isFinite(value)) errors[field.key] = 'Enter a finite number.';
    else if (value < field.min || value > field.max) errors[field.key] = `Enter a value from ${numberFormat.format(field.min)} to ${integerFormat.format(field.max)}.`;
    else if (field.key === 'volume' && !Number.isInteger(value)) errors[field.key] = 'Enter a whole number of tasks.';
  }
  const valid = Object.keys(errors).length === 0;
  const minutesDifference = values.baseline - values.assisted;
  const capacityHours = valid ? values.volume * minutesDifference / 60 : 0;
  const capacityValue = capacityHours * values.hourlyCost;
  const afterRunCost = capacityValue - values.runCost;
  const valuePerTask = minutesDifference / 60 * values.hourlyCost;
  const breakEvenVolume = valid && valuePerTask > 0 ? Math.ceil(values.runCost / valuePerTask) : null;
  const capacityLabel = capacityHours >= 0 ? 'Potential capacity released' : 'Additional capacity consumed';
  const breakEvenLabel = breakEvenVolume === null ? 'Not reached' : `${integerFormat.format(breakEvenVolume)} tasks`;
  const summary = valid
    ? `${numberFormat.format(Math.abs(capacityHours))} hours of ${capacityHours >= 0 ? 'potential capacity released' : 'additional capacity consumed'} per month. Estimated capacity value ${moneyFormat.format(capacityValue)}. After monthly operating cost: ${moneyFormat.format(afterRunCost)}. Operating-cost break-even: ${breakEvenVolume === null ? 'not reached with these assumptions' : `${integerFormat.format(breakEvenVolume)} tasks per month`}. These are estimates, not cash savings or full investment ROI.`
    : 'The estimate is paused. Check the highlighted assumptions to calculate the brief.';

  function briefText() {
    return [
      'DOCKIO / ILLUSTRATIVE INVESTMENT DECISION BRIEF',
      edited ? 'Scenario: Your assumptions' : 'Scenario: Illustrative inputs',
      'Not a customer result or a live BudgetOps product.',
      '', 'ASSUMPTIONS',
      ...assumptionFields.map(field => `${field.label}: ${numberFormat.format(values[field.key])} ${field.unit}`),
      '', 'ESTIMATE',
      `${capacityLabel}: ${numberFormat.format(Math.abs(capacityHours))} hours / month`,
      `Estimated capacity value: ${moneyFormat.format(capacityValue)} / month`,
      `Monthly operating cost: ${moneyFormat.format(values.runCost)}`,
      `Capacity value after operating cost: ${moneyFormat.format(afterRunCost)} / month`,
      `Operating-cost break-even: ${breakEvenVolume === null ? 'Not reached with these assumptions' : `${integerFormat.format(breakEvenVolume)} tasks / month`}`,
      '', 'FORMULAS',
      'Capacity hours = monthly volume × (current minutes − assisted minutes) ÷ 60.',
      'Capacity value = capacity hours × loaded hourly staff cost.',
      'Capacity value after operating cost = capacity value − monthly operating cost.',
      'Operating-cost break-even = monthly operating cost ÷ positive capacity value per task, rounded up.',
      '', 'BEFORE AN INVESTMENT DECISION',
      'Validate the baseline, task eligibility, adoption, quality and review effort with an observed pilot.',
      'Explain how released capacity would be used. It is not automatically a cash saving.',
      'Add implementation, integration, change, assurance and transition costs. These are excluded from this estimate.',
      'Consider revenue, service quality and risk outcomes separately. They are not valued in this example.',
      'Treat break-even as a capacity-value comparison against operating cost, not an investment payback period.',
      '', 'LOCAL EXAMPLE',
      'Assumptions are held in this page only. This example does not submit or store them.',
      'Discuss the developing BudgetOps platform: https://www.dockio.in/contact/?route=budgetops',
    ].join('\n');
  }

  function downloadBrief() {
    if (!valid) return;
    const url = URL.createObjectURL(new Blob([briefText()], { type: 'text/plain;charset=utf-8' }));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'Dockio-Illustrative-Investment-Brief.txt';
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return <section id="decision-brief" className={`decision-example${compact ? ' decision-example-compact' : ''}`}>
    <div className="section shell">
      <div className="example-heading"><div><p className="section-label">{compact ? 'Explore the thinking' : '02 / Investment decision brief'}</p><h2>Change an assumption.<br />See what it changes.</h2></div><p>A useful investment conversation starts with visible assumptions. Try this capacity estimate, then examine what a funding decision would still need.</p></div>
      <div className="example-toolbar"><div><span className="lab-kicker">Interactive example</span><span className="assumption-mode">{edited ? 'Your assumptions' : 'Illustrative inputs'}</span></div><button className="text-button reset-assumptions" type="button" onClick={() => { setAssumptions({ ...defaultAssumptions }); setEdited(false); }}>Reset illustrative inputs<span aria-hidden="true">↺</span></button></div>
      <div className="decision-lab">
        <div className="assumption-panel">
          <div className="lab-panel-heading"><span className="lab-kicker">Inputs / Monthly view</span><h3>Make the case explicit.</h3></div>
          <div className="assumption-fields">{assumptionFields.map(field => {
            const id = `${inputId}-${field.key}`;
            return <div className={`assumption-field${errors[field.key] ? ' has-error' : ''}`} key={field.key}><label htmlFor={id}>{field.label}</label><div className="assumption-input"><input id={id} type="number" inputMode="decimal" min={field.min} max={field.max} step={field.step} value={assumptions[field.key]} onChange={event => { setAssumptions(current => ({ ...current, [field.key]: event.target.value })); setEdited(true); }} aria-invalid={!!errors[field.key]} aria-describedby={`${id}-hint${errors[field.key] ? ` ${id}-error` : ''}`} /><span>{field.unit}</span></div><p id={`${id}-hint`} className="assumption-hint">{field.hint}</p>{errors[field.key] && <p id={`${id}-error`} className="assumption-error">{errors[field.key]}</p>}</div>;
          })}</div>
          <p className="local-assumptions-note">Calculated in your browser. These inputs are not submitted or saved.</p>
        </div>
        <div className="decision-output">
          <div className="brief-masthead"><span>Dockio / Decision brief</span><span>Illustrative estimate</span></div>
          <h3>What would this<br />change in the work?</h3>
          {valid ? <>
            <div className="brief-print-assumptions"><h4>{edited ? 'Your assumptions / Monthly view' : 'Illustrative assumptions / Monthly view'}</h4><dl>{assumptionFields.map(field => <div key={field.key}><dt>{field.label}</dt><dd>{numberFormat.format(values[field.key])} {field.unit}</dd></div>)}</dl></div>
            <div className="capacity-metric"><span>{capacityLabel}</span><p>{numberFormat.format(Math.abs(capacityHours))}<small>hours / month</small></p></div>
            <dl className="metric-pair"><div><dt>Estimated capacity value</dt><dd>{moneyFormat.format(capacityValue)}<small>/ month</small></dd></div><div><dt>Monthly operating cost</dt><dd>{moneyFormat.format(values.runCost)}<small>/ month</small></dd></div></dl>
            <dl className="net-capacity"><div><dt>Capacity value after operating cost</dt><dd>{moneyFormat.format(afterRunCost)}<small>/ month</small></dd></div></dl>
            <div className="break-even"><span>Operating-cost break-even</span><strong>{breakEvenLabel}</strong><small>{breakEvenVolume === null ? 'No positive capacity value per task with these inputs.' : 'Per month, assuming constant effort and unit cost.'}</small></div>
          </> : <div className="estimate-paused"><span aria-hidden="true">—</span><h4>Check the assumptions.</h4><p>Complete the highlighted inputs to calculate this brief.</p></div>}
          <p className="decision-summary" aria-live="polite" aria-atomic="true">{summary}</p>
          <div className="brief-boundary"><strong>Capacity is not cash.</strong><p>Implementation, integration and change costs are excluded. This is not a full ROI or investment payback calculation.</p></div>
          <div className="brief-actions"><button className="text-button" type="button" disabled={!valid} onClick={downloadBrief}>Download this brief<Arrow diagonal /></button><button className="text-button" type="button" disabled={!valid} onClick={() => { if (valid) window.print(); }}>Print sample brief<Arrow diagonal /></button></div>
        </div>
      </div>
      <details className="calculation-notes"><summary>How this estimate is calculated<span aria-hidden="true">+</span></summary><div><p><strong>Capacity hours</strong> = monthly volume × (current effort − assisted effort) ÷ 60.</p><p><strong>Capacity value</strong> = capacity hours × loaded staff cost. Subtract monthly operating cost to show the capacity-value balance.</p><p><strong>Operating-cost break-even</strong> = monthly operating cost ÷ positive capacity value per task, rounded up. If assisted effort does not create positive capacity value, break-even is not reached in this model.</p><p>The estimate assumes the stated monthly volume uses the workflow, with constant average effort and cost. It does not model adoption ramp-up, variable usage pricing, quality changes, cash savings, implementation costs or a financing period.</p></div></details>
      <div className="decision-review"><div><p className="section-label">Before a funding decision</p><h3>The questions<br />behind the number.</h3></div><ol><li><span>01</span><div><h4>Can the estimate survive a pilot?</h4><p>Observe eligibility, adoption, review effort, exceptions and quality against an agreed baseline.</p></div></li><li><span>02</span><div><h4>How would the capacity be used?</h4><p>Name the work that benefits. Establish whether any cost could actually be avoided.</p></div></li><li><span>03</span><div><h4>What is the full cost of the change?</h4><p>Add implementation, integration, assurance, transition and change effort before judging the investment.</p></div></li></ol></div>
      <div className="example-footnote"><p>Not a customer result or a live BudgetOps product. BudgetOps is in development; this example shows the kind of assumption-led conversation we want to make clearer.</p><a className="link-arrow" href="/contact/?route=budgetops&topic=Investment%20decision%20brief">Ask about BudgetOps<Arrow /></a></div>
    </div>
  </section>;
}

export function Examples() {
  return <>
    <Breadcrumb title="Working examples" />
    <section className="examples-hero shell"><p className="section-label">Dockio / Working examples</p><h1>See the work.<br /><span>Change the assumptions.</span></h1><div className="examples-intro"><p className="lead">A workflow that knows when to pause. An investment estimate you can question. Explore two practical examples of how we think about enterprise AI.</p><p>Illustrative by design. These are interactive examples, not customer results, live AI services or released BudgetOps features.</p></div><div className="actions"><LinkButton href={bookingUrl} external>Bring your business challenge</LinkButton></div></section>
    <nav className="example-switcher shell" aria-label="Explore the examples"><a href="#workflow"><span>01 / Governed knowledge</span><h2>Follow the work<br />and its exceptions.</h2><p>Change the access or evidence. See the next step.</p><Arrow /></a><a href="#decision-brief"><span>02 / Investment assumptions</span><h2>Question the numbers.<br />Improve the discussion.</h2><p>Adjust effort and cost. See what a decision still needs.</p><Arrow /></a></nav>
    <WorkflowExample />
    <DecisionBrief />
    <NextStep title="Let’s work through your real context." text="Bring the workflow, the decisions and the constraints. We can help define a practical first scope." />
  </>;
}
