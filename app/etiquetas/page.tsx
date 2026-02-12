import { Metadata } from 'next';
import { PageHero } from '@/components/common/PageHero';
import { Section } from '@/components/ui/Section';
import { ProductGallery } from '@/components/products/ProductGallery';
import { FaTag, FaCheckCircle, FaBoxOpen } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Etiquetas y Stickers Personalizados Bucaramanga | Impulso',
  description: 'Fabricación de etiquetas adhesivas para productos, stickers en rollo y etiquetas de cartón. Impresión de alta calidad para marcas en Bucaramanga.',
  alternates: {
    canonical: 'https://impulsopublicidad.pro/etiquetas',
  },
};

export default function EtiquetasPage() {
  const images = [
    '/Etiquetas/Etiquetas 1.jpeg',
    '/Etiquetas/Etiquetas 2.jpeg',
    '/Etiquetas/Etiquetas 3.jpeg',
    '/Etiquetas/Etiquetas 4.jpeg',
  ];

  const highlights = [
    { icon: <FaTag size={28} />, title: 'Troquelado Especial', desc: 'Damos la forma que quieras a tus etiquetas: círculos, cuadrados o formas personalizadas.' },
    { icon: <FaCheckCircle size={28} />, title: 'Diferentes Acabados', desc: 'Mate, brillante o mate con reserva UV para un toque premium.' },
    { icon: <FaBoxOpen size={28} />, title: 'Resistencia Total', desc: 'Vinilos resistentes al agua, frío y calor, ideales para alimentos y cosméticos.' },
  ];

  return (
    <main>
      <PageHero 
        title="Etiquetas que Venden por Ti"
        subtitle="El detalle final que marca la diferencia. Stickers y etiquetas de alta calidad para empaques, botellas, ropa y más."
        ctaMessage="Hola, quiero cotizar etiquetas personalizadas..."
        bgImage="/projects/ETIQUETAS.jpeg"
        ctaText="Cotizar Etiquetas"
      />

      <ProductGallery 
        title="IDENTIDAD EN"
        accentTitle="CADA PRODUCTO."
        description="Imprimimos etiquetas en vinilo adhesivo y cartón con la mejor resolución del mercado. Perfectas para emprendimientos y grandes marcas que buscan destacar."
        images={images}
        category="ETIQUETAS"
      />

      <Section bg="yellow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-black mb-4 bg-white/30 p-5 rounded-full">{item.icon}</div>
              <h3 className="font-black text-xl mb-3 uppercase tracking-tighter">{item.title}</h3>
              <p className="text-zinc-800 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
