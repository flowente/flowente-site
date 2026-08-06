import type { CSSProperties } from "react";

type Props = { className?: string; style?: CSSProperties };

// Illustrazione "Come lavoriamo": il video hand-drawn (percorso dal prototipo al codice </>).
// Autoplay muto in loop; su prefers-reduced-motion il browser mostra il poster statico.
export function ProcessVideo({ className = "", style }: Props) {
  return (
    <video
      className={className}
      style={style}
      autoPlay
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
