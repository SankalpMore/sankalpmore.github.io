# Dockio enterprise implementation release — 26 October 2026

The release brings the OpenAI Select positioning, three purchasable engagements, banking-first industry pages and scoped implementation sprint to the live website. The homepage adds an investment-to-value visual, a concrete delivery brief, an interactive synthetic investment-case review and stakeholder-specific BudgetOps recommendations.

Existing URLs, email and Microsoft Bookings destinations are preserved, including `/engagements/workflow-sprint`, `/engagements/embedded` and `/delivery-example`. BudgetOps remains in development. No client results or endorsements are invented.

## Verification

Production build, static references and TypeScript passed. Desktop rendering, delivery-example mouse/keyboard tabs, BudgetOps role switching, RFI/RFP query preselection, enquiry drafting/editing and mobile menu navigation were exercised in the managed browser preview. Mobile rendering was visually inspected in 320px and 390px frames; narrow-page content stayed within its viewport. A mobile diagram overlap was corrected. No appointment or email was submitted.

## Publication

The owner requested updating the live domain. The public Sites project was verified through `get_site`; the earlier private project ID no longer resolves. `.openai/hosting.json` now identifies the existing public domain project. Preserve its current audience and synchronize the same reviewed source to GitHub and Sites. Deployment status belongs to the native hosting tools; this note does not assert that publication has completed.
