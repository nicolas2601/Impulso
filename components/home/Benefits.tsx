'use client';

import { FaTruck, FaTag, FaPencilRuler } from 'react-icons/fa';

const benefits = [
  {
    icon: FaTruck,
    title: "Entrega Rápida Local",
    desc: "Estamos en Bucaramanga. Olvídate de envíos nacionales demorados. Entregamos en tiempos récord."
  },
  {
    icon: FaTag,
    title: "Precios Transparentes",
    desc: "Sin sorpresas ni cotizaciones eternas. Te damos rangos claros desde el principio para que decidas rápido."
  },
  {
    icon: FaPencilRuler,
    title: "Asesoría de Diseño",
    desc: "No solo imprimimos. Te asesoramos para que tus archivos queden perfectos y tu marca destaque."
  }
];

export const Benefits = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-tikno">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-tikno-yellow/20 rounded-full flex items-center justify-center text-3xl text-tikno-gray-dark mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon />
              </div>
              <h3 className="text-xl font-bold mb-4 text-tikno-gray-dark">{benefit.title}</h3>
              <p className="text-gray-600 max-w-xs">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
