import type { CSSProperties } from 'react';
import { generateWhatsAppLink } from '@/utils/whatsapp';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const delay = (seconds: number) => ({ '--delay': `${seconds}s` }) as CSSProperties;

/** Server-rendered so the headline is visible before any JS; entrance is CSS (transform only). */
export const ModernHero = () => {
  return (
    <section data-ground="#09090b" className="relative min-h-[92vh] flex flex-col justify-center items-center bg-zinc-950 overflow-hidden pt-20">
      
      {/* Background Abstract Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-zinc-950 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-zinc-950 to-transparent z-10"></div>

      {/* Radiant Glow */}
      <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(closest-side,rgba(230,255,0,0.10),transparent)] z-0"></div>

      <div className="container-impulso relative z-20 text-center flex flex-col items-center">
        
        {/* Badge */}
        <div className="hero-rise inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs md:text-sm font-medium text-gray-300 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-impulso-yellow opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-impulso-yellow"></span>
          </span>
          Disponible para proyectos en Colombia
        </div>

        {/* Massive Headline */}
        <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-white leading-[0.85] mb-8">
          <span className="hero-rise block" style={delay(0.05)}>IMPULSAMOS</span>
          <span className="hero-rise block text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500" style={delay(0.12)}>TU MARCA</span>
        </h1>

        <p style={delay(0.18)}
          className="hero-rise text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Diseño, impresión y fabricación visual. Sin intermediarios, sin demoras. <span className="text-white font-medium">Hacemos que tu negocio se vea caro (sin costar una fortuna).</span>
        </p>

        {/* Action Buttons */}
        <div className="hero-rise flex flex-col sm:flex-row gap-4 w-full sm:w-auto" style={delay(0.25)}>
          <a
            href={generateWhatsAppLink("Hola Impulso, quiero que mi marca destaque...")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-impulso-yellow text-black font-black text-lg rounded-full overflow-hidden transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-105 active:scale-[0.97] hover:shadow-[0_0_40px_rgba(247,211,51,0.5)]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              COTIZAR PROYECTO <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <Link
            href="/proyectos"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-colors"
          >
            Ver Portafolio
          </Link>
        </div>
      </div>

      {/* Scrolling Text Bottom */}
      <div aria-hidden className="absolute bottom-0 w-full overflow-hidden py-4 border-t border-white/5 bg-black/60">
        <div className="web-marquee flex w-max whitespace-nowrap text-white/20 font-black text-4xl uppercase">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="pr-12">Empaques • Avisos • Branding • Impresión • Kits •</span>
          ))}
        </div>
      </div>
    </section>
  );
};
