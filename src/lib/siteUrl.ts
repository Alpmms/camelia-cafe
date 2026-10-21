/**
 * Public address of the site.
 *
 * - NEXT_PUBLIC_SITE_URL: the real production domain (e.g. https://www.example.com).
 *   Setting it also turns search-engine indexing on.
 * - NEXT_PUBLIC_PREVIEW_URL: a preview address (e.g. https://alpmms.github.io).
 *   Used for absolute links such as the social share image; the site stays noindex.
 * - NEXT_PUBLIC_BASE_PATH: sub-folder the site is served from (e.g. /camelia-cafe).
 */
export const siteOrigin = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.NEXT_PUBLIC_PREVIEW_URL ||
  "http://localhost:3000"
).replace(/\/$/, "");
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
/** Full URL of the home page, including any sub-folder. */
export const siteUrl = `${siteOrigin}${basePath}`;
export const hasProductionUrl = Boolean(process.env.NEXT_PUBLIC_SITE_URL);
