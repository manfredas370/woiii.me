/**
 * Single source of truth for product names, URLs, and verifiable facts.
 * Any future rename should be one commit touching only this file.
 * Facts verified against WOIII-me/Discogs-MCP README on 2026-07-15.
 */

export const BRAND = {
  /** Umbrella brand */
  name: "WOIII.me",
  domain: "woiii.me",
  publisher: "WOIII.me",
} as const;

export const DIG = {
  /** Public listing/product name — used on stores, directories, and site copy */
  name: "DIG for Discogs",
  /** Short name for repeat mentions in copy */
  shortName: "DIG",
  /** Marketing token used in the product-family grid */
  token: "woiii.DIG",
  mcpUrl: "https://discogs-mcp.woiii.workers.dev/mcp",
  sseUrl: "https://discogs-mcp.woiii.workers.dev/sse",
  apiBase: "https://discogs-mcp.woiii.workers.dev/api",
  repoUrl: "https://github.com/WOIII-me/Discogs-MCP",
  issuesUrl: "https://github.com/WOIII-me/Discogs-MCP/issues",
  discussionsUrl: "https://github.com/WOIII-me/Discogs-MCP/discussions",
  releasesUrl: "https://github.com/WOIII-me/Discogs-MCP/releases",
  serverVersion: "1.4.0",
  extensionVersion: "0.4.0",
  /** Verified counts — README tool/prompt/endpoint tables */
  toolCount: 15,
  promptCount: 10,
  restEndpointCount: 9,
  chromeMinVersion: "114",
  claudeCodeOneLiner:
    "claude mcp add --transport http --scope user discogs https://discogs-mcp.woiii.workers.dev/mcp",
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
  email: "hello@woiii.me",
} as const;

/**
 * Required attribution from Discogs' reply (2026-07) — verbatim, do not
 * paraphrase. Must appear visibly on every page (footer).
 */
export const DISCOGS_ATTRIBUTION =
  "This application uses Discogs' API but is not affiliated with, sponsored or endorsed by Discogs. 'Discogs' is a trademark of Zink Media, LLC.";

/** KV cache TTLs — from README "Caching" section, used on /privacy */
export const CACHE_TTLS = {
  releasesAndMasters: "24 hours",
  versions: "12 hours",
  search: "6 hours",
  collectionsAndWantlists: "4 hours",
} as const;
