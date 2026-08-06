import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contatti — Flowente",
  description:
    "Un primo confronto di trenta minuti, senza impegno. Descrivi il processo su cui vuoi intervenire: valutiamo se l'AI è la risposta adatta.",
};

export default function Contatti() {
  return (
    <>
      <Nav />
      <main>
        <section>
          <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-[1fr_1.05fr] gap-12 lg:gap-20">
            <div>
              <h1 className="font-display font-semibold tracking-[-0.035em] text-[clamp(2.8rem,6.5vw,4.4rem)] leading-[0.98]">
                Contatti.
              </h1>
              <p className="text-fg-2 text-[1.08rem] mt-6 max-w-[460px]">
                Un primo confronto di trenta minuti, senza impegno. Descrivi il processo su cui vuoi intervenire:
                valutiamo se l&apos;AI è la risposta adatta, compreso il caso in cui non lo sia.
              </p>
              <div className="mt-10 space-y-3 font-mono text-[0.82rem] text-fg-2">
                <div>
                  <span className="text-fg-muted">Email · </span>
                  <a href="mailto:ciao@flowente.com" className="hover:text-fg">
                    ciao@flowente.com
                  </a>
                </div>
                <div>
                  <span className="text-fg-muted">LinkedIn · </span>
                  <a href="#" className="hover:text-fg">
                    /flowente
                  </a>
                </div>
                <div>
                  <span className="text-fg-muted">Base · </span>Milano
                </div>
              </div>
            </div>

            <div className="rounded-[18px] border border-border bg-surface p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
