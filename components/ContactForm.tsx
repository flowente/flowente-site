"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import { traccia } from "@/lib/traccia";
import { statistichePermesse } from "@/lib/consenso";

type Status = "idle" | "sending" | "ok" | "error";

// 16px su mobile non è un vezzo: sotto quella soglia Safari su iOS ingrandisce
// la pagina appena si tocca il campo, e l'utente deve rimpicciolire a mano.
const inputCls =
  "w-full rounded-[10px] border border-border bg-surface px-4 py-3 text-[16px] md:text-[0.98rem] outline-none transition-[border-color,box-shadow] focus:border-accent focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_18%,transparent)]";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const iniziato = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Serve a sapere quanti aprono il form e non lo finiscono: senza questo evento
  // il funnel salta dalla visita all'invio e la parte che si perde resta invisibile.
  //
  // Listener nativo e non onInput sul <form>: misurato in produzione, con la prop
  // di React l'evento non partiva. React tratta input e change dei campi di modulo
  // con un percorso dedicato, e sull'elemento contenitore non risultava affidabile.
  // addEventListener intercetta la propagazione e basta.
  //
  // Il consenso si controlla PRIMA di segnare che è partito. Il banner sta in
  // fondo alla pagina: capita spesso che si cominci a scrivere e si accetti dopo,
  // e marcando il flag al primo tocco l'evento andrebbe perso per sempre. Così
  // invece riparte al tocco successivo, quando il consenso c'è.
  useEffect(() => {
    const el = formRef.current;
    if (!el) return;
    const alPrimoTocco = () => {
      if (iniziato.current || !statistichePermesse()) return;
      iniziato.current = true;
      traccia("form_started", { form: "contatti" });
    };
    el.addEventListener("input", alPrimoTocco);
    return () => el.removeEventListener("input", alPrimoTocco);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.consent) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("bad");
      setStatus("ok");
      // Solo il fatto che un contatto sia arrivato, e se ha indicato un'azienda.
      // Nessun nome, nessuna email, nessun testo: quelli vanno all'API e basta.
      traccia("lead_submitted", { form: "contatti", con_azienda: Boolean(data.company) });
      form.reset();
    } catch {
      setStatus("error");
      traccia("form_failed", { form: "contatti" });
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-[14px] border border-border bg-surface-2 p-8 text-center">
        <p className="font-display font-semibold text-[1.35rem] tracking-[-0.02em]">Richiesta ricevuta.</p>
        <p className="text-fg-2 mt-2">Rispondiamo entro un giorno lavorativo.</p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-4" noValidate>
      {/* honeypot anti-spam (nascosto) */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="block text-[0.82rem] text-fg-2 mb-1.5">Nome</span>
          <input name="name" required className={inputCls} placeholder="Come ti chiami" />
        </label>
        <label className="block">
          <span className="block text-[0.82rem] text-fg-2 mb-1.5">Email</span>
          <input name="email" type="email" required className={inputCls} placeholder="tu@esempio.com" />
        </label>
      </div>

      <label className="block">
        <span className="block text-[0.82rem] text-fg-2 mb-1.5">
          Azienda <span className="text-fg-muted">(facoltativo)</span>
        </span>
        <input name="company" className={inputCls} placeholder="La tua azienda" />
      </label>

      <label className="block">
        <span className="block text-[0.82rem] text-fg-2 mb-1.5">Il processo o il progetto</span>
        <textarea
          name="message"
          required
          rows={4}
          className={inputCls + " resize-y"}
          placeholder="Il processo su cui vuoi intervenire, o il progetto che hai in mente."
        />
      </label>

      <label className="flex items-start gap-3 text-[0.86rem] text-fg-2">
        <input
          type="checkbox"
          name="consent"
          value="yes"
          className="mt-0.5 h-[18px] w-[18px] shrink-0 accent-[var(--accent)]"
        />
        <span>
          Ho letto la{" "}
          <a href="/privacy" className="underline hover:text-fg">
            Privacy Policy
          </a>{" "}
          e acconsento al trattamento dei dati per essere ricontattato.
        </span>
      </label>

      {status === "error" && (
        <p className="text-[0.88rem] text-fg-2">
          Serve il consenso, oppure qualcosa non ha funzionato. Riprova, oppure scrivici a{" "}
          <a href="mailto:ciao@flowente.com" className="underline hover:text-fg">
            ciao@flowente.com
          </a>
          .
        </p>
      )}

      <div className="pt-2">
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? "Invio…" : "Invia"}
        </Button>
        <p className="text-fg-muted text-[0.82rem] mt-4 max-w-[440px]">
          Rispondiamo entro un giorno lavorativo. I dati inseriti sono usati esclusivamente per rispondere alla
          richiesta: nessuna newsletter, nessuna cessione a terzi.
        </p>
      </div>
    </form>
  );
}
