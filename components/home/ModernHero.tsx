'use client';

import { motion } from 'framer-motion';
import { generateWhatsAppLink } from '@/utils/whatsapp';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export const ModernHero = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center bg-zinc-950 overflow-hidden pt-20">
      
      {/* Background Abstract Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-zinc-950 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-zinc-950 to-transparent z-10"></div>

      {/* Radiant Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tikno-yellow/10 rounded-full blur-[120px] z-0 animate-pulse"></div>

      <div className="container-tikno relative z-20 text-center flex flex-col items-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-gray-300 mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tikno-yellow opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-tikno-yellow"></span>
          </span>
          Disponible para proyectos en Bucaramanga
        </motion.div>

        {/* Massive Headline */}
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-white leading-[0.85] mb-8 mix-blend-overlay">
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.8 }}>IMPULSAMOS</motion.div>
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">TU MARCA</motion.div>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Diseño, impresión y fabricación visual. Sin intermediarios, sin demoras. <span className="text-white font-medium">Hacemos que tu negocio se vea caro (sin costar una fortuna).</span>
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href={generateWhatsAppLink("Hola Impulso, quiero que mi marca destaque...")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-tikno-yellow text-black font-black text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(247,211,51,0.5)]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              COTIZAR PROYECTO <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <Link
            href="/proyectos"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            Ver Portafolio
          </Link>
        </motion.div>
      </div>

      {/* Scrolling Text Bottom */}
      <div className="absolute bottom-0 w-full overflow-hidden py-4 border-t border-white/5 bg-black/50 backdrop-blur-sm">
        <motion.div 
          className="flex gap-12 whitespace-nowrap text-white/20 font-black text-4xl uppercase"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...Array(10)].map((_, i) => (
            <span key={i}>Empaques • Avisos • Branding • Impresión • Kits •</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
