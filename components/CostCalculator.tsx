"use client";

import { useState } from "react";

// Il conto in chiaro: prezzi di listino pubblici + le ipotesi del cliente.
// Nessun numero è nostro: non dichiariamo un risparmio, diamo lo strumento per calcolarlo.
//
// PREZZI — listino pubblico Anthropic, dollari per milione di token, al 7 agosto 2026.
// Vanno riverificati quando cambiano: sono l'unica parte di questa pagina che invecchia.
const FASCE = [
  { nome: "Modello di frontiera", esempio: "Claude Opus 5", in: 5, out: 25 },
  { nome: "Modello intermedio", esempio: "Claude Sonnet 5", in: 3, out: 15 },
  { nome: "Modello piccolo", esempio: "Claude Haiku 4.5", in: 1, out: 5 },
];

// Nessuno decide quante richieste fare: il numero si eredita dal volume di lavoro.
// Questi sono conti fatti a vista, con l'aritmetica in chiaro — non medie di settore.
const VOLUMI = [
  { id: "reparto", label: "Un reparto che lo usa ogni giorno", richieste: 4400, calcolo: "20 persone × 10 volte al giorno × 22 giorni" },
  { id: "documenti", label: "Il flusso di documenti in entrata", richieste: 22000, calcolo: "1.000 documenti al giorno × 22 giorni" },
  { id: "clienti", label: "Un servizio rivolto ai clienti", richieste: 300000, calcolo: "10.000 al giorno, sette giorni su sette" },
];

// Punti di partenza da cambiare, non medie di settore: il volume di testo
// varia moltissimo da un compito all'altro ed è il cliente a conoscerlo.
const COMPITI = [
  { id: "documenti", label: "Domanda sui tuoi documenti", tokenIn: 5000, tokenOut: 400 },
  { id: "estrazione", label: "Estrarre dati da un documento", tokenIn: 2000, tokenOut: 300 },
  { id: "stesura", label: "Prima stesura di un testo", tokenIn: 1500, tokenOut: 1500 },
  { id: "risposta", label: "Risposta breve a una domanda", tokenIn: 500, tokenOut: 200 },
];

// useGrouping "always": senza, it-IT raggruppa solo da cinque cifre e in colonna
// si vedrebbero "10.500" e "6300" uno sotto l'altro.
const euro = (n: number) =>
  n.toLocaleString("it-IT", {
    minimumFractionDigits: n < 10 ? 2 : 0,
    maximumFractionDigits: n < 10 ? 2 : 0,
    useGrouping: "always",
  });

