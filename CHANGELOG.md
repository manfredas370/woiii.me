# Changelog

All notable changes to the woiii.me website are documented here.

## [1.1.0] - 2026-07-25

### Changed

- Rescaled the hero album-cover cylinder so its full visible arc fits the
  viewport: 7.6 covers now read across the fold instead of 4.0, with the outer
  sleeves foreshortening past 90° into slivers.
- Expanded the ring from 7 duplicated sleeves to 12 unique ones.
- Derived every ring dimension from a single authored card width, so radius and
  perspective stay correct across breakpoints instead of being tuned per size.
- Tightened the space between the hero calls to action and the cover band.
- Eased the ring rotation from 8°/s to 5.5°/s to suit the tighter perspective.

### Added

- Five album sleeves: Duke Ellington and Johnny Hodges *Back to Back*, Don
  Cherry *Brown Rice*, Steely Dan *Gaucho*, Kamasi Washington *Heaven and
  Earth*, and Steve Reich *Music for 18 Musicians*.
- An `astro:assets` image pipeline for album art, serving AVIF and WebP with a
  JPEG fallback.

### Fixed

- Hero covers no longer overlap the headline and calls to action.
- Ring cards no longer shift on hydration; the server-rendered frame and the
  script now derive the cylinder radius from the same value.
- Removed a forced synchronous layout on every animation frame.
- The ring no longer freezes when the pointer moves toward a call to action.

### Removed

- 15 unreferenced mesh gradient images left over from earlier ring-card
  artwork explorations.

### Performance

- Hero album art reduced from 3.9MB of PNGs for 7 covers to 81KB at 1× and
  261KB at 2× for 12 covers.
- Build output reduced from 9.7MB to 5.8MB.

## [1.0.0] - 2026-07-22

### Added

- Motion-led, responsive landing page for woiii.me/DIG.
- Animated album-cover orbit and scroll-driven text reveals.
- Expandable connection guides for Claude, ChatGPT, Codex and Chrome.
- Product previews for woiii.MIX and woiii.RIG.
- Adaptive header treatment across dark and light sections.
- Light landing-page footer and dark connection-guide footer.
- Privacy policy, Discogs attribution and tracker-free site architecture.
- Vercel-ready static Astro build.

[1.1.0]: https://github.com/manfredas370/woiii.me/releases/tag/v1.1.0
[1.0.0]: https://github.com/manfredas370/woiii.me/releases/tag/v1.0.0
