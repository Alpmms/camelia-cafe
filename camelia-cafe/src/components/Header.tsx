"use client";

import { useEffect, useRef, useState } from "react";
import { business, links, nav } from "@/content/site";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape, trap nothing, return focus to the toggle.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the panel if the viewport grows to desktop width.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-night/80 backdrop-blur-xl">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-cream focus:px-4 focus:py-2 focus:text-night"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-[4.5rem] max-w-[80rem] items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" aria-label="Camelia Cafe, back to top" className="shrink-0">
          <Logo onDark preload />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[0.92rem] tracking-[0.01em] text-mist transition-colors hover:text-cream"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={links.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-cream px-5 py-2.5 text-[0.92rem] font-semibold text-night transition-colors hover:bg-white sm:inline-block"
          >
            Get Directions
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-cream ring-1 ring-white/20 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="border-t border-white/10 bg-night lg:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-[80rem] px-5 pb-8 pt-4 sm:px-8">
          <ul className="divide-y divide-white/10">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-[2rem] leading-none text-cream"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href={links.directions}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-full bg-cream px-5 py-3.5 text-center font-semibold text-night"
            >
              Get Directions
            </a>
            <a
              href={links.phone}
              className="rounded-full px-5 py-3.5 text-center font-semibold text-cream ring-1 ring-inset ring-white/30"
            >
              Call {business.phone.display}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
