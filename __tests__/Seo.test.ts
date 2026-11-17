import fs from 'node:fs';
import path from 'node:path';
import { describe, it, expect } from 'vitest';
import type { Metadata } from 'next';
import sitemap from '../app/sitemap';
import nextConfig from '../next.config';
import { projects } from '../data/projects';
import { SITE_CONFIG } from '../constants/info';
import { generateMetadata as projectMetadata } from '../app/proyectos/[slug]/page';

const APP_DIR = path.resolve(__dirname, '../app');
const BRAND = SITE_CONFIG.name;
const ROOT_PAGE = '';

function listStaticRoutes(dir: string = APP_DIR, base = ''): string[] {
  const routes = fs.existsSync(path.join(dir, 'page.tsx')) ? [base] : [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const isDynamic = entry.name.startsWith('[') || entry.name.startsWith('(');
    if (!entry.isDirectory() || isDynamic) continue;
    routes.push(...listStaticRoutes(path.join(dir, entry.name), `${base}/${entry.name}`));
  }
  return routes;
}

function sitemapPaths(): string[] {
  return sitemap().map((entry) => new URL(entry.url).pathname.replace(/\/$/, ''));
}

function renderTitle(title: Metadata['title'], route: string): string {
  if (typeof title === 'string') return route === ROOT_PAGE ? title : `${title} | ${BRAND}`;
  if (title && typeof title === 'object' && 'absolute' in title && title.absolute) return title.absolute;
  throw new Error(`Unsupported title shape on route "${route}"`);
}

function countBrand(text: string): number {
  return text.split(BRAND).length - 1;
}

const pageModules = import.meta.glob<{ metadata?: Metadata }>('../app/**/page.tsx', { eager: true });

describe('sitemap', () => {
  const staticRoutes = listStaticRoutes();
  const projectSlugs = new Set(projects.map((p) => p.slug));

  it('only lists URLs that resolve to an existing page', () => {
    const broken = sitemapPaths().filter((p) => {
      if (staticRoutes.includes(p)) return false;
      const match = p.match(/^\/proyectos\/([^/]+)$/);
      return !(match && projectSlugs.has(match[1]));
    });
    expect(broken).toEqual([]);
  });

  it('lists every static page of the site', () => {
    const listed = new Set(sitemapPaths());
    const missing = staticRoutes.filter((r) => !listed.has(r));
    expect(missing).toEqual([]);
  });

  it('has no duplicate URLs', () => {
    const paths = sitemapPaths();
    expect(paths.length).toBe(new Set(paths).size);
  });
});

describe('page titles', () => {
  it('render the brand exactly once on every static page', () => {
    const offenders = Object.entries(pageModules)
      .filter(([file]) => !file.includes('['))
      .map(([file, mod]) => {
        const route = file.replace('../app', '').replace(/\/?page\.tsx$/, '');
        return { route, title: renderTitle(mod.metadata?.title ?? BRAND, route) };
      })
      .filter(({ title }) => countBrand(title) !== 1);
    expect(offenders).toEqual([]);
  });

  it('render the brand exactly once on every project page', async () => {
    const offenders: string[] = [];
    for (const { slug } of projects) {
      const meta = await projectMetadata({ params: Promise.resolve({ slug }) });
      const title = renderTitle(meta.title, `/proyectos/${slug}`);
      if (countBrand(title) !== 1) offenders.push(title);
    }
    expect(offenders).toEqual([]);
  });
});

describe('redirects', () => {
  const legacy = ['neon-flex', 'avisos-acrilico-precios', 'avisos-luminosos-bucaramanga'];

  it.each(legacy)('sends /avisos-profesionales/%s permanently to /avisos', async (slug) => {
    const redirects = (await nextConfig.redirects?.()) ?? [];
    const rule = redirects.find((r) => r.source === '/avisos-profesionales/:slug');
    expect(rule).toMatchObject({ destination: '/avisos/:slug', permanent: true });
    expect(fs.existsSync(path.join(APP_DIR, 'avisos', slug, 'page.tsx'))).toBe(true);
  });
});

describe('retired pages', () => {
  it('sends /papeleria-comercial permanently to /impresion and links it from nowhere', async () => {
    const redirects = (await nextConfig.redirects?.()) ?? [];
    expect(redirects.find((r) => r.source === '/papeleria-comercial')).toMatchObject({ destination: '/impresion', permanent: true });
    expect(fs.existsSync(path.join(APP_DIR, 'papeleria-comercial'))).toBe(false);
    expect(sitemapPaths()).not.toContain('/papeleria-comercial');
    const sources = ['data', 'components', 'app'].flatMap((d) =>
      fs.readdirSync(path.resolve(__dirname, '..', d), { recursive: true, encoding: 'utf8' })
        .filter((f) => /\.tsx?$/.test(f))
        .map((f) => path.resolve(__dirname, '..', d, f)),
    );
    const linking = sources.filter((f) => !f.endsWith('sitemap.ts') && fs.readFileSync(f, 'utf8').includes("'/papeleria-comercial'"));
    expect(linking).toEqual([]);
  });
});

