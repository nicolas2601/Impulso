import { render, screen } from '@testing-library/react';
import EmpaquesPage from '../app/empaques/page';
import CajasPage from '../app/empaques/cajas-hamburguesas-bucaramanga/page';
import BolsasPage from '../app/empaques/bolsas-papel-logo/page';
import { describe, it, expect, vi } from 'vitest';

// Mocks
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    article: ({ children, ...props }: any) => <article {...props}>{children}</article>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

vi.mock('next/navigation', () => ({
  usePathname: () => '/empaques',
}));

vi.mock('next/image', () => ({
  default: (props: any) => <img {...props} />,
}));

describe('Empaques Silo', () => {
  it('renders Empaques Hub page', () => {
    render(<EmpaquesPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Empaques Personalizados/i);
    expect(screen.getByText(/Cajas para Hamburguesas/i)).toBeInTheDocument();
  });

  it('renders Cajas Subpage with Pricing', () => {
    render(<CajasPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Cajas para Hamburguesas/i);
    expect(screen.getByText(/Precio por unidad/i)).toBeInTheDocument();
  });

  it('renders Bolsas Subpage with CTA', () => {
    render(<BolsasPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Bolsas de Papel/i);
    expect(screen.getByText(/Ver precios bolsas/i)).toBeInTheDocument();
  });
});
