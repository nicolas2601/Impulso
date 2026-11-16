'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheck, FaWhatsapp } from 'react-icons/fa';
import { generateWhatsAppLink } from '@/utils/whatsapp';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { WEB_MARQUEE, WEB_PLANS, WEB_PROOF, planQuote, type WebPlan } from '@/data/webLanding';

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

/** Section content rises 16px once, as it reaches the lower third of the screen. */
export const Rise = ({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) => {
  const reduced = usePrefersReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -20% 0px' }}
      transition={{ duration: 0.7, delay, ease: EASE_EXPO }}
    >
      {children}
    </motion.div>
  );
};

export const Kicker = ({ children, dark = true }: { children: ReactNode; dark?: boolean }) => (
  <p className={`font-mono text-xs uppercase tracking-[0.1em] ${dark ? 'text-impulso-yellow' : 'text-zinc-950/55'}`}>{children}</p>
);

export const H2 = ({ id, children, dark = true }: { id: string; children: ReactNode; dark?: boolean }) => (
  <h2 id={id} className={`mt-5 max-w-[16ch] text-[clamp(2.6rem,7vw,4.75rem)] font-black uppercase leading-[0.92] tracking-[-0.05em] ${dark ? 'text-white' : 'text-zinc-950'}`}>
    {children}
  </h2>
);

