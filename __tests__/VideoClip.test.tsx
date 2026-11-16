import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { VideoClip } from '../components/common/VideoClip';
import type { WorkVideo } from '../data/realWork';

const withSound: WorkVideo = {
  src: '/trabajos/videos/niko-neon-flex.mp4',
  poster: '/trabajos/videos/niko-neon-flex.webp',
  title: 'Neón flex para Niko',
  category: 'Avisos',
  hasAudio: true,
  orientation: 'portrait',
};
const silent: WorkVideo = { ...withSound, src: '/trabajos/videos/silent.mp4', title: 'Instalación sin audio', hasAudio: false };

type Callback = (entries: Array<{ isIntersecting: boolean; target: Element }>) => void;
const observers: Array<{ cb: Callback; el?: Element }> = [];

function setReducedMotion(reduced: boolean) {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: reduced && query.includes('reduce'),
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }));
}

function enterViewport(visible = true) {
  act(() => observers.forEach((o) => o.el && o.cb([{ isIntersecting: visible, target: o.el }])));
}

beforeEach(() => {
  observers.length = 0;
  setReducedMotion(false);
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      private entry: { cb: Callback; el?: Element };
      constructor(cb: Callback) {
        this.entry = { cb };
        observers.push(this.entry);
      }
      observe(el: Element) {
        this.entry.el = el;
      }
      disconnect() {}
      unobserve() {}
    },
  );
  vi.spyOn(HTMLMediaElement.prototype, 'play').mockResolvedValue(undefined);
  vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => {});
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

const videoOf = (container: HTMLElement) => container.querySelector('video') as HTMLVideoElement;

describe('VideoClip', () => {
  it('loads nothing until needed and starts muted with its poster', () => {
    const { container } = render(<VideoClip video={withSound} />);
    const video = videoOf(container);
    expect(video).toHaveAttribute('preload', 'none');
    expect(video).toHaveAttribute('poster', withSound.poster);
    expect(video.muted).toBe(true);
    expect(video).toHaveAttribute('playsinline');
  });

  it('plays only while it is on screen', () => {
    render(<VideoClip video={withSound} />);
    enterViewport(true);
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1);
    enterViewport(false);
    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalled();
  });

  it('lets the visitor turn the sound on and off', () => {
    const { container } = render(<VideoClip video={withSound} />);
    fireEvent.click(screen.getByRole('button', { name: /activar sonido/i }));
    expect(videoOf(container).muted).toBe(false);

    fireEvent.click(screen.getByRole('button', { name: /silenciar/i }));
    expect(videoOf(container).muted).toBe(true);
  });

  it('offers no sound button for a clip without audio', () => {
    render(<VideoClip video={silent} />);
    expect(screen.queryByRole('button', { name: /sonido|silenciar/i })).toBeNull();
  });

  it('keeps a single clip with sound at a time', () => {
    const { container } = render(
      <>
        <VideoClip video={withSound} />
        <VideoClip video={{ ...withSound, src: '/b.mp4', title: 'Otro aviso' }} />
      </>,
    );
    const [first, second] = screen.getAllByRole('button', { name: /activar sonido/i });
    fireEvent.click(first);
    fireEvent.click(second);
    const [a, b] = Array.from(container.querySelectorAll('video'));
    expect(a.muted).toBe(true);
    expect(b.muted).toBe(false);
  });

  it('can be paused by the visitor and stays paused when scrolled back', () => {
    render(<VideoClip video={withSound} />);
    enterViewport(true);
    fireEvent.click(screen.getByRole('button', { name: /pausar/i }));
    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalled();
    vi.mocked(HTMLMediaElement.prototype.play).mockClear();
    enterViewport(false);
    enterViewport(true);
    expect(HTMLMediaElement.prototype.play).not.toHaveBeenCalled();
    expect(screen.getByRole('button', { name: /reproducir/i })).toBeInTheDocument();
  });

  it('never autoplays when the visitor prefers reduced motion', () => {
    setReducedMotion(true);
    render(<VideoClip video={withSound} />);
    enterViewport(true);
    expect(HTMLMediaElement.prototype.play).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole('button', { name: /reproducir/i }));
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1);
  });
});
