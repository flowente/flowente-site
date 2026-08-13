import { Logo } from "./Logo";
import { CookiePrefs } from "./CookiePrefs";
import { Social } from "./Social";

// Ordine delle colonne: cosa facciamo, naviga, legale, contatti — con i contatti
// all'estrema destra, dove finisce la lettura.
const COLS = [
  {
    h: "Cosa facciamo",
    links: [
      { label: "Automazioni AI", href: "/servizi" },
      { label: "Assistenti AI", href: "/servizi" },
      { label: "AI privata", href: "/servizi" },
      { label: "Integrazione", href: "/servizi" },
    ],
  },
  {
    h: "Naviga",
    links: [
      { label: "Soluzioni", href: "/servizi" },
      { label: "Case Study", href: "/servizi#casi-duso" },
      { label: "Come lavoriamo", href: "/metodo" },
      { label: "Storie umane", href: "/storie" },
      { label: "Chi siamo", href: "/chi-siamo" },
      { label: "Contatti", href: "/contatti" },
    ],
  },
  {
    h: "Legale",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Cookie", href: "/cookie" },
    ],
  },
];

export function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-content px-6 md:px-10 pt-[72px] pb-12">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr_0.8fr_1fr]">
          <div>
            <Logo className="text-[1.4rem]" href="/" />
            <p className="text-fg-2 text-[0.9rem] mt-[18px] max-w-[230px]">Dove l&apos;AI entra nel flusso del lavoro.</p>
          </div>

          {COLS.map((c, i) => (
            <div key={i}>
              <h4 className="font-mono text-[0.7rem] uppercase tracking-wide text-fg-muted mb-3.5">{c.h}</h4>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[0.9rem] text-fg-2 hover:text-fg transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contatti: ultima colonna, con l'email in chiaro e le icone social.
              Le icone compaiono solo quando l'indirizzo del profilo esiste. */}
          <div>
            <h4 className="font-mono text-[0.7rem] uppercase tracking-wide text-fg-muted mb-3.5">Contatti</h4>
            <ul className="space-y-2">
              <li>
                <a href="/contatti" className="text-[0.9rem] text-fg-2 hover:text-fg transition-colors">
                  Parliamone
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@flowente.com"
                  className="text-[0.9rem] text-fg-2 hover:text-fg transition-colors break-all"
                >
                  hello@flowente.com
                </a>
              </li>
            </ul>
            <Social className="mt-5" />
          </div>
        </div>

        <div className="flex justify-between items-center mt-[52px] pt-[22px] border-t border-border font-mono text-[0.7rem] text-fg-muted flex-wrap gap-3">
          {/* P.IVA da rimettere qui quando ci sarà: "· P.IVA 01234567890". */}
          <span>© 2026 Flowente — Milano</span>
          <CookiePrefs />
        </div>
      </div>
    </footer>
  );
}
