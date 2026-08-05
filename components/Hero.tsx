import { Button } from "./Button";
import { MarkBadge } from "./MarkBadge";
import { marks } from "@/lib/marks";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24 grid gap-10 items-center md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h1
            className="font-display font-semibold tracking-[-0.04em]"
            style={{ fontSize: "clamp(2.8rem, 6vw, 4.6rem)", lineHeight: 0.98 }}
          >
            Il lavoro
            <br />
            <span className="text-fg-muted font-normal">che</span> scorre.
          </h1>
          <p className="mt-6 max-w-[440px] text-fg-2 text-[1.12rem]">
            Studio di AI applicata. Trasformiamo i processi più lenti in flussi che vanno da soli — dalla strategia al
            modello in produzione.
          </p>
          <div className="mt-8 flex gap-3 flex-wrap">
            <Button href="#" size="lg">Parliamone</Button>
            <Button href="#" variant="ghost" size="lg">Come lavoriamo</Button>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[340px] flex items-center justify-center rounded-xl dot-grid">
          <MarkBadge mark={marks.coil} shape="square" boxW={340} boxH={230} shapeSize={190} markW={340} markH={230} rotate={6} />
        </div>
      </div>
    </section>
  );
}
