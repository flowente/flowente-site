import { Logo } from "./Logo";

const COLS = [
  {
    h: "Cosa facciamo",
    links: [
      { label: "La scelta", href: "/servizi#la-scelta" },
      { label: "Advisory", href: "/servizi" },
      { label: "Sviluppo software", href: "/servizi" },
      { label: "AI privata", href: "/servizi" },
    ],
  },
  {
    h: "Naviga",
    links: [
      { label: "Servizi", href: "/servizi" },
      { label: "Metodo", href: "/metodo" },
      { label: "Casi d'uso", href: "/servizi#casi-duso" },
      { label: "Chi siamo", href: "/chi-siamo" },
      { label: "Contatti", href: "/contatti" },
    ],
  },
  {
    h: "Contatti",
    links: [
      { label: "Prenota una call", href: "/contatti" },
      { label: "LinkedIn", href: "#" },
      { label: "Email", href: "mailto:ciao@flowente.com" },
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
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo className="text-[1.4rem]" href="/" />
            <p className="text-fg-2 text-[0.9rem] mt-[18px] max-w-[230px]">Il lavoro che scorre.</p>
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
        </div>
        <div className="flex justify-between items-center mt-[52px] pt-[22px] border-t border-border font-mono text-[0.7rem] text-fg-muted flex-wrap gap-3">
          <span>© 2026 FLOWENTE · MILANO · P.IVA […]</span>
          <span>Il lavoro che scorre</span>
        </div>
      </div>
    </footer>
  );
}
