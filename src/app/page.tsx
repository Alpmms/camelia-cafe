import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Selection } from "@/components/Selection";
import { Story } from "@/components/Story";
import { Gallery } from "@/components/Gallery";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";
import { business, links } from "@/content/site";
import { siteUrl } from "@/lib/siteUrl";

/** LocalBusiness structured data — verified facts only. */
function JsonLd() {
  const a = business.address;
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["Bakery", "CafeOrCoffeeShop"],
    name: business.name,
    url: siteUrl,
    telephone: business.phone.tel,
    image: `${siteUrl}/opengraph-image.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: a.street,
      addressLocality: a.city,
      addressRegion: a.state,
      postalCode: a.zip,
      addressCountry: a.country,
    },
    containedInPlace: { "@type": "ShoppingCenter", name: business.venue },
    sameAs: [links.instagram],
  };
  if (business.hoursSchema) data.openingHours = business.hoursSchema;
  if (business.menuUrl) data.hasMenu = business.menuUrl;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main id="main">
        <Hero />
        <Selection />
        <Story />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
