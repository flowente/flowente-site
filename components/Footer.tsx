import { Logo } from "./Logo";

const COLS = [
  { h: "Studio", links: ["Advisory", "Sviluppo app", "Modelli", "Lab"] },
  { h: "Risorse", links: ["Blog", "Casi studio", "Guide"] },
  { h: "Contatti", links: ["Parliamone", "LinkedIn", "Email"] },
];

export function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-content px-6 md:px-10 pt-[72px] pb-12">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo className="text-[1.4rem]" />
            <p className="text-fg-2 text-[0.9rem] mt-[18px] max-w-[230px]">Il lavoro che scorre.</p>
          </div>
          {COLS.map((c) => (
            <div key={c.h}>
              <h4 className="font-mono text-[0.7rem] uppercase tracking-wide text-fg-muted mb-3.5">{c.h}</h4>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[0.9rem] text-fg-2 hover:text-fg transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-[52px] pt-[22px] border-t border-border font-mono text-[0.7rem] text-fg-muted flex-wrap gap-3">
          <span>© 2026 FLOWENTE · MILANO</span>
          <span>Il lavoro che scorre</span>
        </div>
      </div>
    </footer>
  );
}
