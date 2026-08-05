# flowente-site

Sito e **design system in React** di Flowente — "Flow / Kinetic Minimal". Costruito su **Next.js (App Router) + Tailwind**, con i token e i componenti derivati da `DESIGN.md`.

## Stack
- Next.js 14 (App Router) · React 18 · TypeScript
- Tailwind CSS (token in `tailwind.config.ts` + layer semantico in `app/globals.css`)
- Font: Space Grotesk (display), Inter (testo), JetBrains Mono (tecnico) via `next/font`

## Avvio
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Struttura
```
app/
  layout.tsx      # font, filtri SVG, metadata
  template.tsx    # transizione pagina: fade lento 0.7s
  globals.css     # token (CSS vars), boiling, bottoni, fade
  page.tsx        # homepage
components/
  FlowMark.tsx    # segno animato "boiling" (3 fotogrammi disegnati a mano)
  AccentShape.tsx # forme accento hand-drawn (square/circle/triangle/blob)
  MarkBadge.tsx   # forma dietro + mark che sborda
  Button.tsx      # primary ink / ghost · hover micro-zoom
  Logo.tsx        # marchio (accent) + wordmark Space Grotesk
  Nav / Hero / FeatureSection / Card / CardGrid / QuoteRow / Footer
lib/marks.tsx     # geometrie dei Flow Marks
```

## Design system
I token semantici sono CSS variables in `app/globals.css` (light + dark), referenziati da Tailwind. **Regola: i componenti non contengono hex, solo ruoli semantici.** Colore (Flow Blue) solo su marchio, forme e accenti — mai sui bottoni.

## Import in Claude Design
Questo repo è pensato per il path **"Create using Claude Code / GitHub"** di Claude Design (best fidelity con componenti React): collega il repo e Claude Design impara il brand dai componenti reali + i token.

## Deploy su Railway
`npm run build` / `npm start` (usa `$PORT`). Su Railway: nuovo servizio dal repo GitHub, build `npm run build`, start `npm start`.

---
*v0.1 — generato dal design system Flowente. Vedi `DESIGN.md` per le regole complete.*
