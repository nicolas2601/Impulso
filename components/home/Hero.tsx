'use client';

import { motion } from 'framer-motion';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-impulso-gray-dark overflow-hidden">
      {/* Background Visual - Abstract Industrial */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-impulso-gray-dark via-transparent to-impulso-gray-dark z-10" />
        {/* Placeholder for real hero image */}
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1565538420183-6879899e31d3?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-overlay" />
      </div>

      <div className="container-impulso relative z-20 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-impulso-yellow/10 text-impulso-yellow border border-impulso-yellow/20 rounded-full text-sm font-bold tracking-wider mb-6">
              SOLUCIONES VISUALES EN BUCARAMANGA
            </span>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Diseñamos, <span className="text-impulso-yellow">imprimimos</span> y fabricamos todo lo visual.
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              La forma más rápida y profesional de elevar la imagen de tu restaurante o negocio. Sin vueltas, precios claros y entrega local.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton 
                variant="primary"
                className="bg-impulso-yellow text-impulso-gray-dark hover:bg-yellow-400 shadow-[0_0_20px_rgba(247,211,51,0.3)]"
                message="Hola Impulso, quiero cotizar un proyecto para mi negocio..."
              />
              <Link 
                href="/proyectos"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white/20 text-white font-bold hover:bg-white/10 transition-colors"
              >
                Ver Proyectos
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-impulso-white to-transparent z-20" />
    </section>
  );
};
