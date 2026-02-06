# 🎨 Parche Queer - Design System Documentation
**Análisis completo del template actual para migración a React + NestJS**

---

## 📋 Tabla de Contenido
1. [Paleta de Colores](#paleta-de-colores)
2. [Tipografía](#tipografía)
3. [Componentes Visuales](#componentes-visuales)
4. [Layout & Estructura](#layout--estructura)
5. [Interacciones & Animaciones](#interacciones--animaciones)
6. [Assets & Recursos](#assets--recursos)
7. [Responsive Design](#responsive-design)

---

## 🎨 Paleta de Colores

### Colores Principales (LGBT Foundation Original)
```css
--wp--preset--color--primary: #292929               /* Negro principal (texto) */
--wp--preset--color--primary-button-background: #E2566F  /* Mandy (botones) */
--wp--preset--color--link: #000000                  /* Negro (enlaces) */
--wp--preset--color--white: #ffffff                 /* Blanco */
--wp--preset--color--porcelaine: #FCFCFC            /* Blanco grisáceo */
```

### Colores del Arcoíris (Brand Identity)
```css
--wp--preset--color--mandy: #E2566F          /* Rosa/Rojo */
--wp--preset--color--macaroni-and-cheese: #ED9A62  /* Naranja */
--wp--preset--color--festival: #FCE269        /* Amarillo */
--wp--preset--color--emerald: #55B47A         /* Verde */
--wp--preset--color--dodger-blue: #4F94D0     /* Azul */
--wp--preset--color--heliotrope: #987FB8      /* Púrpura */
```

### Colores Secundarios
```css
--wp--preset--color--french-pass: #B9E2F8    /* Azul claro */
--wp--preset--color--cupid: #F4BAD4          /* Rosa claro */
--wp--preset--color--cyan-bluish-gray: #abb8c3  /* Gris azulado */
```

### Gradientes Utilizados
```css
/* Logo Parche Queer */
background: linear-gradient(45deg, #FF0080, #FF8C00, #40E0D0);

/* Botones hero carousel */
background: linear-gradient(135deg, 
  rgb(226,86,111) 0%,    /* Mandy */
  rgb(237,154,98) 19%,   /* Macaroni */
  rgb(252,226,105) 39%,  /* Festival */
  rgb(85,183,74) 61%,    /* Emerald */
  rgb(79,148,208) 81%,   /* Dodger Blue */
  rgb(152,127,184) 100%  /* Heliotrope */
);

/* Botones alternativos */
background: linear-gradient(135deg, 
  rgb(151,120,209) 0%,
  rgb(207,42,186) 33%,
  rgb(238,44,130) 68%,
  rgb(251,105,98) 100%
);
```

---

## 📝 Tipografía

### Fuente Principal
```css
font-family: "Barlow Condensed", sans-serif
```
**Importación:**
```html
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;700;800&display=swap" rel="stylesheet">
```

### Escala Tipográfica
```css
--wp--custom--font-size-1: 48px   /* H1 - Títulos grandes */
--wp--custom--font-size-2: 40px   /* H2 - Subtítulos principales */
--wp--custom--font-size-3: 32px   /* H3 - Títulos secciones */
--wp--custom--font-size-4: 24px   /* H4 - Subtítulos / Body grande */
--wp--custom--font-size-5: 18px   /* Body - Texto normal */
--wp--custom--font-size-6: 16px   /* Small - Texto pequeño */
--wp--custom--font-size-7: 12px   /* Extra small - Labels */
```

### Line Heights
```css
--wp--custom--line-height-1: 56px  /* H1 */
--wp--custom--line-height-2: 48px  /* H2 */
--wp--custom--line-height-3: 40px  /* H3 */
--wp--custom--line-height-4: 32px  /* H4 */
--wp--custom--line-height-5: 24px  /* H5/Body */
--wp--custom--line-height-6: 24px  /* H6 */
--wp--custom--line-height-7: 16px  /* Small */
```

### Pesos de Fuente
```css
font-weight: 400;  /* Regular */
font-weight: 500;  /* Medium */
font-weight: 700;  /* Bold */
font-weight: 800;  /* Extra Bold - Para navegación y CTAs */
```

---

## 🧩 Componentes Visuales

### 1. **Header (Masthead)**

#### Top Bar
- **Background:** `--color-primary` (#292929)
- **Color texto:** Blanco (#ffffff)
- **Altura:** ~40px
- **Contenido:**
  - Newsletter link (izquierda)
  - WhatsApp link (centro)
  - "Regístrate Gratis 🌈" (derecha, fondo amarillo #FCE269)

#### Logo Section
- **Logo:** Emoji 🏳️‍🌈 + "Parche Queer"
- **Font-size:** 32px
- **Font-weight:** Bold (700)
- **Gradiente:** 45deg, #FF0080 → #FF8C00 → #40E0D0
- **Efecto:** `-webkit-background-clip: text; -webkit-text-fill-color: transparent;`

#### Navigation Menu
- **Font:** Barlow Condensed
- **Font-weight:** 800 (Extra Bold)
- **Font-size:** 18px
- **Color hover:** `--color-dodger-blue` (#4F94D0)
- **Estructura:**
  ```
  - Marketplace
  - Eventos
  - Comunidad
    ├── Foros
    ├── Grupos
    └── Recursos
  - Empleos
  - Nosotros
    ├── Nuestra Misión
    ├── Equipo
    └── Contacto
  ```

#### Search Bar
- **Icon:** SVG de lupa
- **Placeholder:** "Busca productos, eventos o vendedores..."
- **Border-radius:** 4px
- **Padding:** 8px 16px

### 2. **Carousel/Hero Slider (Glide.js)**

#### Configuración
- **Librería:** Glide.js v3.x
- **Slides visibles:** 1 (full-width)
- **Autoplay:** Activado
- **Controles:** Flechas + bullets numerados
- **Transición:** Fade/Slide

#### Slide Structure
```html
<div class="glide__slide">
  <div class="carousel-media">
    <img src="..." alt="..." /> <!-- Hero image -->
  </div>
  <div class="carousel-slide-inner">
    <h2>Título del Slide</h2>
    <p>Descripción breve</p>
    <button class="cta-button">Call to Action</button>
  </div>
</div>
```

#### Botones CTA en Carousel
- **Padding:** 8px 16px
- **Font-size:** 18px (`--font-size-5`)
- **Font-weight:** 800
- **Text-transform:** UPPERCASE
- **Border-radius:** 4px
- **Background:** Gradiente arcoíris (ver sección colores)
- **Color texto:** Negro (#292929)
- **Hover:** Ligera elevación (box-shadow)

### 3. **Cards/Grid de Servicios**

#### Card Container
- **Display:** Grid o Flex
- **Gap:** 24px (1.5rem)
- **Responsive:** 4 columnas (desktop) → 2 (tablet) → 1 (mobile)

#### Card Individual
```css
.service-card {
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}
```

#### Card Image
- **Aspect ratio:** 3:2 (1.5:1)
- **Object-fit:** cover
- **Width:** 100%

#### Card Content
- **Padding:** 16px 20px
- **Title font-size:** 24px (`--font-size-4`)
- **Title font-weight:** 700
- **Body font-size:** 18px (`--font-size-5`)
- **Color:** `--color-primary` (#292929)

### 4. **Botones (Buttons)**

#### Primary Button
```css
.button-primary {
  background-color: #E2566F; /* Mandy */
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button-primary:hover {
  background-color: #d14a5f;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(226, 86, 111, 0.3);
}
```

#### Secondary Button (Outline)
```css
.button-secondary {
  background: transparent;
  color: #292929;
  border: 2px solid #292929;
  border-radius: 4px;
  padding: 10px 22px;
  font-size: 18px;
  font-weight: 800;
  text-transform: uppercase;
}

.button-secondary:hover {
  background-color: #292929;
  color: #ffffff;
}
```

#### Rainbow Gradient Button
```css
.button-rainbow {
  background: linear-gradient(135deg, 
    rgb(226,86,111) 0%,
    rgb(237,154,98) 19%,
    rgb(252,226,105) 39%,
    rgb(85,183,74) 61%,
    rgb(79,148,208) 81%,
    rgb(152,127,184) 100%
  );
  color: #292929;
  border: none;
  font-weight: 800;
  padding: 12px 24px;
  border-radius: 4px;
}
```

### 5. **Search Section (Yellow Banner)**
```css
.home-search {
  background-color: #ED9A62; /* Macaroni and Cheese */
  padding: 48px 24px;
  text-align: center;
}

.home-search h2 {
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 24px;
  color: #292929;
}

.search-form input {
  width: 100%;
  max-width: 600px;
  padding: 16px 20px;
  font-size: 18px;
  border: 2px solid #292929;
  border-radius: 4px;
}
```

---

## 📐 Layout & Estructura

### Container Widths
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.container-narrow {
  max-width: 808px;
  margin: 0 auto;
}

.container-wide {
  max-width: 1440px;
  margin: 0 auto;
}
```

### Spacing System
```css
--spacing-xs: 8px;    /* 0.5rem */
--spacing-sm: 16px;   /* 1rem */
--spacing-md: 24px;   /* 1.5rem */
--spacing-lg: 32px;   /* 2rem */
--spacing-xl: 48px;   /* 3rem */
--spacing-2xl: 64px;  /* 4rem */
--spacing-3xl: 96px;  /* 6rem */
```

### Grid System
```css
.grid-2 { 
  display: grid; 
  grid-template-columns: repeat(2, 1fr); 
  gap: 24px; 
}

.grid-3 { 
  display: grid; 
  grid-template-columns: repeat(3, 1fr); 
  gap: 24px; 
}

.grid-4 { 
  display: grid; 
  grid-template-columns: repeat(4, 1fr); 
  gap: 24px; 
}
```

---

## ✨ Interacciones & Animaciones

### Transiciones Globales
```css
* {
  transition: all 0.3s ease;
}
```

### Hover Effects

#### Links
```css
a {
  text-decoration: underline;
  color: #000000;
  transition: color 0.2s ease;
}

a:hover {
  color: #4F94D0; /* Dodger Blue */
}
```

#### Buttons
```css
button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

button:active {
  transform: translateY(0);
}
```

#### Cards
```css
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}
```

### Mobile Menu Animation
```css
#mobile-menu:checked ~ #main-navigation {
  transform: translateX(0);
  opacity: 1;
  visibility: visible;
}

#main-navigation {
  transform: translateX(-100%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
}
```

### Carousel Transitions (Glide.js)
```javascript
new Glide('.glide', {
  type: 'carousel',
  perView: 1,
  autoplay: 5000,
  animationDuration: 800,
  animationTimingFunc: 'ease-in-out'
}).mount()
```

---

## 🖼️ Assets & Recursos

### Images Directory Structure
```
/images/
├── L-ManEnough-Billboards-SN-09475-scaled.jpg (Hero carousel)
├── 20250823-4-scaled.jpg (Slide 2)
├── LGBTFoundation_Exhibition26June2025-6-scaled.jpg (Slide 3)
├── ManEnough-BigGroup-SN-09647-scaled.jpg (Service card)
├── DSC02792-scaled.jpg (Community events)
└── [80+ imágenes más en múltiples resoluciones]
```

### Image Sizes (Responsive)
- **Original:** 2560px
- **Large:** 2048px
- **Medium:** 1536px, 768px
- **Small:** 750px, 300px
- **Thumbnail:** 50px

### Icons
- **Librería:** Font Awesome 6.x (fa-solid, fa-brands)
- **SVG inline:** Search icon, chevron, hamburger menu, close icon

### Video
- **Path:** `/media/Cover-video-homepage.mp4`
- **Uso:** Hero section background (opcional)

---

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First Approach */

/* Small devices (phones) */
@media (max-width: 576px) { }

/* Medium devices (tablets) */
@media (min-width: 577px) and (max-width: 768px) { }

/* Large devices (tablets landscape, small laptops) */
@media (min-width: 769px) and (max-width: 1024px) { 
  /* --wp--custom--tablet: 769px */
}

/* Extra large devices (desktops) */
@media (min-width: 1025px) { 
  /* --wp--custom--desktop: 1024px */
}
```

### Mobile-Specific Styles

#### Navigation
```css
/* Mobile: Full-screen overlay menu */
@media (max-width: 768px) {
  #main-navigation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(41, 41, 41, 0.98);
    z-index: 1000;
  }
  
  .menu-item {
    display: block;
    padding: 16px 24px;
    font-size: 24px;
    color: #ffffff;
  }
}
```

#### Typography Scale (Mobile)
```css
@media (max-width: 768px) {
  h1 { font-size: 36px; line-height: 44px; }
  h2 { font-size: 32px; line-height: 40px; }
  h3 { font-size: 28px; line-height: 36px; }
  h4 { font-size: 22px; line-height: 30px; }
  body { font-size: 16px; line-height: 24px; }
}
```

#### Grid System
```css
@media (max-width: 768px) {
  .grid-4, .grid-3, .grid-2 {
    grid-template-columns: 1fr;
  }
}
```

---

## 🎯 Componentes React a Crear

### Mapeo HTML → React Components

| HTML Original | Componente React | Props Principales |
|---------------|------------------|-------------------|
| `<header>` | `<Header />` | `isSticky`, `showTopBar` |
| Top bar links | `<TopBar />` | `links[]` |
| Logo | `<Logo />` | `variant`, `size` |
| Navigation | `<Navigation />` | `menuItems[]`, `isMobile` |
| Search form | `<SearchBar />` | `placeholder`, `onSubmit` |
| Hamburger menu | `<MobileMenuToggle />` | `isOpen`, `onToggle` |
| Carousel hero | `<HeroCarousel />` | `slides[]`, `autoplay` |
| Carousel slide | `<CarouselSlide />` | `image`, `title`, `description`, `cta` |
| Search banner | `<SearchBanner />` | `title`, `bgColor` |
| Services grid | `<ServicesGrid />` | `services[]`, `columns` |
| Service card | `<ServiceCard />` | `image`, `title`, `description`, `link` |
| Button | `<Button />` | `variant`, `size`, `onClick`, `children` |
| Footer | `<Footer />` | `sections[]`, `socialLinks[]` |

---

## 📦 Librerías Externas Utilizadas

### CSS Frameworks
- **Bulma-inspired classes** (grid, columns, is-flex, etc.)
- **Custom CSS variables** (CSS Custom Properties)

### JavaScript Libraries
1. **jQuery v3.x** - Manipulación DOM legacy
2. **Glide.js v3.x** - Carousels/sliders
3. **Font Awesome 6.x** - Iconografía
4. **Google Tag Manager** - Analytics
5. **CookieYes** - Gestión de cookies/GDPR

### WordPress-Specific (A eliminar en migración)
- `wp-block-*` classes
- WordPress REST API endpoints
- Heroic Knowledge Base plugin styles

---

## 🚀 Plan de Implementación React

### Fase 1: Setup Base
```bash
# Crear proyecto React con Vite
npm create vite@latest parche-queer-frontend -- --template react-ts

# Instalar dependencias esenciales
npm install react-router-dom axios styled-components
npm install @splidejs/react-splide  # Alternativa moderna a Glide.js
npm install @fortawesome/fontawesome-free
```

### Fase 2: Design Tokens (CSS Variables)
Crear `/src/styles/tokens.css`:
```css
:root {
  /* Colors */
  --color-primary: #292929;
  --color-mandy: #E2566F;
  --color-macaroni: #ED9A62;
  /* ... resto de variables */
  
  /* Typography */
  --font-primary: "Barlow Condensed", sans-serif;
  --font-size-1: 48px;
  /* ... */
  
  /* Spacing */
  --spacing-xs: 8px;
  /* ... */
}
```

### Fase 3: Componentes Base (Atomic Design)

#### Atoms
- `Button.tsx`
- `Input.tsx`
- `Logo.tsx`
- `Icon.tsx`

#### Molecules
- `SearchBar.tsx`
- `NavLink.tsx`
- `Card.tsx`
- `MobileMenuToggle.tsx`

#### Organisms
- `Header.tsx`
- `Navigation.tsx`
- `HeroCarousel.tsx`
- `ServicesGrid.tsx`
- `Footer.tsx`

#### Templates
- `LandingPageTemplate.tsx`
- `MarketplaceTemplate.tsx`
- `EventsTemplate.tsx`

#### Pages
- `HomePage.tsx`
- `MarketplacePage.tsx`
- `EventsPage.tsx`

### Fase 4: Styled Components Example
```typescript
// Button.styled.ts
import styled from 'styled-components';

export const StyledButton = styled.button<{ variant: 'primary' | 'secondary' }>`
  padding: 12px 24px;
  font-size: 18px;
  font-weight: 800;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${({ variant }) => variant === 'primary' && `
    background-color: var(--color-mandy);
    color: white;
    border: none;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(226, 86, 111, 0.3);
    }
  `}
  
  ${({ variant }) => variant === 'secondary' && `
    background: transparent;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
    
    &:hover {
      background-color: var(--color-primary);
      color: white;
    }
  `}
`;
```

---

## ✅ Checklist de Migración

### Visual Design
- [ ] Extraer todos los colores a CSS variables
- [ ] Configurar Google Fonts (Barlow Condensed)
- [ ] Crear componente Button con todas las variantes
- [ ] Crear componente Card
- [ ] Implementar grid system responsive
- [ ] Configurar breakpoints

### Componentes
- [ ] Header completo (top bar + logo + nav + search)
- [ ] Mobile menu con animaciones
- [ ] Hero carousel (Splide.js o Swiper)
- [ ] Services grid
- [ ] Search banner section
- [ ] Footer con redes sociales

### Funcionalidad
- [ ] Routing (React Router)
- [ ] Búsqueda global
- [ ] Navegación móvil (hamburger menu)
- [ ] Scroll effects (sticky header)
- [ ] Form validation
- [ ] API integration (NestJS backend)

### Assets
- [ ] Optimizar imágenes (WebP, lazy loading)
- [ ] Migrar iconos a React Icons
- [ ] Configurar CDN para media
- [ ] Implementar image srcset responsive

---

## 📊 Métricas de Performance

### Current Template (HTML estático)
- **Lighthouse Score:** ~85-90
- **First Contentful Paint:** ~1.2s
- **Time to Interactive:** ~2.5s
- **CSS Size:** ~180KB (minified)
- **JS Size:** ~250KB (jQuery + plugins)

### Target React App
- **Lighthouse Score:** 95+
- **First Contentful Paint:** <1s
- **Time to Interactive:** <2s
- **Bundle Size:** <200KB (gzipped)
- **Code Splitting:** Activado

---

## 🔄 Siguientes Pasos

1. **Aprobar este documento de diseño** ✅
2. **Crear proyecto React con Vite** → Task 2
3. **Configurar design tokens (CSS variables)** → Task 3
4. **Implementar componentes Atoms** → Task 4
5. **Construir Header + Navigation** → Task 4
6. **Implementar Hero Carousel** → Task 4
7. **Crear Services Grid** → Task 4
8. **Setup NestJS backend** → Task 5
9. **Conectar frontend con API** → Task 5-10

---

**Generado:** Diciembre 9, 2025  
**Versión:** 1.0  
**Proyecto:** Parche Queer - Marketplace LGBTQ+ Colombia  
**Stack:** React + TypeScript + NestJS + PostgreSQL
