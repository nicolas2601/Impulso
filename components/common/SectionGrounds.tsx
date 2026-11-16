'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const MIDDLE_LINE = '-50% 0px -50% 0px';
const GROUND_VAR = '--page-ground';

/**
 * Section grounds: the page's background eases to the colour of the section that
 * holds the middle of the screen (`<section data-ground="#hex">`), and only that
 * section's content is fully shown, so no word ever sits on the wrong colour while
 * the ground changes. Styles live in globals.css (`html[data-grounds]`).
 * Without JavaScript every section keeps its own background.
 */
export function SectionGrounds() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-ground]'));
    if (sections.length === 0 || typeof IntersectionObserver === 'undefined') return;

    const crossing = new Set<HTMLElement>();
    const show = () => {
      const active = sections.filter((s) => crossing.has(s)).at(-1);
      // A band without ground (the marquee) crossing the middle keeps the last ground,
      // so the section leaving the screen never washes out to the default colour.
      if (!active) return;
      for (const s of sections) s.toggleAttribute('data-ground-active', s === active);
      root.style.setProperty(GROUND_VAR, active.dataset.ground ?? '');
    };

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) crossing.add(el); else crossing.delete(el);
      }
      show();
    }, { rootMargin: MIDDLE_LINE, threshold: 0 });

    // Paint the right ground before switching the mode on, so hydration shows no flash.
    const middle = window.innerHeight / 2;
    for (const s of sections) {
      const box = s.getBoundingClientRect();
      if (box.top <= middle && box.bottom > middle) crossing.add(s);
    }
    show();
    sections.forEach((s) => observer.observe(s));
    root.setAttribute('data-grounds', '');
    // Enable the colour transition only after the first ground is painted: no flash on load.
    const frame = requestAnimationFrame(() => requestAnimationFrame(() => root.setAttribute('data-grounds-ready', '')));

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      for (const s of sections) s.removeAttribute('data-ground-active');
      root.removeAttribute('data-grounds');
      root.removeAttribute('data-grounds-ready');
      root.style.removeProperty(GROUND_VAR);
    };
  }, [pathname]);

  return null;
}
