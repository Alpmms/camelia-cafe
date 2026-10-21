import Image from "next/image";
import { business, links, visitPhoto } from "@/content/site";

export function Visit() {
  const a = business.address;
  const row = "grid gap-1 border-t border-white/10 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6";
  const label = "text-[0.88rem] tracking-[0.02em] text-mist";
  return (
    <section id="visit" aria-labelledby="visit-heading" className="relative isolate overflow-hidden border-t border-white/10">
      <div
        aria-hidden="true"
        className="absolute -right-48 bottom-0 -z-10 h-[38rem] w-[38rem] rounded-full bg-glow/20 blur-[140px]"
      />
      <div className="mx-auto grid max-w-[84rem] gap-12 px-5 py-24 sm:px-8 md:grid-cols-12 md:gap-10 md:py-32">
        <div className="md:col-span-7">
          <h2
            id="visit-heading"
            className="text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] tracking-[-0.015em] text-cream"
          >
            Visit us
          </h2>
          <p className="mt-5 max-w-[40ch] text-[1.06rem] leading-relaxed text-mist">
            Find us inside {business.venue} in {a.city}, in the {business.areaLabel}.
          </p>

          <dl className="mt-10 max-w-xl border-b border-white/10">
            <div className={row}>
              <dt className={label}>Address</dt>
              <dd>
                <address className="not-italic text-[1.15rem] leading-relaxed text-cream">
                  {business.name}, {business.venue}
                  <br />
                  {a.street}
                  <br />
                  {a.city}, {a.state} {a.zip}
                </address>
              </dd>
            </div>
            <div className={row}>
              <dt className={label}>Phone</dt>
              <dd>
                <a href={links.phone} className="text-[1.15rem] text-cream underline decoration-white/25 underline-offset-4 hover:decoration-rose">
                  {business.phone.display}
                </a>
              </dd>
            </div>
            <div className={row}>
              <dt className={label}>Hours</dt>
              <dd className="text-cream">
                {business.hours ? (
                  <ul className="space-y-1">
                    {business.hours.map((h) => (
                      <li key={h.days} className="flex justify-between gap-6">
                        <span>{h.days}</span>
                        <span>{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="leading-relaxed text-cream/90">
                    Please call or check{" "}
                    <a
                      href={links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-white/25 underline-offset-4 hover:decoration-rose"
                    >
                      Instagram
                    </a>{" "}
                    for today’s hours.
                  </p>
                )}
              </dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={links.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cream px-7 py-3.5 text-center font-semibold text-night transition-colors hover:bg-white"
            >
              Get Directions
            </a>
            <a
              href={links.phone}
              className="rounded-full px-7 py-3.5 text-center font-semibold text-cream ring-1 ring-inset ring-white/30 transition-colors hover:bg-white/5 hover:ring-white/60"
            >
              Call Us
            </a>
            {business.orderUrl && (
              <a
                href={business.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-7 py-3.5 text-center font-semibold text-cream ring-1 ring-inset ring-white/30 hover:bg-white/5"
              >
                Order Online
              </a>
            )}
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md shadow-[0_40px_80px_-40px_rgb(0_0_0/0.9)]">
            <Image
              src={visitPhoto.src!}
              alt={visitPhoto.alt}
              width={visitPhoto.width}
              height={visitPhoto.height}
              sizes="(min-width: 768px) 420px, 92vw"
              loading="lazy"
              className="grade absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: visitPhoto.focus }}
            />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-night/90 to-transparent" />
            <div className="absolute inset-x-6 bottom-6">
              <p className="font-display text-[1.6rem] leading-tight text-cream">{business.name}</p>
              <p className="mt-1 text-cream/80">Inside {business.venue}</p>
              <a
                href={links.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block rounded-full bg-cream px-6 py-3 text-sm font-semibold text-night transition-colors hover:bg-white"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
