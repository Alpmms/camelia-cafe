import type { MetadataRoute } from "next";
// Generated once at build time (also required for static export).
export const dynamic = "force-static";

import { siteUrl, hasProductionUrl } from "@/lib/siteUrl";

export default function robots(): MetadataRoute.Robots {
  // Until NEXT_PUBLIC_SITE_URL is set, block crawlers so previews aren't indexed.
  if (!hasProductionUrl) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
