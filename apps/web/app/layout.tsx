import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Parche Queer",
  description: "La plataforma que conecta la comunidad LGBT+ en Colombia",
};

const globalInlineStyles = `
#main .mb-6 h2 {text-align:center !important;}

#masthead {
  background: #fff;
  z-index: 170;
  margin: 0 auto;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  font-size: 20px !important;
}

.masthead-upper {
  text-transform: uppercase;
  font-family: default;
  font-weight: 700;
  background: #000000;
}

.masthead-upper li a {
  padding: 15px !important;
  text-decoration: none !important;
  color: #ffffff !important;
}

.masthead-upper .container,
.masthead-upper .is-flex {
  justify-content: flex-end;
  text-align: right;
}

.cta-register {
  background: linear-gradient(135deg, #ff0080, #40e0d0);
  color: #000000 !important;
  border-radius: 8px;
  padding: 10px 16px !important;
  box-shadow: 0 10px 24px rgba(255, 0, 128, 0.25);
  animation: registerPulse 1.6s ease-in-out infinite;
}

@keyframes registerPulse {
  0% {
    transform: translateY(0) scale(1);
    box-shadow: 0 10px 24px rgba(255, 0, 128, 0.25);
  }
  50% {
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 14px 32px rgba(255, 0, 128, 0.35);
  }
  100% {
    transform: translateY(0) scale(1);
    box-shadow: 0 10px 24px rgba(255, 0, 128, 0.25);
  }
}

.masthead-upper li:last-child a {
  text-decoration: none !important;
}

.masthead-lower {
  padding-top: 8px !important;
  padding-bottom: 8px !important;
}

.navigation a {
  font-size: 20px;
  padding: 12px 14px;
}

main {
  margin-top: 150px;
}

.footer {
  font-size: 16px !important;
}

.footer-modern {
  background: #000000;
  color: #ffffff;
  padding-top: 48px;
}

.footer-modern h5 {
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 14px;
}

.footer-logo {
  width: 200px;
  height: auto;
}

.footer-tagline {
  color: rgba(255, 255, 255, 0.75);
  font-size: 16px;
  max-width: 320px;
}

.footer-contact {
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: grid;
  gap: 8px;
}

.footer-contact a {
  color: #ffffff;
  text-decoration: none;
}

.footer-contact a:hover {
  text-decoration: underline;
}

.footer-social {
  list-style: none;
  padding-left: 0;
  margin: 16px 0 12px;
  display: flex;
  gap: 12px;
}

.footer-social a {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  display: grid;
  place-items: center;
  font-weight: 700;
  text-decoration: none;
}

.footer-social a:hover {
  background: #ffffff;
  color: #000000;
}

.footer-meta {
  color: rgba(255, 255, 255, 0.7);
}

.footer-bottom {
  border-top: none;
  margin-top: 32px;
  padding-top: 16px;
  padding-bottom: 16px;
}

.stores-section {
  margin-top: 24px;
  margin-bottom: 64px;
}

.stores-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  align-items: stretch;
  margin-top: 32px;
}

.store-card {
  background: #ffffff;
  border-radius: 999px;
  padding: 28px 20px;
  text-align: center;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.store-logo {
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff0080, #ff8c00, #40e0d0);
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 22px;
  margin: 0 auto 6px;
  letter-spacing: 1px;
}

.store-card h3 {
  font-size: 20px;
  margin: 0;
}

.store-card p {
  font-size: 16px;
  margin: 0;
  line-height: 1.45;
}

.store-card a {
  color: #000;
  text-decoration: none;
}

.store-card a:hover {
  text-decoration: underline;
}

.carousel-media__image,
.carousel-media img,
.card img,
.wp-post-image {
  border-radius: 0;
  object-fit: cover;
}

.carousel-media {
  overflow: hidden;
  border-radius: 0;
}

.hero-logo-wrap {
  border-radius: 0;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 420px;
}

.hero-logo {
  border-radius: 0 !important;
  object-fit: contain;
  background: #ffffff;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  animation: logo-float 8s ease-in-out infinite;
  transform-origin: center;
  will-change: transform;
}

.site-logo {
  height: 84px;
  width: auto;
  max-width: 320px;
  display: block;
  object-fit: contain;
  animation: logo-float 8s ease-in-out infinite;
  transform-origin: center;
  will-change: transform;
}

.masthead-logo {
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .site-logo {
    height: 64px;
    max-width: 240px;
  }
}

@keyframes logo-float {
  0% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-6px) scale(1.02);
  }
  100% {
    transform: translateY(0) scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .site-logo,
  .hero-logo {
    animation: none;
  }
}

.glide__controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

.glide__arrow {
  width: 44px;
  height: 44px;
  border-radius: 999px;
  background: #111111;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.glide__arrow i {
  color: #ffffff;
  font-size: 16px;
}

.wp-block-acf-carousel-slide .carousel-media {
  height: 520px;
}

.wp-block-acf-carousel-slide .carousel-media__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.support-mission .glide--inactive .glide__slides {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.support-mission .glide--inactive .glide__slides > .glide__slide {
  display: block;
  flex: 0 1 calc(25% - 20px);
  max-width: calc(25% - 20px);
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(0, 0, 0, 0.06);
}

.support-mission .wp-block-acf-carousel-slide .carousel-media {
  height: auto;
  aspect-ratio: 4 / 3;
  border-radius: 0;
}

.support-mission .wp-block-acf-carousel-slide .carousel-media__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
}

.support-mission .support-card {
  padding: 16px 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 190px;
}

.support-mission .support-card h3 {
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  color: #111111;
}

.support-mission .support-card p {
  font-size: 15px;
  margin: 0;
  line-height: 1.45;
  color: rgba(17, 17, 17, 0.78);
}

.support-mission .support-card__cta {
  margin-top: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  border-radius: 999px;
  background: #111111;
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.04em;
  align-self: flex-start;
  margin-top: auto;
}

.support-mission .support-card__cta:hover {
  background: #000000;
}

@media (max-width: 1024px) {
  .support-mission .glide--inactive .glide__slides > .glide__slide {
    flex: 0 1 calc(50% - 20px);
    max-width: calc(50% - 20px);
  }
}

@media (max-width: 640px) {
  .support-mission .glide--inactive .glide__slides {
    gap: 16px;
  }

  .support-mission .glide--inactive .glide__slides > .glide__slide {
    flex: 0 1 100%;
    max-width: 100%;
  }
}

.slide-logo {
  height: 360px;
  width: 100%;
  max-width: 100%;
  object-fit: contain;
  background: transparent;
}

.news-square .card img,
.news-square .wp-post-image,
.news-square .has-bg img,
.news-square figure {
  border-radius: 0 !important;
}

.glide__arrow:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.16);
}

#stores-carousel {
  display: none;
}

/* UI/UX adjustments for contrast and cohesion */
.wp-block-button__link {
  color: #111111;
}

.wp-block-button__link.has-primary-background-color,
.wp-block-button__link.has-mandy-background-color,
.wp-block-button__link.has-emerald-background-color {
  color: #ffffff;
}

.glide__arrow {
  background: #111111;
  border-color: rgba(0, 0, 0, 0.25);
}

.glide__arrow i {
  color: #ffffff;
}

.quick-exit {
  background: #111111;
  color: #ffffff;
  padding: 12px 18px;
  border-radius: 999px;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.18);
}

.quick-exit svg {
  fill: #ffffff;
}

.quick-exit:hover {
  background: #000000;
}

.store-card {
  border-radius: 24px;
}

.store-logo {
  width: 96px;
  height: 96px;
  border-radius: 50%;
}

.site-logo {
  height: 104px;
  max-width: 360px;
}

@media (max-width: 768px) {
  .site-logo {
    height: 72px;
    max-width: 260px;
  }
}

.footer-contact-form {
  display: grid;
  gap: 10px;
  margin: 0;
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  background: #111111;
}

.footer-contact-form label {
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
}

.footer-contact-form input,
.footer-contact-form select,
.footer-contact-form textarea {
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  padding: 10px 12px;
}

.footer-contact-form input::placeholder,
.footer-contact-form textarea::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.footer-contact-form select {
  color: #111111;
  background: #ffffff;
}

.footer-contact-form .wp-block-button__link {
  width: 100%;
  text-align: center;
  border-radius: 999px;
  padding: 12px 16px;
  background: #fce269;
  color: #111111;
  font-weight: 700;
}

.footer-contact-band {
  margin-top: 32px;
  margin-bottom: 48px;
}

.footer-contact-band .container {
  background: #0e0e0e;
  color: #ffffff;
  border-radius: 28px;
  padding: 36px 28px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.2);
}

.footer-contact-band h2 {
  color: #ffffff;
  font-size: 32px;
  margin-bottom: 12px;
}

.footer-contact-band p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  max-width: 520px;
}

@media (max-width: 900px) {
  .footer-contact-band .container {
    border-radius: 20px;
    padding: 28px 20px;
  }
}
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="/css/embedpress.css" />
        <link rel="stylesheet" href="/css/blocks.build.css" />
        <link rel="stylesheet" href="/css/style.min_4.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/style.min_5.css" />
        <link rel="stylesheet" href="/css/style.min_1.css" />
        <link rel="stylesheet" href="/css/style.min_6.css" />
        <link rel="stylesheet" href="/css/style.min_3.css" />
        <link rel="stylesheet" href="/css/style.min_2.css" />
        <link rel="stylesheet" href="/css/style.min.css" />
        <link rel="stylesheet" href="/css/ht-formatting-blocks-modules-styles.css" />
        <link rel="stylesheet" href="/css/accordion.min.css" />
        <link rel="stylesheet" href="/css/iframe.css" />
        <link rel="stylesheet" href="/css/glide.min.css" />
        <link rel="stylesheet" href="/css/app.css" />
        <link rel="stylesheet" href="/css/app.min.css" />
        <link rel="stylesheet" href="/css/app.min_1.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed%3Awght%40400%3B500%3B700%3B800&display=swap"
        />
        <link
          rel="icon"
          href="/images/logotransparent.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/images/logotransparent.png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href="/images/logotransparent.png"
        />
        <style dangerouslySetInnerHTML={{ __html: globalInlineStyles }} />
      </head>
      <body
        className="home wp-singular page-template-default page page-id-17 wp-theme-lgbt-parent wp-child-theme-lgbt-child tribe-no-js is-gutenberg"
        suppressHydrationWarning
      >
        {children}
        <Script id="consent-api-stub" strategy="beforeInteractive">
          {`
            window.consent_api = window.consent_api || {
              cookie_prefix: "wp_consent",
              cookie_expiration: 180,
              consent_type: "optout",
              waitfor_consent_hook: false,
              services: []
            };
          `}
        </Script>
      </body>
    </html>
  );
}
