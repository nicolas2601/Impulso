import { render, screen } from '@testing-library/react';
import ProjectDetailPage from '../app/proyectos/[slug]/page';
import { projects } from '../data/projects';
import { describe, it, expect, vi } from 'vitest';

// Mocks
vi.mock('next/navigation', () => ({
  notFound: vi.fn(),
  usePathname: () => '/proyectos/test-project',
}));

vi.mock('next/image', () => ({
  default: (props: any) => <img {...props} />,
}));

// Components Mocks
vi.mock('../components/common/PageHero', () => ({
  PageHero: ({ title }: any) => <h1>{title}</h1>,
}));

describe('Project Detail Page', () => {
  it('renders project title and challenge', async () => {
    // Test with first project
    const project = projects[0];
    const params = Promise.resolve({ slug: project.slug });
    
    // As it is an async server component, we await render
    const JSX = await ProjectDetailPage({ params });
    render(JSX);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(project.title);
    expect(screen.getByText(/El Desafío/i)).toBeInTheDocument();
    expect(screen.getByText(project.challenge)).toBeInTheDocument();
  });

  it('renders schema markup script', async () => {
    const project = projects[0];
    const params = Promise.resolve({ slug: project.slug });
    const JSX = await ProjectDetailPage({ params });
    const { container } = render(JSX);
    
    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script).toBeInTheDocument();
    expect(script).toHaveTextContent('CreativeWork');
  });
});
