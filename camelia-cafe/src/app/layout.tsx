import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { business, seo } from "@/content/site";
import { siteUrl, hasProductionUrl } from "@/lib/siteUrl";
import "./globals.css";

// Self-hosted variable fonts (SIL Open Font License) — no calls to Google.
const bodoni = localFont({
  variable: "--font-bodoni",
  display: "swap",
  weight: "400 900",
  src: "../fonts/bodoni-moda-latin-standard-normal.woff2",
});

const instrument = localFont({
  variable: "--font-instrument",
  display: "swap",
  weight: "400 700",
  src: "../fonts/instrument-sans-latin-wght-normal.woff2",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: business.name,
    title: seo.title,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  // Keep previews out of search results until a production URL is configured.
  robots: hasProductionUrl ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#0a0e1a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-US" className={`${bodoni.variable} ${instrument.variable} antialiased`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
