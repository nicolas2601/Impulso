import { render, screen, within } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import nextConfig from '../next.config';
import { projects } from '../data/projects';
import { WORK_PHOTOS, WORK_VIDEOS } from '../data/realWork';
import ProyectosPage from '../app/proyectos/page';
import ProjectDetailPage from '../app/proyectos/[slug]/page';

const RETIRED_SLUGS = [
  'burger-stack-rebranding-empaques',
  'neon-bar-la-terraza',
  'branding-tienda-ropa',
  'senaletica-clinica-dental',
  'etiquetas-cerveza-artesanal',
  'caja-pizza-negra',
  'menu-restaurante-italiano',
  'aviso-luminoso-farmacia',
];

beforeEach(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      observe() {}
      disconnect() {}
      unobserve() {}
    },
  );
});

describe('case studies', () => {
  it('are built only from real, local work photos and clips', () => {
    const photoSrcs = new Set(WORK_PHOTOS.map((p) => p.src));
    const clipSrcs = new Set(WORK_VIDEOS.map((v) => v.src));
    for (const project of projects) {
      expect(project.photos.length, project.slug).toBeGreaterThan(0);
      expect(project.photos.every((p) => photoSrcs.has(p.src)), project.slug).toBe(true);
      expect(project.videos.every((v) => clipSrcs.has(v.src)), project.slug).toBe(true);
    }
  });

  it('never quote a testimonial nobody gave', () => {
    for (const project of projects) expect(project).not.toHaveProperty('testimonial');
  });

  it('are all linked from the portfolio page', () => {
    render(<ProyectosPage />);
    const cases = screen.getByRole('region', { name: /casos/i });
    const hrefs = within(cases).getAllByRole('link').map((a) => a.getAttribute('href'));
    expect(hrefs).toEqual(expect.arrayContaining(projects.map((p) => `/proyectos/${p.slug}`)));
  });

  it('render their photos and clips on the detail page', async () => {
    const project = projects.find((p) => p.videos.length > 0)!;
    const { container } = render(await ProjectDetailPage({ params: Promise.resolve({ slug: project.slug }) }));
    expect(screen.getByRole('heading', { level: 1, name: project.title })).toBeInTheDocument();
    for (const photo of project.photos) expect(screen.getByRole('img', { name: photo.alt })).toBeInTheDocument();
    expect(container.querySelectorAll('video')).toHaveLength(project.videos.length);
  });

  it('describe each case as a CreativeWork with an absolute image', async () => {
    const project = projects[0];
    const { container } = render(await ProjectDetailPage({ params: Promise.resolve({ slug: project.slug }) }));
    const script = container.querySelector('script[type="application/ld+json"]');
    const data = JSON.parse(script?.textContent ?? '{}');
    expect(data['@type']).toBe('CreativeWork');
    expect(data.image).toMatch(/^https:\/\/impulsopublicidad\.pro\/trabajos\//);
  });

  it.each(RETIRED_SLUGS)('send the retired /proyectos/%s permanently to the portfolio', async (slug) => {
    const redirects = (await nextConfig.redirects?.()) ?? [];
    const rule = redirects.find((r) => r.destination === '/proyectos' && new RegExp(r.source.replace(/:slug\((.*)\)/, '($1)')).test(`/proyectos/${slug}`));
    expect(rule?.permanent).toBe(true);
    expect(projects.some((p) => p.slug === slug)).toBe(false);
  });
});