export const WebMarquee = () => (
  <div aria-hidden className="overflow-hidden bg-zinc-950 py-10">
    <div className="-rotate-2 bg-impulso-yellow py-4">
      <div className="web-marquee flex w-max">
        {[0, 1].map((copy) => (
          <span key={copy} className="flex shrink-0 items-center gap-8 pr-8">
            {WEB_MARQUEE.map((w) => (
              <span key={w} className="flex items-center gap-8 text-4xl font-black uppercase tracking-[-0.04em] text-zinc-950 lg:text-5xl">
                {w} <span className="text-2xl">✦</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export const WebProof = () => (
  <section data-ground="#09090b" aria-labelledby="web-proof-title" className="bg-zinc-950 py-28 lg:py-32">
    <div className="container-impulso grid gap-12 lg:grid-cols-2 lg:items-end">
      <Rise>
        <Kicker>Prueba real</Kicker>
        <H2 id="web-proof-title">No te vendemos humo.</H2>
        <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-zinc-400">
          Esta página la diseñamos y programamos nosotros. Hoy aparece en Google cuando alguien en Bucaramanga busca
          avisos, empaques o impresión.
        </p>
      </Rise>
      <Rise delay={0.08}>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {WEB_PROOF.figures.map((f, i) => (
            <div
              key={f.label}
              className={`min-w-0 rounded-[24px] p-6 sm:p-8 ${i === 0 ? 'col-span-2 flex items-end justify-between gap-6 bg-impulso-yellow text-zinc-950' : 'border border-white/10 bg-zinc-900 text-white'}`}
            >
              <p className={`font-black leading-none tracking-[-0.05em] tabular-nums ${i === 0 ? 'text-[clamp(3.5rem,8vw,6rem)]' : 'text-[clamp(2.5rem,5vw,3.75rem)]'}`}>
                {f.value}
              </p>
              <p className={`text-sm font-medium sm:text-base ${i === 0 ? 'max-w-[150px] text-right text-zinc-950' : 'mt-3 text-zinc-400'}`}>{f.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 font-mono text-[11px] text-zinc-400/80">{WEB_PROOF.source}</p>
      </Rise>
    </div>
  </section>
);

const STATIONS = [
  { n: '01', place: 'En la calle', line: 'Tu aviso hace que te vean.', photo: '/projects/AVISOS.jpeg', alt: 'Letrero de neón de una heladería hecho por Impulso' },
  { n: '02', place: 'En la mano', line: 'Tu empaque lleva un QR a tu web.', photo: '/Empaques/Empaques.jpeg', alt: 'Caja navideña impresa por Impulso' },
  { n: '03', place: 'En Google', line: 'Tu web cierra la venta por WhatsApp.', photo: '/portfolio/impulso-mobile.webp', alt: 'La web de Impulso abierta en un celular' },
];

const StationCaption = ({ n, place, line }: { n: string; place: string; line: string }) => (
  <figcaption className="mt-5 flex items-start gap-4">
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-zinc-950 font-mono text-sm text-impulso-yellow">{n}</span>
    <span>
      <span className="block text-xl font-black tracking-[-0.03em] text-zinc-950">{place}</span>
      <span className="block text-zinc-700">{line}</span>
    </span>
  </figcaption>
);

/** One brand, three moments: the sign on the street, the box in the hand, the site on the phone. */
export const WebCombo = () => {
  const [street, hand, google] = STATIONS;
  return (
    <section data-ground="#ffffff" aria-labelledby="web-combo-title" className="overflow-x-clip bg-white py-28 lg:py-36">
      <div className="container-impulso">
        <Rise>
          <Kicker dark={false}>Nuestra ventaja</Kicker>
          <H2 id="web-combo-title" dark={false}>El combo que nadie más te da.</H2>
          <p className="mt-6 max-w-[620px] text-lg leading-relaxed text-zinc-800">
            Una agencia web te hace la página. Una litografía te imprime. Nosotros hacemos las dos, y tu cliente
            reconoce la misma marca en la calle, en la mano y en Google.
          </p>
        </Rise>

        <div className="relative mt-16 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-6">
          {/* the path that links the three moments */}
          <svg aria-hidden viewBox="0 0 1200 520" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 top-24 hidden h-[520px] w-full lg:block">
            <path d="M260 300 C 420 160, 520 470, 690 330 S 960 120, 1080 240" fill="none" stroke="#09090b" strokeOpacity="0.25" strokeWidth="2" strokeDasharray="6 10" />
          </svg>

          <Rise className="relative lg:col-span-5">
            <figure>
              <span className="relative block aspect-[4/5] -rotate-2 overflow-hidden rounded-[28px] shadow-[0_30px_60px_rgba(0,0,0,0.18)]">
                <Image src={street.photo} alt={street.alt} fill sizes="(min-width: 1024px) 38vw, 90vw" className="object-cover" />
              </span>
              <StationCaption {...street} />
            </figure>
          </Rise>

          <Rise delay={0.08} className="relative lg:col-span-4 lg:mt-48">
            <figure>
              <span className="relative block aspect-square rotate-3 overflow-hidden rounded-[28px] border-[6px] border-white shadow-[0_30px_60px_rgba(0,0,0,0.2)]">
                <Image src={hand.photo} alt={hand.alt} fill sizes="(min-width: 1024px) 30vw, 90vw" className="object-cover" />
              </span>
              <StationCaption {...hand} />
            </figure>
          </Rise>

          <Rise delay={0.16} className="relative lg:col-span-3 lg:mt-8">
            <figure className="flex flex-col items-start lg:items-center">
              <span className="relative block w-[220px] -rotate-3 rounded-[38px] border-2 border-zinc-950/10 bg-zinc-950 p-2 shadow-[0_30px_60px_rgba(0,0,0,0.25)]">
                <span className="relative block aspect-[390/844] overflow-hidden rounded-[30px]">
                  <Image src={google.photo} alt={google.alt} fill sizes="220px" className="object-cover object-top" />
                </span>
              </span>
              <StationCaption {...google} />
            </figure>
          </Rise>
        </div>
      </div>
    </section>
  );
};

const PlanCard = ({ plan }: { plan: WebPlan }) => {
  const f = plan.featured;
  return (
    <article className={`flex h-full flex-col gap-6 rounded-[32px] p-8 lg:p-9 ${f ? 'bg-impulso-yellow text-zinc-950' : 'border border-white/10 bg-zinc-900 text-white'}`}>
      <span className={`w-fit rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-[0.08em] ${f ? 'bg-zinc-950 text-impulso-yellow' : 'border border-impulso-yellow/35 text-impulso-yellow'}`}>
        {plan.tag}
      </span>
      <div>
        <h3 className="text-[32px] font-black uppercase leading-[0.95] tracking-[-0.04em]">{plan.name}</h3>
        <p className={`mt-2.5 leading-relaxed ${f ? 'text-zinc-950/80' : 'text-zinc-400'}`}>{plan.desc}</p>
      </div>
      <hr className={f ? 'border-zinc-950/15' : 'border-white/10'} />
      <ul className="flex flex-col gap-3.5">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-center gap-3 text-[15px]">
            <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[11px] ${f ? 'bg-zinc-950/10 text-zinc-950' : 'bg-impulso-yellow/15 text-impulso-yellow'}`}>
              <FaCheck aria-hidden />
            </span>
            <span className={f ? 'text-zinc-950/85' : 'text-zinc-200'}>{feat}</span>
          </li>
        ))}
      </ul>
      <a
        href={generateWhatsAppLink(planQuote(plan.name))}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 py-4 font-bold transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] ${f ? 'bg-zinc-950 text-white' : 'border border-white/20 text-white'}`}
      >
        <FaWhatsapp aria-hidden className={f ? 'text-impulso-yellow' : ''} /> Cotizar {plan.name}
      </a>
    </article>
  );
};

export const WebPlans = () => (
  <section id="planes" data-ground="#09090b" aria-labelledby="web-plans-title" className="scroll-mt-24 bg-zinc-950 py-28 lg:py-32">
    <div className="container-impulso">
      <Rise>
        <Kicker>Planes</Kicker>
        <H2 id="web-plans-title">Planes claros. <span className="text-impulso-yellow">Sin vueltas.</span></H2>
        <p className="mt-6 max-w-[620px] text-lg leading-relaxed text-zinc-400">
          Te decimos cuánto cuesta y qué recibes antes de empezar. Todos incluyen diseño a la medida, versión para
          celular y botón de WhatsApp.
        </p>
      </Rise>
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {WEB_PLANS.map((plan, i) => (
          <Rise key={plan.name} delay={i * 0.06}><PlanCard plan={plan} /></Rise>
        ))}
      </div>
    </div>
  </section>
);
