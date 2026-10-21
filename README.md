# woiii.me

The public home of **woiii.me** — a growing family of AI-powered tools for music
discovery, collecting and listening. This repository contains the shared brand
website, product introductions, connection guides and privacy information.

**WOIII.me for Discogs** (formerly DIG for Discogs) is currently the most
developed product in the family, so it has the deepest coverage on the site
today. **woiii.MIX** and **woiii.RIG** are in progress and will gain dedicated
experiences as they develop.

[Visit woiii.me](https://woiii.me) · [Open the connection guide](https://woiii.me/connect)

## Product family

| Product | Status | Purpose |
| --- | --- | --- |
| **WOIII.me for Discogs** | Beta | Finds the best pressing of a record on Discogs, for sound or for collectors, in the Chrome side panel and in ChatGPT or Claude |
| **woiii.MIX** | In development | A playlist concierge that turns a listener profile into a private mixtape with song-by-song commentary |
| **woiii.RIG** | Coming soon | A hi-fi gear finder built around listening goals, live listings and price history |

## Version

This repository contains **woiii.me 1.2**, which renames the pressing guide
from DIG for Discogs to WOIII.me and rewrites the connect guide and the legal
pages for it. Version 1.1 rebuilt the hero album-cover cylinder; version 1.0
was the first complete public release of the product-family landing page.

## Highlights

- A unified landing page for the woiii.me product family.
- Product storytelling for WOIII.me for Discogs, plus early previews of MIX and RIG.
- Motion-led, responsive presentation built around a wrapped album-cover
  cylinder of twelve sleeves.
- Expandable setup guides for Claude, ChatGPT, Codex and Chrome.
- Shared navigation, typography and light/dark page treatments.
- Album art served as AVIF and WebP through Astro's image pipeline.
- Privacy-first by design: no analytics, cookies or trackers.
- Static Astro output ready for Vercel.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | woiii.me product-family landing page, the WOIII.me for Discogs story and previews of products in progress |
| `/connect` | Client-specific setup instructions for WOIII.me |
| `/privacy` | Privacy policy for WOIII.me, the earlier DIG for Discogs service and the website |
| `/terms` | Terms of use for WOIII.me and the earlier DIG for Discogs service |
| `/support` | Support contact and help information |

## Technology

- [Astro 7](https://astro.build) with static output
- Self-hosted GT Standard and Instrument Serif typography
- `astro:assets` for album art, emitting AVIF and WebP with a JPEG fallback
- Semantic HTML, responsive CSS and lightweight progressive enhancement
- Reduced-motion support for animated interactions, plus a `?qa=1` deterministic
  mode that freezes nonessential motion for visual review

## Local development

Requirements: Node.js 22.12 or newer.

```sh
npm install
npm run dev -- --port 4322
```

Create and inspect a production build:

```sh
npm run build
npm run preview -- --port 4322
```

The generated static site is written to `dist/`.

## Deployment

The project is configured for `https://woiii.me` and can be deployed directly
from this private repository to Vercel:

1. Import the GitHub repository into Vercel.
2. Keep the detected **Astro** framework preset.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Attach the `woiii.me` domain after the first successful deployment.

No environment variables are required for the static website.

## Project structure

```text
docs/               Implementation and design-system documentation
public/             Icons, fonts, product artwork and social card
src/assets/         Album art processed by the Astro image pipeline
src/components/     Reusable Astro components
src/config/         Shared brand and product content
src/layouts/        Page shell, navigation and footer
src/pages/          Route entry points
src/styles/         Global typography and design tokens
```

## Documentation

- [Implementation plan and status](docs/implementation-plan.md)
- [Design system](docs/design.md)

## Rights and attribution

The source code is available under the [MIT License](LICENSE). Brand assets,
fonts and album artwork remain the property of their respective owners and are
not covered by that license.

This application uses Discogs' API but is not affiliated with, sponsored or
endorsed by Discogs. “Discogs” is a trademark of Zink Media, LLC.
