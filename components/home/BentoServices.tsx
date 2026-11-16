'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaBox, 
  FaLightbulb, 
  FaPrint, 
  FaArrowRight, 
  FaFillDrip, 
  FaTags, 
  FaDirections, 
  FaBriefcase 
} from 'react-icons/fa';
import type { IconType } from 'react-icons';

type Tone = 'light' | 'dark' | 'accent';

interface BentoCardProps {
  title: string;
  desc: string;
  icon: IconType;
  href: string;
  className: string;
  index: number;
  tone?: Tone;
}

const TONES: Record<Tone, { card: string; title: string; desc: string; link: string }> = {
  light: { card: 'bg-zinc-50 border-zinc-100 hover:border-zinc-300', title: 'text-zinc-900', desc: 'text-zinc-500', link: 'text-zinc-900 hover:text-zinc-500' },
  dark: { card: 'bg-zinc-900 border-zinc-800 hover:border-zinc-600', title: 'text-white', desc: 'text-zinc-400', link: 'text-white hover:text-impulso-yellow' },
  accent: { card: 'bg-impulso-yellow border-impulso-yellow hover:border-zinc-900', title: 'text-zinc-900', desc: 'text-zinc-800', link: 'text-zinc-900 hover:text-zinc-600' },
};

const BentoCard = ({ title, desc, icon: Icon, href, className, index, tone = 'light' }: BentoCardProps) => {
  const t = TONES[tone];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.06, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className={`group relative overflow-hidden rounded-3xl border p-8 flex flex-col justify-between transition-[border-color,box-shadow] duration-300 hover:shadow-xl ${t.card} ${className}`}
    >
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110">
        <Icon size={120} />
      </div>

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-impulso-yellow text-black flex items-center justify-center mb-6 text-xl">
          <Icon />
        </div>
        <h3 className={`text-2xl font-bold mb-2 ${t.title}`}>{title}</h3>
        <p className={`font-medium leading-relaxed max-w-sm ${t.desc}`}>{desc}</p>
      </div>

      <div className="relative z-10 mt-8">
        <Link href={href} className={`inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide transition-colors duration-200 ${t.link}`}>
          Explorar <FaArrowRight />
        </Link>
      </div>
    </motion.div>
  );
};

export const BentoServices = () => {
  return (
    <section data-ground="#ffffff" className="py-24 bg-white">
      <div className="container-impulso">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 tracking-tight">
            TODO LO QUE NECESITAS. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-impulso-yellow to-yellow-600">EN UN SOLO LUGAR.</span>
          </h2>
          <p className="text-xl text-zinc-500 px-4 md:px-0">
            Simplificamos la producción visual de tu negocio. Calidad industrial, diseño boutique para cada necesidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
          {/* Empaques */}
          <BentoCard 
            title="Empaques"
            desc="Cajas y bolsas personalizadas que elevan la experiencia de unboxing de tu marca."
            icon={FaBox}
            href="/empaques"
            className="md:col-span-2"
            tone="dark"
            index={0}
          />
          
          {/* Avisos */}
          <BentoCard 
            title="Avisos"
            desc="Letreros luminosos y neón flex para que tu negocio destaque día y noche."
            icon={FaLightbulb}
            href="/avisos"
            className="md:col-span-1"
            index={1}
          />

          {/* Adhesivos */}
          <BentoCard 
            title="Adhesivos"
            desc="Vinilos decorativos y microperforados para transformar tus paredes y vidrios."
            icon={FaFillDrip}
            href="/adhesivos"
            className="md:col-span-1"
            index={2}
          />

          {/* Etiquetas */}
          <BentoCard 
            title="Etiquetas"
            desc="Stickers y etiquetas adhesivas de alta resistencia para todos tus productos."
            icon={FaTags}
            href="/etiquetas"
            className="md:col-span-1"
            tone="accent"
            index={3}
          />

          {/* Señalética */}
          <BentoCard 
            title="Señalética"
            desc="Sistemas de señalización profesional para interiores y exteriores de empresas."
            icon={FaDirections}
            href="/avisos-profesionales"
            className="md:col-span-1"
            index={4}
          />

          {/* Impresión */}
          <BentoCard 
            title="Impresión"
            desc="Gran formato, papelería comercial y servicios de litografía de alta precisión."
            icon={FaPrint}
            href="/impresion"
            className="md:col-span-2"
            index={5}
          />

          {/* Proyectos */}
          <BentoCard 
            title="Proyectos"
            desc="Explora nuestro portafolio de trabajos realizados para clientes satisfechos."
            icon={FaBriefcase}
            href="/proyectos"
            className="md:col-span-1"
            tone="dark"
            index={6}
          />
        </div>
      </div>
    </section>
  );
};
