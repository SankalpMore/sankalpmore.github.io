import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { industries } from './catalog';

type Route = 'initiative' | 'procurement' | 'embedded' | 'budgetops' | 'partner';

const routes: Record<Route, { label: string; description: string; heading: string; prompt: string }> = {
  initiative: {
    label: 'Discuss an AI initiative',
    description: 'A business priority, a new capability or work already in motion.',
    heading: 'What needs to move forward?',
    prompt: 'Tell us about the business problem, where things stand and what a useful result would look like.',
  },
  procurement: {
    label: 'Share an RFI or RFP',
    description: 'A formal opportunity, scope or supplier requirement.',
    heading: 'Bring us into the right conversation.',
    prompt: 'Share a non-confidential overview of your requirement and the support you are looking for.',
  },
  embedded: {
    label: 'Explore embedded support',
    description: 'Specialist capability working alongside your team.',
    heading: 'Strengthen the team around the work.',
    prompt: 'What workstream needs support? Tell us about the remit, capabilities and outcomes you need.',
  },
  budgetops: {
    label: 'Explore BudgetOps',
    description: 'Discuss the product in development and your investment process.',
    heading: 'Help shape better investment decisions.',
    prompt: 'Where does preparing, reviewing or evidencing an investment decision become difficult today?',
  },
  partner: {
    label: 'Explore a partnership',
    description: 'Complementary expertise, technology and delivery relationships.',
    heading: 'Build something useful together.',
    prompt: 'Tell us about your organisation, the opportunity and how you see us working together.',
  },
};

function isRoute(value: string | null | undefined): value is Route {
  return !!value && Object.prototype.hasOwnProperty.call(routes, value);
}

