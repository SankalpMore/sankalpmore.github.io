# Dockio website

The public website for Dockio Technosolutions Private Limited: an independent enterprise AI implementation partner.

- Canonical website: https://www.dockio.in/
- GitHub source: https://github.com/SankalpMore/sankalpmore.github.io
- Maintained Sites copy: https://dockio-intelligence-partnership.sankalp.chatgpt.site
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

This is a React/Vite static app. The existing hash routes support both GitHub Pages and Sites. Keep the Microsoft Bookings URL in `src/lib/bookings.ts` and the established partnerships email unless instructed otherwise. Search metadata uses `www.dockio.in` as the canonical domain for both copies.

## Release both copies

1. Update the GitHub source and check the desktop/mobile visitor journey, service routes, contact links, FAQ, and downloadable memo. Run TypeScript and the production build.
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
