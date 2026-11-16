import fs from 'node:fs';
import path from 'node:path';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { WORK_PHOTOS, WORK_VIDEOS, photosOf, videosOf, type WorkCategory } from '../data/realWork';
import AvisosPage from '../app/avisos/page';
import AdhesivosPage from '../app/adhesivos/page';
import EtiquetasPage from '../app/etiquetas/page';
import ImpresionPage from '../app/impresion/page';
import SenaleticaPage from '../app/avisos-profesionales/page';
import EmpaquesPage from '../app/empaques/page';
import { ProjectsCollage } from '../components/projects/ProjectsCollage';

const PUBLIC_DIR = path.resolve(__dirname, '../public');
const onDisk = (src: string) => fs.existsSync(path.join(PUBLIC_DIR, src));

beforeEach(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      observe() {}
      disconnect() {}
      unobserve() {}
    },
  );
});

describe('real work media', () => {
  it('ships every photo, clip and poster it lists', () => {
    const files = [...WORK_PHOTOS.map((p) => p.src), ...WORK_VIDEOS.flatMap((v) => [v.src, v.poster])];
    expect(files.filter((f) => !onDisk(f))).toEqual([]);
  });

  it('describes every recent photo for screen readers', () => {
    const recent = WORK_PHOTOS.filter((p) => p.src.startsWith('/trabajos/'));
    expect(recent.length).toBeGreaterThanOrEqual(25);
    expect(recent.filter((p) => p.alt.length < 15)).toEqual([]);
  });
});

describe('service galleries show the real work of their category', () => {
  it.each<[string, () => React.ReactElement, WorkCategory]>([
    ['avisos', AvisosPage, 'Avisos'],
    ['adhesivos', AdhesivosPage, 'Adhesivos'],
    ['etiquetas', EtiquetasPage, 'Etiquetas'],
    ['impresion', ImpresionPage, 'Impresión'],
    ['señalética', SenaleticaPage, 'Señalética'],
    ['empaques', EmpaquesPage, 'Empaques'],
  ])('%s opens with its newest job and counts every photo', (_name, Page, category) => {
    render(<Page />);
    const photos = photosOf(category);
    const gallery = screen.getByRole('region', { name: new RegExp(`galería de ${category}`, 'i') });
    expect(within(gallery).getByRole('img', { name: photos[0].alt })).toHaveAttribute('src', photos[0].src);
    expect(within(gallery).getByRole('button', { name: `Ver imagen 1 de ${photos.length}` })).toBeInTheDocument();
  });

  it('avisos plays its installations on video, each with a sound choice', () => {
    render(<AvisosPage />);
    const reel = screen.getByRole('region', { name: /en video/i });
    const portrait = videosOf('Avisos').filter((v) => v.orientation === 'portrait');
    expect(reel.querySelectorAll('video')).toHaveLength(portrait.length);
    expect(within(reel).getAllByRole('button', { name: /activar sonido/i })).toHaveLength(portrait.filter((v) => v.hasAudio).length);
  });
});

describe('projects collage', () => {
  it('shows every real photo and clip under "Todos"', () => {
    const { container } = render(<ProjectsCollage />);
    const srcs = Array.from(container.querySelectorAll('img')).map((img) => img.getAttribute('src'));
    expect(WORK_PHOTOS.map((p) => p.src).filter((src) => !srcs.includes(src))).toEqual([]);
    expect(container.querySelectorAll('video')).toHaveLength(WORK_VIDEOS.length);
  });

  it('filters down to a single category', () => {
    const { container } = render(<ProjectsCollage />);
    fireEvent.click(screen.getByRole('button', { name: 'Etiquetas' }));
    expect(screen.getByRole('button', { name: 'Etiquetas' })).toHaveAttribute('aria-pressed', 'true');
    expect(container.querySelectorAll('img')).toHaveLength(photosOf('Etiquetas').length);
    expect(container.querySelectorAll('video')).toHaveLength(0);
  });

  it('sizes photos to their column so phones never fetch desktop widths', () => {
    const { container } = render(<ProjectsCollage />);
    const img = container.querySelector('img') as HTMLImageElement;
    expect(img.getAttribute('sizes')).toMatch(/100vw/);
    expect(img.getAttribute('sizes')).toMatch(/25vw/);
  });
});