export function CostCalculator() {
  const [richieste, setRichieste] = useState(4400);
  const [compitoId, setCompitoId] = useState("documenti");

  const compito = COMPITI.find((c) => c.id === compitoId) ?? COMPITI[0];
  const costi = FASCE.map((f) => ({
    ...f,
    mese: (richieste * (compito.tokenIn * f.in + compito.tokenOut * f.out)) / 1_000_000,
  }));

  const piuCaro = costi[0].mese;
  const piuEconomico = costi[costi.length - 1].mese;
  const differenza = piuCaro > 0 ? Math.round(((piuCaro - piuEconomico) / piuCaro) * 100) : 0;

  const inputCls =
    "w-full rounded-[10px] border border-border bg-surface px-4 py-3 text-[0.98rem] outline-none transition-[border-color,box-shadow] focus:border-accent focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_18%,transparent)]";

  return (
    <section id="il-conto" className="border-b border-border scroll-mt-[80px]">
      <div className="mx-auto max-w-content px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-[620px] mb-12">
          <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-fg-muted">Il conto</p>
          <h2 className="mt-4 font-display font-semibold tracking-[-0.03em] text-[clamp(2rem,4vw,3rem)] leading-[1.02]">
            Quanto costa, in concreto.
          </h2>
          <p className="text-fg-2 text-[1.06rem] mt-5">
            Non è una nostra stima: sono i prezzi di listino pubblici, moltiplicati per i volumi che metti tu. Il
            risultato è il tuo numero, non una nostra promessa.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
          <div>
            <div>
              <span className="block font-mono text-[0.68rem] uppercase tracking-[0.1em] text-fg-muted mb-3">
                Quanto lo si usa
              </span>
              <div className="flex flex-col gap-2">
                {VOLUMI.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setRichieste(v.richieste)}
                    aria-pressed={v.richieste === richieste}
                    className={`text-left rounded-[10px] border px-4 py-3 transition-colors ${
                      v.richieste === richieste ? "border-accent bg-surface" : "border-border hover:border-fg-muted"
                    }`}
                  >
                    <span className={`block text-[0.94rem] ${v.richieste === richieste ? "text-fg" : "text-fg-2"}`}>
                      {v.label}
                    </span>
                    <span className="block font-mono text-[0.72rem] text-fg-muted mt-1">{v.calcolo}</span>
                  </button>
                ))}
              </div>
            </div>

            <label className="block mt-7">
              <span className="block font-mono text-[0.68rem] uppercase tracking-[0.1em] text-fg-muted mb-2">
                Richieste al mese
              </span>
              <input
                type="number"
                min={0}
                step={100}
                value={richieste}
                onChange={(e) => setRichieste(Math.max(0, Number(e.target.value) || 0))}
                className={inputCls}
              />
              <span className="block text-fg-muted text-[0.84rem] mt-2">
                Nessuno decide quante richieste fare: il numero arriva dal volume di lavoro che hai già.
              </span>
            </label>

            <div className="mt-7">
              <span className="block font-mono text-[0.68rem] uppercase tracking-[0.1em] text-fg-muted mb-3">
                Tipo di compito
              </span>
              <div className="flex flex-col gap-2">
                {COMPITI.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCompitoId(c.id)}
                    aria-pressed={c.id === compitoId}
                    className={`text-left rounded-[10px] border px-4 py-3 text-[0.94rem] transition-colors ${
                      c.id === compitoId
                        ? "border-accent text-fg bg-surface"
                        : "border-border text-fg-2 hover:text-fg"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
              <p className="text-fg-muted text-[0.84rem] mt-4">
                Ogni compito porta con sé una quantità di testo diversa. Questi sono punti di partenza per fare il
                conto, non medie di settore: sul tuo caso li misuriamo.
              </p>
            </div>
          </div>

          <div>
            <div className="border-t border-border">
              {costi.map((c) => (
                <div key={c.nome} className="grid gap-1 md:grid-cols-[1fr_auto] md:gap-8 py-5 border-b border-border">
                  <div>
                    <p className="text-fg text-[1rem] font-display font-semibold tracking-[-0.015em]">{c.nome}</p>
                    <p className="font-mono text-[0.76rem] text-fg-muted mt-1">
                      {c.esempio} · {c.in}$ / {c.out}$ per milione di token
                    </p>
                  </div>
                  <p className="font-display font-semibold text-[1.4rem] tracking-[-0.02em] md:text-right md:pt-1">
                    {euro(c.mese)} $<span className="text-fg-muted font-normal text-[0.9rem]"> / mese</span>
                  </p>
                </div>
              ))}
            </div>

            {richieste > 0 && (
              <p className="text-fg-2 text-[1.02rem] mt-8 max-w-[520px]">
                Su questo volume, scegliere il modello piccolo invece di quello di frontiera cambia il conto del{" "}
                <span className="text-accent font-mono">{differenza}%</span>. Se il compito è semplice e ripetitivo, è
                una scelta senza contropartite. Se serve ragionamento, è un errore. È esattamente la decisione che
                prendiamo insieme.
              </p>
            )}

            {richieste > 0 && piuCaro < 200 && (
              <p className="text-fg-2 text-[1.02rem] mt-4 max-w-[520px]">
                A questi volumi, però, il costo del modello non è il problema: è rumore accanto al tempo delle persone
                che ci lavorano. Diventa una decisione sopra le decine di migliaia di richieste al mese.
              </p>
            )}

            {/* Il modello installato: non inventiamo un prezzo dell'hardware, diamo la soglia. */}
            <div className="mt-8 pt-7 border-t border-border max-w-[520px]">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-fg-muted">Tenerlo in casa</p>
              <p className="text-fg-2 text-[1.02rem] mt-3">
                Un modello installato non si paga a richiesta: si paga l&apos;infrastruttura, uguale che tu ne faccia
                mille o un milione. Su questo volume conviene, sul solo costo, se costa meno di{" "}
                <span className="text-accent font-mono">{euro(piuEconomico)} $</span> al mese — o di{" "}
                <span className="font-mono">{euro(piuCaro)} $</span> se oggi useresti un modello di frontiera.
              </p>
              <p className="text-fg-2 text-[0.96rem] mt-3">
                Quasi mai però il motivo per installarlo è il costo: sono i dati. Quando il motivo è quello, la soglia
                qui sopra non c&apos;entra e la domanda diventa un&apos;altra.
              </p>
              <p className="text-fg-muted text-[0.9rem] mt-3">
                Sulla velocità non pubblichiamo numeri: dipende dall&apos;hardware, dal modello e da quanto lo si
                comprime, e chi ti dà una cifra senza aver visto la tua macchina sta indovinando. Quello che cambia di
                sicuro è che spariscono la rete, le code e i limiti di chiamate. La misuriamo sul tuo hardware prima di
                consigliarti qualcosa.
              </p>
            </div>

            <p className="text-fg-muted text-[0.82rem] mt-8 max-w-[520px]">
              Prezzi di listino pubblici Anthropic in dollari, al 7 agosto 2026, presi come riferimento per le tre
              fasce; cambiano nel tempo e sul tuo caso confrontiamo anche altri fornitori.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
