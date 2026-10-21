# Image sources

## Current approach (Oct 21, 2026)

- **Mood and category photos** are licensed stock photos from Unsplash (credits below). They are representative images, **not Camelia's own products**. Replace them with the owner's photos whenever possible.
- **Real Camelia photos** from the official Instagram appear in the "From our Instagram" strip, at small sizes where they look crisp.
- **Logo:** vector (`public/brand/`).
- The original line illustrations still exist in `src/components/Illustrations.tsx`. Setting `categoryVisual = "illustration"` brings them back on the menu cards.

## Stock photos (Unsplash License)

All seven were confirmed on Oct 21, 2026 as "Free to use under the Unsplash License," not Unsplash+. The Unsplash License allows free commercial use without required attribution; credit is listed here as good practice.

| File (`public/images/…`) | Used in | Photographer | Source |
|---|---|---|---|
| `stock-hero-coffee-beans.webp` | Hero background (mirrored) | Imagine Reality Studio (@imagine_reality_studio) | https://unsplash.com/photos/a-steaming-cup-of-coffee-sits-on-coffee-beans-NomY9GAy9YE |
| `stock-layered-matcha.webp` | Coffee & Refreshers card | Lala Azizli (@lazizli) | https://unsplash.com/photos/a-colorful-layered-drink-in-a-glass-UFgB4e7JA1g |
| `stock-pistachio-cheesecake.webp` | Cakes & Mini Cakes card | Aleksandra Gencheva (@inmykitchen_bg) | https://unsplash.com/photos/a-piece-of-cake-on-a-plate-with-a-fork-N9pb8kJ1nsI |
| `stock-crepe.webp` | Crêpes & Waffles card | Austin P (@pqt) | https://unsplash.com/photos/crepe-with-ice-cream-and-syrup-1ZTccDpF71k |
| `stock-blue-ice-cream.webp` | Ice Cream card | 一宿秋 moira (@kingmoira) | https://unsplash.com/photos/ice-cream-in-cup-Urh84L0tPas |
| `stock-espresso-pour.webp` | Our Story | Faris Ristiansyah (@farisr___) | https://unsplash.com/photos/espresso-shot-pouring-into-a-dark-cup-creating-ripples-_cZE9aqThds |
| `stock-cappuccino.webp` | Visit Us | Kae Ng (@ffkae) | https://unsplash.com/photos/cappuccino-in-brown-mug-_sii6-ed508 |

Rejected: a gelato photo whose cup showed another shop's logo.

## Instagram photos (gallery strip)

Only the eight `g-*` files are still used (gallery strip). Rows below for other files are historical; those files were removed.

## How they were enhanced

Screenshot tiles are tiny (about 155 × 207 px). Each crop was enlarged **4× with Real-ESRGAN**, an AI super-resolution model that sharpens edges and texture. It adds plausible detail, so small text in photos (menu boards, bottle labels, cup logos) can look slightly garbled up close. The photos are kept at sizes where this doesn't show.

**The logo** was traced into a true vector (`camelia-logo.svg`, plus a white version), so it's sharp at any size. It was traced from the profile picture, so compare it with the original artwork. If the owner has the original vector file, use that instead.

**Still recommended before launch:** replace these with the owner's original photos (about 1600 px). Originals will always look better than enhanced screenshots.

"Screenshot N" is the order the screenshots were sent: 1–10 are phone screenshots, and 11 is the desktop profile page.

| File (`public/…`) | Used in | Content | Cropped from | Final size |
|---|---|---|---|---|
| `brand/camelia-logo.svg`, `brand/camelia-logo-white.svg` | Header, footer, hero badge, favicon, share image | Logo (vector trace) | Screenshot 11, profile picture | vector |
| `images/hero-waffle-bowl.webp` | Our Story | Belgian waffle bowl with strawberries | Screenshot 11, grid row 2, middle | 1164 × 880 |
| `images/cat-refresher.webp` | Hero (spotlight), share image | Pink and green layered drink | Screenshot 7, row 4, left | 624 × 780 |
| `images/g-red-velvet.webp` | Gallery 5 | Red velvet slice | Screenshot 8, row 1, left | 624 × 780 |
| `images/g-pink-drink.webp` | Coffee & Refreshers card | Pink layered drink | Screenshot 7, row 3, left | 624 × 780 |
| `images/cat-mini-cake.webp` | Hero (front), share image | Pistachio mini cake | Screenshot 7, row 4, right | 624 × 780 |
| `images/hero-crepe-apron.webp` | Crêpes & Waffles card | Staff member in logo apron serving a strawberry crêpe | Screenshot 11, grid row 2, left | 1600 × 1421 |
| `images/g-ice-cream-cup.webp` | Ice Cream card | Strawberry ice cream cup | Screenshot 5, row 3, middle | 524 × 656 |
| `images/cat-ice-cream.webp` | Visit Us | Two ice cream cups in front of the storefront | Screenshot 5, row 4, left | 624 × 780 |
| `images/g-mini-cake-orange.webp` | Gallery 1 | Mini cake with orange piping | Screenshot 8, row 1, middle | 620 × 776 |
| `images/g-roses-latte.webp` | Gallery 2 | Latte art and roses | Screenshot 8, row 3, left | 624 × 780 |
| `images/g-caramel-cake.webp` | Gallery 3 | Caramel-drizzled mini cake | Screenshot 8, row 2, left | 624 × 780 |
| `images/g-iced-mocha.webp` | Gallery 4 | Layered iced coffee with cream | Screenshot 7, row 1, left | 620 × 776 |
| `images/g-cake-trio.webp` | Cakes & Mini Cakes card | Red velvet mini cake and slices | Screenshot 5, row 4, right | 624 × 780 |
| `images/g-berry-mini-cake.webp` | Gallery 6 | Berry mini cake | Screenshot 8, row 1, right | 624 × 780 |
| `images/g-red-cake.webp` | Gallery 7 | Dome cake with red crumbs | Screenshot 8, row 2, middle | 620 × 776 |
| `images/g-latte-art.webp` | Gallery 8 | Coffee with latte art | Screenshot 5, row 4, middle | 532 × 664 |

Permission: the business should confirm it's happy for these photos to be used on the website.

## Deliberately not used

- **Promotional graphics with big text** (ice cream flavor posters, "Satisfying taste sandwich," lemonade and orange posters, "Fall Drink Menu"). The brief asks for no text-heavy images, and several look like designed or stock-style graphics.
- **The photo of two women eating dessert.** It appears to be stock or AI-generated, so it shouldn't be presented as real customers.
- **Studio product shots on white backgrounds** (tiramisu, Lotus cake, lava cake, and similar). They may be supplier images rather than Camelia's own products. Confirm with the owner before using them.
- **The counter / menu-board photo**, because the enhancement garbled the menu text.
- **Tiles whose enhancement came out poorly** (for example, a cup with garbled bottle labels behind it).

## Fonts

Bodoni Moda (headings) and Instrument Sans (text), both under the SIL Open Font License (licenses in `src/fonts/`).
