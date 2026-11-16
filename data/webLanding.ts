// /desarrollo-web content (Figma: "Desarrollo Web · Landing", node 28:25).
// No prices or delivery promises until Maycol confirms them; every plan is quoted on WhatsApp.

export interface WebPlan {
  tag: string;
  name: string;
  desc: string;
  features: string[];
  featured?: boolean;
}

export const WEB_PLANS: WebPlan[] = [
  {
    tag: 'Para empezar',
    name: 'Landing Express',
    desc: 'Una sola página de alto impacto para que te encuentren y te escriban.',
    features: [
      '1 página con tus servicios y fotos',
      'Botón de WhatsApp en toda la página',
      'Formulario de contacto',
      'SEO local básico + Google Maps',
      'Dominio y hosting configurados',
    ],
  },
  {
    tag: 'Recomendado',
    name: 'Web Negocio',
    desc: 'La web completa de tu marca, lista para competir en Google.',
    features: [
      'Hasta 5 secciones o páginas',
      'Portafolio o galería de trabajos',
      'Ficha de Google Business optimizada',
      'Analítica de visitas y clics',
      'Todo lo del plan Express',
    ],
    featured: true,
  },
  {
    tag: 'Para vender',
    name: 'Tienda Online',
    desc: 'Muestra tus productos con precio y recibe pedidos directo a WhatsApp.',
    features: [
      'Catálogo de productos con precios',
      'Pedidos que llegan a tu WhatsApp',
      'Panel para editar tus productos',
      'Menú digital con código QR',
      'Todo lo del plan Negocio',
    ],
  },
];

export const WEB_STEPS = [
  { title: 'Hablamos por WhatsApp', desc: 'Nos cuentas tu negocio, qué vendes y a quién le quieres vender.' },
  { title: 'Diseño que apruebas', desc: 'Ves el diseño completo de tu página antes de programar una sola línea.' },
  { title: 'Desarrollo y contenido', desc: 'Programamos, cargamos tus fotos y textos, y la dejamos lista para celular.' },
  { title: 'Publicación en Google', desc: 'La subimos con tu dominio y la damos de alta en Google y en Maps.' },
];

export const WEB_FEATURES = [
  { icon: 'bolt', title: 'Rápida en celular', desc: 'Pensada primero para el celular, que es donde te buscan tus clientes.' },
  { icon: 'search', title: 'SEO local', desc: 'Optimizada para búsquedas en Bucaramanga y el área metropolitana.' },
  { icon: 'map', title: 'Google Maps', desc: 'Tu negocio en el mapa con horarios, fotos y cómo llegar.' },
  { icon: 'whatsapp', title: 'WhatsApp directo', desc: 'Cada botón abre una conversación con un mensaje listo para enviar.' },
  { icon: 'lock', title: 'Dominio y candado SSL', desc: 'Tu propio .com o .co, con conexión segura desde el primer día.' },
  { icon: 'headset', title: 'Soporte local', desc: 'Gente de aquí que te responde por WhatsApp cuando lo necesitas.' },
] as const;

export const WEB_FAQS = [
  { q: '¿Cuánto se demora mi página?', a: 'Depende del plan y de qué tan rápido tengamos tus fotos y textos. Te damos una fecha clara antes de empezar.' },
  { q: '¿Tengo que pagar mensualidad?', a: 'El dominio y el hosting tienen un costo anual que te explicamos desde el inicio. Sin cobros sorpresa.' },
  { q: '¿Puedo cambiar cosas después?', a: 'Sí. En el plan Tienda tienes un panel para editar productos y precios; en los demás nos escribes y lo hacemos.' },
  { q: '¿Me garantizan salir primero en Google?', a: 'Nadie serio te lo puede garantizar. Lo que sí hacemos es dejar tu web técnicamente lista y optimizada para búsquedas locales.' },
];

