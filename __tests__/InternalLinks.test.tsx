import { render, screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import sitemap from '../app/sitemap';
import { Footer } from '../components/layout/Footer';
import { RELATED_LINKS } from '../data/siteLinks';
import AvisosPage from '../app/avisos/page';
import EmpaquesPage from '../app/empaques/page';
import ImpresionPage from '../app/impresion/page';

const pathOf = (url: string) => new URL(url).pathname.replace(/\/$/, '') || '/';

describe('internal links (no orphan pages)', () => {
  it('links every sitemap page from the footer or a hub page', () => {
    const { container } = render(<Footer />);
    const linked = new Set<string>([
      ...Array.from(container.querySelectorAll('a[href^="/"]')).map((a) => a.getAttribute('href') ?? ''),
      ...Object.values(RELATED_LINKS).flat().map((l) => l.href),
    ]);
    const orphans = sitemap()
      .map((e) => pathOf(e.url))
      .filter((p) => p !== '/' && !p.startsWith('/proyectos/') && !linked.has(p));
    expect(orphans).toEqual([]);
  });

  it.each([
    ['avisos', AvisosPage, ['/avisos/avisos-luminosos-bucaramanga', '/avisos/neon-flex', '/avisos/avisos-acrilico-precios']],
    ['empaques', EmpaquesPage, ['/empaques/cajas-hamburguesas-bucaramanga', '/empaques/bolsas-papel-logo', '/diseno-empaques']],
    ['impresion', ImpresionPage, ['/impresion/stickers-bucaramanga', '/litografia-bucaramanga', '/papeleria-comercial']],
  ])('the %s hub links to its specialties', (_hub, Page, hrefs) => {
    render(<Page />);
    const block = screen.getByRole('navigation', { name: /especialidades/i });
    for (const href of hrefs) {
      expect(within(block).getAllByRole('link').some((a) => a.getAttribute('href') === href)).toBe(true);
    }
  });

  it('never links the footer to a page that does not exist', () => {
    const { container } = render(<Footer />);
    const pages = new Set(['/', ...sitemap().map((e) => pathOf(e.url))]);
    const broken = Array.from(container.querySelectorAll('a[href^="/"]'))
      .map((a) => a.getAttribute('href') ?? '')
      .filter((href) => !pages.has(href));
    expect(broken).toEqual([]);
  });
});
