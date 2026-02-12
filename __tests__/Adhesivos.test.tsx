import { render, screen } from '@testing-library/react';
import AdhesivosPage from '../app/adhesivos/page';
import { describe, it, expect } from 'vitest';

describe('Adhesivos Page', () => {
  it('renders Adhesivos page with correct headings', () => {
    render(<AdhesivosPage />);
    // Check H1
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Vinilos Adhesivos Bucaramanga/i);
    
    // Check main sections
    expect(screen.getByText(/Nuestras Especialidades/i)).toBeInTheDocument();
    expect(screen.getByText(/Preguntas Frecuentes/i)).toBeInTheDocument();
  });

  it('contains local authority mentions', () => {
    render(<AdhesivosPage />);
    expect(screen.getAllByText(/Bucaramanga/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Floridablanca/i)).toBeInTheDocument();
    expect(screen.getByText(/Girón/i)).toBeInTheDocument();
    expect(screen.getByText(/Piedecuesta/i)).toBeInTheDocument();
  });

  it('renders JSON-LD schemas', () => {
    const { container } = render(<AdhesivosPage />);
    const scripts = container.querySelectorAll('script[type="application/ld+json"]');
    expect(scripts.length).toBeGreaterThanOrEqual(3); // Service, FAQ, Breadcrumb
  });
});
