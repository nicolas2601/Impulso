'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const projects = [
  { 
    id: 1, 
    title: 'BURGER STACK', 
    category: 'EMPAQUES', 
    desc: 'Rediseño total de experiencia unboxing.',
    color: 'from-orange-600 to-red-900'
  },
  { 
    id: 2, 
    title: 'NEON JUNGLE', 
    category: 'AVISOS', 
    desc: 'Instalación de neón flex de 4 metros.',
    color: 'from-fuchsia-600 to-purple-900'
  },
  { 
    id: 3, 
    title: 'VELVET BOUTIQUE', 
    category: 'KITS', 
    desc: 'Kit de inicio completo para marca de lujo.',
    color: 'from-rose-400 to-pink-900'
  },
  { 
    id: 4, 
    title: 'URBAN PIZZA', 
    category: 'EMPAQUES', 
    desc: 'Cajas negras con tinta metalizada.',
    color: 'from-zinc-700 to-black'
  },
];

const ProjectRow = ({ project, index }: { project: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative border-t border-white/10 py-16 transition-colors hover:bg-white/5 cursor-pointer"
    >
      <Link href="/proyectos" className="container-tikno flex flex-col md:flex-row md:items-center justify-between gap-8">
        
        {/* Text Content */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
             <span className="text-xs font-bold text-tikno-yellow px-2 py-1 border border-tikno-yellow/20 rounded-full">
               0{index + 1}
             </span>
             <span className="text-sm font-bold text-gray-400 tracking-widest uppercase">
               {project.category}
             </span>
          </div>
          <h3 className="text-5xl md:text-7xl font-black text-white mb-4 group-hover:text-tikno-yellow transition-colors leading-[0.9]">
            {project.title}
          </h3>
          <p className="text-gray-400 max-w-md text-lg group-hover:text-white transition-colors">
            {project.desc}
          </p>
        </div>

        {/* Visual Preview (Abstract for now) */}
        <div className="relative w-full md:w-1/3 aspect-[16/9] overflow-hidden rounded-xl bg-zinc-900 group-hover:scale-105 transition-transform duration-500">
           <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 group-hover:opacity-100 transition-opacity duration-500`}></div>
           {/* Placeholder text mimicking image */}
           <div className="absolute inset-0 flex items-center justify-center">
             <span className="text-white/20 font-black text-4xl uppercase mix-blend-overlay group-hover:scale-110 transition-transform duration-700">Preview</span>
           </div>
        </div>
        
        <div className="md:hidden flex items-center gap-2 text-tikno-yellow font-bold text-sm mt-4">
          VER PROYECTO <FaArrowRight />
        </div>
      </Link>
    </motion.div>
  );
};

export const ImmersiveGallery = () => {
  return (
    <section className="bg-zinc-950 py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container-tikno mb-20 flex flex-col md:flex-row items-end justify-between gap-8">
        <div>
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6 leading-[0.85]">
            TRABAJO <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tikno-yellow to-white">REAL.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-xl">
            No vendemos humo. Vendemos resultados visuales que hacen que tu caja registradora suene.
          </p>
        </div>
        
        <Link 
          href="/proyectos"
          className="hidden md:inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white hover:text-black transition-all"
        >
          VER TODO EL PORTAFOLIO <FaArrowRight />
        </Link>
      </div>

      <div className="border-b border-white/10">
        {projects.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>
      
      <div className="container-tikno mt-12 md:hidden">
        <Link 
          href="/proyectos"
          className="flex w-full justify-center items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold"
        >
          VER TODO EL PORTAFOLIO <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};
