# WOIII.me design system

## Direction & feel

Black vinyl, lime strobe: a black canvas with one vibrant accent, big
grotesque headlines, and italic-serif accent words. The record-shop soul is
kept through run-out grooves, deadwax catalog stamps, and label-pastel cards
re-pressed for a dark room. Evidence-first tone, no growth-hack loudness.

## Signature (domain: crate digging / deadwax / label centers)

- **Run-out grooves** — concentric white-alpha hairlines behind the hero
  (`.hero-grooves`) and cropped label-center circles on ring cards.
- **Catalog numbers** — `WOIII·001/002/003` mono etchings on family/ring
  cards; footer stamp "NO TRACKERS PRESSED INTO THIS SITE".
- **Product artifacts** — informative fake-UI windows (`.window`: title bar,
  dots, MCP `tool-chip`, ranked verdicts with evidence footers) on deep
  label-hue mats; floating status chips (`.float-chip`) around the hero demo.
- **Wrapped product ring** — cylindrical album-cover geometry (R=480, 10
  cards, rotateY(−θ), 8°/s rAF rotation) in the products section.

## Tokens (src/styles/global.css)

- Text, 4 levels on black: `--ink` #f2f2ee → `--ink-secondary` →
  `--ink-tertiary` → `--ink-faint`.
- Surfaces, same hue, whisper-lighter steps: `--canvas` #0a0a0a →
  `--surface` #141413 → `--surface-high` #1d1d1c → `--surface-inset`.
- Borders as white rgba: `--line-soft` .07, `--line` .11, `--line-strong` .24.
- ONE accent: `--accent-hue` #c9f158 lime (+ `--accent-strong`,
  `--accent-tint`, `--on-accent` near-black for text on lime).
- Label pastels (dark pressings): blue/green/gold/red `-tint` deep hues +
  light `-ink` text pairs. Cards only — never as page accents.
- Dark mode ONLY now (`color-scheme: only dark`) — owner pivoted from
  light-only 2026-07-16 ("black, contrasting, vibrant lime").

## Type

- Headlines: **Instrument Sans** variable, weight 600–640, tracking −0.025
  to −0.032em.
- Accent words: **Instrument Serif italic** in lime (`.accent`), 1–2 per
  headline; also stat numerals.
- Body/UI: **Geist** (cohesion with the DIG extension).

## Depth strategy

Hairline borders + surface steps. `--shadow-artifact` (hairline ring + deep
drop) only on `.window` mocks and float chips. No other shadows.

## Motion (all reduced-motion safe, ≤3 KB inline, no libraries)

- `.shiver` — per-letter reveal on section headlines, once on scroll-into-view.
- `.reveal` — rise-in on scroll (JS adds `.reveal-pre` then `.reveal-in`, so
  no-JS never hides content); slight stagger.
- Product ring rotates 8°/s; pauses on hover/offscreen.
- CSS-only radio tabs on the journey section; active tab = lime pill.

## Patterns

- `.kicker` — hero chip: lime token pill + live dot.
- `.tabs` — before/during/after journey; panels are surface cards with
  copy-left, window-mock-right.
- `.memory-q` — rotated chat-bubble question over a window mock.
- `.closing-card` — THE vibrant section: full lime card, near-black text,
  inverted buttons/codeblock.
- `.steps` timeline, `.rail-card` client cards, `.product-card` hairline-hue
  cards — all inherited from v1, auto-adapted by tokens.

## Rules

- Black canvas + one lime accent. Label pastels stay inside cards.
- Never harsh solid borders; always the `--line-*` scale.
- Never fabricate testimonials/quotes; honest numbers only.
- Copy stays scoped: free/no-ads claims are DIG's, never site-wide.
