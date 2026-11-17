import { render, screen } from '@testing-library/react';
import EmpaquesPage from '../app/empaques/page';
import CajasPage from '../app/empaques/cajas-hamburguesas-bucaramanga/page';
import BolsasPage from '../app/empaques/bolsas-papel-logo/page';
import { describe, it, expect, vi } from 'vitest';

describe('Empaques Silo', () => {
  it('renders Empaques Hub page', () => {
    render(<EmpaquesPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Empaques Personalizados/i);
    // Check for gallery content
    expect(screen.getByText(/CALIDAD QUE/i)).toBeInTheDocument();
  });

  it('renders Cajas Subpage with real boxes and quote buttons', () => {
    render(<CajasPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Cajas para Hamburguesas/i);
    expect(screen.getByRole('img', { name: /cajas impresas con logo/i })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /cotizar esta/i })).toHaveLength(3);
  });

  it('renders Bolsas Subpage with CTA', () => {
    render(<BolsasPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Bolsas de Papel/i);
    expect(screen.getByText(/Cotizar bolsas/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /bolsas de papel con logo/i })).toBeInTheDocument();
  });
});
