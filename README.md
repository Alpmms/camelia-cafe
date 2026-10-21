# Camelia Cafe — website

Single-page website for **Camelia Cafe**, a café and bakery inside West County Center, Des Peres, Missouri.

Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4. Fonts are self-hosted (SIL Open Font License). No other runtime dependencies.

> **Status: preview-ready.** Dark, cinematic design with licensed Unsplash photography, a vector logo, and real Camelia photos from Instagram in a gallery strip.

## Requirements

- Node.js 20.9 or newer (tested with Node 22)
- npm

## Setup and development

```bash
npm install
npm run dev          # http://localhost:3000
```

## Production build

```bash
npm run build
npm start            # serves the production build on http://localhost:3000
npm run lint         # optional: lint the code
```

## Project layout

```
src/
  content/site.ts        ← ALL business info, copy, categories, photos, links (edit this)
  app/
    layout.tsx           fonts, page title, description, social metadata
    page.tsx             page sections + LocalBusiness structured data (JSON-LD)
    opengraph-image.tsx  social sharing image (generated)
    icon.png, apple-icon.png  favicon / home-screen icon (from the logo)
    sitemap.ts, robots.ts
    globals.css          color palette, typography tokens, focus styles
  components/            Header, Hero, Selection, Story, Gallery, Visit, Footer, …
  fonts/                 self-hosted Bodoni Moda + Instrument Sans (OFL)
assets/                  fonts and JPEG photos used to draw the social sharing image
public/images/           photos (WebP)
public/brand/            logo (SVG, plus a white version)
```

## Preview on GitHub Pages

The repo includes `.github/workflows/pages.yml`, which builds a static version and publishes it on every push to `main`.

1. Push this project to a GitHub repository.
2. In the repo, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Open the **Actions** tab and wait for "Deploy to GitHub Pages" to finish (about 2 minutes).
4. The site appears at `https://<username>.github.io/<repo-name>/`.

The site is set to `noindex` until `NEXT_PUBLIC_SITE_URL` is set, so the preview won't show up in Google. GitHub Pages on a private repository requires a paid GitHub plan.

To build the static version locally: `NEXT_PUBLIC_BASE_PATH=/camelia-cafe npm run build:static` (output in `out/`).

## Deployment (recommended: Vercel)

Vercel is made by the Next.js team and needs no extra configuration for this project.

1. Push this folder to a GitHub repository (private is fine).
2. Go to vercel.com → **Add New… → Project**, import the repository. Framework is detected automatically; keep the default build settings.
3. Under **Settings → Environment Variables**, add:
   - `NEXT_PUBLIC_SITE_URL` = the final address, e.g. `https://www.your-domain.com` (no trailing slash)
4. Deploy. Then under **Settings → Domains**, add the custom domain and follow the DNS instructions from your domain registrar.
5. After the domain works, **redeploy once** so the sitemap, canonical link, and social image use the real address.

**Until `NEXT_PUBLIC_SITE_URL` is set, the site tells search engines not to index it** (`noindex` and a blocking `robots.txt`). This keeps preview links out of Google. Setting the variable and redeploying switches indexing on.

### Other hosts

Any host that runs Node.js works (Netlify, Render, a VPS): run `npm run build` and `npm start`. Static hosts work too: `npm run build:static` writes plain files to `out/`.

## Updating content

See `UPDATING.md`. Most changes are a single edit in `src/content/site.ts`.

## Other docs

- `UPDATING.md` — how to change details, hours, categories, photos, and the logo
- `IMAGE_SOURCES.md` — every image slot, where it appears, and its source
- `LAUNCH_CHECKLIST.md` — what must happen before going public
- `VERIFICATION.md` — what was tested, and what couldn't be
