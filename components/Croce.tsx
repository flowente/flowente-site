// Il contrario della Spunta, stesso tratto e stessa mano: nei listini a livelli
// le due liste vanno lette come un unico elenco in cui alcune voci sono spente,
// non come due elenchi diversi.
//
// Piu' chiara della Spunta (opacita' 45%) perche' deve dire "qui non c'e'"
// senza rubare l'occhio: chi compra deve contare prima quello che ottiene.
export function Croce({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`h-[14px] w-[14px] shrink-0 text-fg-muted opacity-45 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M4 4l8 8M12 4l-8 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
