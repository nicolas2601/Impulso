import { render, screen } from '@testing-library/react';
import StickersPage from '../app/impresion/stickers-bucaramanga/page';
import { describe, it, expect, vi } from 'vitest';

// Mocks
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    article: ({ children, ...props }: any) => <article {...props}>{children}</article>, // Added motion.article
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

vi.mock('next/navigation', () => ({
  usePathname: () => '/impresion/stickers-bucaramanga',
}));

vi.mock('next/image', () => ({
  default: (props: any) => <img {...props} />,
}));

describe('Nuevas Paginas', () => {
  it('Stickers renderiza tabla de precios', () => {
    render(<StickersPage />);
    expect(screen.getByText(/Tabla de Precios/i)).toBeInTheDocument();
    expect(screen.getByText(/100 unds/i)).toBeInTheDocument();
  });
});
