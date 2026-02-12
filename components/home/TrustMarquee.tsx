'use client';

import { motion } from 'framer-motion';

const words = [
  "ENTREGA RÁPIDA", "•", "CALIDAD PREMIUM", "•", "BUCARAMANGA", "•", 
  "DISEÑO A MEDIDA", "•", "PRECIOS CLAROS", "•", "SIN INTERMEDIARIOS", "•",
  "ENTREGA RÁPIDA", "•", "CALIDAD PREMIUM", "•", "BUCARAMANGA", "•", 
  "DISEÑO A MEDIDA", "•", "PRECIOS CLAROS", "•", "SIN INTERMEDIARIOS", "•"
];

export const TrustMarquee = () => {
  return (
    <section className="py-12 bg-impulso-yellow border-y border-black overflow-hidden relative z-20">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-multiply"></div>
      
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        <div className="flex gap-8 items-center">
          {words.map((word, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black tracking-tighter text-black uppercase select-none">
              {word}
            </span>
          ))}
        </div>
        <div className="flex gap-8 items-center pl-8">
          {words.map((word, i) => (
            <span key={`dup-${i}`} className="text-4xl md:text-6xl font-black tracking-tighter text-black uppercase select-none">
              {word}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
