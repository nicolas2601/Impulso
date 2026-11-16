'use client';

import { useId } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import {
  ETIQUETAS_PHOTO,
  PROJECT_THUMBS,
  type PhotoService,
} from '@/data/homeServices';

const CARD =
  'group relative block h-full overflow-hidden rounded-[22px] lg:rounded-[28px] outline-none ' +
  'transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.985] ' +
  'focus-visible:ring-4 focus-visible:ring-impulso-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-100';
const ZOOM = 'transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]';

const Arrow = ({ dark = false }: { dark?: boolean }) => (
  <span
    aria-hidden
    className={`grid h-12 w-12 place-items-center rounded-full lg:h-14 lg:w-14 ${dark ? 'bg-zinc-950 text-impulso-yellow' : 'bg-white text-zinc-950'}`}
  >
    <FaArrowRight className="-rotate-45 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
  </span>
);

export const PhotoCard = ({ service }: { service: PhotoService }) => {
  const id = useId();
  return (
    <Link href={service.href} aria-labelledby={`${id}-t`} aria-describedby={`${id}-d`} className={CARD}>
      <Image src={service.photo} alt={service.alt} fill sizes={service.sizes} className={`object-cover ${ZOOM}`} />
      <span aria-hidden className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-zinc-950/90 via-zinc-950/50 to-transparent" />
      <span className="absolute right-5 top-5 lg:right-6 lg:top-6"><Arrow /></span>
      <div className="absolute bottom-0 left-0 flex flex-col items-start gap-2.5 p-6 lg:p-8">
        <h3
          id={`${id}-t`}
          className={`font-black leading-[0.95] tracking-[-0.04em] text-white ${service.big ? 'text-[38px] lg:text-[64px]' : 'text-[38px] lg:text-[44px]'}`}
        >
          {service.title}
        </h3>
        <span id={`${id}-d`} className="max-w-[300px] text-[15px] leading-snug text-zinc-200 lg:text-base">{service.desc}</span>
      </div>
    </Link>
  );
};

export const EtiquetasCard = () => {
  const id = useId();
  return (
    <Link href="/etiquetas" aria-labelledby={`${id}-t`} className={`${CARD} bg-impulso-yellow`}>
      <span className="absolute left-5 top-5 lg:left-6 lg:top-6"><Arrow dark /></span>
      <span className="absolute right-6 top-7 hidden aspect-[22/25] w-[52%] -rotate-[8deg] overflow-hidden rounded-[14px] shadow-[0_18px_36px_rgba(0,0,0,0.28)] lg:block">
        <Image src={ETIQUETAS_PHOTO} alt="Etiquetas impresas para una marca de dulces" fill sizes="20vw" className={`object-cover ${ZOOM}`} />
      </span>
      <div className="absolute bottom-0 left-0 flex flex-col gap-2 p-5 lg:p-8">
        <h3 id={`${id}-t`} className="text-2xl font-black leading-[0.95] tracking-[-0.04em] text-zinc-950 lg:text-[44px]">Etiquetas</h3>
        <span className="text-[13px] leading-snug text-zinc-950/75 lg:max-w-[300px] lg:text-base">Stickers y etiquetas resistentes para tus productos.</span>
      </div>
    </Link>
  );
};

export const WebCard = () => {
  const id = useId();
  return (
    <Link
      href="/desarrollo-web"
      aria-labelledby={`${id}-t`}
      className={`${CARD} flex flex-col justify-between gap-6 bg-zinc-950 p-5 lg:p-7`}
    >
      <span className="w-fit rounded-full bg-impulso-yellow px-2.5 py-1 font-mono text-[11px] font-medium tracking-[0.08em] text-zinc-950">NUEVO</span>
      <span aria-hidden className="mx-auto hidden w-[86%] rotate-[4deg] overflow-hidden rounded-[14px] border border-white/10 bg-zinc-900 lg:block">
        <span className="block h-6 bg-zinc-800" />
        <span className="block px-5 pb-6 pt-5 text-[30px] font-black leading-[0.88] tracking-[-0.05em] text-white">
          TU NEGOCIO<br /><span className="text-impulso-yellow">EN GOOGLE.</span>
        </span>
      </span>
      <div className="flex flex-col gap-2">
        <h3 id={`${id}-t`} className="text-[30px] font-black leading-[0.95] tracking-[-0.04em] text-white lg:text-4xl">Desarrollo web</h3>
        <span className="text-[15px] leading-snug text-zinc-400">Tu página, hecha por los que hacen tu marca.</span>
      </div>
    </Link>
  );
};

const THUMB_POSE = ['left-[9%] top-[8%] -rotate-[7deg]', 'left-[32%] top-[5%] rotate-[5deg]', 'left-[53%] top-[13%] -rotate-[3deg]'];

export const ProjectsCard = () => {
  const id = useId();
  return (
    <Link href="/proyectos" aria-labelledby={`${id}-t`} className={`${CARD} bg-zinc-950`}>
      {PROJECT_THUMBS.map((src, i) => (
        <span
          key={src}
          aria-hidden
          className={`absolute hidden aspect-[124/156] w-[37%] overflow-hidden rounded-xl border-4 border-zinc-950 lg:block ${THUMB_POSE[i]}`}
        >
          <Image src={src} alt="" fill sizes="12vw" className={`object-cover ${ZOOM}`} />
        </span>
      ))}
      <div className="absolute bottom-0 left-0 flex flex-col gap-2 p-5 lg:p-7">
        <h3 id={`${id}-t`} className="text-2xl font-black leading-[0.95] tracking-[-0.04em] text-white lg:text-4xl">Proyectos</h3>
        <span className="flex items-center gap-2 text-[13px] font-bold text-impulso-yellow lg:text-[15px]">
          Ver portafolio <FaArrowRight aria-hidden />
        </span>
      </div>
    </Link>
  );
};
