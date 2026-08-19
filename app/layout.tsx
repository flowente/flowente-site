import type { Metadata } from "next";
import { SvgFilters } from "@/components/SvgFilters";
import { PageTransition } from "@/components/PageTransition";
import { CookieBanner } from "@/components/CookieBanner";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://flowente.com"),
  title: {
    default: "Flowente — Il lavoro che scorre",
    template: "%s",
  },
  description:
    "Studio di AI applicata. Scegliamo modello e infrastruttura adatti al caso d'uso e li portiamo in produzione. Anche sui tuoi server, se i dati non devono uscire.",
  openGraph: {
    title: "Flowente — L'AI nel flusso",
    description:
      "Studio di AI applicata. Dalla strategia al modello in produzione. Anche AI privata on-premise, con i dati che restano in azienda.",
    type: "website",
    locale: "it_IT",
    siteName: "Flowente",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* PROVA FONT — solo sul ramo prova-font.
            ?testo=switzer scambia il font del testo; la scelta resta in
            sessionStorage cosi' si puo' navigare fra le pagine senza
            riscriverla ogni volta. Inline e prima del corpo, altrimenti la
            pagina si disegna con il font sbagliato e poi salta. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var p=new URLSearchParams(location.search).get('testo');if(p)sessionStorage.setItem('provaTesto',p);var v=sessionStorage.getItem('provaTesto');if(v)document.documentElement.setAttribute('data-testo',v);}catch(e){}})()`,
          }}
        />
      </head>
      <body className="font-sans">
        <SvgFilters />
        <PageTransition />
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
