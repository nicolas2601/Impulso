'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBox, FaLightbulb, FaPrint, FaRocket, FaArrowRight } from 'react-icons/fa';

const BentoCard = ({ title, desc, icon: Icon, href, className, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`group relative overflow-hidden rounded-3xl bg-zinc-50 border border-zinc-100 p-8 flex flex-col justify-between hover:border-zinc-300 transition-all hover:shadow-xl ${className}`}
  >
    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
      <Icon size={120} />
    </div>
    
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-xl bg-tikno-yellow text-black flex items-center justify-center mb-6 text-xl">
        <Icon />
      </div>
      <h3 className="text-2xl font-bold text-zinc-900 mb-2">{title}</h3>
      <p className="text-zinc-500 font-medium leading-relaxed max-w-sm">{desc}</p>
    </div>

    <div className="relative z-10 mt-8">
      <Link href={href} className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-zinc-900 hover:text-tikno-yellow transition-colors">
        Explorar <FaArrowRight />
      </Link>
    </div>
  </motion.div>
);

export const BentoServices = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-tikno">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 tracking-tight">
            TODO LO QUE NECESITAS. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tikno-yellow to-yellow-600">EN UN SOLO LUGAR.</span>
          </h2>
          <p className="text-xl text-zinc-500">
            Simplificamos la producción visual de tu negocio. Calidad industrial, diseño boutique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Empaques - Large */}
          <BentoCard 
            title="Empaques Branding"
            desc="Cajas y bolsas que convierten entregas en experiencias. El unboxing perfecto."
            icon={FaBox}
            href="/empaques"
            className="md:col-span-2 bg-zinc-900 text-white"
            delay={0.1}
          />
          
          {/* Avisos */}
          <BentoCard 
            title="Avisos Luminosos"
            desc="Neón flex y cajas de luz para dominar la noche."
            icon={FaLightbulb}
            href="/avisos"
            className="md:col-span-1 bg-zinc-100"
            delay={0.2}
          />

          {/* Kits - Tall */}
          <BentoCard 
            title="Kits Emprendedor"
            desc="Paquetes todo incluido para arrancar rápido y barato."
            icon={FaRocket}
            href="/kits-emprendedor-publicidad"
            className="md:col-span-1 md:row-span-2 bg-tikno-yellow text-zinc-900"
            delay={0.3}
          />

          {/* Impresión */}
          <BentoCard 
            title="Impresión Digital"
            desc="Stickers, gran formato y papelería comercial."
            icon={FaPrint}
            href="/impresion"
            className="md:col-span-2 bg-zinc-100"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};
