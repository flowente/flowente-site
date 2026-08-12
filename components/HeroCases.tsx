import { CASI, ANCORA_CASI, type Caso } from "@/lib/casi";
import { VideoMuto } from "./VideoMuto";

// Prova in corso: nella scheda in evidenza, al posto della fotografia, il video
// del caso. Muto e in ciclo, come elemento grafico. Se non convince o pesa
// troppo, si toglie questa costante e torna l'immagine.
const VIDEO_IN_EVIDENZA = "/media/testimonianze/quick-automation.mp4";

// Pila di schede nella hero: tre case study veri, sfalsati e ruotati, di cui uno
// in evidenza. Dietro non ci sono sagome vuote ma le schede effettive — anche se
// se ne vede solo una striscia di lato, quella striscia mostra una fotografia
// diversa e dice che i lavori sono più d'uno. Vengono da lib/casi.ts, quindi si
// aggiornano da sole quando cambiano i case study in /servizi.
//
// In evidenza c'è l'ultimo perché è l'unico con una fotografia vera: gli altri
// hanno ancora i segnaposto, e un segnaposto sopra la piega non si può vedere.
//
// Marcatura a span e non a div/h3/p: il contenuto sta dentro un <a>, e tenerlo
// tutto in elementi non interattivi evita annidamenti che il browser correggerebbe
// da sé spostando i nodi — con React significa disallineamento in idratazione.
const PILA: Caso[] = [CASI[1], CASI[2], CASI[3]];

// Sotto md rotazione e sfalsamento sono ridotti: la rotazione allarga l'ingombro
// di circa l'altezza per il seno dell'angolo, e su una scheda alta 420px bastavano
// 3,5 gradi per portare la scheda in fondo a filo del bordo dello schermo.
// Lo sfalsamento verticale conta più di quello orizzontale: è dal bordo basso che
// sbuca la fascia bianca del testo, ed è quella a far capire che dietro ci sono
// altre schede e non un cartoncino. A 20 e 10 pixel non si leggeva.
const STRATI = [
  "absolute inset-0 translate-x-3 translate-y-6 rotate-[2deg] md:translate-x-5 md:translate-y-11 md:rotate-[3.5deg]",
  "absolute inset-0 translate-x-1.5 translate-y-3 rotate-[1deg] md:translate-x-2.5 md:translate-y-[22px] md:rotate-[1.8deg]",
  "relative block -rotate-[1deg] md:-rotate-[1.6deg] shadow-[0_12px_44px_rgba(11,11,12,0.10)]",
];

export function HeroCases() {
  const evidenza = PILA.length - 1;

  return (
    <a
      href={ANCORA_CASI}
      aria-label={`${PILA[evidenza].title} Vai ai case study.`}
      className="hero-cases block relative w-full max-w-[420px] mx-auto md:mx-0 md:justify-self-end"
    >
      {PILA.map((caso, i) => (
        <span
          key={caso.label}
          // Le schede dietro restano fuori dalla lettura assistita: il nome del
          // link è già quello in evidenza, e leggerle tutte lo renderebbe illeggibile.
          aria-hidden={i < evidenza ? "true" : undefined}
          className={`rounded-[18px] border border-border bg-surface overflow-hidden ${STRATI[i]}`}
        >
          {i === evidenza ? (
            <VideoMuto
              src={VIDEO_IN_EVIDENZA}
              className="block w-full aspect-[3/2] object-cover"
              etichetta={caso.title}
            />
          ) : (
            // Immagine d'ambiente, non un cliente: alt vuoto per non attribuirle
            // un'identità. Il rapporto sta sull'immagine, non sul contenitore.
            <img src={caso.img} alt="" className="block w-full aspect-[3/2] object-cover" />
          )}
          <span className="block p-6">
            <span className="block font-mono text-[0.66rem] uppercase tracking-wide text-accent">{caso.label}</span>
            <span className="block font-display font-semibold text-[1.12rem] tracking-[-0.015em] mt-2.5">
              {caso.title}
            </span>
            {/* Niente "block" qui: line-clamp ha bisogno di display -webkit-box, e la
                classe block glielo sovrascriveva lasciando il testo per intero. */}
            <span className="text-fg-2 text-[0.92rem] leading-[1.5] mt-2 line-clamp-3">{caso.text}</span>
          </span>
        </span>
      ))}
    </a>
  );
}
