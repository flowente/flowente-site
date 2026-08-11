import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Invio del form contatti — provider-agnostico.
// Configura queste env per l'invio reale (es. su Railway):
//   RESEND_API_KEY   = chiave API Resend
//   CONTACT_TO       = email che riceve i messaggi (es. hello@flowente.com)
//   CONTACT_FROM     = mittente verificato su Resend (es. "Flowente <hello@flowente.com>")
// Senza queste env il messaggio viene solo loggato lato server (utile in sviluppo).

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  consent?: string;
  website?: string; // honeypot
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: se compilato, è un bot → fingi successo senza fare nulla.
  if (body.website) return NextResponse.json({ ok: true, delivered: false });

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();
  const company = (body.company || "").trim();

  if (!name || !isEmail(email) || !message || body.consent !== "yes") {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM || "Flowente <onboarding@resend.dev>";

  const subject = `Nuovo contatto dal sito — ${name}`;
  const text = [
    `Nome: ${name}`,
    `Email: ${email}`,
    company ? `Azienda: ${company}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  // Non configurato: logga e rispondi ok (il form funziona in anteprima; l'invio reale parte quando aggiungi le env).
  if (!apiKey || !to) {
    console.log("[contact] (non configurato — nessuna email inviata)\n" + text);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to, reply_to: email, subject, text }),
    });
    if (!r.ok) {
      const detail = await r.text();
      console.error("[contact] resend error", r.status, detail);
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] send exception", err);
    return NextResponse.json({ ok: false, error: "send_exception" }, { status: 500 });
  }
}
