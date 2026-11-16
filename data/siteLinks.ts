// Internal links that keep every landing page reachable (Search Console showed them orphaned).
// __tests__/InternalLinks.test.tsx fails if a sitemap page is linked from nowhere.

export interface SiteLink {
  href: string;
  title: string;
  desc: string;
}

export const RELATED_LINKS: Record<'avisos' | 'empaques' | 'impresion' | 'adhesivos', SiteLink[]> = {
  avisos: [
    { href: '/avisos/avisos-luminosos-bucaramanga', title: 'Avisos luminosos', desc: 'Cajas de luz y letras 3D con iluminación LED.' },
    { href: '/avisos/neon-flex', title: 'Neón flex', desc: 'Letreros de neón personalizados para interior y fachada.' },
    { href: '/avisos/avisos-acrilico-precios', title: 'Avisos en acrílico', desc: 'Placas y señalética de oficina en acrílico.' },
  ],
  empaques: [
    { href: '/empaques/cajas-hamburguesas-bucaramanga', title: 'Cajas para hamburguesa', desc: 'Cajas personalizadas con tu marca para comida rápida.' },
    { href: '/empaques/bolsas-papel-logo', title: 'Bolsas de papel con logo', desc: 'Bolsas kraft y bond impresas para tu negocio.' },
    { href: '/diseno-empaques', title: 'Diseño de empaques', desc: 'Diseñamos el empaque antes de producirlo.' },
  ],
  impresion: [
    { href: '/impresion/stickers-bucaramanga', title: 'Stickers', desc: 'Stickers y etiquetas adhesivas troqueladas.' },
    { href: '/litografia-bucaramanga', title: 'Litografía', desc: 'Impresión offset por volumen para negocios y mayoristas.' },
    { href: '/papeleria-comercial', title: 'Papelería comercial', desc: 'Tarjetas, volantes, factureros y carpetas.' },
  ],
  adhesivos: [
    { href: '/etiquetas', title: 'Etiquetas', desc: 'Etiquetas para productos, resistentes al agua y al frío.' },
    { href: '/impresion/stickers-bucaramanga', title: 'Stickers', desc: 'Stickers personalizados en cualquier forma.' },
    { href: '/avisos-profesionales', title: 'Señalética', desc: 'Señalización para oficinas, clínicas y edificios.' },
  ],
};

/** Footer column: the specialties that hubs alone would leave one click deeper. */
export const FOOTER_SPECIALTIES: Array<Pick<SiteLink, 'href' | 'title'>> = [
  { href: '/avisos/avisos-luminosos-bucaramanga', title: 'Avisos luminosos' },
  { href: '/avisos/neon-flex', title: 'Neón flex' },
  { href: '/avisos/avisos-acrilico-precios', title: 'Avisos en acrílico' },
  { href: '/empaques/cajas-hamburguesas-bucaramanga', title: 'Cajas para hamburguesa' },
  { href: '/empaques/bolsas-papel-logo', title: 'Bolsas con logo' },
  { href: '/impresion/stickers-bucaramanga', title: 'Stickers' },
  { href: '/etiquetas', title: 'Etiquetas' },
  { href: '/adhesivos', title: 'Vinilos adhesivos' },
  { href: '/litografia-bucaramanga', title: 'Litografía' },
  { href: '/papeleria-comercial', title: 'Papelería comercial' },
  { href: '/diseno-empaques', title: 'Diseño de empaques' },
];
