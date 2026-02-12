'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const allPhotos = [
  // Empaques
  { src: '/Empaques/Empaques.jpeg', category: 'Empaques', size: 'large' },
  { src: '/Empaques/Empaques 2.jpeg', category: 'Empaques', size: 'small' },
  { src: '/Empaques/Empaques 3.jpeg', category: 'Empaques', size: 'medium' },
  { src: '/Empaques/Empaques 4.jpeg', category: 'Empaques', size: 'small' },
  { src: '/Empaques/Empaques 5.jpeg', category: 'Empaques', size: 'large' },
  // Avisos
  { src: '/Avisos/Avisos 1.jpeg', category: 'Avisos', size: 'medium' },
  { src: '/Avisos/Avisos 2.jpeg', category: 'Avisos', size: 'large' },
  { src: '/Avisos/Avisos 3.jpeg', category: 'Avisos', size: 'small' },
  { src: '/Avisos/Avisos 4.jpeg', category: 'Avisos', size: 'medium' },
  // Impresion
  { src: '/Impresion/Impresion 1.jpeg', category: 'Impresión', size: 'small' },
  { src: '/Impresion/Impresion 2.jpeg', category: 'Impresión', size: 'medium' },
  { src: '/Impresion/Impresion 3.jpeg', category: 'Impresión', size: 'large' },
  { src: '/Impresion/Impresion 4.jpeg', category: 'Impresión', size: 'small' },
  // Adhesivos
  { src: '/Ahdesivos/Ahdesivos 1.jpeg', category: 'Adhesivos', size: 'large' },
  { src: '/Ahdesivos/Ahdesivos 2.jpeg', category: 'Adhesivos', size: 'small' },
  { src: '/Ahdesivos/Ahdesivos 3.jpeg', category: 'Adhesivos', size: 'medium' },
  // Etiquetas
  { src: '/Etiquetas/Etiquetas 1.jpeg', category: 'Etiquetas', size: 'medium' },
  { src: '/Etiquetas/Etiquetas 2.jpeg', category: 'Etiquetas', size: 'large' },
  // Señalitica
  { src: '/Señalitica/Señalitica 1.jpeg', category: 'Señalética', size: 'small' },
  { src: '/Señalitica/Señalitica 2.jpeg', category: 'Señalética', size: 'medium' },
];

export const ProjectsCollage = () => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Empaques', 'Avisos', 'Impresión', 'Adhesivos', 'Etiquetas', 'Señalética'];

  const filteredPhotos = filter === 'Todos' 
    ? allPhotos 
    : allPhotos.filter(p => p.category === filter);

  return (
    <section className="py-24 bg-zinc-50">
      <div className="container-impulso">
        {/* Editorial Filter */}
        <div className="flex flex-wrap gap-4 mb-16 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                filter === cat 
                  ? 'bg-black text-white shadow-xl scale-105' 
                  : 'bg-white text-zinc-400 hover:text-black hover:bg-zinc-100 border border-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Collage */}
        <motion.div 
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                key={photo.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative group cursor-zoom-in overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-zinc-200 break-inside-avoid"
              >
                <div className="relative w-full aspect-[4/5] sm:aspect-auto">
                   <Image
                    src={photo.src}
                    alt={`Proyecto Impulso ${photo.category}`}
                    width={800}
                    height={1000}
                    className="w-full h-auto object-cover transition-transform duration-700 md:group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay Info */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <motion.span 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="text-impulso-yellow font-black text-[10px] tracking-[0.3em] uppercase mb-2"
                  >
                    {photo.category}
                  </motion.span>
                  <h3 className="text-white font-black text-2xl tracking-tighter uppercase italic leading-none">
                    TRABAJO REAL
                  </h3>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-white/20 rounded-tr-xl group-hover:border-impulso-yellow transition-colors duration-500"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
