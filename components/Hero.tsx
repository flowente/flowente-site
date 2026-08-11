import { Button } from "./Button";
import { HeroCases } from "./HeroCases";
import { ANCORA_CASI } from "@/lib/casi";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24 grid gap-10 items-center md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted mb-6">AI Systems Studio</p>
          <h1
            className="font-display font-semibold tracking-[-0.045em]"
            style={{ fontSize: "clamp(3rem, 7.4vw, 5.4rem)", lineHeight: 0.95 }}
          >
            L&apos;AI che diventa
            <br />
            <span className="text-fg-muted font-normal">sistema</span>
          </h1>
          <p className="mt-7 max-w-[460px] text-fg-2 text-[1.05rem]">
            Dalle prime automazioni ai sistemi AI privati: progettiamo soluzioni che automatizzano i processi, rendono
            accessibile la conoscenza aziendale e crescono insieme alla tua azienda.
          </p>
          <a
            href={ANCORA_CASI}
            className="mt-4 inline-flex items-center gap-2 text-fg text-[0.98rem] font-medium hover:underline underline-offset-4"
          >
            Scopri i casi di successo
            <span aria-hidden="true">→</span>
          </a>
          <div className="mt-8 flex gap-3 flex-wrap">
            <Button href="/servizi" size="lg">Scopri le soluzioni</Button>
            <Button href="/metodo" variant="ghost" size="lg">Come lavoriamo</Button>
          </div>
        </div>
        <HeroCases />
      </div>
    </section>
  );
}
