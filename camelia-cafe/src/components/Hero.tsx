import Image from "next/image";
import { business, hero, highlights, links } from "@/content/site";

export function Hero() {
  const { background } = hero;
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-end overflow-hidden md:items-center"
    >
      {background?.src && (
        <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-20 h-[58%] md:inset-y-0 md:left-auto md:h-full md:w-[70%]">
          <Image
            src={background.src}
            alt=""
            fill
            preload
            sizes="100vw"
            className="emerge -scale-x-100 object-cover object-[40%_50%] md:object-[70%_50%]"
          />
        </div>
      )}
      {/* Left-to-right shade keeps the headline readable; bottom shade blends into the page. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-night from-45% via-night/50 via-60% to-night/0 md:bg-gradient-to-r md:from-night md:from-30% md:via-night/60 md:via-50% md:to-night/0" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-night to-transparent" />
      <div aria-hidden="true" className="grain absolute inset-0 -z-10" />

      <div className="mx-auto w-full max-w-[84rem] px-5 pb-14 pt-[46vh] sm:px-8 md:py-24">
        <div className="rise max-w-[46rem]">
          <p className="flex items-center gap-3 text-[0.9rem] tracking-[0.02em] text-cream/80">
            <span aria-hidden="true" className="h-px w-8 bg-rose" />
            {business.venue}, {business.address.city}, {business.address.stateFull}
          </p>
          <h1
            id="hero-heading"
            className="mt-7 text-[clamp(2.7rem,5.8vw,5.2rem)] leading-[0.98] tracking-[-0.015em] text-cream"
          >
            {hero.headline.split(/(?<=\.)\s+/).map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-8 max-w-[38ch] text-[1.1rem] leading-relaxed text-cream/80">{hero.intro}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#menu"
              className="rounded-full bg-cream px-7 py-3.5 text-center font-semibold text-night transition-colors hover:bg-white"
            >
              Explore Our Selection
            </a>
            <a
              href={links.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-7 py-3.5 text-center font-semibold text-cream ring-1 ring-inset ring-white/40 backdrop-blur-sm transition-colors hover:bg-white/10 hover:ring-white/70"
            >
              Get Directions
            </a>
          </div>
          <ul aria-label="On the menu" className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-[0.88rem] text-cream/70">
            {highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
