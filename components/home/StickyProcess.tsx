'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaWhatsapp, FaCalculator, FaCogs, FaShippingFast } from 'react-icons/fa';

const steps = [
  {
    num: "01",
    title: "Contacto Directo",
    desc: "Olvídate de formularios largos. Escríbenos al WhatsApp. Te respondemos en minutos, no en días.",
    icon: FaWhatsapp,
    color: "bg-green-500"
  },
  {
    num: "02",
    title: "Propuesta Flash",
    desc: "Te damos precios claros y opciones. Si necesitas diseño, nuestros creativos entran en acción de inmediato.",
    icon: FaCalculator,
    color: "bg-impulso-yellow"
  },
  {
    num: "03",
    title: "Producción",
    desc: "Aprobado el diseño, pasamos a planta. Corte láser, impresión UV, plotter... maquinaria propia, control total.",
    icon: FaCogs,
    color: "bg-blue-600"
  },
  {
    num: "04",
    title: "Entrega / Instalación",
    desc: "Enviamos a tu local o instalamos tu aviso. Todo listo para que inaugures o renueves sin estrés.",
    icon: FaShippingFast,
    color: "bg-zinc-900"
  }
];

export const StickyProcess = () => {
  return (
    <section className="py-32 bg-zinc-50 relative">
      <div className="container-impulso">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Sticky Header */}
          <div className="lg:sticky lg:top-32 h-min">
            <h2 className="text-5xl md:text-7xl font-black text-zinc-900 mb-8 tracking-tighter leading-[0.9]">
              PROCESO <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-impulso-yellow to-orange-500">SIN FRICCIÓN.</span>
            </h2>
            <p className="text-xl text-zinc-500 max-w-md mb-12">
              Diseñamos un flujo de trabajo pensado en emprendedores que no tienen tiempo que perder.
            </p>
            <div className="hidden lg:block w-32 h-1 bg-zinc-200 rounded-full overflow-hidden">
               <motion.div 
                 className="h-full bg-impulso-yellow"
                 initial={{ width: 0 }}
                 whileInView={{ width: "100%" }}
                 transition={{ duration: 1.5 }}
               />
            </div>
          </div>

          {/* Scrolling Steps */}
          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-zinc-100 hover:border-zinc-300 transition-all hover:-translate-y-2"
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="text-6xl font-black text-zinc-100 group-hover:text-zinc-200 transition-colors">
                    {step.num}
                  </span>
                  <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center text-white text-2xl shadow-lg transform group-hover:rotate-12 transition-transform duration-500`}>
                    <step.icon />
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-zinc-900 mb-4">{step.title}</h3>
                <p className="text-zinc-500 text-lg leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
