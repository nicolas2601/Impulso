import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BentoServices } from '../components/home/BentoServices';

const SERVICES: Array<[string, string]> = [
  ['Empaques', '/empaques'],
  ['Avisos', '/avisos'],
  ['Adhesivos', '/adhesivos'],
  ['Etiquetas', '/etiquetas'],
  ['Señalética', '/avisos-profesionales'],
  ['Impresión', '/impresion'],
  ['Proyectos', '/proyectos'],
];

describe('BentoServices (redesign)', () => {
  it('names the section as one headline', () => {
    render(<BentoServices />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/todo lo que\s*necesitas\s*en un solo\s*lugar/i);
  });

  it.each(SERVICES)('links the %s card to its page by its title', (title, href) => {
    render(<BentoServices />);
    expect(screen.getByRole('link', { name: title })).toHaveAttribute('href', href);
  });

  it('links the new web development card to its landing page', () => {
    render(<BentoServices />);
    expect(screen.getByRole('link', { name: 'Desarrollo web' })).toHaveAttribute('href', '/desarrollo-web');
  });

  it('shows a real photograph of the work on every photo card', () => {
    render(<BentoServices />);
    for (const title of ['Empaques', 'Avisos', 'Adhesivos', 'Señalética', 'Impresión']) {
      const img = screen.getByRole('link', { name: title }).querySelector('img');
      expect(img?.getAttribute('src')).toMatch(/^\//);
      expect(img?.getAttribute('alt')?.length ?? 0).toBeGreaterThan(10);
    }
  });

  it('shows no prices on the home cards', () => {
    const { container } = render(<BentoServices />);
    expect(container.textContent).not.toMatch(/\$\s*\d/);
  });

  it('keeps every title readable on its card', () => {
    render(<BentoServices />);
    for (const title of ['Empaques', 'Avisos', 'Adhesivos', 'Señalética', 'Impresión', 'Proyectos', 'Desarrollo web']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toHaveClass('text-white');
    }
    expect(screen.getByRole('heading', { level: 3, name: 'Etiquetas' })).toHaveClass('text-zinc-950');
  });
});
