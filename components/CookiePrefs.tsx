"use client";

import { riapriConsenso } from "@/lib/consenso";

// Revocare dev'essere facile quanto accettare: senza questo comando la scelta
// resterebbe in localStorage senza modo di tornarci sopra dall'interfaccia.
export function CookiePrefs() {
  return (
    <button
      type="button"
      onClick={riapriConsenso}
      className="font-mono text-[0.7rem] uppercase text-fg-muted hover:text-fg transition-colors"
    >
      Preferenze cookie
    </button>
  );
}
