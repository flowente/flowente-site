import { CASI, ANCORA_CASI } from "@/lib/casi";

// Pila di schede nella hero: una in evidenza, due sagome dietro a dire che ce ne
// sono altre. Tutta la pila è un solo link ai case study in /servizi.
//
// In evidenza c'è il quarto caso perché è l'unico con una fotografia vera: gli
// altri tre hanno ancora i segnaposto, e un segnaposto sopra la piega non si può
// vedere. Quando arrivano gli scatti, l'indice qui sotto si cambia liberamente.
//
// Marcatura a span e non a div/h3/p: il contenuto sta dentro un <a>, e tenerlo
// tutto in elementi non interattivi evita annidamenti che il browser correggerebbe
// da sé spostando i nodi — con React significa disallineamento in idratazione.
export function HeroCases() {
  const caso = CASI[3];

  return (
    <a
      href={ANCORA_CASI}
      aria-label={`${caso.title} Vai ai case study.`}
      className="hero-cases block relative w-full max-w-[420px] mx-auto md:mx-0 md:justify-self-end"
    >
      {/* Le due sagome dietro non hanno contenuto: sono profondità, non informazione.
          Sotto md rotazione e sfalsamento sono ridotti: la rotazione allarga
          l'ingombro di circa l'altezza per il seno dell'angolo — su una scheda alta
          420px bastavano 3,5° per portare la sagoma a filo del bordo dello schermo. */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-[18px] border border-border bg-surface-2 translate-x-2.5 translate-y-3.5 rotate-[2deg] md:translate-x-4 md:translate-y-5 md:rotate-[3.5deg]"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-[18px] border border-border bg-surface translate-x-1.5 translate-y-2 rotate-[1deg] md:translate-x-2 md:translate-y-2.5 md:rotate-[1.8deg]"
      />

      <span className="relative block rounded-[18px] border border-border bg-surface overflow-hidden -rotate-[1deg] md:-rotate-[1.6deg] shadow-[0_12px_44px_rgba(11,11,12,0.10)]">
        {/* Immagine d'ambiente, non un cliente: alt vuoto per non attribuirle un'identità.
            Il rapporto sta sull'immagine, non sul contenitore. */}
        <img src={caso.img} alt="" className="block w-full aspect-[3/2] object-cover" />
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
    </a>
  );
}
