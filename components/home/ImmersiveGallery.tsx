'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const projects = [
  { 
    id: 'p1', 
    title: 'EMPAQUES PARA COMIDAS RAPIDAS', 
    category: 'EMPAQUES', 
    desc: 'Rediseño de experiencia unboxing para marcas de food delivery. Empaques sostenibles.',
    color: 'from-orange-600 to-red-900',
    image: '/projects/empaques.jpeg',
    href: '/empaques'
  },
  { 
    id: 'p2', 
    title: 'VISIBILIDAD INTERNA', 
    category: 'SEÑALÉTICA', 
    desc: 'Ofrecemos señalización interna y externa en acrílico, PVC, aluminio y materiales resistentes, garantizando visibilidad, organización y cumplimiento normativo.',
    color: 'from-blue-600 to-indigo-900',
    image: '/projects/SEÑALITICA.jpeg',
    href: '/avisos-profesionales'
  },
  { 
    id: 'p3', 
    title: 'LETREROS COMERCIALES DE ALTO IMPACTO', 
    category: 'AVISOS', 
    desc: 'Realizamos avisos luminosos, letras corpóreas, avisos en acrílico, aluminio y estructuras metálicas para exteriores e interiores. Soluciones resistentes y personalizadas para destacar tu marca.',
    color: 'from-fuchsia-600 to-purple-900',
    image: '/projects/AVISOS.jpeg',
    href: '/avisos'
  },
  { 
    id: 'p4', 
    title: 'IMPRIME CON CALIDAD PORFESIONAL', 
    category: 'IMPRESIÓN LITOGRAFICA', 
    desc: 'Imprimimos tarjetas de presentación, brochures, volantes, catálogos y papelería corporativa con acabados precisos y colores vibrantes. Servicio rápido y personalizado..',
    color: 'from-emerald-600 to-teal-900',
    image: '/projects/IMPRESION.jpeg',
    href: '/impresion'
  },
  { 
    id: 'p5', 
    title: 'DISEÑO Y PRODUCCIÓN DE ADHESIVOS', 
    category: 'AHDESIVOS', 
    desc: 'Diseñamos e instalamos vinilo adhesivo para paredes, vitrinas, fachadas y señalización interna, con acabados profesionales y materiales de alta durabilidad..',
    color: 'from-amber-500 to-orange-800',
    image: '/projects/VINILOS.jpeg',
    href: '/adhesivos'
  },
  { 
    id: 'p6', 
    title: 'IMPRESION DE ETIQUETAS AHDESIVAS Y CARTON', 
    category: 'ETIQUETAS', 
    desc: 'Fabricamos etiquetas para productos adhesivas y en cartón, ideales para alimentos, cosméticos, ropa, empaques y todo tipo de marcas. Ofrecemos impresión de alta calidad, acabados profesionales y materiales resistentes que realzan la presentación de tu producto.',
    color: 'from-zinc-700 to-black',
    image: '/projects/ETIQUETAS.jpeg',
    href: '/etiquetas'
  },
];

const ProjectRow = ({ project, index }: { project: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative border-t border-white/10 py-10 md:py-14 transition-colors hover:bg-white/5 cursor-pointer"
    >
      <Link href={project.href} className="container-impulso flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
        
        {/* Text Content */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-2 md:mb-3">
             <span className="text-[10px] font-bold text-impulso-yellow px-2 py-0.5 border border-impulso-yellow/20 rounded-full">
               0{index + 1}
             </span>
             <span className="text-[10px] md:text-xs font-bold text-gray-500 tracking-widest uppercase">
               {project.category}
             </span>
          </div>
          <h3 className="text-2xl md:text-5xl font-black text-white mb-2 md:mb-3 group-hover:text-impulso-yellow transition-colors leading-tight uppercase">
            {project.title}
          </h3>
          <p className="text-gray-400 max-w-xl text-xs md:text-base group-hover:text-white transition-colors leading-relaxed">
            {project.desc}
          </p>
        </div>

        {/* Visual Preview */}
        <div className="relative w-full md:w-[450px] aspect-[16/9] overflow-hidden rounded-xl bg-zinc-900 group-hover:scale-105 transition-transform duration-500 shadow-2xl">
           {project.image ? (
             <>
               <Image 
                 src={project.image} 
                 alt={project.title} 
                 fill 
                 className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
               />
               <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay opacity-20`}></div>
             </>
           ) : (
             <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 group-hover:opacity-100 transition-opacity duration-500`}></div>
           )}
           
           <div className="absolute inset-0 flex items-center justify-center">
             <span className="text-white/40 font-black text-xl md:text-2xl uppercase mix-blend-overlay group-hover:scale-110 transition-transform duration-700 tracking-tighter">Explorar</span>
           </div>
        </div>
        
        <div className="md:hidden flex items-center gap-2 text-impulso-yellow font-bold text-[10px] mt-2 tracking-widest">
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

      <div className="container-impulso mb-20 flex flex-col md:flex-row items-end justify-between gap-8">
        <div>
          <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter mb-4 md:mb-6 leading-[0.85]">
            TRABAJO <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-impulso-yellow to-white">REAL.</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-xl">
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
      
      <div className="container-impulso mt-12 md:hidden">
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