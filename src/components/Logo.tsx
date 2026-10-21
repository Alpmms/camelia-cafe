import Image from "next/image";
import { business, logo } from "@/content/site";
import { CamelliaMark } from "./CamelliaMark";

/** Brand lockup: round logo + wordmark. `onDark` uses the white line version. */
export function Logo({ onDark = false, preload = false }: { onDark?: boolean; preload?: boolean }) {
  const src = onDark ? logo.srcOnDark : logo.src;
  return (
    <span className={`inline-flex items-center gap-3 ${onDark ? "text-cream" : "text-cobalt"}`}>
      {src ? (
        <Image src={src} alt="" width={logo.width} height={logo.height} className="h-10 w-10" preload={preload} unoptimized />
      ) : (
        <CamelliaMark className="h-10 w-10" />
      )}
      <span className="font-display text-[1.5rem] leading-none">{business.name}</span>
    </span>
  );
}
