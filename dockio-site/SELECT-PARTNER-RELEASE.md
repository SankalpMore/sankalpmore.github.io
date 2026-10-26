# Dockio — OpenAI Select Partner website update

## Changes

Retains the existing Dockio identity and headline: Make AI work. In your business.

The homepage leads with enterprise AI implementation and three defined paid engagements: opportunity and investment assessment; embedded implementation; adoption and value realisation. The AI Implementation & Value Sprint is a scoped entry engagement, without invented pricing, delivery durations or ROI guarantees. Banking and financial services leads the industry focus, with a dedicated private-equity page. BudgetOps remains explicitly in development.

The owner confirms Dockio's OpenAI Select Partner status. The white landscape Select badge retains the supplied vector artwork, outline, proportions and required clear space. No Advanced, Elite, individual or specialization badge is claimed. The source guidelines and font files are not included in the repository.

## Implementation

The existing Node static generator remains the build entry point. `select-release.mjs` applies the new page content to the existing routes; `finalize-release.mjs` normalises shared navigation and badge dimensions. `release.css` extends the existing visual system. `release.js` owns progressive navigation and local enquiry-draft interactions. Existing route source files, site configuration, hosting identity and unrelated legacy React code remain unchanged.

Preserves the configured Microsoft Bookings destination and `sankalp@dockio.in`. The contact form prepares a local email draft. It does not transmit or store enquiries, book appointments, upload documents or pretend a request has been received. Users review and send their email themselves. No analytics or CRM endpoint is added.

## Validation

The local 22-page preview was rendered in Chromium at 1440, 1024, 768, 390 and 320 pixels. Navigation, the RFI/RFP query preset, draft preparation, editing and the encoded email handoff were exercised. The local preview showed no horizontal overflow or JavaScript errors; 787 internal destinations resolved. Desktop and mobile screenshots were visually reviewed against the existing Dockio design and the supplied badge treatment.

The browser connector available in the session was read-only, and local URL navigation was policy-blocked. Browser QA therefore used Chromium `set_content` with a self-contained preview. No real appointment or email was submitted. External booking availability, live-domain behavior and the Sites host were not tested.

The local base was recovered from the existing supplied-design preview; the pull-request build check separately validates this change against the repository base. The workflow builds and checks the static output without publishing it.

## Release status

This is a review change, not a live deployment. Keep main, the public site and private Sites audience unchanged until the release is approved and verified. Follow the existing README release-both-copies procedure; preserve `.openai/hosting.json` and record the GitHub source commit in the Sites checkout. Sites publishing was not available in this session, so synchronization is not claimed.
