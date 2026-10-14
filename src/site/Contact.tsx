import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { industries } from './catalog';

type Route = 'initiative' | 'procurement' | 'embedded' | 'budgetops' | 'partner';

const enquiryService = 'https://dockio-enquiries.sankalp.chatgpt.site';
const unsupportedControlCharacters = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/;
const enquiryEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    heading: 'Share your requirement.',
    prompt: 'Share a non-confidential overview of your requirement and the support you are looking for.',
  },
  embedded: {
    label: 'Explore embedded support',
    description: 'Specialist capability working alongside your team.',
    heading: 'Add the right capability.',
    prompt: 'What workstream needs support? Tell us about the remit, capabilities and outcomes you need.',
  },
  budgetops: {
    label: 'Explore BudgetOps',
    description: 'Discuss the product in development and your investment process.',
    heading: 'Explore better decisions.',
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
  const [step, setStep] = useState<'edit' | 'review' | 'success'>('edit');
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
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState('');
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const [reference, setReference] = useState('');
  const [status, setStatus] = useState('');
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const reviewHeading = useRef<HTMLHeadingElement>(null);
  const formHeading = useRef<HTMLHeadingElement>(null);
  const successHeading = useRef<HTMLHeadingElement>(null);
  const errorNotice = useRef<HTMLDivElement>(null);
  const preview = useRef<HTMLTextAreaElement>(null);
  const didChangeStep = useRef(false);
  const submissionLock = useRef(false);
  const idempotencyKey = useRef<string | null>(null);
  const submissionAttempted = useRef(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryRoute = params.get('route');
    if (isRoute(queryRoute)) setRoute(queryRoute);
    const requestedIndustry = params.get('industry');
    if (requestedIndustry && industries.some(item => item.title === requestedIndustry)) setIndustry(requestedIndustry);
    const requestedTopic = params.get('topic');
    if (requestedTopic) setTopic(requestedTopic.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '').slice(0, 200));
  }, []);

  useEffect(() => {
    if (step === 'success') {
      successHeading.current?.focus();
    } else if (step === 'review') {
      reviewHeading.current?.focus();
      didChangeStep.current = true;
    } else if (didChangeStep.current) {
      formHeading.current?.focus();
    }
  }, [step]);

  useEffect(() => {
    if (sendError) errorNotice.current?.focus();
  }, [sendError]);

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
    if (submissionLock.current || step === 'success') return;
    // After a submission attempt, retry its existing brief before starting a new one.
    if (submissionAttempted.current) return;
    setRoute(next);
    setStep('edit');
    setStatus('');
    setSendError('');
  }

  function reviewRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const errors: Record<string, string> = {};
    const fields: { id: string; value: string; min: number; max: number; shortMessage: string }[] = [
      { id: 'contact-name', value: name, min: 2, max: 100, shortMessage: 'Please enter your name using at least 2 characters.' },
      { id: 'contact-email', value: email, min: 3, max: 254, shortMessage: 'Please enter a valid work email, such as name@company.com.' },
      { id: 'contact-company', value: company, min: 2, max: 160, shortMessage: 'Please enter your organisation using at least 2 characters.' },
      // Keep an overview concise while satisfying the service’s 10–6,000-character bounds.
      { id: 'contact-brief', value: brief, min: 10, max: 2000, shortMessage: 'Please add a little more detail about your requirement (at least 10 characters).' },
      { id: 'contact-industry', value: industry, min: 0, max: 1000, shortMessage: '' },
      { id: 'contact-budget', value: budget, min: 0, max: 180, shortMessage: '' },
    ];
    if (route === 'initiative' || route === 'partner') fields.push({ id: 'contact-timing', value: timing, min: 0, max: 160, shortMessage: '' });
    if (route === 'procurement') fields.push(
      { id: 'contact-request-type', value: procurementType, min: 0, max: 1000, shortMessage: '' },
      { id: 'contact-deadline', value: deadline, min: 0, max: 120, shortMessage: '' },
      { id: 'contact-sharing', value: documentSharing, min: 0, max: 1000, shortMessage: '' },
    );
    if (route === 'embedded') fields.push(
      { id: 'contact-workstream', value: workstream, min: 0, max: 200, shortMessage: '' },
      { id: 'contact-duration', value: duration, min: 0, max: 100, shortMessage: '' },
      { id: 'contact-arrangement', value: arrangement, min: 0, max: 180, shortMessage: '' },
      { id: 'contact-start', value: start, min: 0, max: 100, shortMessage: '' },
    );
    if (route === 'budgetops') fields.push(
      { id: 'contact-role', value: role, min: 0, max: 180, shortMessage: '' },
      { id: 'contact-funding', value: fundingProcess, min: 0, max: 900, shortMessage: '' },
    );
    for (const field of fields) {
      const element = form.querySelector<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(`#${field.id}`);
      element?.setCustomValidity('');
      const cleaned = field.value.trim();
      let error = '';
      if (cleaned.length < field.min) error = field.shortMessage;
      else if (cleaned.length > field.max) error = `Please keep this field to ${field.max.toLocaleString('en-GB')} characters or fewer.`;
      else if (unsupportedControlCharacters.test(cleaned)) error = 'Please remove unsupported control characters from this field.';
      else if (field.id === 'contact-email' && (!enquiryEmailPattern.test(cleaned) || (element instanceof HTMLInputElement && element.validity.typeMismatch))) error = 'Please enter a valid work email, such as name@company.com.';
      if (error) {
        errors[field.id] = error;
        element?.setCustomValidity(error);
      }
    }
    const consentElement = form.querySelector<HTMLInputElement>('#contact-consent');
    const consentError = consent ? '' : 'Please agree to Dockio using these details to review and respond to your enquiry.';
    consentElement?.setCustomValidity(consentError);
    if (consentError) errors['contact-consent'] = consentError;
    setValidationErrors(errors);
    const firstInvalid = form.querySelector<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(':invalid');
    if (firstInvalid) {
      const details = firstInvalid.closest('details');
      if (details) details.open = true;
      firstInvalid.focus();
      firstInvalid.reportValidity();
      return;
    }
    setStatus('');
    setSendError('');
    setStep('review');
  }

  function clearValidation(id: string) {
    setValidationErrors(current => {
      if (!current[id]) return current;
      const next = { ...current };
      delete next[id];
      return next;
    });
  }

  function startNewEnquiry(keepDetails = false) {
    if (submissionLock.current) return;
    idempotencyKey.current = null;
    submissionAttempted.current = false;
    setReference('');
    setStatus('');
    setSendError('');
    setValidationErrors({});
    setConsent(false);
    setWebsite('');
    if (!keepDetails) {
      setName(''); setEmail(''); setCompany(''); setBrief('');
      setIndustry(''); setTopic(''); setBudget(''); setTiming('');
      setProcurementType(''); setDeadline(''); setDocumentSharing('');
      setWorkstream(''); setDuration(''); setArrangement(''); setStart('');
      setRole(''); setFundingProcess('');
    }
    setStep('edit');
  }

  async function sendEnquiry() {
    if (submissionLock.current || !consent) return;
    submissionLock.current = true;
    setSending(true);
    setSendError('');
    setStatus('');
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 25000);
    try {
      const tokenResponse = await fetch(`${enquiryService}/api/form-token`, {
        method: 'GET', credentials: 'omit', cache: 'no-store',
        headers: { Accept: 'application/json' }, signal: controller.signal,
      });
      if (!tokenResponse.ok) throw new Error('The enquiry service is unavailable.');
      const tokenData: unknown = await tokenResponse.json();
      if (!tokenData || typeof tokenData !== 'object' || !('token' in tokenData) || typeof tokenData.token !== 'string' || !tokenData.token.trim()) {
        throw new Error('The enquiry service could not be reached.');
      }
      if (!idempotencyKey.current) idempotencyKey.current = crypto.randomUUID();
      const context: Record<string, string> = { industry: industry.trim(), topic: topic.trim(), budget: budget.trim() };
      if (route === 'initiative' || route === 'partner') context.timing = timing.trim();
      if (route === 'procurement') Object.assign(context, { procurementType: procurementType.trim(), deadline: deadline.trim(), documentSharing: documentSharing.trim() });
      if (route === 'embedded') Object.assign(context, { workstream: workstream.trim(), duration: duration.trim(), arrangement: arrangement.trim(), start: start.trim() });
      if (route === 'budgetops') Object.assign(context, { role: role.trim(), fundingProcess: fundingProcess.trim() });
      submissionAttempted.current = true;
      const response = await fetch(`${enquiryService}/api/enquiries`, {
        method: 'POST', credentials: 'omit',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({ kind: route, name: name.trim(), email: email.trim(), company: company.trim(), message: brief.trim(), context, consent: true, website, idempotencyKey: idempotencyKey.current, token: tokenData.token }),
      });
      if (!response.ok) {
        if (response.status === 400) {
          const rejected: unknown = await response.json().catch(() => null);
          if (rejected && typeof rejected === 'object' && 'error' in rejected && rejected.error && typeof rejected.error === 'object' && 'code' in rejected.error && ['invalid_fields', 'consent_required'].includes(String(rejected.error.code))) {
            // A validation rejection has not created a lead, so correction can reuse its key.
            submissionAttempted.current = false;
            setSendError('Please check your details and review your enquiry again. It has not been accepted yet.');
            setStep('edit');
            return;
          }
        }
        throw new Error('We could not confirm receipt.');
      }
      const result: unknown = await response.json();
      if (!result || typeof result !== 'object' || !('ok' in result) || result.ok !== true || !('reference' in result) || typeof result.reference !== 'string' || !result.reference.trim() || result.reference.length > 256) {
        throw new Error('We could not confirm receipt.');
      }
      setReference(result.reference.trim());
      setStep('success');
    } catch {
      setSendError('We couldn’t confirm receipt. Your brief is still here. Retry to check the same enquiry, or use the email alternative below.');
    } finally {
      window.clearTimeout(timeout);
      submissionLock.current = false;
      setSending(false);
    }
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
        {(['initiative', 'procurement', 'embedded', 'budgetops'] as Route[]).map(option => <button className={`route-choice${route === option ? ' is-active' : ''}`} type="button" key={option} aria-pressed={route === option} disabled={sending || submissionAttempted.current || step === 'success'} onClick={() => chooseRoute(option)}>
          <span><strong>{routes[option].label}</strong><small>{routes[option].description}</small></span><Arrow />
        </button>)}
      </div>
      <button type="button" className="text-button" aria-pressed={route === 'partner'} disabled={sending || submissionAttempted.current || step === 'success'} onClick={() => chooseRoute('partner')}>Interested in partnering? <Arrow /></button>
      <div className="contact-booking">
        <p>Prefer to talk it through?</p>
        <a href="/book/" className="link-arrow">Book an introductory conversation <Arrow /></a>
      </div>
      <a className="contact-direct" href="mailto:sankalp@dockio.in">sankalp@dockio.in</a>
    </div>

    {step === 'edit' ? <form className="request-form" noValidate onSubmit={reviewRequest} aria-labelledby="contact-form-heading">
      <p className="eyebrow">{information.label}</p>
      <h2 id="contact-form-heading" ref={formHeading} tabIndex={-1}>{information.heading}</h2>
      <p className="form-note">Start with four details. Add context if helpful, then review before sending.</p>
      {sendError && <div className="enquiry-error" ref={errorNotice} role="alert" tabIndex={-1}><p>{sendError}</p></div>}
      {topic && <p className="context-note">About: {topic} <button className="text-button" type="button" onClick={() => setTopic('')}>Clear</button></p>}
      {industry && <p className="context-note">Industry: {industry}</p>}
      <div className="fields-two">
        <div className="field"><label htmlFor="contact-name">Your name <span aria-hidden="true">*</span></label><input id="contact-name" name="name" autoComplete="name" required minLength={2} maxLength={100} aria-invalid={!!validationErrors['contact-name']} aria-describedby={validationErrors['contact-name'] ? 'contact-name-error' : undefined} value={name} onChange={event => { event.target.setCustomValidity(''); clearValidation('contact-name'); setName(event.target.value); }} />{validationErrors['contact-name'] && <p className="form-note enquiry-field-error" id="contact-name-error">{validationErrors['contact-name']}</p>}</div>
        <div className="field"><label htmlFor="contact-email">Work email <span aria-hidden="true">*</span></label><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} aria-invalid={!!validationErrors['contact-email']} aria-describedby={validationErrors['contact-email'] ? 'contact-email-error' : undefined} value={email} onChange={event => { event.target.setCustomValidity(''); clearValidation('contact-email'); setEmail(event.target.value); }} />{validationErrors['contact-email'] && <p className="form-note enquiry-field-error" id="contact-email-error">{validationErrors['contact-email']}</p>}</div>
      </div>
      <div className="field"><label htmlFor="contact-company">Organisation <span aria-hidden="true">*</span></label><input id="contact-company" name="organisation" autoComplete="organization" required minLength={2} maxLength={160} aria-invalid={!!validationErrors['contact-company']} aria-describedby={validationErrors['contact-company'] ? 'contact-company-error' : undefined} value={company} onChange={event => { event.target.setCustomValidity(''); clearValidation('contact-company'); setCompany(event.target.value); }} />{validationErrors['contact-company'] && <p className="form-note enquiry-field-error" id="contact-company-error">{validationErrors['contact-company']}</p>}</div>
      <div className="field"><label htmlFor="contact-brief">Your requirement <span aria-hidden="true">*</span></label><textarea id="contact-brief" name="requirement" rows={5} required minLength={10} maxLength={2000} aria-invalid={!!validationErrors['contact-brief']} aria-describedby={`contact-brief-hint${validationErrors['contact-brief'] ? ' contact-brief-error' : ''}`} value={brief} onChange={event => { event.target.setCustomValidity(''); clearValidation('contact-brief'); setBrief(event.target.value); }} />{validationErrors['contact-brief'] && <p className="form-note enquiry-field-error" id="contact-brief-error">{validationErrors['contact-brief']}</p>}<p id="contact-brief-hint" className="form-note">{information.prompt} Please use a non-confidential overview.</p></div>
      <details className="contact-details">
        <summary>Add useful context <span>Optional</span></summary>
        <div className="field"><label htmlFor="contact-industry">Industry</label><select id="contact-industry" value={industry} onChange={event => setIndustry(event.target.value)}><option value="">Select an industry</option>{industries.map(item => <option key={item.path}>{item.title}</option>)}<option>Other</option></select></div>
        {(route === 'initiative' || route === 'partner') && <div className="field"><label htmlFor="contact-timing">Timing</label><input id="contact-timing" maxLength={160} value={timing} onChange={event => setTiming(event.target.value)} placeholder="A target date or current stage" /></div>}
        {route === 'procurement' && <>
          <div className="fields-two">
            <div className="field"><label htmlFor="contact-request-type">Request type</label><select id="contact-request-type" value={procurementType} onChange={event => setProcurementType(event.target.value)}><option value="">Select a request type</option><option>RFI</option><option>RFP</option><option>RFQ</option><option>Requirements discussion</option><option>Supplier registration</option></select></div>
            <div className="field"><label htmlFor="contact-deadline">Response deadline</label><input id="contact-deadline" maxLength={120} value={deadline} onChange={event => setDeadline(event.target.value)} placeholder="Date, time and time zone" /></div>
          </div>
          <div className="field"><label htmlFor="contact-sharing">Document-sharing preference</label><select id="contact-sharing" value={documentSharing} onChange={event => setDocumentSharing(event.target.value)}><option value="">Choose if helpful</option><option>Please discuss secure document sharing with us</option><option>Documents are available through our procurement portal</option><option>I would prefer to share documents by email</option></select><p className="form-note">Use this form for an overview. We can agree the right way to exchange procurement documents separately.</p></div>
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
      <div className="enquiry-honeypot" aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}><label htmlFor="contact-website">Website</label><input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" maxLength={200} value={website} onChange={event => setWebsite(event.target.value)} /></div>
      <label className="enquiry-consent" htmlFor="contact-consent"><input id="contact-consent" name="consent" type="checkbox" required checked={consent} aria-invalid={!!validationErrors['contact-consent']} aria-describedby={validationErrors['contact-consent'] ? 'contact-consent-error' : undefined} onChange={event => { event.target.setCustomValidity(''); clearValidation('contact-consent'); setConsent(event.target.checked); }} /><span>I agree to Dockio using these details to review and respond to my enquiry, as described in the <a href="/privacy/">privacy notice</a>. <span aria-hidden="true">*</span></span></label>
      {validationErrors['contact-consent'] && <p className="form-note enquiry-field-error" id="contact-consent-error">{validationErrors['contact-consent']}</p>}
      <p className="form-note">* Required. No account needed. Please do not include confidential, financial account or personal customer data.</p>
      <div className="form-actions"><button type="submit" className="button">Review enquiry <Arrow /></button></div>
    </form> : step === 'review' ? <div className="request-form brief-review" aria-labelledby="contact-review-heading" aria-busy={sending}>
      <p className="eyebrow">READY FOR YOUR REVIEW</p>
      <h2 id="contact-review-heading" ref={reviewHeading} tabIndex={-1}>Ready when you are.</h2>
      <p className="form-note">Check your brief and contact details. Selecting “Send enquiry” shares them with Dockio for a response.</p>
      <label htmlFor="contact-preview">Your enquiry</label>
      <textarea id="contact-preview" ref={preview} rows={14} readOnly value={message} />
      <p className="form-note">You have agreed to the use of these details to review and respond to your enquiry. Documents can be exchanged separately through an agreed channel.</p>
      {sendError && <div className="enquiry-error" ref={errorNotice} role="alert" tabIndex={-1}><p>{sendError}</p>{submissionAttempted.current && <p className="form-note">Retry checks the same submission to help avoid duplicates.</p>}</div>}
      <div className="form-actions"><button type="button" className="button" disabled={sending} onClick={sendEnquiry}>{sending ? 'Sending enquiry…' : sendError ? 'Retry enquiry' : 'Send enquiry'}{!sending && <Arrow />}</button>{!submissionAttempted.current && <button className="text-button" type="button" disabled={sending} onClick={() => { setStep('edit'); setStatus(''); setSendError(''); }}>Back to edit</button>}</div>
      <details className="contact-details enquiry-alternatives" open={!!sendError}>
        <summary>Prefer to send by email?</summary>
        <p className="form-note">Open a draft to <a href="mailto:sankalp@dockio.in">sankalp@dockio.in</a>, or keep a copy. An email is sent only when you send it in your email app.</p>
        <div className="form-actions"><a className="link-arrow" href={mailto} onClick={() => setStatus('Your email app may open with the draft. Review it and send there. If it does not open, copy or download your brief.')}>Open email draft <Arrow /></a><button type="button" className="text-button" onClick={copyRequest}>Copy brief</button><button type="button" className="text-button" onClick={downloadRequest}>Download brief (.txt)</button></div>
      </details>
      {sendError && submissionAttempted.current && <button className="text-button enquiry-start-again" type="button" disabled={sending} onClick={() => startNewEnquiry(true)}>Edit as a new enquiry</button>}
      <p className="form-note" role="status" aria-live="polite">{status}</p>
    </div> : <div className="request-form enquiry-success" aria-labelledby="contact-success-heading">
      <p className="eyebrow">ENQUIRY RECEIVED</p>
      <h2 id="contact-success-heading" ref={successHeading} tabIndex={-1}>Thank you, {name.trim().split(/\s+/)[0]}.</h2>
      <p>Your brief is with Dockio for review. The next step is a conversation about your requirement, fit and the right way forward.</p>
      <div className="enquiry-reference"><span>Your reference</span><strong>{reference}</strong></div>
      <p className="form-note">Keep this reference if you contact us about the enquiry. If you have documents to share, please agree a suitable handoff with us first.</p>
      <div className="form-actions"><a href="/book/" className="button">Book a conversation <Arrow /></a><button type="button" className="text-button" onClick={() => startNewEnquiry()}>Start another enquiry</button></div>
    </div>}
    <noscript><p>To share a requirement, email <a href="mailto:sankalp@dockio.in">sankalp@dockio.in</a>. Please include your name, organisation and a non-confidential overview.</p></noscript>
  </section>;
}
