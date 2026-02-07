import { render, screen } from '@testing-library/react';
import ProyectosPage from '../app/proyectos/page';
import { describe, it, expect, vi } from 'vitest';

// Mocks
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>, // Added button just in case
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

vi.mock('next/navigation', () => ({
  usePathname: () => '/proyectos', // Mock usePathname to return a string
}));

vi.mock('../components/projects/ProjectsGallery', () => ({
  ProjectsGallery: () => <div data-testid="gallery">Gallery Mock</div>,
}));

vi.mock('../components/common/PageHero', () => ({
  PageHero: ({ title }: any) => <h1>{title}</h1>,
}));

describe('Projects Hub Page', () => {
  it('renders page hero', () => {
    render(<ProyectosPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Nuestros Trabajos/i);
  });

  it('renders gallery component', () => {
    render(<ProyectosPage />);
    expect(screen.getByTestId('gallery')).toBeInTheDocument();
  });
});
