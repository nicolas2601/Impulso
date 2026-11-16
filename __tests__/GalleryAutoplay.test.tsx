import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ProductGallery } from '../components/products/ProductGallery';
import { EmpaquesGallery } from '../components/products/EmpaquesGallery';

const IMAGES = ['/a.webp', '/b.webp', '/c.webp'].map((src, i) => ({
  src,
  alt: `Trabajo de prueba ${i + 1}`,
  category: 'Adhesivos' as const,
  width: 1200,
  height: 1600,
}));

function renderGallery() {
  return render(
    <ProductGallery title="Dale vida" accentTitle="a tus paredes" description="desc" images={IMAGES} category="Adhesivos" />,
  );
}

const currentImage = () => screen.getByAltText(/Trabajo de prueba/).getAttribute('src');
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
    expect(currentImage()).toBe('/a.webp');
    advance(3000);
    expect(currentImage()).toBe('/b.webp');
  });

  it('stops with the pause button and resumes with play', () => {
    renderGallery();
    fireEvent.click(screen.getByRole('button', { name: 'Pausar carrusel' }));
    advance(30000);
    expect(currentImage()).toBe('/a.webp');
    fireEvent.click(screen.getByRole('button', { name: 'Reanudar carrusel' }));
    advance(8000);
    expect(currentImage()).toBe('/b.webp');
  });

  it('pauses while the pointer is over the image and keeps the elapsed time', () => {
    renderGallery();
    const viewport = screen.getByAltText(/Trabajo de prueba/).closest('[aria-live]') as HTMLElement;
    advance(6000);
    fireEvent.pointerEnter(viewport, { pointerType: 'mouse' });
    advance(30000);
    expect(currentImage()).toBe('/a.webp');
    fireEvent.pointerLeave(viewport, { pointerType: 'mouse' });
    advance(2000);
    expect(currentImage()).toBe('/b.webp');
  });

  it('keeps playing while the pointer rests on the text beside the image', () => {
    renderGallery();
    fireEvent.pointerEnter(screen.getByRole('region', { name: 'Galería de Adhesivos' }), { pointerType: 'mouse' });
    advance(8000);
    expect(currentImage()).toBe('/b.webp');
  });

  it('keeps playing after a tap on a touch screen', () => {
    renderGallery();
    const viewport = screen.getByAltText(/Trabajo de prueba/).closest('[aria-live]') as HTMLElement;
    fireEvent.pointerEnter(viewport, { pointerType: 'touch' });
    advance(8000);
    expect(currentImage()).toBe('/b.webp');
  });

  it('restarts the timer after manual navigation', () => {
    renderGallery();
    advance(6000);
    fireEvent.click(screen.getByRole('button', { name: 'Siguiente imagen' }));
    expect(currentImage()).toBe('/b.webp');
    advance(6000);
    expect(currentImage()).toBe('/b.webp');
    advance(2000);
    expect(currentImage()).toBe('/c.webp');
  });

  it('starts paused when the visitor prefers reduced motion', () => {
    mockReducedMotion(true);
    renderGallery();
    advance(30000);
    expect(currentImage()).toBe('/a.webp');
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
