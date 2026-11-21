import { projectOffers } from './enquiry-worker.mjs';

const booking = 'https://outlook.office.com/book/Sankalp@dockio.in/?ismsaljsauthenabled';
const calendar = label => `<a class="project-link" data-booking href="${booking}" target="_blank" rel="noopener noreferrer">${label}</a>`;

export function projectEnquiryPage() {
  return {
    title:'Scope an enterprise AI implementation or submit a project RFI',
    description:'Send Dockio your work email, company and a short project description or sanitised PDF. Receive an enquiry reference and choose a discussion time.',
    breadcrumbs:[{name:'Home',route:'/'},{name:'Project enquiry',route:'/project-enquiry'}],
    body:`<nav class="seo-breadcrumb wrap" aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li><li><span aria-current="page">Project enquiry</span></li></ol></nav>
    <section class="project-intro"><div class="wrap project-intro-grid"><h1>Discuss your project.</h1><p class="project-lead">Tell us what your team does today and what you want to improve. Send a short description or a PDF, then choose a time for a 30-minute discussion.</p></div></section>
    <div class="wrap project-enquiry-grid"><div><form id="project-enquiry" action="/api/enquiries" method="post" enctype="multipart/form-data">
    <input type="hidden" name="formType" value="project">
    <div class="teams-form-grid"><label>Work email<input name="email" type="email" required autocomplete="email" maxlength="180"></label>
    <label>Company<input name="company" required autocomplete="organization" maxlength="180"></label></div>
    <label class="project-focus">Project focus<select name="offer">${Object.entries(projectOffers).map(([key,label]) => `<option value="${key}">${label}</option>`).join('')}</select></label>
    <fieldset aria-describedby="project-brief-hint"><legend>Project brief</legend>
    <p id="project-brief-hint">Describe the workflow, attach a PDF, or include both. Keep customer records, credentials and confidential material for an agreed secure channel.</p>
    <label>Workflow or outcome<textarea name="message" rows="4" maxlength="5000" placeholder="What would you like to implement or improve?"></textarea></label>
    <label>Sanitised PDF (up to 5 MB)<input type="file" name="document" accept="application/pdf,.pdf"></label></fieldset>
    <div class="teams-trap" aria-hidden="true"><label>Website<input name="website" tabindex="-1" autocomplete="off"></label></div>
    <label class="teams-consent"><input type="checkbox" name="consent" value="yes" required><span>I agree that Dockio may use this information to respond to my enquiry. <a href="/privacy/">Privacy notice</a>.</span></label>
    <button type="submit" class="project-button">Send project brief</button><p id="project-status" role="status" aria-live="polite"></p>
    <noscript><p>To submit without JavaScript, email <a href="mailto:sankalp@dockio.in">sankalp@dockio.in</a>.</p></noscript></form>
    <section id="project-confirmation" hidden aria-live="polite"><h2 tabindex="-1">Project brief received</h2><p id="project-received"></p><p class="discussion-reference">Enquiry reference <strong id="project-reference"></strong></p>
    <p>You can now choose a time in Microsoft Bookings. Include your reference in the meeting notes so we can match the call to your brief.</p>
    <div class="project-actions">${calendar('Choose a discussion time')}<button class="button secondary" id="project-copy-reference" type="button">Copy reference</button></div><p id="project-copy-status" role="status"></p></section></div>
    <aside><h2>Prefer to talk first?</h2><p>You can book a call directly. Bring the workflow, the systems involved and any deadline.</p>
    ${calendar('Book a discussion')}<hr><p>Need someone to join your team? <a class="project-link" href="/contact/?service=teams">Discuss a specialist</a>.</p>
    <a class="project-link" href="/procurement/">Supplier information</a></aside></div>`
  };
}
