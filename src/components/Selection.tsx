import Image from "next/image";
import { business, categories, categoryVisual, links, type Tint } from "@/content/site";
import { illustrationFor } from "./Illustrations";

const glow: Record<Tint, string> = {
  pink: "bg-rose/30",
  pistachio: "bg-[#b9d98a]/25",
  honey: "bg-[#e9b872]/25",
  sky: "bg-[#8fb7ff]/30",
};

export function Selection() {
  const fullMenu = Boolean(business.menuUrl);
  return (
    <section id="menu" aria-labelledby="menu-heading" className="border-t border-white/10">
      <div className="mx-auto max-w-[84rem] py-24 md:py-32">
        <div className="grid gap-6 px-5 sm:px-8 md:grid-cols-12 md:items-end">
          <h2
            id="menu-heading"
            className="text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] tracking-[-0.015em] text-cream md:col-span-7"
          >
            {fullMenu ? "Our menu" : "Explore our selection"}
          </h2>
          <div className="max-w-[42ch] text-[1.02rem] leading-relaxed text-mist md:col-span-5">
            <p>
              Here’s what you’ll find at the counter. The selection changes, so follow us on{" "}
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream underline decoration-rose/70 underline-offset-4 hover:decoration-rose"
              >
                Instagram
              </a>{" "}
              to see what’s new.
            </p>
            {business.menuUrl && (
              <a
                href={business.menuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block rounded-full bg-cream px-6 py-3 font-semibold text-night hover:bg-white"
              >
                View the full menu
              </a>
            )}
          </div>
        </div>

        <ul className="mt-14 grid gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-5">
          {categories.map((c) => {
            const Drawing = illustrationFor[c.id as keyof typeof illustrationFor];
            const usePhoto = categoryVisual === "photo" && c.photo.src;
            return (
              <li key={c.id}>
                <article
                  aria-labelledby={`cat-${c.id}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-md border border-white/10 bg-night-2 transition-colors hover:border-white/25"
                >
                  <div className={`relative isolate flex items-center justify-center overflow-hidden ${usePhoto ? "aspect-[4/5]" : "aspect-[4/3.6]"}`}>
                    {usePhoto ? (
                      <Image
                        src={c.photo.src!}
                        alt={c.photo.alt}
                        width={c.photo.width}
                        height={c.photo.height}
                        sizes="(min-width: 1024px) 320px, (min-width: 640px) 46vw, 92vw"
                        loading="lazy"
                        className="grade absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                        style={{ objectPosition: c.photo.focus }}
                      />
                    ) : (
                      <>
                        <div aria-hidden="true" className={`absolute left-1/2 top-1/2 -z-10 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[60px] ${glow[c.tint]}`} />
                        {Drawing && (
                          <Drawing className="h-[78%] w-auto transition-transform duration-700 ease-out group-hover:-translate-y-1.5" />
                        )}
                      </>
                    )}
                  </div>
                  <div className="flex-1 border-t border-white/10 p-6">
                    <h3 id={`cat-${c.id}`} className="text-[1.75rem] leading-[1.05] text-cream">
                      {c.name}
                    </h3>
                    <p className="mt-2.5 text-[0.95rem] leading-relaxed text-mist">{c.description}</p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
