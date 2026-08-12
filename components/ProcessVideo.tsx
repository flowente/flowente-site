import type { CSSProperties } from "react";
import { VideoMuto } from "./VideoMuto";

type Props = { className?: string; style?: CSSProperties };

// Illustrazione "Come lavoriamo": il percorso disegnato a mano dal prototipo al
// codice in produzione. La logica di riproduzione — muto, in ciclo, fermo per chi
// ha chiesto di non vedere animazioni — sta tutta in VideoMuto.
export function ProcessVideo({ className = "", style }: Props) {
  return (
    <VideoMuto
      src="/media/process.mp4"
      webm="/media/process.webm"
      poster="/media/process-poster.png"
      className={className}
      style={style}
      etichetta="Un tracciato disegnato a mano che porta dal prototipo al codice in produzione"
    />
  );
}
