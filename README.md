# woiii.me

The public home of **woiii.me** — a growing family of AI-powered tools for music
discovery, collecting and listening. This repository contains the shared brand
website, product introductions, connection guides and privacy information.

**DIG for Discogs** is currently the most developed product in the family, so
it has the deepest coverage on the site today. **woiii.MIX** and **woiii.RIG**
are in progress and will gain dedicated experiences as they develop.

[Visit woiii.me](https://woiii.me) · [Open the connection guide](https://woiii.me/connect)

## Product family

| Product | Status | Purpose |
| --- | --- | --- |
| **woiii.DIG** | Available | Evidence-led pressing research, collection tools and Discogs intelligence for AI assistants and the browser |
| **woiii.MIX** | In development | A playlist concierge that turns a listener profile into a private mixtape with song-by-song commentary |
| **woiii.RIG** | Coming soon | A hi-fi gear finder built around listening goals, live listings and price history |

## Version

This repository contains **woiii.me 1.0**, the first complete public release of
the product-family landing page. The release also includes the first detailed
product experience: the DIG connection guide.

## Highlights

- A unified landing page for the woiii.me product family.
- Product storytelling for DIG, plus early previews of MIX and RIG.
- Motion-led, responsive presentation with an animated album-cover orbit.
- Expandable DIG setup guides for Claude, ChatGPT, Codex and Chrome.
- Shared navigation, typography and light/dark page treatments.
- Privacy-first by design: no analytics, cookies or trackers.
- Static Astro output ready for Vercel.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | woiii.me product-family landing page, current DIG story and previews of products in progress |
| `/connect` | Client-specific setup instructions for DIG for Discogs |
| `/privacy` | Privacy policy covering the website and current DIG services |

## Technology

- [Astro 7](https://astro.build) with static output
- Self-hosted GT Standard and Instrument Serif typography
- Semantic HTML, responsive CSS and lightweight progressive enhancement
- Reduced-motion support for animated interactions

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
public/             Static images, icons, fonts and product artwork
src/components/     Reusable Astro components
src/config/         Shared brand and product content
src/layouts/        Page shell, navigation and footer
src/pages/          Route entry points
src/styles/         Global typography and design tokens
```

## Rights and attribution

The source code is available under the [MIT License](LICENSE). Brand assets,
fonts and album artwork remain the property of their respective owners and are
not covered by that license.

This application uses Discogs' API but is not affiliated with, sponsored or
endorsed by Discogs. “Discogs” is a trademark of Zink Media, LLC.
