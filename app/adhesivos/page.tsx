import { Metadata } from 'next';
import { PageHero } from '@/components/common/PageHero';
import { Section } from '@/components/ui/Section';
import { ProductGallery } from '@/components/products/ProductGallery';
import { FaShapes, FaFillDrip, FaStore } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Vinilos Adhesivos y Decoración de Espacios Bucaramanga | Impulso',
  description: 'Instalación de vinilo adhesivo para paredes, vidrios y fachadas. Vinilo microperforado, esmerilado y decorativo en Bucaramanga.',
  alternates: {
    canonical: 'https://impulso.pro/adhesivos',
  },
};

export default function AdhesivosPage() {
  const images = [
    '/Ahdesivos/Ahdesivos 1.jpeg',
    '/Ahdesivos/Ahdesivos 2.jpeg',
    '/Ahdesivos/Ahdesivos 3.jpeg',
    '/Ahdesivos/Ahdesivos 4.jpeg',
    '/Ahdesivos/Ahdesivos 5.jpeg',
    '/Ahdesivos/Ahdesivos 6.jpeg',
    '/Ahdesivos/Ahdesivos 7.jpeg',
    '/Ahdesivos/Ahdesivos 8.jpeg',
  ];

  const services = [
    { icon: <FaStore size={28} />, title: 'Vitrinismo', desc: 'Decoración de locales comerciales con vinilos de corte y microperforados.' },
    { icon: <FaShapes size={28} />, title: 'Murales y Paredes', desc: 'Transformamos oficinas y hogares con diseños personalizados a gran escala.' },
    { icon: <FaFillDrip size={28} />, title: 'Esmerilados', desc: 'Privacidad y elegancia para oficinas y consultorios con vinilo tipo sandblasting.' },
  ];

  return (
    <main>
      <PageHero 
        title="Vinilos Adhesivos de Alto Impacto"
        subtitle="Transformamos cualquier superficie en una oportunidad de marca. Vinilos duraderos, colores vibrantes e instalación profesional."
        ctaMessage="Hola, quiero cotizar vinilos adhesivos..."
        bgImage="/projects/VINILOS.jpeg"
        ctaText="Cotizar Adhesivos"
      />

      <ProductGallery 
        title="TRANSFORMA TUS"
        accentTitle="ESPACIOS."
        description="Especialistas en decoración comercial y corporativa. Utilizamos vinilos de alta adherencia y tintas resistentes a la intemperie."
        images={images}
        category="ADHESIVOS"
      />

      <Section bg="dark">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {services.map((service, idx) => (
            <div key={idx} className="bg-zinc-900 p-10 rounded-[2.5rem] border border-white/5 hover:border-impulso-yellow transition-all group">
              <div className="text-impulso-yellow mb-6 flex justify-center group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="font-black text-2xl mb-4 text-white uppercase tracking-tighter">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">{service.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-8 italic uppercase tracking-tighter">¿Por qué elegir nuestros vinilos?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Fácil limpieza', 'Protección UV', 'Sin burbujas', 'Retiro sin residuos', 'Alta definición'].map((tag, i) => (
              <span key={i} className="px-6 py-2 bg-impulso-yellow/10 text-impulso-yellow rounded-full font-bold text-xs uppercase border border-impulso-yellow/20">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
