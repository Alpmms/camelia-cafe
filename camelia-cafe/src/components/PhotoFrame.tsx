import Image from "next/image";
import type { Photo } from "@/content/site";
import { CamelliaMark } from "./CamelliaMark";

/**
 * Renders a real photo when `photo.src` is set. Until then it shows a clearly
 * labeled placeholder, so the site never passes off stand-in imagery as
 * Camelia Cafe products.
 */
export function PhotoFrame({
  photo,
  className = "",
  sizes,
  preload = false,
}: {
  photo: Photo;
  className?: string;
  sizes: string;
  preload?: boolean;
}) {
  if (photo.src) {
    return (
      <div className={`relative overflow-hidden bg-night-2 ${className}`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes={sizes}
          preload={preload}
          loading={preload ? undefined : "lazy"}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-[1.25rem] border border-dashed border-line bg-night-2 p-6 text-center ${className}`}
      role="img"
      aria-label={`Photo coming soon: ${photo.brief}`}
    >
      <CamelliaMark className="h-10 w-10 text-mist/50" />
      <p className="max-w-[22ch] font-sans text-[0.8rem] leading-snug text-mist">
        <span className="block font-medium text-cream">Photo needed</span>
        {photo.brief}
      </p>
    </div>
  );
}
