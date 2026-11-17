'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const GROUND_VAR = '--page-ground';
/** Scroll distance (as a share of the screen height) over which two grounds blend. */
const BLEND_ZONE = 0.3;

type RGB = [number, number, number];

function parseHex(hex: string): RGB {
  const h = hex.replace('#', '');
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)) as RGB;
}

const mix = (a: RGB, b: RGB, t: number): RGB => a.map((v, i) => Math.round(v + (b[i] - v) * t)) as RGB;
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

/**
 * Section grounds: the page background follows the scroll, blending from one
 * section's colour (`<section data-ground="#hex">`) to the next as the gap between
 * them crosses the middle of the screen. Tied to the scroll position, so it never
 * lags behind. Sections without data-ground (the marquee band) keep their own
 * background and hide most of the blend. Styles in globals.css (`html[data-grounds]`).
 */
export function SectionGrounds() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-ground]'));
    if (sections.length === 0) return;
    const colours = sections.map((s) => parseHex(s.dataset.ground ?? '#000000'));

    // Most frames sit inside one section: skip the style write (and the page-wide restyle) when nothing changed.
    let painted = '';
    const paint = () => {
      const middle = window.innerHeight / 2;
      const zone = window.innerHeight * BLEND_ZONE;
      let colour = colours[0];
      for (let i = 0; i < sections.length - 1; i += 1) {
        const gap = (sections[i].getBoundingClientRect().bottom + sections[i + 1].getBoundingClientRect().top) / 2;
        const t = clamp01((middle + zone / 2 - gap) / zone);
        if (t === 0) break;
        colour = mix(colours[i], colours[i + 1], t);
      }
      const next = `rgb(${colour.join(', ')})`;
      if (next === painted) return;
      painted = next;
      root.style.setProperty(GROUND_VAR, next);
    };

    let frame = 0;
    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => { frame = 0; paint(); });
    };

    // Paint before switching the mode on, so hydration shows no flash.
    paint();
    root.setAttribute('data-grounds', '');
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      root.removeAttribute('data-grounds');
      root.style.removeProperty(GROUND_VAR);
    };
  }, [pathname]);

  return null;
}
