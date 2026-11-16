'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheck, FaLock, FaSearch, FaWhatsapp } from 'react-icons/fa';
import { generateWhatsAppLink } from '@/utils/whatsapp';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { WEB_QUOTE } from '@/data/webLanding';

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;
const TRUST = ['Dominio + hosting', 'SEO local', 'WhatsApp integrado'];

function useEnter(reduced: boolean) {
  return (delay: number, from: Record<string, number | string> = { opacity: 0, y: 24 }) => ({
    initial: reduced ? false : from,
    animate: { opacity: 1, y: 0, x: 0, scale: 1 },
    transition: { duration: 0.9, delay, ease: EASE_EXPO },
  });
}

/** Real captures of sites we built: the page is the proof. */
const BrowserMock = ({ src, url }: { src: string; url: string }) => (
  <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-zinc-900 shadow-[0_40px_80px_rgba(0,0,0,0.55)]">
    <div className="flex h-10 items-center gap-2 bg-zinc-800 px-4">
      {[0, 1, 2].map((i) => <span key={i} className="h-2.5 w-2.5 rounded-full bg-zinc-500/50" />)}
      <span className="mx-auto flex items-center gap-2 rounded-full bg-zinc-950 px-3.5 py-1 font-mono text-[11px] text-zinc-400">
        <FaLock aria-hidden className="text-[9px]" /> {url}
      </span>
    </div>
    <span className="relative block aspect-[16/10]">
      <Image src={src} alt="" fill priority sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover object-top" />
    </span>
  </div>
);

const PhoneMock = () => (
  <div className="w-[200px] rounded-[40px] border-2 border-white/20 bg-zinc-950 p-2 shadow-[0_30px_60px_rgba(0,0,0,0.6)] lg:w-[214px]">
    <span className="relative block aspect-[390/844] overflow-hidden rounded-[32px]">
      <Image src="/portfolio/vera-mobile.webp" alt="" fill sizes="214px" className="object-cover object-top" />
    </span>
  </div>
);

const SearchCard = () => (
  <div className="w-[min(374px,86vw)] rounded-[22px] bg-white p-5 shadow-[0_24px_48px_rgba(0,0,0,0.45)]">
    <span className="flex items-center gap-2.5 rounded-full bg-zinc-200/60 px-3.5 py-2.5 text-[13px] text-zinc-800">
      <FaSearch aria-hidden className="text-xs" /> avisos luminosos bucaramanga
    </span>
    <p className="mt-3 font-mono text-[11px] text-zinc-800/60">impulsopublicidad.pro › avisos</p>
    <p className="mt-1.5 text-base font-semibold leading-snug text-blue-600">Avisos Luminosos y Letreros Bucaramanga | Impulso</p>
    <p className="mt-1.5 text-xs leading-relaxed text-zinc-800/75">Avisos en acrílico, neón flex y cajas de luz con instalación en todo el área metropolitana.</p>
  </div>
);

const Toast = () => (
  <div className="flex items-center gap-3 rounded-[20px] border border-white/10 bg-zinc-800/95 py-3 pl-3.5 pr-5 shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#25D366] text-xl text-white"><FaWhatsapp aria-hidden /></span>
    <span>
      <span className="block font-mono text-[10px] tracking-[0.06em] text-zinc-400">WHATSAPP · AHORA</span>
      <span className="block text-sm font-medium text-white">“Hola, vi su página y quiero cotizar”</span>
    </span>
  </div>
);

export const WebHero = () => {
  const reduced = usePrefersReducedMotion();
  const enter = useEnter(reduced);

  return (
    <section data-ground="#09090b" aria-labelledby="web-hero-title" className="relative overflow-hidden bg-zinc-950 pb-20 pt-32 lg:min-h-[880px] lg:pb-24 lg:pt-40">
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div aria-hidden className="absolute -right-40 top-20 h-[760px] w-[760px] rounded-full bg-impulso-yellow/15 blur-[200px]" />

      <div className="container-impulso relative grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8">
        <div className="flex flex-col items-start">
          <motion.span {...enter(0)} className="inline-flex items-center gap-2.5 rounded-full border border-impulso-yellow/40 bg-impulso-yellow/10 px-4 py-2 font-mono text-[11px] tracking-[0.08em] text-impulso-yellow sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-impulso-yellow" /> NUEVO SERVICIO · IMPULSO DIGITAL
          </motion.span>
          <h1 id="web-hero-title" className="mt-7 text-[clamp(3.25rem,13vw,5.5rem)] font-black uppercase leading-[0.88] tracking-[-0.06em] text-white">
            <motion.span {...enter(0.08)} className="block">Tu negocio</motion.span>{' '}
            <motion.span {...enter(0.16)} className="block">también en</motion.span>{' '}
            <motion.span {...enter(0.24)} className="block text-impulso-yellow">Google.</motion.span>
          </h1>
          <motion.p {...enter(0.34)} className="mt-7 max-w-[500px] text-lg leading-relaxed text-zinc-400 lg:text-[19px]">
            Diseñamos y programamos páginas web rápidas que aparecen en Google y convierten visitas en mensajes de
            WhatsApp. Hechas en Bucaramanga, por el mismo equipo que imprime tu marca.
          </motion.p>
          <motion.div {...enter(0.42)} className="mt-9 flex flex-wrap gap-3.5">
            <a
              href={generateWhatsAppLink(WEB_QUOTE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-impulso-yellow px-7 py-4 font-bold text-zinc-950 transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]"
            >
              <FaWhatsapp aria-hidden /> Cotizar mi página
            </a>
            <a
              href="#planes"
              className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition-[border-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-white/50 active:scale-[0.97]"
            >
              Ver planes <FaArrowRight aria-hidden className="text-sm" />
            </a>
          </motion.div>
          <motion.ul {...enter(0.5)} className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
            {TRUST.map((t) => (
              <li key={t} className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.06em] text-zinc-400">
                <FaCheck aria-hidden className="text-impulso-yellow" /> {t}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Composition: Impulso's own site, a phone, the Google result and the message it brings. */}
        <div aria-hidden className="relative mx-auto w-full max-w-[600px] lg:mx-0 lg:h-[600px]">
          <motion.div {...enter(0.22, { opacity: 0, y: 40 })} className="absolute right-0 top-0 hidden w-[440px] rotate-[7deg] opacity-80 lg:block">
            <BrowserMock src="/portfolio/escala-home.webp" url="4-sloop.tikno.pro" />
          </motion.div>
          <motion.div {...enter(0.3, { opacity: 0, y: 40 })} className="relative lg:absolute lg:left-0 lg:top-16 lg:w-[540px] lg:rotate-3">
            <BrowserMock src="/portfolio/impulso-home.webp" url="impulsopublicidad.pro" />
          </motion.div>
          <motion.div {...enter(0.5, { opacity: 0, y: 40 })} className="absolute -right-2 top-[58%] hidden -rotate-6 sm:block lg:right-[-30px] lg:top-[210px]">
            <PhoneMock />
          </motion.div>
          <motion.div {...enter(0.62, { opacity: 0, y: 30 })} className="relative z-10 -mt-10 ml-auto mr-2 w-fit -rotate-2 lg:absolute lg:bottom-[-10px] lg:left-[-40px] lg:m-0">
            <SearchCard />
          </motion.div>
          <motion.div {...enter(0.74, { opacity: 0, y: -16 })} className="absolute -top-8 right-0 hidden md:block lg:-top-4 lg:right-10">
            <Toast />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
