import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BentoServices } from '../components/home/BentoServices';

const cardOf = (title: string) => screen.getByRole('heading', { name: title }).closest('.group') as HTMLElement;

describe('BentoServices', () => {
  it('shows titles and links in light ink on the dark cards', () => {
    render(<BentoServices />);
    for (const title of ['Empaques', 'Proyectos']) {
      expect(screen.getByRole('heading', { name: title })).toHaveClass('text-white');
      expect(cardOf(title).querySelector('a')).toHaveClass('text-white');
    }
  });

  it('paints the etiquetas card in the brand yellow without a competing background', () => {
    render(<BentoServices />);
    const card = cardOf('Etiquetas');
    expect(card).toHaveClass('bg-impulso-yellow');
    expect(card.className).not.toMatch(/\bbg-zinc-/);
  });
});
