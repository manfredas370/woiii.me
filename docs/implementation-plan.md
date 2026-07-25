# woiii.me implementation plan and status

Last updated: 25 July 2026
Current release: 1.1

## Purpose

woiii.me is the public home for a family of AI-powered music products. The site
introduces the overall brand, explains the products that are currently usable,
previews products still in development, and provides the practical and legal
information needed to use them.

DIG for Discogs is the most complete product today, which is why the current
site contains a full DIG story and connection guide. MIX and RIG are represented
as products in progress and can gain their own pages without changing the core
site architecture.

## Goals

- Present woiii.me as one product family rather than a single-product site.
- Make the current value of DIG clear without implying that DIG is the whole brand.
- Give users reliable setup instructions for supported DIG clients.
- Establish a reusable visual and technical foundation for future product pages.
- Keep the public site static, fast, accessible and free of tracking.
- Centralize product facts so names, URLs and statuses stay consistent.

## Current implementation status

### 1. Foundation — complete

- Astro 7 static-site project with TypeScript support.
- Three production routes: `/`, `/connect` and `/privacy`.
- Shared page layout containing metadata, navigation, footer and progressive
  enhancement scripts.
- Self-hosted fonts and local visual assets; no third-party font requests.
- Vercel-ready static output in `dist/` with no runtime environment variables.

### 2. Product-family landing page — complete for 1.0

- Brand-level hero and navigation.
- Motion-led album-cover ring that establishes the record-collecting context.
- DIG value proposition, evidence story, use cases and product metrics.
- Product previews for woiii.MIX and woiii.RIG.
- Responsive product cards, calls to action and light/dark section transitions.

### 3. DIG connection guide — complete for current clients

- Expandable instructions for Claude, ChatGPT, Codex and Chrome.
- Shared MCP and legacy SSE endpoints sourced from brand configuration.
- Reusable code blocks with copy support.
- Screenshot slots that can be populated later without restructuring the guide.
- Troubleshooting and post-connection guidance.

### 4. Privacy and attribution — complete

- Plain-language privacy policy covering the website, DIG server and extension.
- Clear explanation of OAuth, caching, read-only behavior and revocation.
- Discogs attribution displayed in the shared footer on every route.
- No analytics, cookies, advertising or behavioral tracking.

### 5. Shared page chrome — complete

- Standard and overlay header variants live in the shared layout.
- Connect and Privacy use the same fixed, transparent dark-page header behavior.
- Shared footer component supports dark and light visual variants.
- Responsive footer layout and consistent Discogs/legal spacing.

### 6. Documentation and release foundation — complete

- Product-family README with local-development and deployment instructions.
- Changelog and MIT license.
- Version 1.0 package metadata and GitHub release.
- Design-system documentation in `docs/design.md`.

## Architecture

| Area | Source | Responsibility |
| --- | --- | --- |
| Global foundation | `src/styles/global.css` | Fonts, tokens, base typography, common layout and utility styles |
| Shared layout | `src/layouts/Base.astro` | Document metadata, navigation, header variants, footer and progressive enhancement |
| Brand facts | `src/config/brand.ts` | Product names, statuses, URLs, versions, support details and required attribution |
| Landing page | `src/pages/index.astro` | Product-family story, DIG narrative, product previews and page-specific motion |
| Connection guide | `src/pages/connect.astro` | Client setup flows and troubleshooting |
| Privacy policy | `src/pages/privacy.astro` | Privacy, data handling, revocation and contact information |
| Reusable UI | `src/components/` | Product ring, code block, screenshot and product-card primitives |
| Static assets | `public/` | Logos, fonts, client icons, product art and album imagery |

## Key implementation decisions

### Static Astro output

The marketing site does not need a server runtime. Static output keeps hosting
simple, reduces the operational surface and lets every page work without client
JavaScript.

### Centralized product facts

Names, URLs, version numbers and verified metrics live in
`src/config/brand.ts`. Product changes should start there so page content does
not drift across routes.

### Shared layout, page-specific storytelling

Navigation, footer, legal attribution and header behavior belong to the shared
layout. Large narrative sections and product art remain page-specific because
their composition is unique and benefits from local styling.

### Progressive enhancement

Copy buttons, scroll reveals, counters and header state changes add polish, but
the information architecture and links work without JavaScript. Motion is
disabled or simplified when the user prefers reduced motion.

### Local assets and privacy

Fonts and imagery are served from `public/`. The site makes no analytics or ad
requests and does not require a cookie banner.

## How the site works

1. Astro renders each page to static HTML during `astro build`.
2. `Base.astro` wraps route content with shared metadata, navigation and footer.
3. Each route imports product facts from `brand.ts` instead of duplicating them.
4. Page styles create the large editorial compositions and responsive layouts.
5. A small shared script enhances copy actions, motion, counters and header tone.
6. Vercel or another static host serves the generated `dist/` directory.

## Verification

The minimum release check is:

```sh
npm install
npm run build
```

The build must generate:

- `dist/index.html`
- `dist/connect/index.html`
- `dist/privacy/index.html`

For local visual review, start Astro in background mode:

```sh
npm run dev -- --background
```

Then inspect `http://localhost:4321`. Manage the server with
`astro dev status`, `astro dev logs` and `astro dev stop`.

## Next implementation phases

These items are intentionally outside the 1.0 scope and should be prioritized as
the product family develops.

### Product expansion

- Add dedicated MIX and RIG routes when their propositions and availability are stable.
- Replace preview-only content with real workflows, screenshots and calls to action.
- Update product status in `brand.ts` before changing badges or navigation.

### DIG maintenance

- Keep client setup steps aligned with current Claude, ChatGPT, Codex and Chrome interfaces.
- Replace placeholder screenshot slots with reviewed production captures.
- Update verified tool, prompt, endpoint and version counts when DIG releases change.

### Quality and operations

- Add automated link, accessibility and responsive visual checks.
- Add a deployment preview check for pull requests.
- Review performance budgets as new imagery and product pages are introduced.
- Keep `CHANGELOG.md`, the README and release notes synchronized for each release.

## Definition of done for future work

A site change is complete when:

- Product facts are sourced from the shared configuration where applicable.
- Desktop and mobile layouts have been visually reviewed.
- Keyboard focus and reduced-motion behavior remain usable.
- The production build succeeds with all expected routes.
- Documentation reflects meaningful architecture or design-system changes.
- The change is recorded in the changelog when it affects a release.
