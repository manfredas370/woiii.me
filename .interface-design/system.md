# WOIII.me design system

## Direction & feel

Paper, graphite ink, and record-label pastels. Like a well-mastered record:
quiet, precise, warm honesty. Marketing site for vinyl collectors evaluating a
technical tool — evidence-first tone, no growth-hack loudness.

## Signature (domain: crate digging / deadwax / label centers)

- **Run-out grooves** — concentric hairline circles behind the hero
  (`.hero-grooves`, repeating-radial-gradient + mask fade).
- **Catalog numbers** — `WOIII·001/002/003` deadwax etchings in mono on the
  family cards; footer stamp "NO TRACKERS PRESSED INTO THIS SITE".
- **Product artifacts** — screenshots/mocks rendered as mini windows
  (`.window`: title bar, dots, hairline) on pastel mats (`.shot-card`), with an
  MCP `tool-chip` in the chat mock.

## Tokens (src/styles/global.css)

- Text, 4 levels: `--ink` #212227, `--ink-secondary`, `--ink-tertiary`,
  `--ink-faint`.
- Surfaces, same hue, whisper steps: `--canvas` #fdfdfc → `--surface` →
  `--surface-high` → `--surface-inset`.
- Borders as rgba so they melt: `--line-soft` .06, `--line` .10,
  `--line-strong` .22.
- One accent: `--blue-ink` #1a56b0 (archival label blue) + `--blue-tint`.
  Pastels (green/gold/red tints) only for label-center card grammar.
- Light mode ONLY (`color-scheme: only light`) — owner decision 2026-07-15.

## Depth strategy

Hairline borders + surface shifts. The ONLY shadow is `--shadow-artifact` on
`.window` mocks (they're physical artifacts on mats). Do not add shadows
elsewhere.

## Type

Geist variable (100–900) everywhere; Instrument Serif italic (`.accent`) for
1–2 emotionally loaded words per headline and stat numerals. Eyebrows:
12px/600/0.1em uppercase. Numbers: `tabular-nums`. Headline tracking −0.03em.

## Spacing & shape

8px base (`--space` multiples). Radii: 8 (buttons/inputs), 12 (code blocks,
note cards), 16 (windows/shots), 20 (cards/mats). Pill buttons: filled ink +
outlined quiet; hover shifts color, never opacity.

## Patterns

- `.kicker` — hero chip: token pill + live dot.
- `.steps` — numbered chips (34px, canvas bg, `--line-strong` border) joined
  by 1px hairline timeline (`li::after`).
- `.rail-card` — pastel client cards; hover = hairline border in own hue.
- `.product-card` — hairline border in own hue (color-mix 30–35%) + 30% tint
  wash; catalog stamp top-right.
- Shiver reveal on `.shiver` h2s only; ≤2 KB inline; reduced-motion static.

## Rules

- No dark mode. No gradients except the groove texture. One accent color.
- Never harsh solid-hex borders; always the `--line-*` scale.
- Copy stays scoped: free/no-ads claims are DIG's, never site-wide.