function Arrow() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function Contact({ initialRoute }: { initialRoute?: string }) {
  const [route, setRoute] = useState<Route>(isRoute(initialRoute) ? initialRoute : 'initiative');
  const [step, setStep] = useState<'edit' | 'review'>('edit');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [brief, setBrief] = useState('');
  const [industry, setIndustry] = useState('');
  const [topic, setTopic] = useState('');
  const [budget, setBudget] = useState('');
  const [timing, setTiming] = useState('');
  const [procurementType, setProcurementType] = useState('');
  const [deadline, setDeadline] = useState('');
  const [documentSharing, setDocumentSharing] = useState('');
  const [workstream, setWorkstream] = useState('');
  const [duration, setDuration] = useState('');
  const [arrangement, setArrangement] = useState('');
  const [start, setStart] = useState('');
  const [role, setRole] = useState('');
  const [fundingProcess, setFundingProcess] = useState('');
  const [status, setStatus] = useState('');
  const reviewHeading = useRef<HTMLHeadingElement>(null);
  const formHeading = useRef<HTMLHeadingElement>(null);
  const preview = useRef<HTMLTextAreaElement>(null);
  const didChangeStep = useRef(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryRoute = params.get('route');
    if (isRoute(queryRoute)) setRoute(queryRoute);
    const requestedIndustry = params.get('industry');
    if (requestedIndustry && industries.some(item => item.title === requestedIndustry)) setIndustry(requestedIndustry);
    const requestedTopic = params.get('topic');
    if (requestedTopic) setTopic(requestedTopic.slice(0, 200));
  }, []);

  useEffect(() => {
    if (step === 'review') {
      reviewHeading.current?.focus();
      didChangeStep.current = true;
    } else if (didChangeStep.current) {
      formHeading.current?.focus();
    }
  }, [step]);

  const information = routes[route];
  const optional: string[] = [];
  const addDetail = (label: string, value: string) => { if (value.trim()) optional.push(`${label}: ${value.trim()}`); };
  addDetail('Industry', industry);
  addDetail('Service or topic', topic);
  addDetail('Budget or commercial context', budget);
  if (route === 'initiative' || route === 'partner') addDetail('Timing', timing);
  if (route === 'procurement') {
    addDetail('Request type', procurementType);
    addDetail('Response deadline', deadline);
    addDetail('Preferred document-sharing approach', documentSharing);
  }
  if (route === 'embedded') {
    addDetail('Role or workstream', workstream);
    addDetail('Expected duration', duration);
    addDetail('Working arrangement', arrangement);
    addDetail('Desired start', start);
  }
  if (route === 'budgetops') {
    addDetail('My role', role);
    addDetail('Current funding and approval process', fundingProcess);
  }

  const subject = `Dockio | ${information.label} | ${company.trim()}`;
  const message = [
    'Hello Dockio team,',
    '',
    `I would like to ${route === 'procurement' ? 'share a procurement requirement' : route === 'embedded' ? 'discuss embedded support' : route === 'budgetops' ? 'discuss BudgetOps' : route === 'partner' ? 'explore a partnership' : 'discuss an AI initiative'}.`,
    '',
    'OUR REQUIREMENT',
    brief.trim(),
    ...(optional.length ? ['', 'ADDITIONAL CONTEXT', ...optional] : []),
    '',
    'CONTACT DETAILS',
    `Name: ${name.trim()}`,
    `Work email: ${email.trim()}`,
    `Organisation: ${company.trim()}`,
    '',
    'Please let me know the appropriate next step.',
    '',
    `Thank you,\n${name.trim()}`,
  ].join('\n');
  const mailto = `mailto:sankalp@dockio.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  function chooseRoute(next: Route) {
    setRoute(next);
    setStep('edit');
    setStatus('');
  }

  function reviewRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const requiredFields = [
      ['contact-name', name, 'Please enter your name.'],
      ['contact-email', email, 'Please enter your work email.'],
      ['contact-company', company, 'Please enter your organisation.'],
      ['contact-brief', brief, 'Please share a short overview of your requirement.'],
    ];
    for (const [id, value, messageText] of requiredFields) {
      const element = form.querySelector<HTMLInputElement | HTMLTextAreaElement>(`#${id}`);
      element?.setCustomValidity(value.trim() ? '' : messageText);
    }
    if (!form.reportValidity()) return;
    setStatus('');
    setStep('review');
  }

  async function copyRequest() {
    try {
      await navigator.clipboard.writeText(`${subject}\n\n${message}`);
      setStatus('Brief copied. Paste it into an email to sankalp@dockio.in.');
    } catch {
      preview.current?.focus();
      preview.current?.select();
      setStatus('The brief is selected below. Use your device’s copy command, then paste it into an email to sankalp@dockio.in.');
    }
  }

  function downloadRequest() {
    const file = new Blob([`To: sankalp@dockio.in\nSubject: ${subject}\n\n${message}`], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Dockio-Enquiry.txt';
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus('Download requested. The text file contains your brief; it has not been sent.');
  }

  return <section className="contact-layout shell">
    <div className="contact-intro">
      <h1>Let’s put AI to work.</h1>
      <p>Bring a business priority, a formal requirement or a team that needs specialist support. We’ll start with the outcome you need.</p>
      <div className="route-choices" aria-label="Choose the purpose of your enquiry">
        {(['initiative', 'procurement', 'embedded', 'budgetops'] as Route[]).map(option => <button className={`route-choice${route === option ? ' is-active' : ''}`} type="button" key={option} aria-pressed={route === option} onClick={() => chooseRoute(option)}>
          <span><strong>{routes[option].label}</strong><small>{routes[option].description}</small></span><Arrow />
        </button>)}
      </div>
      <button type="button" className="text-button" aria-pressed={route === 'partner'} onClick={() => chooseRoute('partner')}>Interested in partnering? <Arrow /></button>
      <div className="contact-booking">
        <p>Prefer to talk it through?</p>
        <a href="/book/" className="link-arrow">Book an introductory conversation <Arrow /></a>
      </div>
      <a className="contact-direct" href="mailto:sankalp@dockio.in">sankalp@dockio.in</a>
    </div>

    {step === 'edit' ? <form className="request-form" onSubmit={reviewRequest} aria-labelledby="contact-form-heading">
      <p className="eyebrow">{information.label}</p>
      <h2 id="contact-form-heading" ref={formHeading} tabIndex={-1}>{information.heading}</h2>
      <p className="form-note">Start with four details. You can add context before reviewing your email draft.</p>
      {topic && <p className="context-note">About: {topic} <button className="text-button" type="button" onClick={() => setTopic('')}>Clear</button></p>}
      {industry && <p className="context-note">Industry: {industry}</p>}
      <div className="fields-two">
        <div className="field"><label htmlFor="contact-name">Your name <span aria-hidden="true">*</span></label><input id="contact-name" name="name" autoComplete="name" required maxLength={100} value={name} onChange={event => { event.target.setCustomValidity(''); setName(event.target.value); }} /></div>
        <div className="field"><label htmlFor="contact-email">Work email <span aria-hidden="true">*</span></label><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={180} value={email} onChange={event => { event.target.setCustomValidity(''); setEmail(event.target.value); }} /></div>
      </div>
      <div className="field"><label htmlFor="contact-company">Organisation <span aria-hidden="true">*</span></label><input id="contact-company" name="organisation" autoComplete="organization" required maxLength={160} value={company} onChange={event => { event.target.setCustomValidity(''); setCompany(event.target.value); }} /></div>
      <div className="field"><label htmlFor="contact-brief">Your requirement <span aria-hidden="true">*</span></label><textarea id="contact-brief" name="requirement" rows={5} required maxLength={2000} aria-describedby="contact-brief-hint" value={brief} onChange={event => { event.target.setCustomValidity(''); setBrief(event.target.value); }} /><p id="contact-brief-hint" className="form-note">{information.prompt} Please use a non-confidential overview.</p></div>
      <details className="contact-details">
        <summary>Add useful context <span>Optional</span></summary>
        <div className="field"><label htmlFor="contact-industry">Industry</label><select id="contact-industry" value={industry} onChange={event => setIndustry(event.target.value)}><option value="">Select an industry</option>{industries.map(item => <option key={item.path}>{item.title}</option>)}<option>Other</option></select></div>
        {(route === 'initiative' || route === 'partner') && <div className="field"><label htmlFor="contact-timing">Timing</label><input id="contact-timing" maxLength={160} value={timing} onChange={event => setTiming(event.target.value)} placeholder="A target date or current stage" /></div>}
        {route === 'procurement' && <>
          <div className="fields-two">
            <div className="field"><label htmlFor="contact-request-type">Request type</label><select id="contact-request-type" value={procurementType} onChange={event => setProcurementType(event.target.value)}><option value="">Select a request type</option><option>RFI</option><option>RFP</option><option>RFQ</option><option>Requirements discussion</option><option>Supplier registration</option></select></div>
            <div className="field"><label htmlFor="contact-deadline">Response deadline</label><input id="contact-deadline" maxLength={120} value={deadline} onChange={event => setDeadline(event.target.value)} placeholder="Date, time and time zone" /></div>
          </div>
          <div className="field"><label htmlFor="contact-sharing">Document-sharing preference</label><select id="contact-sharing" value={documentSharing} onChange={event => setDocumentSharing(event.target.value)}><option value="">Choose if helpful</option><option>I will attach documents when sending the email</option><option>Please discuss secure document sharing with us</option><option>Documents are available through our procurement portal</option></select></div>
        </>}
        {route === 'embedded' && <>
          <div className="field"><label htmlFor="contact-workstream">Role or workstream</label><input id="contact-workstream" maxLength={200} value={workstream} onChange={event => setWorkstream(event.target.value)} placeholder="For example, AI product management or applied AI delivery" /></div>
          <div className="fields-two"><div className="field"><label htmlFor="contact-duration">Expected duration</label><input id="contact-duration" maxLength={100} value={duration} onChange={event => setDuration(event.target.value)} placeholder="For example, three months" /></div><div className="field"><label htmlFor="contact-start">Desired start</label><input id="contact-start" maxLength={100} value={start} onChange={event => setStart(event.target.value)} placeholder="Date or approximate timing" /></div></div>
          <div className="field"><label htmlFor="contact-arrangement">Working arrangement</label><input id="contact-arrangement" maxLength={180} value={arrangement} onChange={event => setArrangement(event.target.value)} placeholder="Location, remote or hybrid, and expected commitment" /></div>
        </>}
        {route === 'budgetops' && <>
          <div className="field"><label htmlFor="contact-role">Your role in investment decisions</label><input id="contact-role" maxLength={180} value={role} onChange={event => setRole(event.target.value)} placeholder="For example, sponsor, product owner or finance partner" /></div>
          <div className="field"><label htmlFor="contact-funding">Your current funding and approval process</label><textarea id="contact-funding" rows={3} maxLength={900} value={fundingProcess} onChange={event => setFundingProcess(event.target.value)} placeholder="How proposals, assumptions and evidence come together today" /></div>
          <p className="form-note">BudgetOps is in development. This enquiry starts a product conversation; it does not create an account or provide platform access.</p>
        </>}
        <div className="field"><label htmlFor="contact-budget">Budget or commercial context</label><input id="contact-budget" maxLength={180} value={budget} onChange={event => setBudget(event.target.value)} placeholder="A range, approved budget or ‘to discuss’ — if known" /></div>
      </details>
      <p className="form-note">* Required. Your details are used to prepare a draft in this browser. Review it before opening your email app. See our <a href="/privacy/">privacy notice</a>.</p>
      <div className="form-actions"><button type="submit" className="button">Review enquiry <Arrow /></button></div>
    </form> : <div className="request-form brief-review" aria-labelledby="contact-review-heading">
      <p className="eyebrow">READY FOR YOUR REVIEW</p>
      <h2 id="contact-review-heading" ref={reviewHeading} tabIndex={-1}>Your enquiry, in your words.</h2>
      <p className="form-note">To: <a href="mailto:sankalp@dockio.in">sankalp@dockio.in</a><br />Subject: {subject}</p>
      <label htmlFor="contact-preview">Email draft</label>
      <textarea id="contact-preview" ref={preview} rows={16} readOnly value={message} />
      <p className="form-note">Your enquiry is sent only when you send the email. Attach RFI/RFP files in your email app or request secure sharing.</p>
      <div className="form-actions"><a className="button" href={mailto} onClick={() => setStatus('Your email app may open with the draft. Review it and send there. If it does not open, copy or download the brief below.')}>Open email draft <Arrow /></a><button className="text-button" type="button" onClick={() => { setStep('edit'); setStatus(''); }}>Back to edit</button></div>
      <div className="form-actions"><button type="button" className="text-button" onClick={copyRequest}>Copy brief</button><button type="button" className="text-button" onClick={downloadRequest}>Download brief (.txt)</button></div>
      <p className="form-note" role="status" aria-live="polite">{status}</p>
    </div>}
  </section>;
}
