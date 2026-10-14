# Dockio website

The public website for Dockio Technosolutions Private Limited: a founder-led AI systems integration practice focused on value, implementation and adoption.

- Canonical website: https://www.dockio.in/
- GitHub source: https://github.com/SankalpMore/sankalpmore.github.io
- Maintained Sites copy: https://dockio-intelligence-partnership.sankalp.chatgpt.site
- Sites project identity: `.openai/hosting.json`

The Sites copy remains owner-private. GitHub Pages remains the public host. Both copies use this repository's application source; do not maintain independent marketing copy.

## Audience and message

Write for enterprise business and operations sponsors, AI/technology leaders, workflow owners, and consulting or technology delivery partners. Help them identify a concrete business outcome, understand Dockio's role, and start a qualified conversation.

Position engagements around embedded AI BA/PM/PMO support, requirements and value prioritization, governed AI tasks/skills/tools, implementation coordination, adoption, and selective development. Agree hours or days on time and materials, including founder involvement, before starting. Finance is preferred; global and cross-industry enquiries are welcome. ChatGPT and Codex are tools used where appropriate; Dockio is an independent services provider. Preserve clear responsibilities, approved information access, human review, and measurable acceptance criteria. Workflow examples are illustrative, not customer wins or promises. Do not publish private strategy, personal planning, client opportunities, or unverified partnerships.

## Development

```sh
npm ci
npm run dev
npx tsc --noEmit
npm run build
```

This is a React/Vite static app. The production build pre-renders 34 routes to static HTML for GitHub Pages and Sites. Each page has substantive content, a distinct title/description/canonical, and matching structured data. Legacy hash links redirect to the same path without the hash. The local requirement builder previews a brief, offers copying, and opens an editable email draft to `sankalp@dockio.in`, as requested by the owner. The legacy Microsoft Bookings configuration is retained in `src/lib/bookings.ts` but is not the primary enquiry path. The website does not collect or submit visitor briefs. Search metadata uses `www.dockio.in` as the canonical domain for both copies.

## Release both copies

1. Update the GitHub source and check the desktop/mobile visitor journey, service routes, local brief review/copy/mailto, navigation, FAQ, direct static URLs, legacy hash redirects, and no-JavaScript content. Run TypeScript and the production build.
2. Commit and push changes to a review branch and open a draft PR. Do not merge or change the live domain/DNS without explicit final approval. A private Sites preview may use the draft branch; record clearly that it is ahead of public production. After approval, merging to `main` triggers the existing `.github/workflows/static.yml` GitHub Pages deployment. Verify that deployment finishes successfully.
3. Use Sites to open the project identified in `.openai/hosting.json`, preserving its audience. Use fresh short-lived credentials through hidden stdin only; never commit credentials.
4. From a clean GitHub checkout, synchronize the source into the clean, separate Sites checkout:

   ```sh
   node scripts/prepare-sites-copy.mjs /absolute/path/to/dockio-sites
   ```

   The utility verifies the Site identity, copies tracked source, removes obsolete tracked application files, preserves extra hosting fields, and records the GitHub commit in `.openai/github-source.json` in the Sites copy.
5. Build and package the synchronized Sites checkout with the supported Sites source workflow. The static artifact contains `.openai/hosting.json` and `dist/`. Push its exact source commit before saving and deploying the matching artifact.
6. Publish with the owner-private Sites operation and verify its terminal deployment result. Record both URLs and source commits in the release handoff. Never report synchronization complete if either publication failed. During review, parity means the private Sites preview matches the PR commit; public production intentionally stays at the last approved commit.

This is a release workflow, not a background auto-sync service. Each website release must complete both destinations. No persistent Sites credentials are stored in GitHub Actions.

## Context limits

The October 2026 draft uses the existing website/requirements and accessible recent business direction. Arbitrary past ChatGPT chats and private Dot content are not automatically available to a new coding session. Reconcile any newly supplied vision before changing the positioning.

## Brand and application architecture

`src/brand/` owns the current design system, shared content, catalogue, page components, accessible vector logo/evidence diagram, and local enquiry builder. `scripts/prerender.mjs` renders `src/App.tsx` to each static route after Vite builds its assets, and generates the sitemap from the same route inventory. Retained legacy components/assets are not imported by the new app. No external fonts, analytics, backend or API credentials are required.

`docs/design-system.md` records the design contract. Generated workshop images are illustrative creative assets, not photographs of Dockio employees or clients; their accessible descriptions preserve that distinction. The website includes no synthetic testimonials, client logos, employer endorsements or performance claims.

## Page narratives

The homepage connects priority, delivery, adoption, evidence and future investment. Four service pages use distinct decision, workflow-boundary, delivery-ownership and adoption models. Industry pages connect specific operating contexts to illustrative workflows; use-case pages are practical workflow guides. `VisionPages.tsx` covers engagement responsibilities, value measurement, the BudgetOps vision and founder context. `Insights.tsx` renders three original guidance articles from `insightContent.ts`. All routes, including articles, are statically rendered and linked from the site.

The evidence models are semantic HTML, not product screenshots or performance dashboards. BudgetOps is explicitly an emerging vision. The examples describe prospective measures and decision questions; they do not report client results. `vision.css` extends the shared brand system with page-specific layouts.

## Search foundations

The build provides ordinary crawlable links, 34 complete HTML pages, page-specific metadata, canonical URLs, a sitemap, truthful Organization/Service/WebPage/Article data, and FAQ markup matching visible answers. `llms.txt` is a human-maintained summary, not a ranking mechanism. Google describes ordinary SEO as the foundation for its AI features: https://developers.google.com/search/docs/appearance/ai-features . OpenAI documents OAI-SearchBot and GPTBot as separate controls: https://developers.openai.com/api/docs/bots . No crawler/security settings, Search Console registrations, backlink submissions or external directory listings were changed. After the approved public release, inspect URLs in the owner's Search Console and run PageSpeed Insights against the live domain.
