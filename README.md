# Dockio website

Canonical source for Dockio Technosolutions Private Limited's enterprise AI website.

- Public website: https://www.dockio.in/
- GitHub source: https://github.com/SankalpMore/sankalpmore.github.io
- Public Sites project: `.openai/hosting.json`
- GitHub Pages is also built from this source by `.github/workflows/static.yml`.

The public custom domain belongs to the Sites project returned by `get_site`. The earlier private Site identity no longer resolves; the hosting manifest now points to the existing live public project. Preserve its public audience. Do not create a new Site.

## Build and edit

`npm run build` generates 23 canonical content pages, five preserved-route redirects and a 404 page into `dist/`. `npm run dev` serves the build. The server accepts `--host` and `--port`.

- `dockio-site/source/`: retained page templates and base visual system.
- `select-release.mjs`: engagement, partnership and industry content.
- `premium-release.mjs` and `premium.css`: homepage, delivery journey and visual refinements.
- `delivery-demo.mjs`, `.css`, `.js`: synthetic investment-case review example.
- `release.js`: navigation and local enquiry draft flow.
- `premium.js`: BudgetOps stakeholder tabs.
- `finalize-release.mjs`: composed release entry point.
- `seo-content.mjs` and `seo.css`: page metadata, buyer FAQs, breadcrumbs and related-page links.
- `search-metadata.mjs`: canonical aliases and grounded Organization, WebSite, WebPage, Service and breadcrumb data.
- `build.mjs`: canonical URL rendering, social cards, sitemap and robots.txt generation; replaces only a dedicated `dist/` output.
- `create-social-image.py`: reproduces Dockio’s PNG logo, favicon and social card with Pillow.

The original React source is retained for reference, not used by the active static build. Run `npx tsc --noEmit` for its required type check; `node dockio-site/verify.mjs dist` checks static pages, canonical and social metadata, JSON-LD, sitemap alignment, preserved redirects, local links and fragment destinations.

## Content and interaction boundaries

Dockio is an owner-confirmed OpenAI Select Partner. Preserve the supplied partner artwork and clear space. Banking and financial services leads; private equity, enterprise operations and professional services remain available. No unverified clients, results, testimonials or higher partner tiers.

The workflow example is synthetic and runs locally without model calls. BudgetOps is explicitly in development. The enterprise-workshop image is illustrative, not a photograph of Dockio employees or customers.

The Microsoft Bookings destination and `sankalp@dockio.in` are preserved. The enquiry form prepares a local email draft; the visitor reviews and sends it. It does not automatically submit enquiries or collect attachments. No analytics, CRM or browser storage is added.

## Release both copies

1. Build and verify the source; check representative desktop/mobile navigation, delivery and BudgetOps tabs, enquiry drafting and booking links. Do not submit a real appointment or test email.
2. Commit and push to GitHub, merge the reviewed branch to `main`, and check the Pages workflow for that commit.
3. Open the existing public Site using fresh repository credentials through hidden stdin. Preserve its audience and source history.
4. From the clean GitHub checkout, run `node scripts/prepare-sites-copy.mjs /absolute/path/to/opened-sites-checkout`. It records the GitHub commit and preserves the selected hosting identity.
5. Build, check and package the synchronized source using the Sites source workflow, then save and deploy that exact archive/commit.
6. Verify the terminal deployment result and report any incomplete destination. Credentials and temporary QA pages/screenshots must never be committed.

## Search and AI discovery

Canonical URLs use `https://www.dockio.in/` with directory paths. Engagement aliases redirect immediately to the preferred service pages and are excluded from the sitemap. Static redirect documents retain a canonical and a working link without JavaScript; JavaScript preserves query parameters and fragments. These are HTML redirects, not a claim of host-level HTTP 301 support. The generated 404 is noindex and contains no homepage canonical or structured data.

Visible FAQs and contextual links are ordinary HTML. Organization facts match the public page content; no unverified profiles, ratings, customer claims or invented article dates are marked up. `llms.txt` is a factual navigation guide, not a ranking mechanism. Public crawler access is preserved and `OAI-SearchBot` is explicitly allowed; no separate training-bot preference is changed.

The build generates `/sitemap.xml` and `/robots.txt`; those generated files take precedence over retained legacy public assets. Search Console ownership, sitemap processing, search indexing and crawler access through host security rules are external checks, not assertions made by this build. No Search Console credential or verification token is present in this repository.
