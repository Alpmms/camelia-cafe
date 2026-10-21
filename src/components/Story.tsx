import Image from "next/image";
import { logo, story } from "@/content/site";

export function Story() {
  return (
    <section id="story" aria-labelledby="story-heading" className="relative isolate overflow-hidden bg-night-2">
      <div className="mx-auto grid max-w-[84rem] items-center gap-12 px-5 py-24 sm:px-8 md:grid-cols-12 md:gap-10 md:py-32">
        <div className="md:col-span-5">
          <Image
            src={story.photo.src!}
            alt={story.photo.alt}
            width={story.photo.width}
            height={story.photo.height}
            sizes="(min-width: 1280px) 500px, (min-width: 768px) 40vw, 92vw"
            loading="lazy"
            className="grade aspect-[4/5] w-full rounded-md object-cover shadow-[0_40px_80px_-40px_rgb(0_0_0/0.9)]"
            style={{ objectPosition: story.photo.focus }}
          />
        </div>
        <div className="md:col-span-6 md:col-start-7">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo.srcOnDark} alt="" width={64} height={64} className="h-16 w-16 opacity-90" />
          <h2
            id="story-heading"
            className="mt-7 text-[clamp(2.4rem,4.8vw,4rem)] leading-[0.98] tracking-[-0.015em] text-cream"
          >
            {story.heading}
          </h2>
          <div className="mt-7 space-y-4 text-[1.06rem] leading-[1.7] text-mist">
            {story.paragraphs.map((p) => (
              <p key={p} className="max-w-[46ch]">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
