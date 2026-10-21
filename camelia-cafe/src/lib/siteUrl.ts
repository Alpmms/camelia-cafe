/**
 * The production URL is not known yet. Set NEXT_PUBLIC_SITE_URL in your host
 * (e.g. https://www.cameliacafe.com — use the real domain) before launch.
 * It is used for canonical links, Open Graph, the sitemap, and robots.txt.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
export const hasProductionUrl = Boolean(process.env.NEXT_PUBLIC_SITE_URL);
