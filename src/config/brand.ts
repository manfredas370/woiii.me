/**
 * Single source of truth for product names, URLs, and verifiable facts.
 * Any future rename should be one commit touching only this file.
 * Product facts verified against WOIII-me/Discogs-MCP-v2 on 2026-10-21.
 */

export const BRAND = {
  /** Umbrella brand, and the name of the Discogs pressing guide since v2 */
  name: "WOIII.me",
  domain: "woiii.me",
  publisher: "WOIII.me",
} as const;

/**
 * DIG for Discogs, the earlier version (v1). Its public repository still
 * hosts the open-source code, issues and discussions the site links to.
 */
export const DIG = {
  name: "DIG for Discogs",
  repoUrl: "https://github.com/WOIII-me/Discogs-MCP",
  issuesUrl: "https://github.com/WOIII-me/Discogs-MCP/issues",
  discussionsUrl: "https://github.com/WOIII-me/Discogs-MCP/discussions",
  releasesUrl: "https://github.com/WOIII-me/Discogs-MCP/releases",
} as const;

export const MIX = {
  token: "woiii.MIX",
  badge: "in development",
  description:
    "A bespoke playlist concierge — a listener survey becomes a private mixtape with song-by-song commentary.",
} as const;

export const RIG = {
  token: "woiii.RIG",
  badge: "coming soon",
  description:
    "An AI hi-fi gear finder — live listings, price history, and listening-goal matching.",
} as const;

export const SUPPORT = {
  email: "help@woiii.me",
} as const;

/**
 * Required attribution from Discogs' reply (2026-07) — verbatim, do not
 * paraphrase. Must appear visibly on every page (footer).
 */
export const DISCOGS_ATTRIBUTION =
  "This application uses Discogs' API but is not affiliated with, sponsored or endorsed by Discogs. 'Discogs' is a trademark of Zink Media, LLC.";

/**
 * The service the legal pages (/privacy, /terms, /support) cover.
 * Verified against WOIII-me/Discogs-MCP-v2 on 2026-10-21: WOIII.me is the
 * current product (Chrome extension, ChatGPT and Claude plugins); DIG for
 * Discogs is the earlier version, still served from its original host.
 */
export const SERVICE = {
  name: "WOIII.me",
  formerName: "DIG for Discogs",
  /** The server the Chrome Web Store extension and the AI plugins use today. */
  serverHost: "discogs-mcp-staging.woiii.workers.dev",
  /** The permanent address the server moves to. */
  plannedHost: "mcp.woiii.me",
  /** The earlier DIG for Discogs server. */
  legacyHost: "discogs-mcp.woiii.workers.dev",
  /** Where the egress relay (Fly.io) runs. */
  relayRegion: "Frankfurt, Germany",
  /** The address to paste into ChatGPT, Claude or Codex. */
  mcpUrl: "https://discogs-mcp-staging.woiii.workers.dev/mcp",
  chromeMinVersion: "114",
  /** Places to ask: the Chrome side panel, ChatGPT, Claude. */
  surfaceCount: 3,
  /** Scoring lenses: best sound, most collectible. */
  lensCount: 2,
} as const;

/** Server and extension storage lifetimes (v2 src/clients/cached-discogs.ts, src/api/handler.ts, src/settings.ts), used on /privacy */
export const CACHE_TTLS = {
  catalogue: "5 hours 45 minutes",
  collectionsAndWantlists: "4 hours",
  identity: "4 hours",
  settings: "12 months",
  signInState: "10 minutes",
  extensionMemory: "10 minutes",
  analytics: "three months",
  logs: "7 days",
} as const;
