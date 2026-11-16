'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { generateWhatsAppLink } from '@/utils/whatsapp';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { EMPAQUES_PROP_PHOTO, PHOTO_SERVICES } from '@/data/homeServices';
import { EtiquetasCard, PhotoCard, ProjectsCard, WebCard } from './services/ServiceCards';

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;
// Words wait for the section's ground: they rise as the headline reaches the middle of the screen.
const HEADLINE_VIEW = { once: true, margin: '0px 0px -45% 0px' };
const CARD_VIEW = { once: true, margin: '0px 0px -15% 0px' };
// Short, non-uniform stagger (s) per grid cell, in desktop reading order.
const CARD_DELAYS = [0, 0.06, 0.03, 0.09, 0.14, 0.04, 0.1, 0.15];

const BIG = 'block font-black uppercase leading-[0.84] tracking-[-0.07em] text-[17vw] lg:text-[10.4vw] 2xl:text-[150px]';
const SMALL = 'block font-medium leading-[1.25] tracking-[-0.03em] text-zinc-950/55 text-xl lg:text-3xl';

/** One headline line rising from behind its mask. */
const Line = ({ children, delay, reduced, className = '' }: { children: ReactNode; delay: number; reduced: boolean; className?: string }) => (
  <span className={`block overflow-hidden pb-[0.04em] ${className}`}>
    <motion.span
      className="block"
      initial={reduced ? false : { y: '105%' }}
      whileInView={{ y: '0%' }}
      viewport={HEADLINE_VIEW}
      transition={{ duration: 1, delay, ease: EASE_EXPO }}
    >
      {children}
    </motion.span>
  </span>
);

/** A grid cell whose card is uncovered from the bottom, once. */
const Cell = ({ children, index, className, reduced }: { children: ReactNode; index: number; className: string; reduced: boolean }) => (
  <motion.div
    className={className}
    initial={reduced ? false : { clipPath: 'inset(100% 0% 0% 0%)' }}
    whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
    viewport={CARD_VIEW}
    transition={{ duration: 0.9, delay: CARD_DELAYS[index] ?? 0, ease: EASE_EXPO }}
  >
    {children}
  </motion.div>
);

export const BentoServices = () => {
  const reduced = usePrefersReducedMotion();
  const [empaques, avisos, adhesivos, senaletica, impresion] = PHOTO_SERVICES;

  return (
    <section data-ground="#f4f4f5" aria-labelledby="servicios-title" className="bg-zinc-100 py-24 lg:py-36">
      <div className="container-impulso">
        <div className="mb-14 flex flex-col gap-10 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <h2 id="servicios-title" className="text-zinc-950">
            <Line delay={0} reduced={reduced} className={SMALL}>todo lo que</Line>{' '}
            <Line delay={0.08} reduced={reduced} className={BIG}>NECESITAS</Line>{' '}
            <span className="flex items-end gap-3 pl-10 lg:gap-6 lg:pl-[12.5vw] 2xl:pl-[190px]">
              <Line delay={0.16} reduced={reduced} className={`${SMALL} pb-[0.35em]`}>en un solo</Line>{' '}
              <Line delay={0.22} reduced={reduced} className={BIG}>LUGAR.</Line>
            </span>
          </h2>
          <div className="flex max-w-[340px] flex-col items-start gap-6">
            <p className="text-lg leading-relaxed text-zinc-800">
              Diseñamos, imprimimos y fabricamos todo lo visual de tu negocio. Mismo equipo, mismo taller en
              Bucaramanga, sin intermediarios.
            </p>
            <a
              href={generateWhatsAppLink('Hola Impulso, quiero cotizar para mi negocio.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2.5 rounded-full bg-zinc-950 px-6 py-3.5 text-[15px] font-bold text-white transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              <FaWhatsapp aria-hidden className="text-impulso-yellow" /> Cotizar por WhatsApp
            </a>
          </div>
        </div>

        <div className="relative grid grid-cols-2 gap-3 lg:grid-cols-12 lg:grid-rows-[520px_400px_400px] lg:gap-4">
          <Cell index={0} reduced={reduced} className={empaques.layout}><PhotoCard service={empaques} /></Cell>
          <Cell index={1} reduced={reduced} className={avisos.layout}><PhotoCard service={avisos} /></Cell>
          <Cell index={2} reduced={reduced} className={adhesivos.layout}><PhotoCard service={adhesivos} /></Cell>
          <Cell index={3} reduced={reduced} className="order-3 h-[170px] lg:order-none lg:col-span-4 lg:h-auto"><EtiquetasCard /></Cell>
          <Cell index={4} reduced={reduced} className={senaletica.layout}><PhotoCard service={senaletica} /></Cell>
          <Cell index={5} reduced={reduced} className={impresion.layout}><PhotoCard service={impresion} /></Cell>
          <Cell index={6} reduced={reduced} className="col-span-2 order-8 lg:order-none lg:col-span-4"><WebCard /></Cell>
          <Cell index={7} reduced={reduced} className="order-4 h-[170px] lg:order-none lg:col-span-3 lg:h-auto"><ProjectsCard /></Cell>

          {/* A second real product tilts over the edge of the empaques card. */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-16 left-[33%] z-10 hidden aspect-square w-[180px] rotate-[8deg] overflow-hidden rounded-2xl border-[6px] border-zinc-100 shadow-[0_20px_40px_rgba(0,0,0,0.3)] lg:block"
          >
            <Image src={EMPAQUES_PROP_PHOTO} alt="" fill sizes="180px" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
