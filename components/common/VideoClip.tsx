'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { FaPause, FaPlay, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import type { WorkVideo } from '@/data/realWork';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

/** Only one clip may play with sound; turning one on silences the rest. */
const SOUND_EVENT = 'impulso:video-sound';
const VISIBLE_RATIO = 0.5;

const CONTROL =
  'grid h-11 w-11 place-items-center rounded-full bg-zinc-950/75 text-white outline-none ' +
  'transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.94] ' +
  'focus-visible:ring-2 focus-visible:ring-impulso-yellow';

interface VideoClipProps {
  video: WorkVideo;
  className?: string;
}

/** Muted, lazy clip that plays while on screen; the visitor decides on sound and can pause it. */
export const VideoClip = ({ video, className = '' }: VideoClipProps) => {
  const ref = useRef<HTMLVideoElement>(null);
  const id = useId();
  const reduced = usePrefersReducedMotion();
  const heldByUser = useRef(false);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  const play = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setPlaying(true);
    el.play()?.catch(() => setPlaying(false));
  }, []);

  const pause = useCallback(() => {
    ref.current?.pause();
    setPlaying(false);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return pause();
        if (!reduced && !heldByUser.current) play();
      },
      { threshold: VISIBLE_RATIO },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced, play, pause]);

  useEffect(() => {
    const silence = (event: Event) => {
      if ((event as CustomEvent<string>).detail === id || !ref.current) return;
      ref.current.muted = true;
      setMuted(true);
    };
    window.addEventListener(SOUND_EVENT, silence);
    return () => window.removeEventListener(SOUND_EVENT, silence);
  }, [id]);

  const togglePlay = () => {
    heldByUser.current = playing;
    if (playing) pause();
    else play();
  };

  const toggleSound = () => {
    const el = ref.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
    if (el.muted) return;
    window.dispatchEvent(new CustomEvent(SOUND_EVENT, { detail: id }));
    heldByUser.current = false;
    play();
  };

  const ratio = video.orientation === 'portrait' ? 'aspect-[9/16]' : 'aspect-video';

  return (
    <div className={`relative overflow-hidden rounded-[22px] bg-zinc-900 ${ratio} ${className}`}>
      <video
        ref={ref}
        aria-label={video.title}
        poster={video.poster}
        preload="none"
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={video.src} type="video/mp4" />
      </video>
      <div className="absolute bottom-3 right-3 flex gap-2">
        <button type="button" onClick={togglePlay} aria-label={playing ? 'Pausar video' : 'Reproducir video'} className={CONTROL}>
          {playing ? <FaPause aria-hidden /> : <FaPlay aria-hidden className="translate-x-px" />}
        </button>
        {video.hasAudio && (
          <button type="button" onClick={toggleSound} aria-label={muted ? 'Activar sonido' : 'Silenciar video'} className={CONTROL}>
            {muted ? <FaVolumeMute aria-hidden /> : <FaVolumeUp aria-hidden />}
          </button>
        )}
      </div>
    </div>
  );
};
