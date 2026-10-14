# Dockio design system

The October 2026 quality pass presents Dockio as an enterprise AI transformation and systems-integration company. “Make AI worth the investment” connects business choice, working capability and evidence of value. The design establishes character and lets buyers inspect the shape of the work without implying client evidence that is not available.

## Visual direction

The current system is editorial: ivory and warm neutral surfaces, near-black ink, aubergine emphasis, large Georgia headlines, fine rules and human workplace scenes. It replaces the earlier cobalt-led direction. Imagery brings warmth; typography and structured examples carry the proposition.

| Role | Value |
| --- | --- |
| Primary ink | `#181413` |
| Body copy | `#5D5754` |
| Aubergine action/accent | `#481B36` |
| Deep accent | `#321127` |
| Dark band | `#40172F` |
| Ivory surface | `#F8F6F2` |
| Pale warm surface | `#F5F1EC` |
| Dividers | `#DDD7D0` |
| Muted labels | `#7E746E` |

The existing CSS variable names `--blue` and `--blue-dark` now carry the aubergine colours. `src/site/premium.css` applies these tokens and the current layout refinements over the base site stylesheet.

Headlines and the typographic Dockio wordmark use Georgia with a Times New Roman fallback. Body, navigation, controls and explanatory labels use Arial/Helvetica. Large headlines have tight tracking and compact leading; body paragraphs retain comfortable line spacing. The main content width is capped at 1320px with responsive gutters.

Direct navigation links, a responsive mobile menu, square action buttons, consistent arrows and visible focus treatments keep the route through the site clear. Sections use open grids, numbered lists and fine dividers. The aubergine BudgetOps band is a distinct product moment. Responsive rules stack the hero, engagement routes, example panels and forms on narrow screens. Reduced-motion preferences disable the example-card movement; print rules isolate the sample brief.

## Homepage and buyer routes

The homepage sequence is proposition → Select Partner identity → three engagement routes → inspectable examples → industries → BudgetOps → people and working relationship → FAQ → enquiry.

The three starting points are:

- Decide what to fund: business task, options, assumptions and a decision brief.
- Build a useful workflow: connected knowledge/tools, review points, acceptance and handover.
- Strengthen delivery: a scoped embedded workstream or specialist capacity with explicit responsibility.

The hero invites an initiative discussion and links to example work. Service and industry pages carry their context into enquiries. Booking remains available through the dedicated booking route and Microsoft Bookings. Procurement, embedded, BudgetOps and partner needs have specific form contexts rather than a single undifferentiated contact prompt.

## Inspectable examples

The examples page shows two bounded demonstrations. Their fictional status appears in the visible content and downloaded brief.

The banking walkthrough has selectable successful, access-unavailable and conflicting-source scenarios. Each presents workflow state, a source register, output or handoff, and the person responsible for the next action. It uses no client data, live AI or external systems. Scenario buttons expose their selected state; the result includes a polite live summary.

The editable capacity brief makes monthly volume, current effort, assisted effort, staff cost and operating cost visible. It validates finite values and defined ranges, updates the result, provides a reset and explains the formulas. A visitor can download the assumptions and interpretation or print the sample. Inputs remain in the page and are not submitted or persistently stored. Capacity value and operating-cost break-even are explicitly distinguished from cash savings, full ROI and investment payback.

BudgetOps embeds the capacity brief as an illustrative conversation aid. The platform remains in development. A potential design-partner scope starts with one representative proposal and an agreed remit; product availability, terms and any data access require separate agreement.

## Enquiry interaction and trust

The form follows edit → review → confirmed receipt. Four required details are followed by optional route-specific context. Privacy consent is required. Short-lived form tokens, client submission locking and an idempotency key support the stored enquiry path. A receipt reference appears only after the receiver confirms successful storage; uncertain receipt produces a retry state with the brief retained. Focus moves to the relevant step or error message.

Email, copy and text download provide alternatives. Their wording makes clear that a local copy is not a submission and an email is sent from the visitor's email app. There is no document upload, connected CRM or promised response time. Enquiry review is a separate owner-only surface, not a public website page.

The new intake remains private during review until explicit final launch approval. The implementation and private review do not establish that www.dockio.in already accepts public submissions. Retain the owner's final approval requirement before main merge, live-domain changes or public intake launch.

Do not use invented customer logos, outcomes, testimonials, staffing-bench claims or higher partner tiers. The owner's confirmed tier is OpenAI Select Partner. Founder experience informs company direction without implying that previous-employer clients are Dockio engagements. Generated workplace assets are illustrative and never identified as actual employees or clients.

## Verification limits

The application contains 29 indexable pages. Production compilation, static rendering, route metadata, links, images, structured data and programmatic checks can be verified independently of a browser review.

The managed environment exposes no supported control-browser/local-preview path. An attempted cloud-preview browser review was blocked by authentication. Desktop/mobile visual fidelity, keyboard interaction, browser enquiry completion and live calendar availability are therefore not claimed as verified. Do not infer browser QA from a successful build or start an alternate local preview workflow. Complete these checks through an authorised supported browser path before describing them as passed.
