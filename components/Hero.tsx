import { Button } from "./Button";
import { HeroCases } from "./HeroCases";
import { FlowMark } from "./FlowMark";
import { marks } from "@/lib/marks";
import { ANCORA_CASI } from "@/lib/casi";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24 grid gap-10 items-center md:grid-cols-[1.05fr_0.95fr]">
        <div className="relative">
          <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted mb-6">Studio di AI applicata</p>
          <h1
            className="font-display font-semibold tracking-[-0.045em]"
            style={{ fontSize: "clamp(3.4rem, 8.5vw, 6.4rem)", lineHeight: 0.9 }}
          >
            L&apos;AI
            <br />
            <span className="text-fg-muted font-normal">nel</span> flusso.
          </h1>
          <p className="mt-7 max-w-[440px] text-fg-2 text-[1.05rem]">
            Scegliamo modello e infrastruttura adatti al caso d&apos;uso e li portiamo in produzione. Anche sui tuoi
            server.
          </p>
          {/* Indica la pila di schede a destra. La freccia resta ferma al passaggio
              del mouse: il movimento della hero è già tutto nella pila. */}
          <a
            href={ANCORA_CASI}
            className="mt-4 inline-flex items-center gap-2 text-fg text-[0.98rem] font-medium hover:underline underline-offset-4"
          >
            Scopri i nostri lavori
            <span aria-hidden="true">→</span>
          </a>
          <div className="mt-8 flex gap-3 flex-wrap">
            <Button href="/contatti" size="lg">Prenota una call</Button>
            <Button href="/servizi" variant="ghost" size="lg">Servizi</Button>
          </div>

          {/* Conduce l'occhio dal testo alle schede. Solo da md in su: sotto, le
              schede stanno più in basso e una freccia verso destra punterebbe
              nel vuoto. pointer-events-none perché passa sopra i bottoni e non
              deve rubargli il click. */}
          <span className="hidden md:block absolute right-0 bottom-3 w-[230px] pointer-events-none">
            <FlowMark mark={marks.frecciaCurva} style={{ width: 230, height: 104 }} />
          </span>
        </div>
        <HeroCases />
      </div>
    </section>
  );
}
