"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { business, gallery, galleryZoom, links, type Photo } from "@/content/site";

const thumbSizes = "(min-width: 1024px) 160px, (min-width: 640px) 24vw, 46vw";

export function Gallery() {
  const real = gallery.filter((p): p is Photo & { src: string } => Boolean(p.src));
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + real.length) % real.length)),
    [real.length],
  );

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (index !== null && !dlg.open) dlg.showModal();
    if (index === null && dlg.open) {
      dlg.close();
      openerRef.current?.focus();
    }
  }, [index]);

  const current = index !== null ? real[index] : null;

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="border-t border-white/10">
      <div className="mx-auto max-w-[84rem] py-24 md:py-32">
        <div className="flex flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              id="gallery-heading"
              className="text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] tracking-[-0.015em] text-cream"
            >
              From our Instagram
            </h2>
            <p className="mt-5 max-w-[46ch] text-[1.02rem] leading-relaxed text-mist">
              Real photos from the counter. Follow along for what’s new this week.
            </p>
          </div>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start rounded-full px-6 py-3 font-semibold text-cream ring-1 ring-inset ring-white/30 transition-colors hover:bg-white/5 hover:ring-white/60 md:self-auto"
          >
            Follow @{business.instagram.handle}
          </a>
        </div>

        <ul
          aria-label="Photos from our Instagram"
          className="mt-14 grid grid-cols-2 gap-3 px-5 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:grid-cols-8 lg:gap-3"
        >
          {real.map((p, i) => (
            <li key={p.src}>
              {galleryZoom ? (
                <button
                  type="button"
                  onClick={(e) => {
                    openerRef.current = e.currentTarget;
                    setIndex(i);
                  }}
                  className="block w-full overflow-hidden rounded-md"
                  aria-label={`View larger: ${p.alt}`}
                >
                  <Image src={p.src} alt={p.alt} width={p.width} height={p.height} sizes={thumbSizes} loading="lazy" className="grade aspect-[4/5] w-full object-cover" />
                </button>
              ) : (
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={p.width}
                  height={p.height}
                  sizes={thumbSizes}
                  loading="lazy"
                  className="grade aspect-[4/5] w-full rounded-md object-cover"
                />
              )}
            </li>
          ))}
        </ul>
      </div>

      {galleryZoom && real.length > 0 && (
        <dialog
          ref={dialogRef}
          onClose={close}
          onCancel={close}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") step(1);
            if (e.key === "ArrowLeft") step(-1);
          }}
          onClick={(e) => e.target === e.currentTarget && close()}
          aria-label="Photo viewer"
          className="m-auto max-h-[92vh] w-[min(92vw,56rem)] bg-transparent p-0 backdrop:bg-night/90"
        >
          {current && (
            <figure className="flex flex-col items-center">
              <Image
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                sizes="92vw"
                className="max-h-[78vh] w-auto rounded-md object-contain"
              />
              <figcaption className="mt-3 text-center text-sm text-cream">
                {current.alt}
                <span className="sr-only">
                  {" "}
                  — photo {index! + 1} of {real.length}
                </span>
              </figcaption>
            </figure>
          )}
          <div className="mt-4 flex justify-center gap-3">
            {real.length > 1 && (
              <button type="button" onClick={() => step(-1)} className="rounded-full px-5 py-2 text-white ring-2 ring-white/60">
                Previous
              </button>
            )}
            <button type="button" onClick={close} className="rounded-full bg-cream px-5 py-2 font-semibold text-night" autoFocus>
              Close
            </button>
            {real.length > 1 && (
              <button type="button" onClick={() => step(1)} className="rounded-full px-5 py-2 text-white ring-2 ring-white/60">
                Next
              </button>
            )}
          </div>
        </dialog>
      )}
    </section>
  );
}
