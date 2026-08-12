"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

type Props = { src: string; webm?: string; poster?: string; className?: string; style?: CSSProperties; etichetta: string };

// Video muto in ciclo continuo, usato come elemento grafico.
//
// Niente attributo autoPlay: i browser non lo subordinano a
// prefers-reduced-motion, quindi con quell'attributo partirebbe anche a chi ha
// chiesto di non vedere animazioni. La riproduzione parte da qui, solo se il
// movimento è ammesso; altrimenti resta il poster. Se lo script non gira, si
// vede il poster — degrado accettabile.
export function VideoMuto({ src, webm, poster, className = "", style, etichetta }: Props) {
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
      poster={poster}
      aria-label={etichetta}
    >
      {webm && <source src={webm} type="video/webm" />}
      <source src={src} type="video/mp4" />
    </video>
  );
}
