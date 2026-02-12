import { MetadataRoute } from 'next';
import { productsData } from '@/data/products';
import { projects } from '@/data/projects';

const SITE_URL = 'https://impulsopublicidad.pro';

export default function sitemap(): MetadataRoute.Sitemap {
  // Static Routes
  const staticRoutes = [
    '',
    '/adhesivos',
    '/empaques',
    '/avisos',
    '/papeleria-comercial',
    '/impresion',
    '/diseno-empaques',
    '/litografia-bucaramanga',
    '/proyectos',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Product Subpages (from silos)
  const productRoutes = [
    ...productsData.empaques,
    ...productsData.avisos,
    ...productsData.impresion.filter(p => p.slug === 'stickers-bucaramanga'), // Only subpages that exist
  ].map((product) => ({
    url: `${SITE_URL}/${product.category.toLowerCase()}/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Project Detail Pages
  const projectRoutes = projects.map((project) => ({
    url: `${SITE_URL}/proyectos/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...projectRoutes];
}
