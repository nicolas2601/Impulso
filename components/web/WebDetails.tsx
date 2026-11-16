'use client';

import type { IconType } from 'react-icons';
import { FaBolt, FaHeadset, FaLock, FaMapMarkerAlt, FaPlus, FaSearch, FaWhatsapp } from 'react-icons/fa';
import { generateWhatsAppLink } from '@/utils/whatsapp';
import { WEB_FAQS, WEB_FEATURES, WEB_QUOTE, WEB_STEPS } from '@/data/webLanding';
import { H2, Kicker, Rise } from './WebOffer';

const ICONS: Record<(typeof WEB_FEATURES)[number]['icon'], IconType> = {
  bolt: FaBolt,
  search: FaSearch,
  map: FaMapMarkerAlt,
  whatsapp: FaWhatsapp,
  lock: FaLock,
  headset: FaHeadset,
};

export const WebProcess = () => (
  <section data-ground="#ffffff" aria-labelledby="web-process-title" className="bg-white py-28 lg:py-32">
    <div className="container-impulso">
      <Rise>
        <Kicker dark={false}>Cómo trabajamos</Kicker>
        <H2 id="web-process-title" dark={false}>De la idea a Google en 4 pasos.</H2>
        <p className="mt-6 max-w-[620px] text-lg leading-relaxed text-zinc-800">
          Sin tecnicismos. Ves y apruebas cada etapa antes de pasar a la siguiente.
        </p>
      </Rise>
      <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {WEB_STEPS.map((s, i) => (
          <Rise key={s.title} delay={i * 0.06}>
            <li className="h-full list-none rounded-[28px] border border-white/10 bg-zinc-900 p-8">
              <span className="block text-[64px] font-black leading-none tracking-[-0.06em] text-impulso-yellow">0{i + 1}</span>
              <h3 className="mt-4 text-[22px] font-bold leading-tight tracking-[-0.03em] text-white">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-zinc-400">{s.desc}</p>
            </li>
          </Rise>
        ))}
      </ol>
    </div>
  </section>
);

export const WebIncluded = () => (
  <section data-ground="#09090b" aria-labelledby="web-included-title" className="bg-zinc-950 py-28 lg:py-32">
    <div className="container-impulso">
      <Rise>
        <Kicker>Incluido</Kicker>
        <H2 id="web-included-title">Todo lo que tu web <span className="text-impulso-yellow">necesita.</span></H2>
      </Rise>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {WEB_FEATURES.map((f, i) => {
          const Icon = ICONS[f.icon];
          return (
            <Rise key={f.title} delay={(i % 3) * 0.06}>
              <div className="h-full rounded-[28px] border border-white/10 bg-zinc-900 p-8">
                <span className="grid h-13 w-13 place-items-center rounded-2xl bg-impulso-yellow p-3.5 text-xl text-zinc-950">
                  <Icon aria-hidden />
                </span>
                <h3 className="mt-5 text-xl font-bold tracking-[-0.03em] text-white">{f.title}</h3>
                <p className="mt-2.5 leading-relaxed text-zinc-400">{f.desc}</p>
              </div>
            </Rise>
          );
        })}
      </div>
    </div>
  </section>
);

export const WebFaq = () => (
  <section data-ground="#09090b" aria-labelledby="web-faq-title" className="bg-zinc-950 pb-28 lg:pb-32">
    <div className="container-impulso grid gap-12 lg:grid-cols-[400px_1fr] lg:gap-16">
      <Rise>
        <Kicker>Preguntas</Kicker>
        <h2 id="web-faq-title" className="mt-5 text-[clamp(2.4rem,5vw,3.25rem)] font-black uppercase leading-[0.95] tracking-[-0.05em] text-white">
          Lo que todos preguntan.
        </h2>
      </Rise>
      <div className="flex flex-col gap-3.5">
        {WEB_FAQS.map((item, i) => (
          <details key={item.q} open={i === 0} className="group rounded-[24px] border border-white/10 bg-zinc-900 px-7 py-6 lg:px-8">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold tracking-[-0.02em] text-white [&::-webkit-details-marker]:hidden">
              {item.q}
              <FaPlus aria-hidden className="shrink-0 text-impulso-yellow transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-open:rotate-45" />
            </summary>
            <p className="mt-3 leading-relaxed text-zinc-400">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export const WebFinalCta = () => (
  <section aria-labelledby="web-cta-title" className="bg-impulso-yellow py-28 text-center lg:py-36">
    <div className="container-impulso flex flex-col items-center">
      <Rise>
        <h2 id="web-cta-title" className="text-[clamp(3rem,9vw,6.5rem)] font-black uppercase leading-[0.88] tracking-[-0.06em] text-zinc-950">
          ¿Listo para que<br />te encuentren?
        </h2>
        <p className="mx-auto mt-8 max-w-[640px] text-xl leading-relaxed text-zinc-950/75">
          Escríbenos, cuéntanos de tu negocio y te mostramos cómo se vería tu página.
        </p>
        <a
          href={generateWhatsAppLink(WEB_QUOTE)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex min-h-12 items-center gap-3 rounded-full bg-zinc-950 px-9 py-5 text-lg font-bold text-white transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]"
        >
          <FaWhatsapp aria-hidden className="text-impulso-yellow" /> Cotizar mi página por WhatsApp
        </a>
      </Rise>
    </div>
  </section>
);
