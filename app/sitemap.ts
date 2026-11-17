import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';

const SITE_URL = 'https://impulsopublicidad.pro';

// Keep in sync with app/**/page.tsx — __tests__/Seo.test.ts fails on any drift.
const SERVICE_ROUTES = [
  '/adhesivos',
  '/empaques',
  '/avisos',
  '/avisos-profesionales',
  '/impresion',
  '/etiquetas',
  '/diseno-empaques',
  '/litografia-bucaramanga',
  '/desarrollo-web',
  '/proyectos',
];

const LANDING_ROUTES = [
  '/empaques/cajas-hamburguesas-bucaramanga',
  '/empaques/bolsas-papel-logo',
  '/avisos/avisos-luminosos-bucaramanga',
  '/avisos/avisos-acrilico-precios',
  '/avisos/neon-flex',
  '/impresion/stickers-bucaramanga',
];

type Entry = MetadataRoute.Sitemap[number];

function entry(route: string, priority: number, changeFrequency: Entry['changeFrequency']): Entry {
  return { url: `${SITE_URL}${route}`, lastModified: new Date(), changeFrequency, priority };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry('', 1, 'weekly'),
    ...SERVICE_ROUTES.map((route) => entry(route, 0.8, 'weekly')),
    ...LANDING_ROUTES.map((route) => entry(route, 0.7, 'weekly')),
    ...projects.map((project) => entry(`/proyectos/${project.slug}`, 0.6, 'monthly')),
  ];
}
