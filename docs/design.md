# woiii.me design system

Last updated: 25 July 2026
Status: design foundation for the 1.1 product-family website

## Design intent

woiii.me should feel like a confident independent music label crossed with a
precise product studio: editorial, tactile and expressive, but still clear
enough to explain technical products.

The system combines a black-vinyl foundation, bright product color, oversized
type, album-art motion and quiet evidence-oriented UI. DIG currently carries the
most detailed experience, while the system must remain broad enough for MIX and
RIG to develop distinct identities within the same family.

## Principles

1. **One family, distinct products.** Shared typography and structure create
   recognition; product-specific color and artwork create personality.
2. **Evidence over decoration.** Visual effects should clarify hierarchy or
   product character, not compete with the message.
3. **Editorial scale, product precision.** Large headlines and generous space
   are paired with compact controls, clear labels and exact setup steps.
4. **Dark by default, light with intent.** Black is the primary canvas. Light
   sections are used to create rhythm and emphasize product-family moments.
5. **Motion with an off switch.** Animation adds energy but never gates content
   and respects `prefers-reduced-motion`.
6. **Privacy is part of the brand.** No trackers, remote fonts or unnecessary
   consent UI.

## Product architecture

| Product | Current status | Role in the system |
| --- | --- | --- |
| woiii.DIG | Available | Flagship experience; lime/evidence-led record research |
| woiii.MIX | In development | Expressive playlist and mixtape direction |
| woiii.RIG | Coming soon | Technical hi-fi discovery and matching direction |

Product names and statuses should be changed first in `src/config/brand.ts`.

## Color

### Core dark palette

| Token | Value | Use |
| --- | --- | --- |
| `--canvas` | `#0a0a0a` | Default site canvas |
| `--surface` | `#141413` | Cards and code surfaces |
| `--surface-high` | `#1d1d1c` | Elevated/active surfaces |
| `--surface-inset` | `#262625` | Deep inset UI |
| `--ink` | `#f2f2ee` | Primary text |
| `--ink-secondary` | `#b9b9b1` | Supporting text |
| `--ink-tertiary` | `#8b8b84` | Metadata |
| `--ink-faint` | `#63635d` | Quiet labels and markers |

Pure black (`#000`) is used for immersive landing, connection and privacy
sections and for the dark footer.

### Borders

| Token | Value |
| --- | --- |
| `--line-soft` | `rgba(255, 255, 255, 0.07)` |
| `--line` | `rgba(255, 255, 255, 0.11)` |
| `--line-strong` | `rgba(255, 255, 255, 0.24)` |

Use borders as quiet separators. Avoid bright outlines unless they communicate
focus, selection or a deliberate artifact frame.

### Accent and product color

| Color | Value | Use |
| --- | --- | --- |
| Core lime | `#c9f158` | Global links and accent token |
| Page lime | `#c8ff9f` | Current landing/connect/privacy accent |
| Strong lime | `#d8fa70` | High-emphasis accent state |
| CTA lavender | `#8b94f2` | Primary landing action |
| Light canvas | `#f7f7f4` | Product and light-footer sections |
| DIG blue | `#86ddf5` | DIG product-panel direction |
| MIX green | `#d8f2aa` | MIX product-panel direction |
| Family lavender | `#c9c0ff` | Supporting product-family panel |

Product colors can be extended, but they must remain legible with either near-
black or white text and should not replace the shared foundation tokens.

## Typography

### Families

- **GT Standard** — primary interface, body and display face. Regular (`400`)
  and semibold (`600`) files are self-hosted.
- **Instrument Serif Italic** — expressive accent words inside headlines and
  the footer tagline.
- **System monospace** — URLs, commands, endpoints and technical metadata.

### Global scale

| Role | Current definition |
| --- | --- |
| Body | `1.0625rem / 1.65` |
| H1 | `clamp(2.7rem, 7.2vw, 4.75rem)` |
| H2 | `clamp(2rem, 4.6vw, 2.9rem)` |
| H3 | `1.25rem` |
| Lead paragraph | `1.25rem / 1.6` |
| Navigation/footer UI | approximately `0.875rem`–`0.9375rem` |

Headings use tight line-height and negative tracking. Body copy stays relaxed
and is constrained to readable line lengths. Use the serif only as a controlled
accent, never for long passages.

## Spacing and layout

- Base spacing unit: `--space: 8px`.
- Standard content width: `--content-width: 1080px`.
- Reading width: `--text-width: 44rem`.
- Wide landing/header/footer frame: up to `1440px`.
- Wide horizontal page padding: `clamp(24px, 3.35vw, 48px)`.
- Standard `.wrap` horizontal padding: `24px` (`3 × --space`).

Large sections should use generous vertical space and reduce it deliberately on
small screens. Avoid adding isolated spacing values when an existing token or
page rhythm can express the same relationship.

## Shape and depth

| Token | Value | Use |
| --- | --- | --- |
| `--radius-s` | `8px` | Small controls |
| `--radius-m` | `12px` | Utility surfaces |
| `--radius-card` | `20px` | Standard cards |
| `--radius-shot` | `16px` | Screenshot frames |
| Pill | `999px` | Buttons, badges and status chips |

Feature artwork may use larger radii from `28px` to `48px`. Keep large rounded
corners for immersive product panels; do not apply them to every container.

The shared artifact shadow is:

```css
0 0 0 1px rgba(255, 255, 255, 0.05),
0 24px 60px -16px rgba(0, 0, 0, 0.85)
```

## Shared components

### Header

