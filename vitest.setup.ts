import '@testing-library/jest-dom';
import { vi } from 'vitest';
import React from 'react';

// Robust mock for framer-motion
vi.mock('framer-motion', () => {
  const React = require('react');
  
  const motionProxy = new Proxy({}, {
    get: (_target, key) => {
      return React.forwardRef(({ children, whileHover, whileTap, whileInView, initial, animate, exit, transition, viewport, ...props }: any, ref: any) => {
        return React.createElement(key, { ...props, ref }, children);
      });
    }
  });

  return {
    motion: motionProxy,
    AnimatePresence: ({ children }: any) => React.createElement(React.Fragment, {}, children),
    useScroll: () => ({
      scrollYProgress: {
        get: () => 0,
        onChange: () => () => {},
        destroy: () => {},
      }
    }),
    useTransform: (val: any) => val,
    useMotionValueEvent: () => {},
    useSpring: (val: any) => val,
  };
});

// Mock next/image
vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: any) => {
    const React = require('react');
    return React.createElement('img', { src, alt, ...props });
  },
}));

// Mock next/navigation
vi.mock('next/navigation', () => ({
  usePathname: vi.fn(() => '/'),
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  }),
}));
