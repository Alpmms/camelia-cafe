# Before going public

## Launch blockers

1. **Stock vs. real photos.** The hero, menu cards, Our Story, and Visit Us use licensed Unsplash photos as representative images, not Camelia's own products. Before launch, the owner should approve this, or supply their own product photos to swap in (`src/content/site.ts`). The logo is a vector trace; swap in the original artwork if it exists.
2. **Permission to use the Instagram photos** in the gallery strip, confirmed by the business. Being posted on their Instagram strongly suggests they're theirs, but get a yes, especially for any shot that may come from a supplier.
3. **Production domain.** Set `NEXT_PUBLIC_SITE_URL` and redeploy. Until then the site is deliberately `noindex`.

## Strongly recommended

- **Hours.** Still not published, because they're not visible in the supplied material.
- **DoorDash.** An official post says "Now on DoorDash," but I couldn't find the store link. If the owner sends it, set `orderUrl` in `src/content/site.ts` and an "Order Online" button appears.
- **Directions check.** The site no longer embeds a map (faster, and no third-party cookies). After deploying, tap "Get Directions" on a phone and confirm Google Maps lands on Camelia Cafe inside West County Center.
- **Gallery viewer.** It's switched off while the photos are small. Set `galleryZoom = true` once full-size originals are in.

## Resolved since the first draft

- **Instagram handle:** `@cameliacafebakery` is the official, verified account (blue check in the screenshots). The `@camelia.cafe.official` handle on a third-party listing (Atly) is not used.
- **Logo:** the real logo replaces the stand-in drawing, traced to a sharp vector.
- **Product categories:** confirmed by the account's Story highlights (Crepes/Waffles, Ice Creams, 10" Cakes, Mini Cakes) and the in-store menu boards (Cakes, French Fruit Cakes, Coffee, Specials, Crepes, Refreshers). The site's copy now also mentions matcha, popping boba, Belgian waffle bowls, red velvet, and pistachio, all shown in official posts.

## Seen on Instagram but not on the site (confirm before adding)

- **Sandwiches** appear in several promotional posts. If they're a current menu item, they could become a fifth category.
- **French fruit cakes** and **specials** appear on the menu boards.
- **A loyalty card** ("collect stamps, get one item free") appears in a post. If it's still running, it would be a nice line in Visit Us.
- **Seasonal drinks** (a fall drink menu). These are best left to Instagram, since the website shouldn't need updating every season.
- **"Camelia Coffee – St. Louis, Missouri"** appears as a location tag on one post. Make sure the business name is consistent on Google.
- **Address:** a delivery app (Postmates) lists "Cafe Camelia" at 80 West County Center Drive (likely the mall's main address), while the site uses 172 W County Center Fc 6 from the brief. Confirm it.
