'use client';

import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from 'react-icons/fa';
import type { Autoplay } from '@/hooks/useAutoplay';

interface GalleryControlsProps {
  autoplay: Autoplay;
  count: number;
}

const ROUND_BUTTON =
  'w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center text-white ' +
  'transition-[border-color,color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ' +
  'hover:border-impulso-yellow hover:text-impulso-yellow active:scale-[0.97] ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-impulso-yellow';

export const GalleryNavButtons = ({ autoplay }: Pick<GalleryControlsProps, 'autoplay'>) => (
  <div className="flex items-center gap-3 md:gap-4">
    <button type="button" onClick={autoplay.prev} aria-label="Imagen anterior" className={ROUND_BUTTON}>
      <FaChevronLeft aria-hidden />
    </button>
    <button
      type="button"
      onClick={autoplay.togglePaused}
      aria-label={autoplay.paused ? 'Reanudar carrusel' : 'Pausar carrusel'}
      className={ROUND_BUTTON}
    >
      {autoplay.paused ? <FaPlay aria-hidden className="translate-x-px" /> : <FaPause aria-hidden />}
    </button>
    <button type="button" onClick={autoplay.next} aria-label="Siguiente imagen" className={ROUND_BUTTON}>
      <FaChevronRight aria-hidden />
    </button>
  </div>
);

/** Slide dots; the current one fills up while the slide is on screen. */
export const GalleryDots = ({ autoplay, count }: GalleryControlsProps) => (
  <div className="mt-8 md:mt-12 flex flex-wrap gap-x-3 gap-y-5">
    {Array.from({ length: count }, (_, i) => {
      const current = i === autoplay.index;
      return (
        <button
          key={i}
          type="button"
          onClick={() => autoplay.goTo(i)}
          aria-label={`Ver imagen ${i + 1} de ${count}`}
          aria-current={current ? 'true' : undefined}
          className="group/dot relative py-3 -my-3 px-1.5 -mx-1.5"
        >
          <span
            className={`relative block h-1 overflow-hidden rounded-full transition-[width,background-color] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
              current ? 'w-10 md:w-12 bg-white/20' : 'w-3 md:w-4 bg-white/10 group-hover/dot:bg-white/30'
            }`}
          >
            {current && (
              <span
                key={`${autoplay.index}-${autoplay.cycle}`}
                className="gallery-progress absolute inset-0 origin-left bg-impulso-yellow"
                style={{
                  animationDuration: `${autoplay.intervalMs}ms`,
                  animationPlayState: autoplay.running ? 'running' : 'paused',
                }}
              />
            )}
          </span>
        </button>
      );
    })}
  </div>
);
