'use client';

import { FaWhatsapp, FaCalculator, FaCogs, FaShippingFast } from 'react-icons/fa';

const steps = [
  { icon: FaWhatsapp, title: "1. Contactas", desc: "Escríbenos por WhatsApp con tu idea o lo que necesitas." },
  { icon: FaCalculator, title: "2. Cotizamos", desc: "Te damos precio rápido y asesoría gratuita sobre materiales." },
  { icon: FaCogs, title: "3. Producimos", desc: "Iniciamos fabricación apenas apruebas el diseño." },
  { icon: FaShippingFast, title: "4. Entregamos", desc: "Recibes en tu local en Bucaramanga o recoges en taller." },
];

export const ProcessTimeline = () => {
  return (
    <section className="section-padding bg-tikno-gray-light/20">
      <div className="container-tikno">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tikno-gray-dark mb-4">
            Así trabajamos en Tikno
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Sin burocracia. Un proceso simple diseñado para emprendedores ocupados.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-200 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center bg-white md:bg-transparent p-6 md:p-0 rounded-xl shadow-sm md:shadow-none">
                <div className="w-24 h-24 bg-white border-4 border-tikno-yellow rounded-full flex items-center justify-center text-3xl text-tikno-gray-dark mb-6 shadow-md relative z-10">
                  <step.icon />
                </div>
                <h3 className="text-xl font-bold mb-3 text-tikno-gray-dark">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
                
                {/* Mobile connector */}
                {idx < steps.length - 1 && (
                  <div className="md:hidden absolute bottom-[-32px] left-1/2 transform -translate-x-1/2 text-gray-300 text-2xl">
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
