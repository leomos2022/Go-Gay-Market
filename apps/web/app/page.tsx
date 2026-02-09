import fs from "node:fs";
import path from "node:path";

const extractBody = (html: string) => {
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return match ? match[1] : html;
};

const supportMissionMarker = "<!-- SUPPORT_MISSION -->";

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
  <div class="container footer-bottom">
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
    /<footer class="footer[^\"]*">[\s\S]*?<\/footer>/i,
    footerHtml.trim(),
  );
  cleaned = cleaned.replace(
    /<h2[^>]*>Apoya la misi[oó]n de Parche Gay<\/h2>[\s\S]*?<p>\s*<\/p>/i,
    supportMissionMarker,
  );
  return cleaned;
};

function SupportMissionSection() {
  const slides = [
    {
      image: {
        src: "images/AG623_Boardroom_1149.jpg",
        alt: "Trans woman presenting diversity and inclusion training on whiteboard to both online and in-person audiences.",
        srcSet:
          "images/AG623_Boardroom_1149.jpg 1656w, images/AG623_Boardroom_1149-300x200.jpg 300w, images/AG623_Boardroom_1149-1024x683.jpg 1024w, images/AG623_Boardroom_1149-768x512.jpg 768w, images/AG623_Boardroom_1149-50x33.jpg 50w, images/AG623_Boardroom_1149-1536x1024.jpg 1536w",
        width: 1656,
        height: 1104,
      },
      title: "Publica tu emprendimiento",
      description:
        "Crea tu vitrina en el marketplace y conecta con una audiencia diversa que quiere comprar local.",
      cta: {
        href: "/emprendimientos",
        text: "Publica tu emprendimiento",
      },
    },
    {
      image: {
        src: "images/slide5-scaled-e1758555323112.jpg",
        alt: "Two LGBTQ+ people celebrating in front of Out and Proud street art",
        width: 799,
        height: 300,
      },
      title: "Compra en el marketplace",
      description:
        "Apoya marcas LGBTIQ+ y encuentra productos con historia, identidad y orgullo.",
      cta: {
        href: "/marketplace",
        text: "Compra en el marketplace",
      },
    },
    {
      image: {
        src: "images/LGBT-Foundation-Pride-March-5709_Pete-Carr-scaled.jpg",
        alt: "",
        srcSet:
          "images/LGBT-Foundation-Pride-March-5709_Pete-Carr-scaled.jpg 2560w, images/LGBT-Foundation-Pride-March-5709_Pete-Carr-300x200.jpg 300w, images/LGBT-Foundation-Pride-March-5709_Pete-Carr-1024x681.jpg 1024w, images/LGBT-Foundation-Pride-March-5709_Pete-Carr-768x511.jpg 768w, images/LGBT-Foundation-Pride-March-5709_Pete-Carr-50x33.jpg 50w, images/LGBT-Foundation-Pride-March-5709_Pete-Carr-1536x1022.jpg 1536w, images/LGBT-Foundation-Pride-March-5709_Pete-Carr-2048x1363.jpg 2048w",
        width: 2560,
        height: 1703,
      },
      title: "Conviertete en aliado",
      description:
        "Sumate con marcas, instituciones o colectivos para abrir mas oportunidades.",
      cta: {
        href: "/aliados",
        text: "Conviertete en aliado",
      },
    },
    {
      image: {
        src: "images/AG623_Running_0841.jpg",
        alt: "Two participants running marathon on the sidewalk of a busy street.",
        srcSet:
          "images/AG623_Running_0841.jpg 1648w, images/AG623_Running_0841-300x200.jpg 300w, images/AG623_Running_0841-1024x683.jpg 1024w, images/AG623_Running_0841-768x512.jpg 768w, images/AG623_Running_0841-50x33.jpg 50w, images/AG623_Running_0841-1536x1024.jpg 1536w",
        width: 1648,
        height: 1099,
      },
      title: "Suma tu evento",
      description:
        "Publica talleres, ferias y encuentros para activar la comunidad.",
      cta: {
        href: "/eventos",
        text: "Suma tu evento",
      },
    },
  ];

  return (
    <section className="support-mission">
      <h2 className="wp-block-heading has-text-align-center">
        Apoya la misión de Parche Gay
      </h2>
      <div className="has-global-spacing carousel-style--default alignwide wp-block-acf-carousel">
        <div className="glide glide--inactive glide--align-top" data-perview="4" data-autoplay="">
          <div className="glide__track" data-glide-el="track">
            <div className="glide__slides">
              {slides.map((slide, index) => (
                <div
                  className="glide__slide align wp-block-acf-carousel-slide"
                  data-activecolor="#E75481"
                  key={`${slide.image.src}-${index}`}
                >
                  <div className="carousel-media">
                    <img
                      decoding="async"
                      width={slide.image.width}
                      height={slide.image.height}
                      src={slide.image.src}
                      className="carousel-media__image"
                      alt={slide.image.alt}
                      srcSet={slide.image.srcSet}
                      sizes={slide.image.srcSet ? "(max-width: 1656px) 100vw, 1656px" : undefined}
                    />
                  </div>
                  <div className="support-card">
                    <h3>{slide.title}</h3>
                    <p>{slide.description}</p>
                    <a className="support-card__cta" href={slide.cta.href}>
                      {slide.cta.text}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glide__controls">
            <div data-glide-el="controls">
              <button className="glide__arrow glide__arrow--left" data-glide-dir="<" aria-label="Anterior">
                <span className="sr-only">Anterior</span>
                <i className="fa-solid fa-arrow-left"></i>
              </button>
            </div>
            <div className="glide__numbers">
              <div className="glide__bullets" data-glide-el="controls[nav]">
                {Array.from({ length: slides.length }).map((_, index) => (
                  <button className="glide__bullet" data-glide-dir={`=${index}`} key={`bullet-${index}`}>
                    {index + 1}
                  </button>
                ))}
              </div>
              <div>/</div>
              <div className="glide__total">{slides.length}</div>
            </div>
            <div data-glide-el="controls">
              <button className="glide__arrow glide__arrow--right" data-glide-dir=">" aria-label="Siguiente">
                <span className="sr-only">Siguiente</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  const htmlPath = path.join(process.cwd(), "public", "index.html");
  const rawHtml = fs.readFileSync(htmlPath, "utf8");
  const sanitized = sanitizeBody(extractBody(rawHtml));
  const [before, after] = sanitized.split(supportMissionMarker);
  if (after === undefined) {
    return (
      <div
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: sanitized }}
      />
    );
  }
  return (
    <>
      <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: before }} />
      <SupportMissionSection />
      <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: after }} />
    </>
  );
}
