# Dockio website

The website for Dockio Technosolutions Private Limited, an enterprise AI transformation and systems-integration company focused on business value, connected implementation, adoption and outcome evidence.

- Canonical website: https://www.dockio.in/
- Canonical source: https://github.com/SankalpMore/sankalpmore.github.io

## Positioning and content

The central proposition is “Make AI worth the investment.” Dockio helps financial services and complex enterprises choose useful work, build connected AI capabilities and make the value visible. The company is owned and directed by Sankalp Shirish More; leadership experience informs its direction and services without presenting previous-employer engagements as Dockio customer relationships.

Six services cover AI strategy/value design, agentic integration, ChatGPT/Codex enablement, governance/evaluation, embedded AI teams and data/customer intelligence. Five industries cover banking/financial services, insurance, GCCs, life sciences and consumer/retail. Service pages describe scoped outputs and acceptance measures; industry workflows are illustrative applications to explore, not completed client projects.

BudgetOps is in development. Its product and design-partner routes invite a conversation about investment-proposal preparation, assumptions, costs and review evidence. They do not offer an immediately deployable platform or create a product account. The OpenAI page uses the owner's confirmed Select Partner tier without suggesting a higher tier, ranking or guaranteed endorsement.

No invented customers, employee headcount, testimonials, historical performance figures or guaranteed ROI are used. Generated workplace images are illustrative and are never labelled as actual Dockio employees or clients.

## Application and visual system

`src/site/` contains the current application design and content. `src/App.tsx` resolves real routes; `scripts/prerender.mjs` renders 29 complete indexable HTML pages plus legacy URL handoffs and a 404. `src/site/meta.ts` owns route metadata and legacy destinations. Existing legacy brand files remain unused and are not part of the browser bundle.

The current design uses ivory surfaces, warm ink, aubergine accents, Georgia editorial headlines and human workplace imagery. The homepage leads through three engagement routes, inspectable example work, industries, BudgetOps and the working relationship. Navigation uses direct links and a responsive mobile menu. `src/site/premium.css` supplies the current visual refinements; `docs/design-system.md` records their intent and verification limits.

## Working examples

`/examples/` lets a visitor inspect two interactive examples without providing client data:

- A fictional banking knowledge workflow has three selectable scenarios: sources available, access unavailable and conflicting sources. The walkthrough shows permission checks, referenced output, review responsibility and the next human action. It is scripted, with no live model or external system connection.
- An editable investment brief calculates capacity hours, capacity value, the balance after monthly operating cost and operating-cost break-even from explicit assumptions. It validates inputs, explains its formulas and supports reset, text download and print. The calculation runs in the page and does not submit or persist inputs.

The brief distinguishes capacity from cash savings and full investment ROI. Implementation, integration and change costs are excluded from its estimate and must be considered before a real investment decision. The compact brief on the BudgetOps page is the same illustrative calculator, not a released platform feature.

## Enquiries and booking

`/contact/` supports initiative, procurement, embedded, BudgetOps and partner enquiries. The visitor supplies name, work email, organisation and a non-confidential requirement, with optional fields specific to the selected route. Service and industry links preserve relevant context. The visitor gives privacy consent and reviews the prepared brief before choosing Send enquiry.

The current implementation connects to a separate enquiry receiver. It obtains a short-lived form token, submits the consented details and displays a receipt reference only after a successful response confirming storage. An idempotency key allows retrying an uncertain submission as the same enquiry. The client prevents concurrent submissions and preserves the brief if receipt cannot be confirmed. The receiver and its separate owner-only review surface are not public administration pages in this website.

The new intake remains private during review until explicit final launch approval. Its implementation must not be described as accepting public submissions on www.dockio.in before the approved services and website have been released and verified. Do not claim that email notifications, CRM integration, document uploads or a public response-time commitment are connected.

Email, copy and local text download remain alternatives. An email is sent only when the visitor sends it in their email app; copying or downloading does not submit an enquiry. Procurement documents require a separately agreed sharing route. Unsubmitted drafts are held in page state without persistent browser storage. No advertising or third-party analytics scripts are added.

`/book/` links to the retained Microsoft Bookings URL. Real meeting types, time zones, available slots and appointment confirmation are handled there. Live calendar availability has not been verified in this environment.

## Development and verification

```sh
npm ci
npm run build
```

The build runs TypeScript, Vite, static rendering and page-integrity checks. Those checks cover a different scope from a browser review and do not establish visual fidelity, keyboard behaviour or live booking availability.

This managed environment has no supported control-browser/local-preview path. A cloud-preview browser attempt encountered an authentication barrier. Browser visual and end-to-end interaction QA is therefore not claimed. Do not substitute an alternate local browser/server workflow for the supported managed-preview process. Complete representative desktop/mobile navigation, keyboard, example controls, enquiry and live-booking checks when an authorised browser path is available.

## Release and review

1. Update the canonical GitHub review branch. Validate the production build, static pages, titles/canonicals/schema, images, internal links, legacy handoffs and enquiry implementation. Confirm the receiver's storage, receipt and authorised owner-review path with synthetic review data.
2. Continue draft PR #16 with an accurate title and description. Do not merge or change live-domain/DNS configuration without the owner's final approval. Merging the approved PR to main triggers `.github/workflows/static.yml` and the public GitHub Pages deployment.
3. Keep the private review build at the exact GitHub PR commit. Preserve its existing hosting settings and audience, and record the source commit through the supported project workflow. Keep the intake receiver and owner review private until final launch approval.
4. Build, package and publish the private review build through the supported project workflow. Verify its terminal result. Report the draft review build and PR as ahead of public production until approved and merged. Never report www.dockio.in updated or public enquiry submission available before the approved deployments succeed.
5. After explicit launch approval, release the agreed website and intake configuration, verify the live domain and submission/receipt path, and retain owner-only access to enquiry review. Public marketing access must not expose stored enquiry records or administrative controls.

## Search foundations

Every indexable page has substantive HTML, real links, a unique title/description, a canonical under `https://www.dockio.in/`, social metadata and visible-content-matched structured data. The build generates a complete sitemap. Robots permits OAI-SearchBot and retains the existing broad crawler policy. `llms.txt` is an optional identity/navigation summary; it is not a ranking mechanism. Legacy static URLs use canonical/refresh/client handoffs, not claimed HTTP 301 redirects.

After public release, inspect key URLs and submit the sitemap through the owner's verified Search Console. Confirm crawler access at the actual host/CDN, examine PageSpeed and monitor genuine qualified enquiries. No search-ranking guarantee, AI recommendation ranking or live analytics result is claimed.

Official reference guidance:

- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/appearance/structured-data/organization
- https://developers.openai.com/api/docs/bots
- https://openai.com/business/partners/
