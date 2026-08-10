import { Button } from "./Button";
import { HeroCases } from "./HeroCases";
import { ANCORA_CASI } from "@/lib/casi";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24 grid gap-10 items-center md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted mb-6">
            Full stack AI studio ·{" "}
            <a href="/conformita" className="underline underline-offset-4 decoration-border hover:text-fg transition-colors">
              AI Act &amp; GDPR compliant
            </a>
          </p>
          <h1
            className="font-display font-semibold tracking-[-0.045em]"
            style={{ fontSize: "clamp(3.4rem, 8.5vw, 6.4rem)", lineHeight: 0.9 }}
          >
            L&apos;AI
            <br />
            <span className="text-fg-muted font-normal">nel</span> flusso.
          </h1>
          <p className="mt-7 max-w-[440px] text-fg-2 text-[1.05rem]">
            Costruiamo agenti e applicazioni AI su misura per il tuo business. L&apos;intelligenza artificiale può
            sembrare complessa e rischiosa: noi abbattiamo questa barriera rendendola concreta e controllata.
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
        </div>
        <HeroCases />
      </div>
    </section>
  );
}
