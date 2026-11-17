import fs from 'node:fs';
import path from 'node:path';
import { renderToString } from 'react-dom/server';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import nextConfig from '../next.config';
import { ModernHero } from '../components/home/ModernHero';
import { WebHero } from '../components/web/WebHero';
import { PageHero } from '../components/common/PageHero';
import { Header } from '../components/layout/Header';
import HomePage from '../app/page';

// Real framer-motion: the server HTML must show the hero text before any JS runs.
vi.unmock('framer-motion');

const ROOT = path.resolve(__dirname, '..');
const SOURCE_DIRS = ['app', 'components', 'data', 'constants'];

function sourceFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return sourceFiles(full);
    return /\.(tsx?|css)$/.test(entry.name) ? [full] : [];
  });
}

const allSource = () => SOURCE_DIRS.flatMap((d) => sourceFiles(path.join(ROOT, d)));

function hiddenOnFirstPaint(html: string, selector: string): string[] {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const node = doc.querySelector(selector);
  if (!node) throw new Error(`No ${selector} in server HTML`);
  const ancestors: Element[] = [];
  for (let el = node.parentElement; el; el = el.parentElement) ancestors.push(el);
  return [...ancestors, node, ...Array.from(node.querySelectorAll('*'))]
    .filter((el) => /opacity:\s*0(?![.\d])/.test(el.getAttribute('style') ?? ''))
    .map((el) => el.textContent ?? '');
}

describe('first paint (LCP) on phones', () => {
  it.each([
    ['home hero', () => <ModernHero />],
    ['web hero', () => <WebHero />],
    ['page hero', () => <PageHero title="Avisos" subtitle="Avisos luminosos en Bucaramanga" bgImage="/projects/AVISOS.webp" />],
  ])('%s paints its headline and intro without waiting for JS', (_name, Hero) => {
    const html = renderToString(<Hero />);
    expect(hiddenOnFirstPaint(html, 'h1')).toEqual([]);
    expect(hiddenOnFirstPaint(html, 'h1 ~ p, p')).toEqual([]);
  });

  it('page hero ships its photo through next/image instead of a CSS background', () => {
    const { container } = render(<PageHero title="Avisos" subtitle="Sub" bgImage="/projects/AVISOS.webp" />);
    expect(container.querySelector('[style*="background-image"]')).toBeNull();
    const img = container.querySelector('img[src="/projects/AVISOS.webp"]');
    expect(img?.getAttribute('sizes')).toBe('100vw');
  });
});

describe('no work the phone does not need', () => {
  it('keeps the floating header free of backdrop blur', () => {
    const { container } = render(<Header />);
    expect(container.innerHTML).not.toMatch(/backdrop-blur/);
  });

  it('renders a single floating WhatsApp button (the layout one)', () => {
    render(<HomePage />);
    expect(screen.queryAllByRole('link', { name: 'Contactar por WhatsApp' })).toHaveLength(0);
  });

  it('never blurs huge layers or stacks a fixed noise filter', () => {
    const offenders = allSource().filter((f) => /blur-\[\d{2,}px\]|feTurbulence/.test(fs.readFileSync(f, 'utf8')));
    expect(offenders.map((f) => path.relative(ROOT, f))).toEqual([]);
  });
});

describe('assets', () => {
  it('loads no images from third-party hosts', () => {
    const offenders = allSource().filter((f) => /images\.unsplash\.com|transparenttextures\.com/.test(fs.readFileSync(f, 'utf8')));
    expect(offenders.map((f) => path.relative(ROOT, f))).toEqual([]);
    expect(nextConfig.images?.remotePatterns ?? []).toEqual([]);
  });

  it('only references public files that exist', () => {
    const missing = new Set<string>();
    for (const file of allSource()) {
      const text = fs.readFileSync(file, 'utf8');
      for (const [, ref] of text.matchAll(/['"`(}](\/[^'"`)\s]+\.(?:webp|png|jpe?g|svg|mp4|avif))['"`)]/g)) {
        if (ref.includes('${')) continue; // built from a catalog entry, covered by RealWork.test
        if (!fs.existsSync(path.join(ROOT, 'public', decodeURI(ref)))) missing.add(`${path.relative(ROOT, file)} -> ${ref}`);
      }
    }
    expect([...missing]).toEqual([]);
  });

  it('keeps public paths ASCII (the image optimizer 400s on accented folders)', () => {
    const accented = fs
      .readdirSync(path.join(ROOT, 'public'), { recursive: true, encoding: 'utf8' })
      .filter((f) => /[^\x20-\x7e]/.test(f));
    expect(accented).toEqual([]);
  });

  it('keeps photos in modern formats only', () => {
    const legacy = fs
      .readdirSync(path.join(ROOT, 'public'), { recursive: true, encoding: 'utf8' })
      .filter((f) => /\.(jpe?g)$/i.test(f));
    expect(legacy).toEqual([]);
  });
});
