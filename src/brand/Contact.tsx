import { useEffect, useState } from 'react';
import { Arrow } from './Brand';
import { PageIntro } from './Pages';
export function Contact() {
    const [need, setNeed] = useState('');
    const [context, setContext] = useState('');
    const [timing, setTiming] = useState('');
    const [preview, setPreview] = useState(false);
    const [copyStatus, setCopyStatus] = useState('');
    useEffect(() => { const topic = new URLSearchParams(window.location.search).get('topic'); if (topic)
        setNeed(`I'd like to discuss ${topic}.`); }, []);
    useEffect(() => { if (preview)
        document.getElementById('preview-heading')?.focus(); }, [preview]);
    const brief = `Hello Sankalp,\n\nI'd like to discuss an AI requirement with Dockio.\n\nOur priority or requirement:\n${need.trim()}\n\nOrganization, role and context:\n${context.trim() || 'To discuss'}\n\nTiming and support needed:\n${timing.trim() || 'To discuss'}\n\nThank you.`;
    const mailto = `mailto:sankalp@dockio.in?subject=${encodeURIComponent('Dockio — AI requirement')}&body=${encodeURIComponent(brief)}`;
    async function copyBrief() { try {
        await navigator.clipboard.writeText(brief);
        setCopyStatus('Brief copied. You can paste it into your email app.');
    }
    catch {
        setCopyStatus('Select and copy the brief below.');
        document.querySelector<HTMLTextAreaElement>('#brief-preview')?.select();
    } }
    return <section className="section shell"><PageIntro label="LET’S CONNECT" title="What would you like AI to change?"><p>Bring an ambition, a delivery challenge or an initiative already in motion. Tell us what would make the work more useful for your business.</p></PageIntro><div className="contact-grid"><form className="brief-form" onSubmit={e => { e.preventDefault(); if (!need.trim()) {
        const field = document.getElementById('requirement') as HTMLTextAreaElement;
        field.setCustomValidity('Tell us a little about your requirement.');
        field.reportValidity();
        return;
    } setPreview(true); setCopyStatus(''); }}><h2>A little context.<br />A better conversation.</h2><label htmlFor="requirement">Your priority or requirement <span>Required</span></label><textarea id="requirement" rows={5} required maxLength={1400} value={need} onChange={e => { e.target.setCustomValidity(''); setNeed(e.target.value); setPreview(false); }} placeholder="What needs to move forward? What would a useful result look like?"/><label htmlFor="context">Your organization, role and context <span>Optional</span></label><textarea id="context" rows={3} maxLength={600} value={context} onChange={e => { setContext(e.target.value); setPreview(false); }} placeholder="Current stage, systems involved or constraints to consider"/><label htmlFor="timing">Timing and support needed <span>Optional</span></label><input id="timing" maxLength={250} value={timing} onChange={e => { setTiming(e.target.value); setPreview(false); }} placeholder="Target dates, expected commitment or working arrangement"/><p className="form-note">Use a non-confidential overview. Your draft stays in this browser until you choose to open and send it by email.</p><button className="button button-ink" type="submit">Review your brief <Arrow /></button>{preview && <section className="brief-preview" aria-labelledby="preview-heading"><h3 id="preview-heading" tabIndex={-1}>Your email brief</h3><p>Review the draft, then open it in your email app to send.</p><label className="sr-only" htmlFor="brief-preview">Email brief preview</label><textarea id="brief-preview" readOnly value={brief} rows={13}/><div className="preview-actions"><a href={mailto} className="button">Open email draft <Arrow /></a><button type="button" className="text-link" onClick={copyBrief}>Copy brief</button></div><p role="status">{copyStatus}</p></section>}</form><aside className="contact-aside"><span className="contact-dot"/><p className="eyebrow">DIRECT TO THE FOUNDER</p><h2>Start a conversation<br />with Sankalp.</h2><a className="contact-email" href="mailto:sankalp@dockio.in">sankalp@dockio.in <Arrow /></a><div className="aside-rule"/><h3>What happens next</h3><p>We review your requirement and discuss the outcome, scope and fit. If there is a useful way forward, we agree the remit, availability, hours or days, rate and founder involvement.</p><p>Finance-first. Cross-industry and global enquiries welcome. Working arrangements agreed around your team.</p><a className="text-link" href="/approach/">Our working model <Arrow /></a></aside></div></section>;
}
