import { render, screen } from '@testing-library/react';
import Home from '../app/page';
import { describe, it, expect, vi } from 'vitest';

describe('Home Page', () => {
  it('renders main headline', () => {
    render(<Home />);
    const headline = screen.getByRole('heading', { level: 1 });
    expect(headline).toHaveTextContent(/IMPULSAMOS/i);
    expect(headline).toHaveTextContent(/TU MARCA/i);
  });

  it('renders services section', () => {
    render(<Home />);
    // ModernHero scrolling text or BentoServices
    expect(screen.getAllByText(/Empaques/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Avisos/i).length).toBeGreaterThan(0);
  });

  it('renders call to action buttons', () => {
    render(<Home />);
    expect(screen.getByText(/COTIZAR PROYECTO/i)).toBeInTheDocument();
    expect(screen.getByText(/Ver Portafolio/i)).toBeInTheDocument();
  });

  it('contains structured data script', () => {
    const { container } = render(<Home />);
    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script).toBeInTheDocument();
  });
});
