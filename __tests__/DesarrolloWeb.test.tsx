import { render, screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DesarrolloWebPage from '../app/desarrollo-web/page';

const whatsappHref = /^https:\/\/wa\.me\//;

describe('Desarrollo web landing', () => {
  it('opens with the promise as its only h1', () => {
    render(<DesarrolloWebPage />);
    const h1s = screen.getAllByRole('heading', { level: 1 });
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toHaveTextContent(/tu negocio\s*también en\s*google/i);
  });

  it('shows the real Search Console figures with their source', () => {
    render(<DesarrolloWebPage />);
    for (const figure of ['3.820', '152', '7,6']) expect(screen.getByText(figure)).toBeInTheDocument();
    expect(screen.getByText(/Google Search Console de impulsopublicidad\.pro/i)).toBeInTheDocument();
  });

  it('offers three plans, each quoted on WhatsApp with its own name', () => {
    render(<DesarrolloWebPage />);
    for (const plan of ['Landing Express', 'Web Negocio', 'Tienda Online']) {
      const card = screen.getByRole('heading', { level: 3, name: plan }).closest('article') as HTMLElement;
      const cta = within(card).getByRole('link', { name: /cotizar/i });
      expect(cta.getAttribute('href')).toMatch(whatsappHref);
      expect(decodeURIComponent(cta.getAttribute('href') ?? '')).toContain(plan);
    }
  });

  it('never publishes a placeholder price', () => {
    const { container } = render(<DesarrolloWebPage />);
    expect(container.textContent).not.toMatch(/\$\s*—/);
  });

  it('explains the process in four steps', () => {
    render(<DesarrolloWebPage />);
    const process = screen.getByRole('region', { name: /4 pasos/i });
    expect(within(process).getAllByRole('heading', { level: 3 })).toHaveLength(4);
  });

  it('answers the frequent questions, including the honest one about Google', () => {
    render(<DesarrolloWebPage />);
    expect(screen.getByText('¿Me garantizan salir primero en Google?')).toBeInTheDocument();
    expect(screen.getByText(/Nadie serio te lo puede garantizar/)).toBeInTheDocument();
  });

  it('shows the neon sign on the street and the printed boxes in the hand', () => {
    render(<DesarrolloWebPage />);
    const combo = screen.getByRole('region', { name: /combo que nadie más te da/i });
    const photos = within(combo).getAllByRole('img');
    expect(photos[0]).toHaveAttribute('src', '/trabajos/avisos/niko-neon-flex.webp');
    expect(photos[0]).toHaveAttribute('alt', expect.stringMatching(/neón flex.*Niko/i));
    expect(photos[1]).toHaveAttribute('src', '/trabajos/empaques/cajas-impresas.webp');
    expect(photos[1]).toHaveAttribute('alt', expect.stringMatching(/cajas impresas/i));
  });

  it('closes with a WhatsApp call to action', () => {
    render(<DesarrolloWebPage />);
    expect(screen.getByRole('link', { name: /cotizar mi página por whatsapp/i }).getAttribute('href')).toMatch(whatsappHref);
  });

  it('shows three real projects, each with its captures and a live link', () => {
    render(<DesarrolloWebPage />);
    const portfolio = screen.getByRole('region', { name: /webs que ya están en línea/i });
    for (const [name, url] of [['Impulso Publicidad', 'https://impulsopublicidad.pro'], ['VERA', 'https://vera.tikno.pro'], ['Escala · CDE UNAB', 'https://4-sloop.tikno.pro']]) {
      const project = within(portfolio).getByRole('heading', { level: 3, name }).closest('article') as HTMLElement;
      expect(within(project).getAllByRole('img').length).toBeGreaterThanOrEqual(4);
      expect(within(project).getByRole('link', { name: /en vivo/i })).toHaveAttribute('href', url);
    }
  });
});
