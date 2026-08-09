"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

type Props = { className?: string; style?: CSSProperties };

// Illustrazione "Come lavoriamo": il video hand-drawn (percorso dal prototipo al codice </>).
//
// Niente attributo autoPlay: i browser non lo subordinano a prefers-reduced-motion,
// quindi con quell'attributo il video partirebbe anche a chi ha chiesto di non
// vedere animazioni. Da quando sta nella hero è la prima cosa sopra la piega, e
// la regola del design system è che quella preferenza si rispetta sempre.
// La riproduzione parte da qui, solo se il movimento è ammesso; altrimenti resta
// il poster. Se lo script non gira, si vede il poster — degrado accettabile.
export function ProcessVideo({ className = "", style }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      if (mq.matches) {
        el.pause();
        el.currentTime = 0;
      } else {
        // play() rifiuta se il browser blocca la riproduzione: non è un errore
        // da propagare, resta semplicemente il poster.
        el.play().catch(() => {});
      }
    };

    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      style={style}
      muted
      loop
      playsInline
      preload="metadata"
      poster="/media/process-poster.png"
      aria-label="Un tracciato disegnato a mano che porta dal prototipo al codice in produzione"
    >
      <source src="/media/process.webm" type="video/webm" />
      <source src="/media/process.mp4" type="video/mp4" />
    </video>
  );
}
