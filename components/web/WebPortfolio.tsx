'use client';

import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { WEB_PORTFOLIO, type PortfolioProject, type PortfolioShot } from '@/data/webLanding';
import { H2, Kicker, Rise } from './WebOffer';

const Browser = ({ shot, sizes, priority = false }: { shot: PortfolioShot; sizes: string; priority?: boolean }) => (
  <div className="overflow-hidden rounded-[18px] border border-white/10 bg-zinc-900 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
    <div className="flex h-7 items-center gap-1.5 bg-zinc-800 px-3">
      {[0, 1, 2].map((i) => <span key={i} className="h-2 w-2 rounded-full bg-zinc-500/50" />)}
    </div>
    <span className="relative block aspect-[16/10]">
      <Image src={shot.src} alt={shot.alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
    </span>
  </div>
);

const Phone = ({ shot }: { shot: PortfolioShot }) => (
  <div className="w-[150px] rounded-[30px] border-2 border-white/20 bg-zinc-950 p-1.5 shadow-[0_24px_48px_rgba(0,0,0,0.55)] lg:w-[170px]">
    <span className="relative block aspect-[390/844] overflow-hidden rounded-[24px]">
      <Image src={shot.src} alt={shot.alt} fill sizes="170px" className="object-cover object-top" />
    </span>
  </div>
);

/** One project: the site on a laptop-size screen, two more screens and the phone, all real captures. */
const Project = ({ project, flip }: { project: PortfolioProject; flip: boolean }) => (
  <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
    <Rise className={`relative lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
      <div className="relative pb-16 pr-10 sm:pb-20 sm:pr-16">
        <Browser shot={project.main} sizes="(min-width: 1024px) 55vw, 90vw" />
        <div className="absolute bottom-0 left-[8%] hidden w-[38%] -rotate-2 sm:block">
          <Browser shot={project.details[0]} sizes="22vw" />
        </div>
        <div className="absolute bottom-6 left-[49%] hidden w-[34%] rotate-2 md:block">
          <Browser shot={project.details[1]} sizes="20vw" />
        </div>
        <div className="absolute -bottom-2 right-0 rotate-3">
          <Phone shot={project.mobile} />
        </div>
      </div>
    </Rise>
    <Rise delay={0.08} className="lg:col-span-5">
      <p className="font-mono text-xs uppercase tracking-[0.08em] text-impulso-yellow">{project.kind}</p>
      <h3 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-black leading-[0.95] tracking-[-0.04em] text-white">{project.name}</h3>
      <p className="mt-4 max-w-[460px] text-lg leading-relaxed text-zinc-400">{project.desc}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <li key={t} className="rounded-full border border-white/15 px-3 py-1.5 text-sm text-zinc-200">{t}</li>
        ))}
      </ul>
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-11 items-center gap-2.5 rounded-full bg-white px-6 py-3 font-bold text-zinc-950 transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]"
        >
          Ver {project.name.split(' · ')[0]} en vivo <FaArrowRight aria-hidden className="-rotate-45 text-sm" />
        </a>
      )}
    </Rise>
  </article>
);

export const WebPortfolio = () => (
  <section data-ground="#09090b" aria-labelledby="web-portfolio-title" className="bg-zinc-950 py-28 lg:py-36">
    <div className="container-impulso">
      <Rise>
        <Kicker>Portafolio</Kicker>
        <H2 id="web-portfolio-title">Webs que ya están en línea.</H2>
        <p className="mt-6 max-w-[620px] text-lg leading-relaxed text-zinc-400">
          Capturas reales de proyectos que diseñamos y programamos. Ábrelos y míralos funcionando.
        </p>
      </Rise>
      <div className="mt-20 flex flex-col gap-28 lg:gap-36">
        {WEB_PORTFOLIO.map((project, i) => (
          <Project key={project.name} project={project} flip={i % 2 === 1} />
        ))}
      </div>
    </div>
  </section>
);