/** Real figures from Google Search Console for impulsopublicidad.pro, 14 ago – 13 nov 2026. */
export const WEB_PROOF = {
  figures: [
    { value: '3.820', label: 'apariciones en Google' },
    { value: '152', label: 'clics a la página' },
    { value: '7,6', label: 'posición media' },
  ],
  source: 'Fuente: Google Search Console de impulsopublicidad.pro · 14 ago – 13 nov 2026',
};

export const WEB_MARQUEE = ['Páginas web', 'Tiendas online', 'SEO local', 'Google Maps', 'Menú QR', 'Catálogos', 'Landing pages'];

export const planQuote = (plan: string) => `Hola Impulso, quiero cotizar el plan ${plan} de página web.`;
export const WEB_QUOTE = 'Hola Impulso, quiero cotizar mi página web.';

export interface PortfolioShot {
  src: string;
  alt: string;
}

export interface PortfolioProject {
  name: string;
  kind: string;
  desc: string;
  tags: string[];
  /** Live address; leave empty when the demo is taken down. */
  url?: string;
  main: PortfolioShot;
  details: [PortfolioShot, PortfolioShot];
  mobile: PortfolioShot;
}

// Real captures of each site (public/portfolio). Escala lives on a temporary demo server.
export const WEB_PORTFOLIO: PortfolioProject[] = [
  {
    name: 'Impulso Publicidad',
    kind: 'Sitio de servicios · Bucaramanga',
    desc: 'Nuestra propia web: catálogo de servicios con fotos reales, SEO local y cotización directa por WhatsApp.',
    tags: ['Next.js', 'SEO local', 'WhatsApp'],
    url: 'https://impulsopublicidad.pro',
    main: { src: '/portfolio/impulso-home.webp', alt: 'Inicio de impulsopublicidad.pro con el titular Impulsamos tu marca' },
    details: [
      { src: '/portfolio/impulso-servicios.webp', alt: 'Sección de servicios de Impulso con fotos de trabajos' },
      { src: '/portfolio/impulso-trabajo.webp', alt: 'Sección Trabajo real de Impulso' },
    ],
    mobile: { src: '/portfolio/impulso-mobile.webp', alt: 'Inicio de Impulso en un celular' },
  },
  {
    name: 'VERA',
    kind: 'Aplicación web con inteligencia artificial',
    desc: 'Herramienta de investigación para revisar imágenes dermatoscópicas paso a paso. Bilingüe y pensada para usarse desde el celular.',
    tags: ['App web', 'IA', 'Español / inglés'],
    url: 'https://vera.tikno.pro',
    main: { src: '/portfolio/vera-escritorio.webp', alt: 'Escritorio de VERA con el recorrido del examen' },
    details: [
      { src: '/portfolio/vera-contexto.webp', alt: 'Paso de contexto del examen en VERA' },
      { src: '/portfolio/vera-guia.webp', alt: 'Guía de uso de VERA' },
    ],
    mobile: { src: '/portfolio/vera-mobile.webp', alt: 'VERA en un celular' },
  },
  {
    name: 'Escala · CDE UNAB',
    kind: 'Plataforma creada en hackathon',
    desc: 'Plataforma de acompañamiento empresarial para el Centro de Desarrollo Empresarial de la UNAB: diagnóstico, ruta y seguimiento en un solo lugar.',
    tags: ['React', 'Laravel', 'Hackathon UNAB'],
    url: 'https://4-sloop.tikno.pro',
    main: { src: '/portfolio/escala-home.webp', alt: 'Inicio de Escala: Cada empresa tiene un siguiente paso' },
    details: [
      { src: '/portfolio/escala-ruta.webp', alt: 'Ruta de acompañamiento de Escala con sus estaciones' },
      { src: '/portfolio/escala-producto.webp', alt: 'Vista del producto de Escala con el avance de una empresa' },
    ],
    mobile: { src: '/portfolio/escala-mobile.webp', alt: 'Escala en un celular' },
  },
];
