import { Button } from "./Button";
import { ProcessVideo } from "./ProcessVideo";

// Sezione "Come lavoriamo": copy a sinistra, illustrazione a linea (ProcessPath) a destra.
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
            Dal prototipo alla
            <br />
            produzione.
          </h2>
          <p className="mt-5 max-w-[420px] text-fg-2 text-[1.06rem]">
            Ogni progetto parte da un caso d&apos;uso e si chiude quando lo strumento è in uso quotidiano.
          </p>
          <div className="mt-6">
            <Button variant="ghost" href="/servizi#la-scelta">
              Come scegliamo
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
