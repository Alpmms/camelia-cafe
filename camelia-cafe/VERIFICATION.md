# Verification log — Oct 21, 2026 (photo-led dark design)

Tested against the production build (`npm run build` + `npm start`) in headless Chromium.

## Passed

- Production build, TypeScript (`tsc --noEmit`), and ESLint: no errors.
- **Layout:** no horizontal overflow at 360 px, 820 px, and 1440 px; no console or page errors; no failed requests for the site's own files.
- **Navigation:** Menu, Our Story, Gallery, and Visit Us each land just below the sticky header (desktop and mobile).
- **Mobile menu:** opens with Enter, moves focus to the first link, sets `aria-expanded`, closes with Escape and returns focus to the button, and closes when a link is chosen.
- **Keyboard:** the first Tab reaches "Skip to content"; buttons show a visible focus outline.
- **Links:** every phone link is `tel:+13147601023`. Every Instagram link is `https://www.instagram.com/cameliacafebakery/`. Every directions link goes to Google Maps with the destination "Camelia Cafe, 172 W County Center Fc 6, Des Peres, MO 63131". All external links open in a new tab with `noopener`. All in-page anchors resolve.
- **Gallery viewer** (currently switched off via `galleryZoom` until full-size photos arrive), tested in a temporary copy with neutral test images: opens with Enter/click, arrow keys move between photos and wrap around, and Escape, the Close button, and clicking outside all close it. Focus returns to the photo that opened it. No overflow at 360 px or 1440 px.
- **Content:** one `h1`; "Order Online" is absent; no hours, ratings, or reviews appear in the page or structured data.
- **Images:** every image on the page loads (no broken images) and has alt text. No third-party iframes.
- **SEO files:** `/robots.txt`, `/sitemap.xml`, `/opengraph-image`, `/icon.png`, the logo, and the hero image return 200. Title, description, Open Graph image, and favicon are present. Preview builds are `noindex`.
- **Contrast:** cream text on the dark background was checked against WCAG AA (see below). The table also keeps the ratios from the earlier light design.

## Could not check

- **Directions and Instagram destinations:** the URLs were checked, but the pages themselves weren't opened (Google Maps unreachable; Instagram blocks automated access).
- **Tap-to-call** on a real phone: the link format was checked, but no call was placed.
- **Photo licenses:** each Unsplash photo page was checked for "Free to use under the Unsplash License" on Oct 21, 2026. The license terms themselves were not re-reviewed.
- **Safari, Firefox, and physical devices:** only Chromium was tested.
- **Business details:** the Instagram handle and product categories are confirmed from the supplied screenshots of the verified account. The address, phone, and hours weren't visible in them; the address and phone match one third-party listing (Atly).

## Contrast ratios

| Pair | Ratio | WCAG AA (normal text) |
|---|---|---|
| white on cobalt | 9.24:1 | AA |
| white/85 on cobalt | 7.13:1 | AA |
| cobalt on white | 9.24:1 | AA |
| ink on white | 16.98:1 | AA |
| ink-soft on white | 7.29:1 | AA |
| ink-soft on mist | 6.68:1 | AA |
| ink-soft on pink | 6.10:1 | AA |
| ink-soft on pistachio | 6.33:1 | AA |
| ink-soft on honey | 6.40:1 | AA |
| ink-soft on sky | 6.17:1 | AA |
| white/65 on navy | 7.74:1 | AA |
| cobalt on cobalt-soft (nav hover) | 7.66:1 | AA |
| cream (#f2ece2) on night (#0a0e1a) | 16.39:1 | AA |
| mist (#aab1c5) on night (#0a0e1a) | 8.99:1 | AA |
| mist (#aab1c5) on night-2 (#11172a) | 8.31:1 | AA |
