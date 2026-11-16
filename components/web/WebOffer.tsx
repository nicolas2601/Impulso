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
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {WEB_PROOF.figures.map((f, i) => (
            <div key={f.label} className={`rounded-[24px] p-5 sm:p-7 ${i === 0 ? 'bg-impulso-yellow text-zinc-950' : 'border border-white/10 bg-zinc-900 text-white'}`}>
              <p className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-none tracking-[-0.05em]">{f.value}</p>
              <p className={`mt-2 text-sm font-medium ${i === 0 ? 'text-zinc-950' : 'text-zinc-400'}`}>{f.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 font-mono text-[11px] text-zinc-400/80">{WEB_PROOF.source}</p>
      </Rise>
    </div>
  </section>
);

const COMBO = [
  { k: '01 · En la calle', t: 'Tu aviso te hace visible', d: 'Letreros, neón y fachadas que la gente recuerda.', photo: '/projects/AVISOS.jpeg', alt: 'Letrero de neón de una heladería hecho por Impulso' },
  { k: '02 · En la mano', t: 'Tu empaque lleva un QR', d: 'Cada caja o etiqueta lleva al cliente directo a tu web.', photo: '/Empaques/Empaques.jpeg', alt: 'Caja navideña impresa por Impulso' },
];

export const WebCombo = () => (
  <section data-ground="#ffffff" aria-labelledby="web-combo-title" className="bg-white py-28 lg:py-32">
    <div className="container-impulso">
      <Rise>
        <Kicker dark={false}>Nuestra ventaja</Kicker>
        <H2 id="web-combo-title" dark={false}>El combo que nadie más te da.</H2>
        <p className="mt-6 max-w-[620px] text-lg leading-relaxed text-zinc-800">
          Una agencia web te hace la página. Una litografía te imprime. Nosotros hacemos las dos, y todo habla con la
          misma voz: tu marca.
        </p>
      </Rise>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {COMBO.map((c, i) => (
          <Rise key={c.k} delay={i * 0.06}>
            <article className="h-full overflow-hidden rounded-[28px] bg-zinc-950">
              <span className="relative block aspect-[389/300]">
                <Image src={c.photo} alt={c.alt} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover" />
              </span>
              <div className="p-7">
                <p className="font-mono text-xs uppercase tracking-[0.08em] text-impulso-yellow">{c.k}</p>
                <h3 className="mt-2.5 text-[28px] font-black leading-[1.05] tracking-[-0.04em] text-white">{c.t}</h3>
                <p className="mt-2.5 leading-relaxed text-zinc-400">{c.d}</p>
              </div>
            </article>
          </Rise>
        ))}
        <Rise delay={0.12}>
          <article className="h-full overflow-hidden rounded-[28px] bg-impulso-yellow">
            <span aria-hidden className="grid aspect-[389/300] place-items-center">
              <span className="w-[82%] overflow-hidden rounded-[18px] bg-zinc-950">
                <span className="block h-8 bg-zinc-800" />
                <span className="block px-5 pb-6 pt-7 text-center">
                  <span className="block text-[34px] font-black leading-none tracking-[-0.05em] text-white">TU NEGOCIO</span>
                  <span className="mt-2 block font-mono text-[11px] text-zinc-400">Bucaramanga · Abierto hoy</span>
                  <span className="mt-4 inline-block rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white">Escríbenos por WhatsApp</span>
                </span>
              </span>
            </span>
            <div className="p-7">
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-zinc-950">03 · En Google</p>
              <h3 className="mt-2.5 text-[28px] font-black leading-[1.05] tracking-[-0.04em] text-zinc-950">Tu web cierra la venta</h3>
              <p className="mt-2.5 leading-relaxed text-zinc-800">Te encuentran, ven lo que haces y te escriben por WhatsApp.</p>
            </div>
          </article>
        </Rise>
      </div>
    </div>
  </section>
);

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
