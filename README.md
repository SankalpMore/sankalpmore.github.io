# Dockio website

The public website for Dockio Technosolutions Private Limited: an independent enterprise AI implementation partner.

- Canonical website: https://www.dockio.in/
- GitHub source: https://github.com/SankalpMore/sankalpmore.github.io
- Maintained Sites copy: https://dockio-intelligence-partnership.sankalp.chatgpt.site
- Supplied-design Sites preview: https://dockio-preview-2026.sankalp.chatgpt.site
- Sites project identity: `.openai/hosting.json`

The Sites copy remains owner-private. GitHub Pages remains the public host. Both copies use this repository's application source; do not maintain independent marketing copy.

## Audience and message

Write for enterprise business and operations sponsors, AI/technology leaders, workflow owners, and consulting or technology delivery partners. Help them identify a concrete business outcome, understand Dockio's role, and start a qualified conversation.

Position the engagement around paid discovery, scoped implementation, and ongoing support or improvement. ChatGPT and Codex are tools used where appropriate; Dockio is an independent services provider. Preserve clear responsibilities, approved information access, human review, and measurable acceptance criteria. Workflow examples are illustrative, not customer wins or promises. Do not publish private strategy, personal planning, client opportunities, or unverified partnerships.

## Development

```sh
npm ci
npm run dev
npx tsc --noEmit
npm run build
```

The active website is generated from the supplied Dockio preview, with 19 static pages. Edit page content in `dockio-site/source/routes.json`, the shared header and footer in `before.html` and `after.html`, and shared styles and behavior in `site.css` and `site.js`. `npm run build` generates `dist/`; `npm run dev` builds and serves it at http://127.0.0.1:5173. No runtime framework, form endpoint, or third-party front-end assets are required. The previous React source is retained for reference and can be started with `npm run dev:legacy`; it is not part of the active build.

All booking actions open the existing Microsoft Bookings URL, `https://outlook.office.com/book/Sankalp@dockio.in/?ismsaljsauthenabled`, in a new tab. The provider owns availability, time zones, attendee questions, and confirmation. The contact page provides a booking card rather than the preview's email-draft form. The supplied `sankalp@dockio.in` email address remains available. Configure every booking destination centrally in `dockio-site/site.config.json`; the generator also applies it to the contact card. Do not collect or simulate bookings locally.

Static navigation works without JavaScript. Previous hash URLs are forwarded to the equivalent pages; `/case-studies` and `/partner-readiness` are retained as redirects. Search metadata and the sitemap use `www.dockio.in` as the canonical domain, with `SITE_URL` available for an alternate deployment origin. The private supplied-design preview uses the same page source. Its separate publishing checkout is under the locally ignored `sites/` directory.

## Release both copies

1. Update the GitHub source and check desktop/mobile navigation, service routes, the home tabs, contact links, and the Microsoft booking handoff without submitting a real appointment. Run TypeScript and the production build.
2. Commit and push the reviewed source to `main`. The existing `.github/workflows/static.yml` publishes to GitHub Pages. Verify that commit's deployment finishes successfully.
3. Use Sites to open the project identified in `.openai/hosting.json`, preserving its audience. Use fresh short-lived credentials through hidden stdin only; never commit credentials.
4. From a clean GitHub checkout, synchronize the source into the clean, separate Sites checkout:

   ```sh
   node scripts/prepare-sites-copy.mjs /absolute/path/to/dockio-sites
   ```

   The utility verifies the Site identity, copies tracked source, removes obsolete tracked application files, preserves extra hosting fields, and records the GitHub commit in `.openai/github-source.json` in the Sites copy.
5. Build and package the synchronized Sites checkout with the supported Sites source workflow. The static artifact contains `.openai/hosting.json` and `dist/`. Push its exact source commit before saving and deploying the matching artifact.
6. Publish with the owner-private Sites operation and verify its terminal deployment result. Record both URLs and source commits in the release handoff. Never report synchronization complete if either publication failed.

This is a release workflow, not a background auto-sync service. Each website release must complete both destinations. No persistent Sites credentials are stored in GitHub Actions.

## Context limits

The October 2026 draft uses the existing website/requirements and accessible recent business direction. Arbitrary past ChatGPT chats and private Dot content are not automatically available to a new coding session. Reconcile any newly supplied vision before changing the positioning.
