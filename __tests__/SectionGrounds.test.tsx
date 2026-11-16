import { render, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { SectionGrounds } from '../components/common/SectionGrounds';

// Viewport 1000px tall: the middle line is at 500. Section boxes are set per test.
const VIEWPORT = 1000;
const boxes: Record<string, { top: number; bottom: number }> = {};

function Page() {
  return (
    <main data-ground-root>
      <section id="hero" data-ground="#000000">hero</section>
      <section id="band">band without ground</section>
      <section id="servicios" data-ground="#ffffff">servicios</section>
      <SectionGrounds />
    </main>
  );
}

const html = document.documentElement;
const ground = () => html.style.getPropertyValue('--page-ground');

/** Place the gap between hero and servicios at `gapMiddle` (px from the top of the screen). */
function placeGap(gapMiddle: number) {
  boxes.hero = { top: gapMiddle - 1100, bottom: gapMiddle - 100 };
  boxes.servicios = { top: gapMiddle + 100, bottom: gapMiddle + 1100 };
}

function scrollTo(gapMiddle: number) {
  placeGap(gapMiddle);
  act(() => { window.dispatchEvent(new Event('scroll')); });
}

describe('SectionGrounds (scroll-linked)', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'innerHeight', { value: VIEWPORT, configurable: true });
    window.requestAnimationFrame = (cb: FrameRequestCallback) => { cb(0); return 0; };
    window.cancelAnimationFrame = () => {};
    HTMLElement.prototype.getBoundingClientRect = function (this: HTMLElement) {
      const b = boxes[this.id] ?? { top: 0, bottom: 0 };
      return { top: b.top, bottom: b.bottom, left: 0, right: 0, width: 0, height: b.bottom - b.top, x: 0, y: b.top, toJSON: () => ({}) } as DOMRect;
    };
  });

  it('paints the first ground before switching the mode on', () => {
    placeGap(900);
    render(<Page />);
    expect(ground()).toBe('rgb(0, 0, 0)');
    expect(html).toHaveAttribute('data-grounds');
  });

  it('keeps the upper colour while the gap between sections is low on the screen', () => {
    render(<Page />);
    scrollTo(700);
    expect(ground()).toBe('rgb(0, 0, 0)');
  });

  it('blends the two colours as the gap crosses the middle of the screen', () => {
    render(<Page />);
    scrollTo(500);
    expect(ground()).toBe('rgb(128, 128, 128)');
  });

  it('settles on the lower colour once the gap has passed the middle', () => {
    render(<Page />);
    scrollTo(300);
    expect(ground()).toBe('rgb(255, 255, 255)');
  });

  it('cleans every mark when it unmounts', () => {
    placeGap(500);
    const { unmount } = render(<Page />);
    unmount();
    expect(html).not.toHaveAttribute('data-grounds');
    expect(ground()).toBe('');
  });
});
