import type { MetadataRoute } from "next";
// Generated once at build time (also required for static export).
export const dynamic = "force-static";

import { siteUrl } from "@/lib/siteUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 }];
}
