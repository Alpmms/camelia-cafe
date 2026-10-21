/**
 * Camelia Cafe — central content file.
 *
 * Everything a non-developer is likely to change lives here: business details,
 * hours, the product selection, photos, and links. Edit this file, rebuild,
 * and redeploy. See UPDATING.md for step-by-step instructions.
 *
 * Rule of thumb: only publish facts the business has confirmed.
 */

/**
 * Prefix for files in /public when the site is served from a sub-folder
 * (e.g. GitHub Pages at /camelia-cafe). Empty on a normal domain.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;

export type Photo = {
  /** Path under /public, e.g. "/images/hero.webp". Leave null until a real photo exists. */
  src: string | null;
  /** Intrinsic pixel size of the file (used to reserve space and prevent layout shift). */
  width: number;
  height: number;
  /** Descriptive English alt text. Describe what is actually in the photo. */
  alt: string;
  /** What this slot should show — displayed on the placeholder until a photo is added. */
  brief: string;
  /** Optional focal point for cropping, as a CSS object-position (e.g. "50% 80%"). */
  focus?: string;
};

/** Business facts. Keep these in sync with Google Business Profile and Instagram. */
export const business = {
  name: "Camelia Cafe",
  shortDescription: "Café and bakery",
  venue: "West County Center",
  address: {
    street: "172 W County Center Fc 6",
    city: "Des Peres",
    state: "MO",
    stateFull: "Missouri",
    zip: "63131",
    country: "US",
  },
  areaLabel: "St. Louis area",
  phone: {
    display: "(314) 760-1023",
    tel: "+13147601023",
  },
  instagram: {
    handle: "cameliacafebakery",
    url: "https://www.instagram.com/cameliacafebakery/",
  },
  /**
   * Opening hours. Leave as null until confirmed by the business.
   * When confirmed, replace with e.g.:
   * [{ days: "Monday – Saturday", hours: "10:00 a.m. – 8:00 p.m." }, ...]
   * (Those example times are NOT real.)
   */
  hours: null as { days: string; hours: string }[] | null,
  /**
   * Schema.org hours for search engines, e.g. ["Mo-Sa 10:00-20:00", "Su 11:00-18:00"].
   * Fill in at the same time as `hours` above.
   */
  hoursSchema: null as string[] | null,
  /** Link to an official menu PDF or page, if one exists. */
  menuUrl: null as string | null,
  /** Link to an official online-ordering page, if one exists. Adds an "Order online" button. */
  orderUrl: null as string | null,
} as const;

const q = encodeURIComponent(
  `${business.name}, ${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`,
);

export const links = {
  directions: `https://www.google.com/maps/dir/?api=1&destination=${q}`,
  mapEmbed: `https://www.google.com/maps?q=${q}&output=embed`,
  phone: `tel:${business.phone.tel}`,
  instagram: business.instagram.url,
};

export const nav = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit Us", href: "#visit" },
] as const;

/** Logo — vector traced from the official profile picture. Swap for the original file if one exists. */
export const logo = {
  src: asset("/brand/camelia-logo.svg") as string | null,
  /** White line version for dark backgrounds (footer, hero badge). */
  srcOnDark: asset("/brand/camelia-logo-white.svg"),
  width: 896,
  height: 896,
  alt: "Camelia Cafe logo",
};

/*
 * PHOTOS
 * - Files named `stock-*` are licensed Unsplash photos (free for commercial
 *   use) that set the mood. They are representative, not Camelia's own
 *   products — swap in the owner's photos whenever they're available.
 * - Gallery photos (`g-*`) are real Camelia photos from the official Instagram.
 * Credits and sources: IMAGE_SOURCES.md.
 */

const p = (src: string, width: number, height: number, alt: string, focus?: string): Photo => ({
  src: asset(src),
  width,
  height,
  alt,
  brief: alt,
  focus,
});

export const hero = {
  headline: "A little sweetness. A beautiful pause.",
  intro:
    "Pastries, cakes and mini cakes, crêpes, waffles, ice cream, and artisan refreshers — inside West County Center in Des Peres.",
  background: p("/images/stock-hero-coffee-beans.webp", 2400, 1350, "") as Photo | null, // crop is set in Hero.tsx (phone vs. desktop)
};

/** Short product tags shown under the hero. Only items seen on the official Instagram. */
export const highlights = [
  "Coffee",
  "Matcha",
  "Refreshers",
  "Popping boba",
  "Mini cakes",
  "10-inch cakes",
  "Crêpes",
  "Waffle bowls",
  "Ice cream",
];

