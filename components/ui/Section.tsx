import { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionProps {
  children: ReactNode;
  className?: string;
  bg?: 'white' | 'gray' | 'dark' | 'yellow';
  id?: string;
}

export const Section = ({ children, className, bg = 'white', id }: SectionProps) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-tikno-gray-light/20',
    dark: 'bg-tikno-gray-dark text-white',
    yellow: 'bg-tikno-yellow text-tikno-gray-dark',
  };

  return (
    <section id={id} className={clsx('py-16 md:py-24', bgColors[bg], className)}>
      <div className="container-tikno h-full">
        {children}
      </div>
    </section>
  );
};
