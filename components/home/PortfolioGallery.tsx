'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  { id: 1, title: 'Burger King Box', category: 'Empaques', color: 'bg-red-500' },
  { id: 2, title: 'Neon Bar', category: 'Avisos', color: 'bg-purple-600' },
  { id: 3, title: 'Coffee Brand Kit', category: 'Branding', color: 'bg-amber-700' },
  { id: 4, title: 'Pizza Delivery', category: 'Empaques', color: 'bg-orange-500' },
  { id: 5, title: 'Pharmacy Sign', category: 'Avisos', color: 'bg-blue-600' },
  { id: 6, title: 'Bakery Stickers', category: 'Impresión', color: 'bg-pink-500' },
];

export const PortfolioGallery = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-impulso">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-impulso-gray-dark mb-2">
              Proyectos Realizados
            </h2>
            <p className="text-gray-600">Calidad que se ve y se siente.</p>
          </div>
          <a href="/proyectos" className="hidden md:block text-impulso-blue font-bold hover:underline">
            Ver todo el portafolio &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className={`group relative rounded-xl overflow-hidden cursor-pointer ${idx === 1 || idx === 4 ? 'lg:col-span-2' : ''}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              {/* Placeholder visuals since we don't have real images yet */}
              <div className={`w-full h-full ${project.color} transition-transform duration-500 group-hover:scale-105 flex items-center justify-center`}>
                <span className="text-white/30 text-4xl font-black uppercase tracking-widest">{project.category}</span>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-impulso-yellow text-sm font-bold uppercase tracking-wider mb-1">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="/proyectos" className="text-impulso-blue font-bold hover:underline">
            Ver todo el portafolio &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
