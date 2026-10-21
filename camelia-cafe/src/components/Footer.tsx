import { business, links, nav } from "@/content/site";
import { Logo } from "./Logo";
import { Year } from "./Year";

export function Footer() {
  const a = business.address;
  return (
    <footer className="border-t border-white/10 bg-night-2 text-cream">
      <div className="mx-auto grid max-w-[84rem] gap-10 px-5 py-16 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo onDark />
          <p className="mt-5 max-w-[32ch] text-mist">
            {business.shortDescription} inside {business.venue}, {a.city}, {a.stateFull}.
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <ul className="space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-mist hover:text-cream">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-2.5 text-mist md:col-span-4">
          <p>
            {a.street}
            <br />
            {a.city}, {a.state} {a.zip}
          </p>
          <p>
            <a href={links.phone} className="hover:text-cream">
              {business.phone.display}
            </a>
          </p>
          <p>
            <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="text-cream underline decoration-rose/60 underline-offset-4 hover:decoration-rose">
              Instagram @{business.instagram.handle}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-[84rem] px-5 py-6 text-sm text-mist/80 sm:px-8">
          © <Year /> {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
