# WOIII.me — landing page

The public home of [WOIII.me](https://woiii.me) — AI-powered tools for music
lovers. Static site built with [Astro](https://astro.build), deployed on
Vercel.

## Pages

| Route      | Purpose                                                                 |
| :--------- | :---------------------------------------------------------------------- |
| `/`        | Home — hero, DIG for Discogs spotlights, product-family grid            |
| `/connect` | Step-by-step onboarding for every supported client                      |
| `/privacy` | Privacy policy (required by store/directory submissions)                |

Support contact lives in the footer of every page.

## Principles

- **No analytics, no cookies, no trackers** — on the site or in the products.
- Near-zero JS: one tiny inlined progressive-enhancement script (copy buttons
  + headline reveal, `prefers-reduced-motion` safe). Everything else is static
  HTML/CSS.
- Self-hosted fonts: Geist (shared with the DIG extension) + Instrument Serif
  italic for accent words. ~92 KB total.
- Product names, URLs, and verified facts live in one place:
  [`src/config/brand.ts`](src/config/brand.ts). A rename is one commit.
- Every page carries the Discogs attribution required by Discogs (verbatim, in
  the footer — see `DISCOGS_ATTRIBUTION` in `brand.ts`).

## Screenshots

The `/connect` walkthrough renders styled placeholder slots for screenshots it
expects under `public/shots/` (each placeholder shows the exact path). Drop
real PNGs at those paths and they appear automatically — no code changes.

## Development

```sh
npm install
npm run dev      # localhost:4321
npm run build    # static output in dist/
```

## Deploy

Static output (`dist/`), no server runtime. On Vercel: framework preset
"Astro", domain `woiii.me`.
