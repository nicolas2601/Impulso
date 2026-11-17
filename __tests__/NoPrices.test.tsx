import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { ComponentType } from 'react';

// The owner does not publish prices: every quote goes through WhatsApp.
type PageModule = { default: ComponentType };
// Vite's import.meta.glob is not in the Next tsconfig types; Seo.test.ts uses it the same way.
const pages = (import.meta as unknown as { glob: (p: string, o: { eager: true }) => Record<string, PageModule> }).glob('../app/**/page.tsx', { eager: true });
const staticPages = Object.entries(pages).filter(([file]) => !file.includes('['));

const PRICE = /\$\s?\d|\d\s?c\/u|precio (por unidad|referencial|estimado|aproximado)|tabla de precios/i;

describe('no published prices', () => {
  it.each(staticPages.map(([file, mod]) => [file.replace('../app', '').replace('/page.tsx', '') || '/', mod.default] as const))(
    '%s shows no amounts and no price schema',
    (_route, Page) => {
      const { container } = render(<Page />);
      const copy = container.cloneNode(true) as HTMLElement;
      copy.querySelectorAll('script').forEach((s) => s.remove());
      const visible = copy.textContent ?? '';
      expect(visible).not.toMatch(PRICE);
      const schema = Array.from(container.querySelectorAll('script[type="application/ld+json"]')).map((s) => s.textContent ?? '').join('');
      expect(schema).not.toMatch(/"price"|priceCurrency|"offers"/);
    },
  );
});
