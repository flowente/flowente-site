/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // flowente.com senza www rimanda a www.flowente.com, permanente.
  //
  // Serve solo se l'apex arriva davvero fin qui, cioe' se il DNS lo punta su
  // Railway. Se invece il rinvio lo fa Aruba, questa regola non scatta mai e
  // non da' fastidio a nessuno: tenerla costa niente ed evita che un domani il
  // sito si trovi a vivere a due indirizzi diversi senza che nessuno se ne
  // accorga.
  //
  // has con host esatto "flowente.com": www.flowente.com non corrisponde, quindi
  // non si innesca un rinvio infinito.
  async redirects() {
    return [
      {
        source: "/:percorso*",
        has: [{ type: "host", value: "flowente.com" }],
        destination: "https://www.flowente.com/:percorso*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
