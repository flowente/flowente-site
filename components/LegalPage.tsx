import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

type Props = { title: string; updated: string; children: ReactNode };

export function LegalPage({ title, updated, children }: Props) {
  return (
    <>
      <Nav />
      <main>
        <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24">
          <div className="max-w-[760px]">
            <h1 className="font-display font-semibold tracking-[-0.03em] text-[clamp(2.2rem,5vw,3.2rem)] leading-[1.0]">
              {title}
            </h1>
            <p className="font-mono text-[0.74rem] text-fg-muted mt-4">Ultimo aggiornamento: {updated}</p>
            <div className="prose-legal mt-10">{children}</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
