"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Button } from "./Button";

// Le etichette cambiano, gli indirizzi no: rinominare anche le rotte
// significherebbe rompere ogni link già condiviso, e il sito è appena online.
const LINKS = [
  { label: "Soluzioni", href: "/servizi" },
  { label: "Come lavoriamo", href: "/metodo" },
  { label: "Chi siamo", href: "/chi-siamo" },
  { label: "Contatti", href: "/contatti" },
];

export function Nav() {
  const [aperto, setAperto] = useState(false);
  const pathname = usePathname();

  // Il menu si chiude quando la pagina cambia e con Esc.
  useEffect(() => setAperto(false), [pathname]);
  useEffect(() => {
    if (!aperto) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAperto(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [aperto]);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border"
      style={{ background: "color-mix(in srgb, var(--bg) 88%, transparent)", backdropFilter: "blur(12px)" }}
    >
      <div className="mx-auto max-w-content px-6 md:px-10 h-[66px] flex items-center justify-between">
        <Logo className="text-[1.1rem] md:text-[1.25rem]" href="/" />
        <nav className="hidden md:flex gap-7 text-[0.9rem] text-fg-2">
          {LINKS.map((l) => (
            <a key={l.href} className="hover:text-fg transition-colors" href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-2.5 items-center">
          {/* Sotto i 360px (iPhone SE e simili) marchio + bottone + menu non ci stanno:
              il bottone esce dalla barra. Lì vive dentro il menu, dove non si perde. */}
          <span className="hidden min-[360px]:block">
            <Button variant="primary" href="/contatti">Prenota una call</Button>
          </span>
          {/* Su telefono i link della nav non ci stanno: senza questo il sito non è navigabile. */}
          <button
            type="button"
            onClick={() => setAperto((v) => !v)}
            aria-expanded={aperto}
            aria-controls="menu-mobile"
            aria-label={aperto ? "Chiudi il menu" : "Apri il menu"}
            className="md:hidden -mr-2 flex h-11 w-11 items-center justify-center rounded-[8px]"
          >
            <span className="relative block h-[10px] w-[18px]" aria-hidden="true">
              <span
                className="absolute left-0 block h-[1.5px] w-full bg-fg transition-transform duration-200"
                style={{ top: aperto ? 4 : 0, transform: aperto ? "rotate(45deg)" : "none" }}
              />
              <span
                className="absolute left-0 block h-[1.5px] w-full bg-fg transition-transform duration-200"
                style={{ top: aperto ? 4 : 9, transform: aperto ? "rotate(-45deg)" : "none" }}
              />
            </span>
          </button>
        </div>
      </div>

      {aperto && (
        <nav id="menu-mobile" className="md:hidden border-t border-border">
          <ul className="mx-auto max-w-content px-6 py-2">
            {LINKS.map((l) => (
              <li key={l.href} className="border-b border-border">
                <a href={l.href} className="block py-4 text-[1.05rem] text-fg-2 hover:text-fg transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <Button variant="primary" href="/contatti" className="w-full justify-center">
                Prenota una call
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
