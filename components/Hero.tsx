import { Button } from "./Button";
import { ProcessVideo } from "./ProcessVideo";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24 grid gap-10 items-center md:grid-cols-[1.05fr_0.95fr]">
        <div>
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
            server, se i dati non devono uscire.
          </p>
          <div className="mt-8 flex gap-3 flex-wrap">
            <Button href="/contatti" size="lg">Prenota una call</Button>
            <Button href="/metodo" variant="ghost" size="lg">Il metodo</Button>
          </div>
        </div>
        {/* Il video sta qui e il segno è sceso in "Come lavoriamo": scambiati fra
            le due sezioni, ognuno con la cornice che aveva. */}
        <div className="rounded-[20px] bg-surface-2 overflow-hidden aspect-square w-full max-w-[440px] md:justify-self-end">
          <ProcessVideo className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
