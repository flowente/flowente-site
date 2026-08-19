"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { PRODOTTI, percorso } from "@/lib/prodotti";

// Le etichette cambiano, gli indirizzi no: rinominare anche le rotte
// significherebbe rompere ogni link già condiviso.
//
// nuova = la targhetta sopra la voce. Una sola alla volta, e va tolta quando la
// pagina smette di essere una novità: due "Nuova" contemporaneamente non
// segnalano più niente.
const LINKS = [
  { label: "Soluzioni", href: "/servizi" },
  { label: "Formazione", href: "/formazione", nuova: true },
  { label: "Chi siamo", href: "/chi-siamo" },
  { label: "Contatti", href: "/contatti" },
];

// Spessore 1.5 come i tratti del pulsante menu, colore ereditato dal link: la
// freccia deve leggersi come parte della scritta, non come un'icona aggiunta.
function Freccia({ aperta }: { aperta: boolean }) {
  return (
    <svg
      viewBox="0 0 10 6"
      className="h-[6px] w-[10px] transition-transform duration-200"
      style={{ transform: aperta ? "rotate(180deg)" : "none" }}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M1 1l4 4 4-4" />
    </svg>
  );
}

export function Nav() {
  const [aperto, setAperto] = useState(false);
  const [tendina, setTendina] = useState(false);
  const pathname = usePathname();
  const zonaTendina = useRef<HTMLDivElement>(null);

  // Menu e tendina si chiudono quando la pagina cambia.
  useEffect(() => {
    setAperto(false);
    setTendina(false);
  }, [pathname]);

  // Esc chiude quello che è aperto; un clic fuori chiude la tendina.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setAperto(false);
      setTendina(false);
    };
    const onClick = (e: MouseEvent) => {
      if (!zonaTendina.current?.contains(e.target as Node)) setTendina(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border"
      style={{ background: "color-mix(in srgb, var(--bg) 88%, transparent)", backdropFilter: "blur(12px)" }}
    >
      <div className="mx-auto max-w-content px-6 md:px-10 h-[66px] flex items-center justify-between">
        <Logo className="text-[1.1rem] md:text-[1.25rem]" href="/" />

        <nav className="hidden md:flex gap-7 text-[0.9rem] text-fg-2 items-center">
          {LINKS.map((l) =>
            l.label === "Soluzioni" ? (
              // L'etichetta è un link e la freccia un comando a sé: chi clicca
              // "Soluzioni" vuole andare alla pagina, chi clicca la freccia vuole
              // vedere cosa c'è dentro. Un unico bersaglio che fa entrambe le cose
              // costringe a indovinare quale delle due succederà.
              <div key={l.href} className="relative flex items-center gap-1.5" ref={zonaTendina}>
                <a href={l.href} className="hover:text-fg transition-colors">
                  {l.label}
                </a>
                <button
                  type="button"
                  onClick={() => setTendina((v) => !v)}
                  aria-expanded={tendina}
                  aria-controls="tendina-soluzioni"
                  aria-label={tendina ? "Chiudi l'elenco dei prodotti" : "Mostra i prodotti"}
                  className="flex h-6 w-5 items-center justify-center hover:text-fg transition-colors"
                >
                  <Freccia aperta={tendina} />
                </button>

                {tendina && (
                  <div
                    id="tendina-soluzioni"
                    className="tendina absolute left-0 top-[calc(100%+22px)] w-[280px] rounded-[14px] border border-border bg-surface p-2 shadow-[0_10px_36px_rgba(11,11,12,0.10)]"
                  >
                    {PRODOTTI.map((p) => (
                      <a
                        key={p.slug}
                        href={percorso(p.slug)}
                        className="block rounded-[10px] px-3 py-2.5 hover:bg-surface-2 transition-colors"
                      >
                        <span className="block text-[0.9rem] text-fg">{p.nome}</span>
                        <span className="block text-[0.8rem] text-fg-muted mt-0.5">{p.sottotitolo}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              // relative + targhetta in absolute: se la targhetta stesse nel
              // flusso alzerebbe la voce rispetto alle altre e la barra
              // perderebbe l'allineamento.
              <a key={l.href} className="relative hover:text-fg transition-colors" href={l.href}>
                {l.label}
                {l.nuova && (
                  <span className="absolute -top-[17px] left-1/2 -translate-x-1/2 rounded-full bg-accent px-1.5 py-[1px] font-mono text-[0.52rem] uppercase tracking-[0.1em] text-paper">
                    Nuova
                  </span>
                )}
              </a>
            )
          )}
        </nav>

        <div className="flex gap-2.5 items-center">
          {/* Sotto i 360px (iPhone SE e simili) marchio + bottone + menu non ci stanno:
              il bottone esce dalla barra. Lì vive dentro il menu, dove non si perde. */}
          <span className="hidden min-[360px]:block">
            <Button variant="primary" href="/contatti">Parliamone</Button>
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
        <nav id="menu-mobile" className="tendina md:hidden border-t border-border">
          <ul className="mx-auto max-w-content px-6 py-2">
            {LINKS.map((l) => (
              <li key={l.href} className="border-b border-border">
                <a href={l.href} className="flex items-center gap-2 py-4 text-[1.05rem] text-fg-2 hover:text-fg transition-colors">
                  {l.label}
                  {l.nuova && (
                    <span className="rounded-full bg-accent px-1.5 py-[1px] font-mono text-[0.55rem] uppercase tracking-[0.1em] text-paper">
                      Nuova
                    </span>
                  )}
                </a>
                {/* Su telefono i prodotti stanno sotto "Soluzioni", rientrati:
                    una tendina dentro un menu già aperto sarebbe un livello di troppo. */}
                {l.label === "Soluzioni" && (
                  <ul className="pb-3 pl-4">
                    {PRODOTTI.map((p) => (
                      <li key={p.slug}>
                        <a
                          href={percorso(p.slug)}
                          className="block py-2.5 text-[0.95rem] text-fg-muted hover:text-fg transition-colors"
                        >
                          {p.nome}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="py-4">
              <Button variant="primary" href="/contatti" className="w-full justify-center">
                Parliamone
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
