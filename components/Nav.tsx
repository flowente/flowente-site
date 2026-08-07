import { Logo } from "./Logo";
import { Button } from "./Button";

const LINKS = [
  { label: "Servizi", href: "/servizi" },
  { label: "Metodo", href: "/metodo" },
  { label: "Chi siamo", href: "/chi-siamo" },
  { label: "Contatti", href: "/contatti" },
];

export function Nav() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-border"
      style={{ background: "color-mix(in srgb, var(--bg) 88%, transparent)", backdropFilter: "blur(12px)" }}
    >
      <div className="mx-auto max-w-content px-6 md:px-10 h-[66px] flex items-center justify-between">
        <Logo className="text-[1.25rem]" href="/" />
        <nav className="hidden md:flex gap-7 text-[0.9rem] text-fg-2">
          {LINKS.map((l) => (
            <a key={l.href} className="hover:text-fg transition-colors" href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-2.5 items-center">
          <Button variant="primary" href="/contatti">Prenota una call</Button>
        </div>
      </div>
    </header>
  );
}
