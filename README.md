# Dockio website

The public website for Dockio Technosolutions Private Limited, an enterprise AI transformation and systems-integration company focused on business value, connected implementation, adoption and outcome evidence.

- Canonical website: https://www.dockio.in/
- Canonical source: https://github.com/SankalpMore/sankalpmore.github.io

## Positioning and content

Dockio is a company owned and directed by Sankalp Shirish More. Leadership experience informs its services; previous-employer engagements are not presented as Dockio customer relationships. No invented customers, team headcount, testimonials, performance figures or guarantees are used.

Six services cover AI strategy/value design, agentic integration, ChatGPT/Codex enablement, governance/evaluation, embedded AI teams and data/customer intelligence. Five industries cover banking/financial services, insurance, GCCs, life sciences and consumer/retail. BudgetOps is a developing platform with a product/design-partner enquiry route. The OpenAI page uses the owner's explicitly confirmed Select Partner tier without suggesting a higher tier, ranking or guaranteed endorsement.

`src/site/` contains the current application design and content. `src/App.tsx` resolves real routes; `scripts/prerender.mjs` renders 28 complete indexable HTML pages plus legacy URL handoffs and a 404. `src/site/meta.ts` owns route metadata and legacy destinations. Existing legacy brand files remain unused and are not part of the browser bundle.

The homepage follows the image-generated editorial design: white, charcoal, cobalt, human photography, open service rows and a dark BudgetOps section. Generated workplace assets are illustrative; no person is labelled as an actual employee or client. `docs/design-system.md` records the design and verification limits.

## Visitor routes and functionality

- `/book/` links to the retained Microsoft Bookings URL. Real meeting types, time zones, available slots and confirmation remain in Microsoft Bookings.
- `/contact/` supports initiative, procurement, embedded, BudgetOps and partner enquiries. Four required fields lead to a reviewable email brief. Service/industry context carries into the draft; optional fields vary by enquiry type. Copy and local text download are fallbacks.
- Enquiries are sent only when the visitor sends the email to `sankalp@dockio.in`. No server submission, attachment upload, CRM connection or email notification backend is represented as connected. Procurement documents can be attached by the visitor in their email app or shared through a separately agreed route.
- There are no added advertising or analytics scripts. No enquiry details are persisted in browser storage.

## Development and checks

```sh
npm ci
npm run build
```

The build runs TypeScript, Vite, static rendering and page-integrity checks. The current managed environment has no supported control-browser tool, so browser visual and interaction QA is not claimed. Do not replace managed preview infrastructure with an alternate browser path. Run representative desktop/mobile navigation, form, keyboard and live-booking checks when the supported browser is available.

## Release and review

1. Update the canonical GitHub review branch. Validate the production build, static pages, titles/canonicals/schema, images, internal links, legacy handoffs and enquiry implementation.
2. Continue draft PR #16 with an accurate title and description. Do not merge or change live-domain/DNS configuration without the owner's final approval. Merging the approved PR to main triggers `.github/workflows/static.yml` and the public GitHub Pages deployment.
3. Keep the private review build at the exact GitHub PR commit. Preserve its existing hosting settings and audience, and record the source commit through the supported project workflow.
4. Build, package and publish the private review build through the supported project workflow. Verify its terminal result. Report the draft preview and PR as ahead of public production until approved and merged. Never report www.dockio.in updated before the public deployment succeeds.

## Search foundations

Every indexable page has substantive HTML, real links, a unique title/description, a canonical under `https://www.dockio.in/`, social metadata and visible-content-matched structured data. The build generates a complete sitemap. Robots permits OAI-SearchBot and retains the existing broad crawler policy. `llms.txt` is an optional identity/navigation summary; it is not a ranking mechanism. Legacy static URLs use canonical/refresh/client handoffs, not claimed HTTP 301 redirects.

After public release, inspect key URLs and submit the sitemap through the owner's verified Search Console. Confirm crawler access at the actual host/CDN, examine PageSpeed and monitor genuine qualified enquiries. No ranking guarantee or live analytics result is claimed.

Official reference guidance:
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/appearance/structured-data/organization
- https://developers.openai.com/api/docs/bots
- https://openai.com/business/partners/
