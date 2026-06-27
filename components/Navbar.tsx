"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#surec", label: "Süreç" },
  { href: "#yorumlar", label: "Yorumlar" },
  { href: "#paketler", label: "Paketler" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/70 bg-cream/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-xl font-semibold text-forest">
          {site.brand}
          <span className="text-ember">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-forest"
            >
              {l.label}
            </a>
          ))}
          <a href="#iletisim" className="btn-primary">
            Teklif Al
          </a>
        </div>

        <button
          aria-label="Menü"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-forest" />
            <span className="block h-0.5 w-6 bg-forest" />
            <span className="block h-0.5 w-6 bg-forest" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-cream md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-muted hover:bg-sand hover:text-forest"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#iletisim"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Teklif Al
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
