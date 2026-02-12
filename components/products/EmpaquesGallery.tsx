'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaWhatsapp } from 'react-icons/fa';
import { generateWhatsAppLink } from '@/utils/whatsapp';

const images = [
  '/Empaques/Empaques.jpeg',
  '/Empaques/Empaques 2.jpeg',
  '/Empaques/Empaques 3.jpeg',
  '/Empaques/Empaques 4.jpeg',
  '/Empaques/Empaques 5.jpeg',
  '/Empaques/Empaques 6.jpeg',
  '/Empaques/Empaques 7.jpeg',
  '/Empaques/Empaques 8.jpeg',
  '/Empaques/Empaques 9.jpeg',
  '/Empaques/Empaques 10.jpeg',
];

export const EmpaquesGallery = () => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  
  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section ref={containerRef} className="relative py-20 md:py-32 bg-zinc-950 overflow-hidden -mt-1">
      {/* Visual connection with Hero - Subtle gradient top */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>

      {/* Decorative text background */}
      <div className="absolute top-1/2 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none -translate-y-1/2">
        <span className="text-[30vw] md:text-[25vw] font-black leading-none whitespace-nowrap block text-white -ml-[10%] italic uppercase">
          PREMIUM PACKAGING PREMIUM PACKAGING
        </span>
      </div>

      <div className="container-impulso relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="w-full text-left"
          >
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <span className="w-12 h-[1px] bg-impulso-yellow"></span>
              <span className="text-impulso-yellow font-black text-[10px] md:text-xs tracking-[0.3em] uppercase">
                Portafolio de Producción
              </span>
            </div>
            
            <h2 className="text-[14vw] sm:text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6 md:mb-8">
              CALIDAD QUE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-impulso-yellow via-white to-zinc-500">SE SIENTE.</span>
            </h2>
            
            <p className="text-base md:text-xl text-zinc-400 mb-8 md:mb-12 max-w-lg leading-relaxed font-light">
              Desde cartón microcorrugado hasta acabados de lujo. Cada imagen es un proyecto real entregado en Bucaramanga. <span className="text-white font-medium">Diseño que protege, marca que vende.</span>
            </p>
            
            <div className="flex flex-wrap gap-4 md:gap-6 items-center">
              <motion.a 
                href={generateWhatsAppLink("Hola, vi la galería de empaques y quiero cotizar...")}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-4 bg-impulso-yellow text-black px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-white transition-colors shadow-xl shadow-impulso-yellow/10"
              >
                <FaWhatsapp className="text-xl md:text-2xl" /> COTIZAR ESTO
              </motion.a>
              
              <div className="flex items-center gap-4">
                <button 
                  onClick={prev}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-impulso-yellow hover:text-impulso-yellow transition-all"
                >
                  <FaChevronLeft />
                </button>
                <button 
                  onClick={next}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-impulso-yellow hover:text-impulso-yellow transition-all"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>

            <div className="mt-8 md:mt-12 flex gap-3">
              {images.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setIndex(i)}
                  className={`h-1 rounded-full transition-all duration-500 ${i === index ? 'w-10 md:w-12 bg-impulso-yellow' : 'w-3 md:w-4 bg-white/10 hover:bg-white/30'}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Side: Immersive Image Display */}
          <div className="relative w-full aspect-square md:aspect-[4/5] group">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5"
              >
                <Image 
                  src={images[index]} 
                  alt="Galería de Empaques Impulso" 
                  fill 
                  className="object-cover bg-zinc-900"
                  priority
                />
                
                {/* Subtle vignette */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"></div>
              </motion.div>
            </AnimatePresence>
            
            {/* Background decorative elements */}
            <motion.div 
              style={{ y }}
              className="absolute -top-12 -right-12 w-64 h-64 bg-impulso-yellow/10 rounded-full blur-[80px] pointer-events-none -z-10"
            />
            
            {/* Project info tag */}
            <div className="absolute -bottom-6 -right-6 bg-zinc-900 border border-white/10 p-6 rounded-2xl shadow-2xl z-20 hidden lg:block backdrop-blur-md">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black text-impulso-yellow tracking-widest uppercase">Impulso Lab</span>
                <span className="text-white text-lg font-bold">Producción Real #0{index + 1}</span>
                <div className="flex gap-2 mt-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[9px] text-zinc-500 uppercase font-bold">Material Disponible</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
