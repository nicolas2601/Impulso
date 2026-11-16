'use client';

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react';

export const AUTOPLAY_INTERVAL_MS = 8000;
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const serverSnapshot = () => false;

const hasMatchMedia = () => typeof window !== 'undefined' && typeof window.matchMedia === 'function';

function prefersReducedMotion(): boolean {
  return hasMatchMedia() && window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function subscribeReducedMotion(onChange: () => void): () => void {
  if (!hasMatchMedia()) return () => {};
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
}

function isFocusVisible(element: Element): boolean {
  try {
    return element.matches(':focus-visible');
  } catch {
    return false;
  }
}

const isTabHidden = () => document.visibilityState === 'hidden';

function subscribeVisibility(onChange: () => void): () => void {
  document.addEventListener('visibilitychange', onChange);
  return () => document.removeEventListener('visibilitychange', onChange);
}

export interface Autoplay {
  index: number;
  /** Bumps on every manual navigation so progress indicators can restart. */
  cycle: number;
  /** True while slides are advancing on their own. */
  running: boolean;
  /** True when the visitor paused with the button (or prefers reduced motion). */
  paused: boolean;
  intervalMs: number;
  goTo: (i: number) => void;
  next: () => void;
  prev: () => void;
  togglePaused: () => void;
  /** Spread on the slide viewport: pauses while the pointer is over the image. */
  hoverProps: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
  /** Spread on the carousel region: pauses while keyboard focus is inside it. */
  focusProps: {
    onFocus: (event: React.FocusEvent<HTMLElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLElement>) => void;
  };
}

/**
 * Accessible autoplay for image carousels (WCAG 2.2.2 Pause, Stop, Hide).
 * Each slide stays for `intervalMs`; hovering the image, keyboard focus and a
 * hidden tab pause it and keep the elapsed time; manual navigation restarts
 * the countdown. Mouse clicks on the controls do not freeze it.
 */
export function useAutoplay(length: number, intervalMs: number = AUTOPLAY_INTERVAL_MS): Autoplay {
  const [index, setIndex] = useState(0);
  const [cycle, setCycle] = useState(0);
  // null = the visitor has not chosen; then reduced-motion users start paused.
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const [hovered, setHovered] = useState(false);
  const [keyboardFocused, setKeyboardFocused] = useState(false);
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, prefersReducedMotion, serverSnapshot);
  const hidden = useSyncExternalStore(subscribeVisibility, isTabHidden, serverSnapshot);
  const paused = userPaused ?? reducedMotion;
  const remainingRef = useRef(intervalMs);
  const running = !paused && !hovered && !keyboardFocused && !hidden && length > 1;

  // Must run before the timer effect: a new slide always gets the full interval.
  useEffect(() => {
    remainingRef.current = intervalMs;
  }, [index, cycle, intervalMs]);

  useEffect(() => {
    if (!running) return;
    const startedAt = Date.now();
    const timer = setTimeout(() => setIndex((i) => (i + 1) % length), remainingRef.current);
    return () => {
      clearTimeout(timer);
      remainingRef.current = Math.max(0, remainingRef.current - (Date.now() - startedAt));
    };
  }, [running, index, cycle, length]);

  const goTo = useCallback((i: number) => {
    setIndex(((i % length) + length) % length);
    setCycle((c) => c + 1);
  }, [length]);

  return {
    index,
    cycle,
    running,
    paused,
    intervalMs,
    goTo,
    next: () => goTo(index + 1),
    prev: () => goTo(index - 1),
    togglePaused: () => {
      // An explicit "play" wins over the keyboard-focus hold (focus stays on the button).
      if (paused) setKeyboardFocused(false);
      setUserPaused(!paused);
    },
    hoverProps: {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
    },
    focusProps: {
      onFocus: (event) => {
        if (isFocusVisible(event.target)) setKeyboardFocused(true);
      },
      onBlur: (event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setKeyboardFocused(false);
      },
    },
  };
}
