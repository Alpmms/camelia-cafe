import type { NextConfig } from "next";

/**
 * Two build modes:
 * - Default (`npm run build`): a normal Next.js server build, e.g. for Vercel.
 * - Static (`npm run build:static`): plain HTML/CSS/JS in `out/`, for GitHub
 *   Pages or any static host. Set NEXT_PUBLIC_BASE_PATH when the site lives in
 *   a sub-folder (GitHub Pages project sites: "/<repo-name>").
 */
const isStatic = process.env.STATIC_EXPORT === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  ...(isStatic && {
    output: "export",
    trailingSlash: true,
    basePath,
    images: { unoptimized: true },
  }),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
