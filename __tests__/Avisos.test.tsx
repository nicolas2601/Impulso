import { render, screen } from '@testing-library/react';
import AvisosPage from '../app/avisos/page';
import AcrilicoPage from '../app/avisos/avisos-acrilico-precios/page';
import NeonPage from '../app/avisos/neon-flex/page';
import { describe, it, expect, vi } from 'vitest';

describe('Avisos Silo', () => {
  it('renders Avisos Hub page', () => {
    render(<AvisosPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Avisos Luminosos/i);
    expect(screen.getByText(/ILUMINA TU/i)).toBeInTheDocument();
  });

  it('renders Acrilico Table', () => {
    render(<AcrilicoPage />);
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByText(/Pequeño \(20x30cm\)/i)).toBeInTheDocument();
  });

  it('renders Neon Flex page', () => {
    render(<NeonPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Letreros Neón Flex/i);
  });
});
