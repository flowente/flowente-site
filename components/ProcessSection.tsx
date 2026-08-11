import { Button } from "./Button";
import { ProcessVideo } from "./ProcessVideo";

// I tre passi non sono una scala di prodotti ma le fasi del rapporto: si capisce,
// si verifica su qualcosa di piccolo, si estende. Stanno in riga sotto il testo.
const PERCORSO = ["Comprendiamo", "Validiamo", "Evolviamo"];

export function ProcessSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24 grid gap-10 md:gap-14 items-center md:grid-cols-2">
        <div>
          <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted">Come lavoriamo</p>
          <h2
            className="mt-4 font-display font-semibold tracking-[-0.03em]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.02 }}
          >
            Un percorso,
            <br />
            non un progetto.
          </h2>
          <p className="mt-5 max-w-[440px] text-fg-2 text-[1.06rem]">
            Ogni azienda parte da un punto diverso. Per questo iniziamo da un&apos;esigenza concreta, validiamo il
            valore e costruiamo un sistema che cresce con te.
          </p>

          <ul className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.78rem] uppercase tracking-[0.1em]">
            {PERCORSO.map((passo, i) => (
              <li key={passo} className="flex items-center gap-3">
                <span className="text-fg">{passo}</span>
                {i < PERCORSO.length - 1 && (
                  <span className="text-fg-muted" aria-hidden="true">
                    →
                  </span>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <Button variant="ghost" href="/metodo">
              Scopri il nostro metodo
            </Button>
          </div>
        </div>

        <div className="rounded-[20px] bg-surface-2 overflow-hidden aspect-square w-full max-w-[440px] md:justify-self-end">
          <ProcessVideo className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
