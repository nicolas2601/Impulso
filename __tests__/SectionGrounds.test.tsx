import { render, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { SectionGrounds } from '../components/common/SectionGrounds';

type Callback = (entries: Array<{ target: Element; isIntersecting: boolean }>) => void;

let observerCallback: Callback;
let observerOptions: IntersectionObserverInit | undefined;
const observed: Element[] = [];

class FakeObserver {
  constructor(cb: Callback, options?: IntersectionObserverInit) {
    observerCallback = cb;
    observerOptions = options;
  }
  observe(el: Element) { observed.push(el); }
  unobserve() {}
  disconnect() { observed.length = 0; }
}

function Page() {
  return (
    <main data-ground-root>
      <section id="hero" data-ground="#09090b">hero</section>
      <section id="band">band without ground</section>
      <section id="servicios" data-ground="#ffffff">servicios</section>
      <SectionGrounds />
    </main>
  );
}

const html = document.documentElement;
const cross = (id: string, isIntersecting: boolean) =>
  act(() => observerCallback([{ target: document.getElementById(id)!, isIntersecting }]));

describe('SectionGrounds', () => {
  beforeEach(() => {
    vi.stubGlobal('IntersectionObserver', FakeObserver);
  });
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('watches only sections that declare a ground, on the middle line of the screen', () => {
    render(<Page />);
    expect(observed.map((el) => el.id)).toEqual(['hero', 'servicios']);
    expect(observerOptions?.rootMargin).toBe('-50% 0px -50% 0px');
    expect(html).toHaveAttribute('data-grounds');
  });

  it('paints the page with the ground of the section crossing the middle and marks it active', () => {
    render(<Page />);
    cross('servicios', true);
    expect(html.style.getPropertyValue('--page-ground')).toBe('#ffffff');
    expect(document.getElementById('servicios')).toHaveAttribute('data-ground-active');
    expect(document.getElementById('hero')).not.toHaveAttribute('data-ground-active');

    cross('servicios', false);
    cross('hero', true);
    expect(html.style.getPropertyValue('--page-ground')).toBe('#09090b');
    expect(document.getElementById('hero')).toHaveAttribute('data-ground-active');
    expect(document.getElementById('servicios')).not.toHaveAttribute('data-ground-active');
  });

  it('keeps the last ground while a band without ground crosses the middle', () => {
    render(<Page />);
    cross('hero', true);
    cross('hero', false);
    expect(html.style.getPropertyValue('--page-ground')).toBe('#09090b');
    expect(document.getElementById('hero')).toHaveAttribute('data-ground-active');
  });

  it('cleans every mark when it unmounts', () => {
    const { unmount } = render(<Page />);
    cross('hero', true);
    unmount();
    expect(html).not.toHaveAttribute('data-grounds');
    expect(html.style.getPropertyValue('--page-ground')).toBe('');
  });
});
