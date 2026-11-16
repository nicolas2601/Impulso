import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ProductGallery } from '../components/products/ProductGallery';
import { EmpaquesGallery } from '../components/products/EmpaquesGallery';

const IMAGES = ['/a.jpeg', '/b.jpeg', '/c.jpeg'];

function renderGallery() {
  return render(
    <ProductGallery title="Dale vida" accentTitle="a tus paredes" description="desc" images={IMAGES} category="Adhesivos" />,
  );
}

const currentImage = () => screen.getByAltText('Galería de Adhesivos Impulso').getAttribute('src');
const advance = (ms: number) => act(() => { vi.advanceTimersByTime(ms); });

function mockReducedMotion(matches: boolean) {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: matches && query.includes('prefers-reduced-motion'),
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }));
}

describe('gallery autoplay', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    mockReducedMotion(false);
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('keeps each image on screen for 8 seconds', () => {
    renderGallery();
    advance(5000);
    expect(currentImage()).toBe('/a.jpeg');
    advance(3000);
    expect(currentImage()).toBe('/b.jpeg');
  });

  it('stops with the pause button and resumes with play', () => {
    renderGallery();
    fireEvent.click(screen.getByRole('button', { name: 'Pausar carrusel' }));
    advance(30000);
    expect(currentImage()).toBe('/a.jpeg');
    fireEvent.click(screen.getByRole('button', { name: 'Reanudar carrusel' }));
    advance(8000);
    expect(currentImage()).toBe('/b.jpeg');
  });

  it('pauses while the pointer is over the image and keeps the elapsed time', () => {
    renderGallery();
    const viewport = screen.getByAltText('Galería de Adhesivos Impulso').closest('[aria-live]') as HTMLElement;
    advance(6000);
    fireEvent.mouseEnter(viewport);
    advance(30000);
    expect(currentImage()).toBe('/a.jpeg');
    fireEvent.mouseLeave(viewport);
    advance(2000);
    expect(currentImage()).toBe('/b.jpeg');
  });

  it('keeps playing while the pointer rests on the text beside the image', () => {
    renderGallery();
    fireEvent.mouseEnter(screen.getByRole('region', { name: 'Galería de Adhesivos' }));
    advance(8000);
    expect(currentImage()).toBe('/b.jpeg');
  });

  it('restarts the timer after manual navigation', () => {
    renderGallery();
    advance(6000);
    fireEvent.click(screen.getByRole('button', { name: 'Siguiente imagen' }));
    expect(currentImage()).toBe('/b.jpeg');
    advance(6000);
    expect(currentImage()).toBe('/b.jpeg');
    advance(2000);
    expect(currentImage()).toBe('/c.jpeg');
  });

  it('starts paused when the visitor prefers reduced motion', () => {
    mockReducedMotion(true);
    renderGallery();
    advance(30000);
    expect(currentImage()).toBe('/a.jpeg');
    expect(screen.getByRole('button', { name: 'Reanudar carrusel' })).toBeInTheDocument();
  });

  it('labels every slide button and marks the current one', () => {
    renderGallery();
    const dots = screen.getAllByRole('button', { name: /Ver imagen \d de 3/ });
    expect(dots).toHaveLength(3);
    expect(dots[0]).toHaveAttribute('aria-current', 'true');
  });

  it('gives the empaques gallery the same pause control', () => {
    render(<EmpaquesGallery />);
    expect(screen.getByRole('button', { name: 'Pausar carrusel' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Imagen anterior' })).toBeInTheDocument();
  });
});
