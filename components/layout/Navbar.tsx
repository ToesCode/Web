"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 bg-bg/90 backdrop-blur-md border-b transition-colors duration-200 ${
        scrolled ? "border-line" : "border-transparent"
      }`}
    >
      <div className="max-w-wrap mx-auto px-7 flex items-center justify-between h-[76px]">
        <a href="#top" className="font-display font-bold text-base text-text">
          ToesCode
        </a>

        <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-8.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14.5px] text-muted hover:text-text transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden md:inline-block text-sm font-semibold text-white bg-accent px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5 hover:bg-accent-hover"
        >
          Hablemos
        </a>

        <button
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          aria-controls="mobileMenu"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden w-9 h-9 flex items-center justify-center"
        >
          <span className="relative block w-5 h-[1.5px] bg-text before:content-[''] before:absolute before:-top-1.5 before:w-5 before:h-[1.5px] before:bg-text after:content-[''] after:absolute after:top-1.5 after:w-5 after:h-[1.5px] after:bg-text" />
        </button>
      </div>

      {menuOpen && (
        <div className="max-w-wrap mx-auto px-7">
          <nav
            id="mobileMenu"
            aria-label="Navegación móvil"
            className="flex flex-col pb-6 pt-1.5 border-t border-line md:hidden"
          >
            {[...navLinks, { href: "#contacto", label: "Hablemos" }].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="py-3.5 px-1 text-[15px] text-muted border-b border-line last:border-b-0"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
