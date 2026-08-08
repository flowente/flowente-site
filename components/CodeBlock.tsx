import type { ReactNode } from "react";

type Props = { label: string; children: ReactNode; caption: string };

// Un blocco di codice si mette solo dove dimostra una frase che stiamo già dicendo,
// e ha sempre sotto una riga in italiano che lo traduce: senza quella è decorazione.
// Superficie scura come la banda CTA, un solo elemento in Flow Blue per riga chiave.
export function CodeBlock({ label, children, caption }: Props) {
  return (
    <div className="min-w-0">
      <p className="font-mono text-[0.66rem] tracking-[0.12em] uppercase text-fg-muted mb-3">{label}</p>
      <div className="min-w-0 rounded-[14px] bg-ink-950 px-5 py-5 md:px-6 md:py-6 overflow-x-auto">
        <pre className="font-mono text-[0.78rem] md:text-[0.82rem] leading-[1.75] text-ink-100 whitespace-pre">
          {children}
        </pre>
      </div>
      <p className="text-fg-2 text-[0.95rem] mt-4 max-w-[440px]">{caption}</p>
    </div>
  );
}

// Commento: grigio chiaro, leggibile su fondo scuro senza rubare l'occhio.
export const C = ({ children }: { children: ReactNode }) => (
  <span className="text-ink-400">{children}</span>
);

// Il valore che porta il significato della riga.
export const K = ({ children }: { children: ReactNode }) => (
  <span className="text-flow-400">{children}</span>
);
