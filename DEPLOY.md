# Deploy su Railway — Flowente

Il progetto è pronto: `npm run build` è verde, lo `start` si aggancia alla `$PORT` di Railway, i segreti sono in `.env*` (ignorati da git). Nessun Dockerfile necessario — Railway riconosce Next.js in automatico.

## Percorso consigliato: GitHub → Railway (deploy automatici a ogni push)

1. **Metti il codice su GitHub.**
   ```bash
   cd flowente-site
   git init            # se non già un repo
   git add .
   git commit -m "Flowente site"
   git branch -M main
   git remote add origin https://github.com/<tuo-utente>/<repo>.git   # usa HTTPS
   git push -u origin main
   ```
   > Se il push dà errori di permessi, usa un **Personal Access Token** GitHub come password, oppure `gh auth login`. (In passato l'auth SSH ha dato conflitti: preferisci HTTPS.)

2. **Su Railway** → *New Project* → *Deploy from GitHub repo* → scegli il repo. Railway rileva Next, esegue `npm install` + `npm run build` e avvia `npm start`. Nessuna config extra.

3. **Variabili d'ambiente** (Railway → *Variables*) per far funzionare il form:
   | Variabile | Valore |
   |---|---|
   | `RESEND_API_KEY` | la chiave API di Resend |
   | `CONTACT_TO` | `hello@flowente.com` (dove ricevi i messaggi) |
   | `CONTACT_FROM` | mittente verificato su Resend, es. `Flowente <hello@flowente.com>` |
   > Senza queste, il form risponde comunque ma **non invia** (logga soltanto). Con Formspree, cambia `app/api/contact/route.ts` di conseguenza.

4. **Dominio** (Railway → *Settings → Networking → Custom Domain*):
   - Aggiungi `flowente.com` (e `www.flowente.com`).
   - Railway ti dà un target CNAME: nel tuo DNS crea un record **CNAME** `www` → target Railway. Per il dominio nudo `flowente.com` usa il redirect/ALIAS del tuo provider DNS verso `www`, oppure il record consigliato da Railway.
   - Attendi la propagazione DNS + il certificato TLS (automatico).

## In alternativa: Railway CLI (senza GitHub)
```bash
npm i -g @railway/cli
railway login
railway init      # crea il progetto
railway up        # build & deploy dalla cartella corrente
```
Poi imposta le Variables e il dominio da dashboard come sopra.

## Checklist pre-lancio
- [ ] `[…]` riempiti (Chi siamo, P.IVA, email/LinkedIn)
- [ ] Env del form impostate e testato un invio reale
- [ ] Privacy/Cookie validate e fornitori/regioni compilati
- [ ] Analytics privacy-friendly attivo
- [ ] Dominio agganciato + HTTPS attivo
