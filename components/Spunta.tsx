// Spunta degli elenchi: la stessa nelle schede di /servizi e nelle pagine
// prodotto, così i due elenchi si leggono come lo stesso tipo di contenuto.
//
// Disegnata a mano libera ma ferma: qui non serve il tremolio dei Flow Mark, che
// a venti ripetizioni diventerebbe rumore. In grigio e non in accento: sono
// venti segni per pagina, e il colore del marchio a quella frequenza smette di
// essere un tocco e diventa decorazione.
export function Spunta({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`h-[14px] w-[14px] shrink-0 text-fg-muted ${className}`}
      aria-hidden="true"
    >
      <path
        d="M2.5 8.6 6 12l7.5-8.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
