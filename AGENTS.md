# AGENTS.md — flowente-site

> Regole per chi lavora su questo repo, umano o agente. Non dipende da quale strumento usi.
> **Standard Flowente generale** (Railway, n8n, provider LLM, altri repo): `../AGENTS.md`.
> **Stato del progetto**, design system, cosa manca: `../CLAUDE.md`.

---

## 1. Anti-allucinazione

Il principio che tiene insieme tutto: **distingui quando stai *proponendo* da quando stai *affermando un fatto*.** Progettare architettura, design, naming, copy o idee → libertà piena. Dichiarare che un'API esiste, che un comando funziona, che "è fatto" → dev'essere ancorato a qualcosa di reale.

1. **Ancora al reale, non alla memoria.** Prima di usare un file, un'API o una config, *leggila*. Un'informazione ricordata va verificata prima di trattarla come vera.
2. **Non inventare ciò che è verificabile.** Nomi di metodi, pacchetti, opzioni, variabili d'ambiente, versioni, endpoint: se non li hai *visti*, non esistono finché non li verifichi.
3. **Verifica eseguendo.** Type-check, lint e build sono la verità. Non dichiarare "funziona" senza aver eseguito.
4. **Ammetti l'incertezza.** "Non sono sicuro, verifico" batte un'affermazione sicura e falsa. Mai citazioni finte, link inventati o numeri a caso.
5. **Fatto ≠ proposta.** Sii esplicito su quale delle due stai facendo.

> **La formula:** prima di scrivere *"questo funziona / esiste / è fatto"* — l'ho **visto** (nel codice, nella doc, in un output reale) o lo sto **ricordando**? Se lo sto ricordando, verifico prima di affermarlo.

Restano completamente liberi brainstorming, design, architettura, naming, copy e direzioni creative. Un'idea audace non è un'allucinazione; un metodo API inventato sì.

---

## 2. Il codice si scrive in italiano

Nomi di file, funzioni, variabili e tipi sono **in italiano**: `lib/consenso.ts`, `leggiPreferenze`, `salvaPreferenze`, `traccia`, `avvia`, `ferma`, `ripulisci`, `Prodotto`, `Caso`, `Preferenze`. Restano in inglese solo le API di libreria e i nomi imposti da Next.

I commenti sono **discorsivi**, in prosa, e non descrivono cosa fa la riga: dicono **perché** è fatta così, **cosa si è provato prima** e **cosa costa** la scelta.

Due esempi già nel codice, da usare come metro:

- `app/globals.css`, sul `size-adjust: 110%` di Erode — spiega il problema misurato, la soluzione, e dichiara il prezzo pagato ("la stessa frase diventa il 10% più larga").
- `components/Analytics.tsx`, su `capture_dead_clicks` — avverte che il flag *non funziona davvero*, perché la configurazione remota vince.

Scrivendo codice nuovo: leggi prima un file della stessa cartella per prendere il tono. Niente commenti che parafrasano la riga sotto. Quando una scelta ha uno svantaggio, si scrive nel commento invece di ometterlo.

---

## 3. Le misurazioni si scrivono nel codice

Quando una cosa è stata **verificata sul sito in produzione** e non solo ragionata, il risultato va nel commento accanto al codice, con la parola **"misurato"** per distinguerlo da un ragionamento.

Sono le informazioni più costose da riottenere e le più facili da perdere, perché nascono in chat e la chat scade. Scritte nel codice restano accanto alla riga che smentiscono, e impediscono che qualcuno "semplifichi" via un flag che sembra ridondante e non lo è.

Se una cosa non è stata verificata, non si scrive come se lo fosse.

---

## 4. I commit

Oggetto: `tipo(ambito): frase in italiano`, minuscolo, senza punto finale.

I tipi in uso: `feat`, `fix`, `style`, `copy`, `chore`, `prova`. `copy` è per i testi; `prova` apre un esperimento, che poi si chiude con un `chore` (`chore: chiusa la prova, restano Erode e Recia`). Gli ambiti sono le parti del sito: `casi`, `servizi`, `hero`, `formazione`, `home`, `email`.

La frase descrive **il risultato che si vede**, non la modifica tecnica:

```
feat(hero): le schede escono di lato invece di scivolare sotto
```

e non "aggiornata animazione in HeroCases".

Corpo: prosa in italiano, due o tre capoversi. Cosa non andava, cosa è cambiato, e la misura che lo dimostra quando c'è. Le lettere accentate nei messaggi si scrivono con l'apostrofo (`e'`, `piu'`, `puo'`), com'è già in tutta la storia.

Commit piccoli, uno per cambiamento visibile. Si committa quando Simone lo chiede.

---

## 5. Onestà nei contenuti

Niente numeri, loghi, testimonianze o case study **inventati**. In pratica:

- Un progetto **vero** si può nominare — GymOS è nostro, quindi il nome si dice.
- **Mai** numeri, percentuali o risultati che nessuno ha misurato, e mai il nome di un cliente senza consenso.
- I casi senza nome restano esempi di applicazione: non affermano nulla di falso.
- **Nessun prezzo in vetrina**: `prezzo` è `null` su tutte e tre le soluzioni, per scelta. Il tipo `Prezzo` e il ramo che lo stampa restano pronti per quando un listino esisterà.
- Le foto dei casi sono d'ambiente, mai di clienti. Per questo l'`alt` resta vuoto e nessun nome o azienda va associato a un'immagine.

La versione lunga sta in testa a `lib/casi.ts`.

---

## 6. Verificare prima di dire "fatto"

```bash
npx tsc --noEmit    # controllo veloce
npm run lint        # ESLint (eslint 8 + eslint-config-next 14)
npm run build       # quello vero
```

Il build deve restare verde. `npm run lint` oggi dà **zero errori e cinque avvisi noti** — quattro `no-img-element` sulle foto dei casi (segnaposto in attesa degli scatti veri) e un `no-page-custom-font` su `app/layout.tsx`, che è un falso positivo: la regola parla di `pages/_document.js`, che nell'App Router non esiste.

**Quando cambia qualcosa di strutturale** — una pagina nuova, una dipendenza, un font, una convenzione — si aggiorna `../CLAUDE.md` **nello stesso commit**. È l'unico modo perché non torni a divergere dal codice: il commit nasce insieme alla modifica, un aggiornamento rimandato no.
