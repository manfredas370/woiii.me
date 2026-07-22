# woiii.me / DIG for Discogs

The public website for **woiii.me/DIG** — an AI assistant for smarter record
buying. DIG compares pressings, surfaces evidence and helps collectors decide
which copy is worth buying.

[Visit woiii.me](https://woiii.me) · [Open the connection guide](https://woiii.me/connect)

## Version

This repository contains **woiii.me 1.0**, the first complete public release of
the landing page and connection guide.

## Highlights

- Motion-led, responsive landing page with an animated album-cover orbit.
- Scroll-reveal storytelling for the DIG value proposition.
- Expandable setup guides for Claude, ChatGPT, Codex and the Chrome extension.
- Product previews for woiii.MIX and woiii.RIG.
- Adaptive navigation plus light and dark footer treatments.
- Privacy-first by design: no analytics, cookies or trackers.
- Static Astro output ready for Vercel.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Landing page, DIG story, workflow, metrics and product previews |
| `/connect` | Client-specific connection instructions for the DIG MCP server |
| `/privacy` | Privacy policy and Discogs attribution |

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