export type Tint = "pink" | "pistachio" | "honey" | "sky";

/**
 * How the menu cards are illustrated:
 * "illustration" — the site's own line drawings (current; always sharp).
 * "photo"        — each category's `photo` below. Switch once the owner's
 *                  full-size photos are in /public/images.
 */
export const categoryVisual: "illustration" | "photo" = "photo";

/**
 * Product categories, shown as a bento grid. The first category gets the tall
 * card and the third gets the wide card on desktop. `tint` picks the card color.
 * Descriptions only mention things shown on the official Instagram; no prices
 * until confirmed.
 */
export const categories: {
  id: string;
  name: string;
  description: string;
  tint: Tint;
  photo: Photo;
}[] = [
  {
    id: "coffee",
    name: "Coffee & Refreshers",
    description: "Espresso drinks and matcha, plus bright, layered refreshers — some with popping boba.",
    tint: "pink",
    photo: p("/images/stock-layered-matcha.webp", 933, 1400, "A layered iced matcha drink over strawberry in a glass", "50% 60%"),
  },
  {
    id: "cakes",
    name: "Cakes & Mini Cakes",
    description: "Whole 10-inch cakes for sharing and mini cakes for one, from red velvet to pistachio.",
    tint: "pistachio",
    photo: p("/images/stock-pistachio-cheesecake.webp", 1600, 1067, "A slice of pistachio cheesecake on a plate", "65% 55%"),
  },
  {
    id: "crepes-waffles",
    name: "Crêpes & Waffles",
    description: "Crêpes and Belgian waffle bowls, piled with fruit and toppings. Easy to share — or not.",
    tint: "honey",
    photo: p("/images/stock-crepe.webp", 1600, 1200, "A crêpe with whipped cream and chocolate sauce", "50% 50%"),
  },
  {
    id: "ice-cream",
    name: "Ice Cream",
    description: "Scoops in cups, with flavors that rotate. Check Instagram for the latest.",
    tint: "sky",
    photo: p("/images/stock-blue-ice-cream.webp", 1600, 1067, "A cup of blue ice cream with a spoon", "45% 45%"),
  },
];

export const story = {
  heading: "A taste of coziness at West County Center.",
  paragraphs: [
    "Camelia Cafe is a café and bakery inside West County Center in Des Peres, with pastries, cakes, and artisan refreshers.",
    "Stop in for a coffee, linger over a slice of cake, or share a crêpe or waffle between errands. Look for the blue camellia — we’d love to see you.",
  ],
  photo: p("/images/stock-espresso-pour.webp", 933, 1400, "Espresso pouring into a dark cup", "50% 55%"),
};

/** Photo for the Visit Us section. */
export const visitPhoto = p("/images/stock-cappuccino.webp", 933, 1400, "A cappuccino with heart latte art on a saucer", "50% 70%");

/**
 * Gallery photos, in display order. Eight fills the desktop grid (4 × 2);
 * on phones they become a swipeable row.
 * Set `galleryZoom` to true to open photos in a full-screen viewer — best
 * once the photos are full-size originals.
 */
export const galleryZoom = false;

export const gallery: Photo[] = [
  p("/images/g-mini-cake-orange.webp", 620, 776, "A mini cake topped with orange piping and a chocolate wafer"),
  p("/images/g-roses-latte.webp", 624, 780, "A latte with leaf latte art beside a small vase of roses"),
  p("/images/g-caramel-cake.webp", 624, 780, "A layered mini cake with a caramel drizzle on a glass plate"),
  p("/images/g-iced-mocha.webp", 620, 776, "A layered iced coffee topped with cream and chocolate drizzle"),
  p("/images/g-red-velvet.webp", 624, 780, "A slice of red velvet cake held over a glass plate"),
  p("/images/g-berry-mini-cake.webp", 624, 780, "A pink berry mini cake with a berry topping"),
  p("/images/g-red-cake.webp", 620, 776, "A dome cake covered in red cake crumbs"),
  p("/images/g-latte-art.webp", 532, 664, "A hand holding a cup of coffee with latte art"),
];

export const seo = {
  title: "Camelia Cafe · Café & Bakery at West County Center, Des Peres, MO",
  description:
    "Pastries, cakes and mini cakes, crêpes, waffles, ice cream, coffee, and artisan refreshers at Camelia Cafe, inside West County Center in Des Peres, Missouri.",
};
