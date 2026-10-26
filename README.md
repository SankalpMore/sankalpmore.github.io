# Dockio website

Canonical source for Dockio Technosolutions Private Limited's enterprise AI website.

- Public website: https://www.dockio.in/
- GitHub source: https://github.com/SankalpMore/sankalpmore.github.io
- Public Sites project: `.openai/hosting.json`
- GitHub Pages is also built from this source by `.github/workflows/static.yml`.

The public custom domain belongs to the Sites project returned by `get_site`. The earlier private Site identity no longer resolves; the hosting manifest now points to the existing live public project. Preserve its public audience. Do not create a new Site.

## Build and edit

`npm run build` generates 26 static content pages, redirects and a 404 page into `dist/`. `npm run dev` serves the build. The server accepts `--host` and `--port`.

- `dockio-site/source/`: retained page templates and base visual system.
- `select-release.mjs`: engagement, partnership and industry content.
- `premium-release.mjs` and `premium.css`: homepage, delivery journey and visual refinements.
- `delivery-demo.mjs`, `.css`, `.js`: synthetic investment-case review example.
- `release.js`: navigation and local enquiry draft flow.
- `premium.js`: BudgetOps stakeholder tabs.
- `finalize-release.mjs`: composed release entry point.

The original React source is retained for reference, not used by the active static build. Run `npx tsc --noEmit` for its required type check; `node dockio-site/verify.mjs dist` checks static pages and local references.

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
