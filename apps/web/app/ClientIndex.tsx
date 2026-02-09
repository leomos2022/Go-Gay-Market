"use client";

import { useEffect, useState } from "react";

const resolveIndexHtml = () => {
  return "/index.html";
};

const extractBody = (html: string) => {
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return match ? match[1] : html;
};

const sanitizeBody = (body: string) => {
  const footerHtml = `
<footer class="footer footer-modern">
  <div class="container">
    <div class="columns is-multiline footer-grid">
      <div class="column is-4">
        <img class="footer-logo" width="180" height="96" src="images/logotransparent.png" alt="LGBTIQ+SHOP">
        <p class="footer-tagline">LGBTIQ+SHOP · Marketplace y comunidad diversa en Colombia.</p>
        <p class="footer-meta">Compra, vende y conecta con marcas LGBTIQ+ en un solo lugar.</p>
      </div>
      <div class="column is-4">
        <h5>Contacto</h5>
        <ul class="footer-contact">
          <li><strong>Leonardo Mosquera</strong></li>
          <li>Ingeniero de Software</li>
          <li><a href="https://wa.me/573103953475">WhatsApp: 3103953475</a></li>
          <li><a href="https://outlook.live.com/mail/0/">leomos@hotmail.com</a></li>
        </ul>
      </div>
      <div class="column is-4">
        <h5>Enlaces</h5>
        <ul class="footer-contact">
          <li><a href="/registro">Registro</a></li>
          <li><a href="/newsletter">Newsletter</a></li>
          <li><a href="/eventos">Eventos</a></li>
          <li><a href="/marketplace">Marketplace</a></li>
        </ul>
        <ul class="footer-social">
          <li><a href="https://www.facebook.com/leomos.craft/" target="_blank" rel="noopener" aria-label="Facebook">Fb</a></li>
          <li><a href="https://github.com/leomos2022" target="_blank" rel="noopener" aria-label="GitHub">Gh</a></li>
          <li><a href="https://www.linkedin.com/feed/?trk=cold_join_sign_in" target="_blank" rel="noopener" aria-label="LinkedIn">In</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="container border footer-bottom">
    <div class="content has-text-align-center">
      <p>LGBTIQ+SHOP · Colombia · 2026</p>
    </div>
  </div>
</footer>
  `;
  let cleaned = body.replace(/<script[\s\S]*?<\/script>/gi, "");
  cleaned = cleaned.replace(
    /<div class="column is-3">[\s\S]*?<h5>Enlaces útiles<\/h5>[\s\S]*?<\/div>/i,
    "",
  );
  cleaned = cleaned.replace(
    /<footer class="footer[^"]*">[\s\S]*?<\/footer>/i,
    footerHtml.trim(),
  );
  return cleaned;
};

export default function ClientIndex() {
  const [html, setHtml] = useState<string>("<main id=\"main\"></main>");

  useEffect(() => {
    const url = resolveIndexHtml();
    fetch(url)
      .then((res) => res.text())
      .then((text) => setHtml(sanitizeBody(extractBody(text))))
      .catch(() => setHtml("<main id=\"main\"><p>No se encontro index.html.</p></main>"));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
