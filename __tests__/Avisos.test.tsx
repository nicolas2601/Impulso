import { render, screen } from '@testing-library/react';
import AvisosPage from '../app/avisos/page';
import AcrilicoPage from '../app/avisos/avisos-acrilico-precios/page';
import NeonPage from '../app/avisos/neon-flex/page';
import { describe, it, expect, vi } from 'vitest';

// Reuse mocks or create setup file
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    article: ({ children, ...props }: any) => <article {...props}>{children}</article>,
  },
}));

vi.mock('next/navigation', () => ({
  usePathname: () => '/avisos',
}));

vi.mock('next/image', () => ({
  default: (props: any) => <img {...props} />,
}));

describe('Avisos Silo', () => {
  it('renders Avisos Hub page', () => {
    render(<AvisosPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Avisos Luminosos/i);
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
