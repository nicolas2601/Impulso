'use client';

import { motion } from 'framer-motion';
import { FaBoxOpen, FaLightbulb, FaFileAlt, FaRocket, FaPrint } from 'react-icons/fa';
import Link from 'next/link';

const services = [
  {
    icon: FaBoxOpen,
    title: "Empaques Personalizados",
    desc: "Cajas y bolsas con tu marca que venden por sí solas. Ideal para comida rápida.",
    link: "/empaques",
    color: "group-hover:text-orange-500"
  },
  {
    icon: FaLightbulb,
    title: "Avisos Luminosos",
    desc: "Haz que tu negocio brille de noche. Neón flex, acrílico y cajas de luz.",
    link: "/avisos",
    color: "group-hover:text-yellow-400"
  },
  {
    icon: FaFileAlt,
    title: "Papelería Comercial",
    desc: "Tarjetas, volantes y factureros que proyectan profesionalismo total.",
    link: "/papeleria-comercial",
    color: "group-hover:text-blue-500"
  },
  {
    icon: FaRocket,
    title: "Kits Emprendedor",
    desc: "Solución todo incluido para abrir tu negocio sin estrés. Ahorra hasta 20%.",
    link: "/kits-emprendedor-publicidad",
    color: "group-hover:text-purple-500",
    featured: true
  },
  {
    icon: FaPrint,
    title: "Impresión Digital",
    desc: "Stickers, etiquetas y gran formato con entrega express en Bucaramanga.",
    link: "/impresion",
    color: "group-hover:text-cyan-500"
  }
];

export const ServicesGrid = () => {
  return (
    <section className="section-padding bg-tikno-gray-light/30">
      <div className="container-tikno">
        <div className="mb-12 md:text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-tikno-gray-dark mb-4">
            Todo lo que tu marca necesita
          </h2>
          <p className="text-gray-600">
            Soluciones integrales de producción gráfica. Diseñado para vender, no solo para verse bonito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Link href={service.link} key={idx} className={`group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-tikno-gray-light ${service.featured ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-br from-tikno-gray-dark to-black text-white' : ''}`}>
              <div className={`text-4xl mb-6 text-tikno-gray-dark transition-colors duration-300 ${service.featured ? 'text-tikno-yellow' : service.color}`}>
                <service.icon />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${service.featured ? 'text-white' : 'text-tikno-gray-dark'}`}>
                {service.title}
              </h3>
              <p className={`leading-relaxed ${service.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                {service.desc}
              </p>
              
              <div className="mt-6 flex items-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                <span className={service.featured ? 'text-tikno-yellow' : 'text-tikno-blue'}>VER DETALLES &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
