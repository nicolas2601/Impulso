import { render, screen } from '@testing-library/react';
import Home from '../app/page';
import { describe, it, expect, vi } from 'vitest';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
  },
}));

// Mock next/image
vi.mock('next/image', () => ({
  default: (props: any) => <img {...props} />,
}));

describe('Home Page', () => {
  it('renders main headline', () => {
    render(<Home />);
    const headline = screen.getByRole('heading', { level: 1 });
    expect(headline).toHaveTextContent(/Diseñamos, imprimimos y fabricamos/i);
  });

  it('renders services section', () => {
    render(<Home />);
    expect(screen.getByText('Empaques Personalizados')).toBeInTheDocument();
    expect(screen.getByText('Avisos Luminosos')).toBeInTheDocument();
  });

  it('renders call to action buttons', () => {
    render(<Home />);
    // Check for "Cotizar por WhatsApp" buttons (there might be multiple)
    const ctaButtons = screen.getAllByText(/Cotizar por WhatsApp/i);
    expect(ctaButtons.length).toBeGreaterThan(0);
    
    // Check for Floating button (by aria-label)
    const floatingBtn = screen.getByLabelText('Contactar por WhatsApp');
    expect(floatingBtn).toBeInTheDocument();
  });

  it('contains structured data script', () => {
    const { container } = render(<Home />);
    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script).toBeInTheDocument();
  });
});
