# Updating the website

Almost everything lives in one file: **`src/content/site.ts`**. Edit it, save, then rebuild and redeploy. On Vercel, pushing the change to GitHub redeploys automatically.

Only publish facts the business has confirmed: no guessed hours, prices, or claims like "gluten-free."

## Business details

In `business`: name, address, phone, and Instagram. Change the phone in **both** `display` (how it looks) and `tel` (digits for tap-to-call, starting `+1`).

The directions link and the map are built from the address automatically.

## Hours

Hours are hidden until confirmed. Until then, the Visit section asks people to call or check Instagram. To publish them, fill in **both** fields:

```ts
hours: [
  { days: "Monday – Saturday", hours: "10:00 a.m. – 8:00 p.m." },
  { days: "Sunday", hours: "11:00 a.m. – 6:00 p.m." },
],
hoursSchema: ["Mo-Sa 10:00-20:00", "Su 11:00-18:00"],   // same hours, for Google
```

(Those times are examples only. Replace them with the real hours.)

## Menu and online ordering

- `menuUrl`: link to an official menu PDF or page. When set, the section title changes to "Our menu" and a "View the full menu" button appears. A PDF can go in `public/` (e.g. `public/menu.pdf` → `menuUrl: "/menu.pdf"`).
- `orderUrl`: official online-ordering link. When set, an "Order Online" button appears in Visit Us. Leave it `null` if there isn't one.

## Product categories

The cards show each category's `photo` (`categoryVisual = "photo"`). Setting it to `"illustration"` switches them to the site's line drawings instead.

Edit `categories`. Each one has a `name`, a short `description`, a card color (`tint`: pink, pistachio, honey, or sky), and a `photo`. The product tags under the hero are in `highlights`. You can add, remove, or reorder them; the layout adjusts on its own. Don't add individual items or prices unless they are current and confirmed.

## Photos

1. Export the photo as **WebP** (or JPG), about **1600 px on the long side**, under ~300 KB. Use originals, not Instagram screenshots.
2. Put it in `public/images/`, e.g. `public/images/hero.webp`.
3. In `site.ts`, find the slot (the `brief` says what it's for) and set:
   ```ts
   src: "/images/hero.webp",
   width: 1600, height: 2000,          // the file's actual pixel size
   alt: "Slices of layered cake and a crêpe on the counter at Camelia Cafe",
   ```
4. Write `alt` text describing what is actually in the photo.

Recommended shapes: categories and gallery are **portrait 4:5**; the large hero photo and the story photo are **landscape**. To control cropping, add `focus` (e.g. `"50% 80%"` keeps the lower part in view). Photos are cropped to fit, so keep the subject near the center.

Once **full-size** photos are in, set `galleryZoom = true` so the gallery opens them in a viewer (arrow keys, Escape, Close button). It stays off while photos are small crops.

Record each photo in `IMAGE_SOURCES.md`.

## Logo

The current logo is a vector trace in `public/brand/`. To use the original artwork, put it there (SVG preferred) and set:

```ts
export const logo = { src: "/brand/camelia-logo.svg", width: 448, height: 448, alt: "Camelia Cafe logo" };
```

The header, footer, and share image use it automatically. Also regenerate `src/app/icon.png` (192 px) and `src/app/apple-icon.png` (180 px) from the new file.

## Social sharing image

`src/app/opengraph-image.tsx` draws a branded card. To use a photo instead, delete that file and add `src/app/opengraph-image.jpg` (1200 × 630 px) plus `src/app/opengraph-image.alt.txt` containing a one-line description.

## Stock photos

Files named `stock-*` in `public/images/` are licensed Unsplash photos used for mood (hero background, menu cards, Our Story, Visit Us). To replace one with the owner's photo, put the new file in `public/images/` and update that slot in `site.ts`. The hero background is decorative (empty alt text), and its crop is set in `Hero.tsx`. Record any new stock photo in `IMAGE_SOURCES.md`.

## Headline and copy

`hero`, `story`, and `seo` in `site.ts` hold the headline, intro, story text, page title, and search description.

## Colors and fonts

Colors (dark theme: night, cream, cobalt, rose) are defined once at the top of `src/app/globals.css`, and fonts in `src/app/layout.tsx`. The `.grade` class applies the same light color grade to every photo, so photos from different posts look consistent.