`Base.astro` owns two variants:

- **Standard** — participates in document flow with a canvas background.
- **Overlay** — fixed and transparent, adding a subtle blurred gradient after
  scroll. Used by Connect and Privacy.

The header can respond to `[data-header-tone="light"]` sections by inverting
logo and link contrast. Do not recreate header styling inside individual pages.

### Footer

The footer is a single shared component with:

- product and support link groups;
- the “AI-powered tools for music lovers” brand line;
- oversized low-opacity wordmark;
- required Discogs attribution, copyright and Privacy link.

The home page uses the light footer variant. Connect and Privacy use the dark
variant. Mobile stacks the lower footer and removes desktop-only top alignment.

### Buttons and links

- Primary landing CTA: lavender fill, white text, pill shape.
- Secondary CTA: transparent or dark surface with a quiet border.
- Header connection action: high-contrast pill that flips on light sections.
- Inline links: lime with a restrained underline.
- Every interactive element must retain a visible keyboard focus state.

### Product and narrative components

- `ProductRing.astro` provides the wrapped album-cover cylinder in the landing
  hero. Twelve sleeves sit edge-to-edge on a rotating cylinder, and every
  dimension derives from one authored value, `--card-w`: the radius is
  `card / (2·sin(π/N))` so covers meet with a hairline seam, and the perspective
  is `1.5625 · R`. That ratio places the cylinder's silhouette at about one
  viewport width, which is what brings the full ~230° arc on screen so the
  geometry reads as a wrap rather than a shallow curve. Sizing the card away
  from ~20.7vw enlarges the radius and crops the arc, flattening the effect.
  Covers are culled by `backface-visibility` where the surface turns away from
  the camera, and dimmed as a function of |θ| so the headline stays in front.
  The server-rendered frame expresses its offsets in `calc()` against the same
  radius variable the script reads, so the wrap is correct without JavaScript
  and nothing shifts on hydration.
- Product-art cards introduce MIX and RIG with artwork-led color fields.
- Journey cards explain before/during/after use cases.
- Expandable connection rails use native `<details>` elements.
- `CodeBlock.astro` presents copyable setup commands.
- `Shot.astro` provides a stable screenshot frame and placeholder behavior.

## Motion

Motion patterns currently used or available in the shared layer include:

- slow ambient rotation of the hero album-cover cylinder (5.5°/s);
- pointer-reactive gradient movement and highlight on product preview cards;
- scroll-triggered reveal and stagger;
- per-letter headline treatment;
- count-up metrics;
- subtle fixed-header surface changes;
- lightweight hover transitions.

Motion must not hide essential content without progressive enhancement. Under
`prefers-reduced-motion: reduce`, transitions and transforms should be removed
or simplified and content should appear in its final state.

## Responsive behavior

The system currently uses focused breakpoints rather than a device matrix:

| Breakpoint | Primary use |
| --- | --- |
| `900px` | Collapse large product and guide layouts |
| `720px` | Stack the shared footer |
| `640px` | Reduce global section spacing and privacy-page offset |
| `600px` | Compact landing and connection compositions |
| `480px` | Simplify navigation and footer metadata |

Responsive changes should preserve content order and meaning. Prefer fluid
values (`clamp`, percentages and grid) before adding a new breakpoint.

## Accessibility

- Keep the skip link and semantic `header`, `main`, `section` and `footer` structure.
- Provide meaningful headings and `aria-labelledby` relationships for major sections.
- Decorative images use empty alternative text; informative images need concise descriptions.
- Native disclosure elements remain keyboard-operable.
- Focus styles must remain visible on dark and light surfaces.
- Maintain reduced-motion support for every new animation.
- Do not communicate product status or errors through color alone.

## Content style

- Lead with a concrete user question, outcome or decision.
- Prefer short, confident sentences over generic AI language.
- Treat evidence, privacy and user control as product benefits.
- Use `.DIG`, `.MIX` and `.RIG` consistently after the full product name is established.
- Mark unavailable products honestly with “In development” or “Coming soon.”
- Keep setup instructions exact, sequential and tied to the current client UI.

## Asset guidance

- Store production assets under `public/` in the relevant product or purpose folder.
- Store photographic art that should be optimized under `src/assets/` instead, so
  `astro:assets` can emit AVIF and WebP at the sizes actually rendered. Album art
  lives in `src/assets/albums`.
- Prefer SVG for logos, badges, icons and simple UI art.
- Supply album art as square sources of at least 600px, ideally 1200px so the
  largest hero card can be served at 2×.
- Keep fonts self-hosted and update preload declarations when the primary face changes.
- Do not add third-party image or font requests without a privacy and performance review.

## Governance

The implementation sources of truth are:

- tokens and primitives: `src/styles/global.css`;
- shared header/footer behavior: `src/layouts/Base.astro`;
- product facts and statuses: `src/config/brand.ts`;
- page-specific compositions: `src/pages/`;
- reusable visual primitives: `src/components/`.

When a design decision changes, update this document in the same commit. New
tokens should be added only when they represent a reusable semantic role, not a
single isolated value.

## Design QA checklist

- Check the landing, connection and privacy routes at desktop and mobile widths.
- Verify header contrast before and after scroll.
- Verify dark and light footer variants.
- Check text wrapping around 320px, 600px, 900px and wide desktop widths.
- Test keyboard navigation, disclosures, copy controls and visible focus.
- Test with reduced motion enabled.
- Confirm no horizontal overflow or clipped product art.
- Confirm product names, statuses, URLs and attribution match `brand.ts`.
