import { Metadata } from 'next';
import { PageHero } from '@/components/common/PageHero';
import { Section } from '@/components/ui/Section';
import { ProductGallery } from '@/components/products/ProductGallery';
import { photosOf } from '@/data/realWork';
import { FaPrint, FaLayerGroup, FaMagic } from 'react-icons/fa';
import { RelatedLinks } from '@/components/common/RelatedLinks';
import { RELATED_LINKS } from '@/data/siteLinks';

export const metadata: Metadata = {
  title: { absolute: 'Impresión Litográfica y Digital en Bucaramanga | Impulso' },
  description: 'Servicios de impresión de alta calidad: volantes, tarjetas, catálogos y gran formato. Colores vibrantes y acabados profesionales en Bucaramanga.',
  alternates: {
    canonical: 'https://impulsopublicidad.pro/impresion',
  },
};

export default function ImpresionPage() {
  const images = photosOf('Impresión');

  const features = [
    { icon: <FaPrint size={28} />, title: 'Calidad Litográfica', desc: 'Colores precisos y textos nítidos en cada impresión.' },
    { icon: <FaLayerGroup size={28} />, title: 'Variedad de Papeles', desc: 'Desde propalcote hasta papeles especiales texturizados.' },
    { icon: <FaMagic size={28} />, title: 'Acabados de Lujo', desc: 'Plastificado mate, brillante, reserva UV y troquelados.' },
  ];

  return (
    <main>
      <PageHero 
        title="Impresión Litográfica Profesional"
        subtitle="Tu marca merece la mejor calidad de impresión. Soluciones rápidas para papelería corporativa y material publicitario."
        ctaMessage="Hola, quiero cotizar servicios de impresión..."
        bgImage="/projects/IMPRESION.webp"
        ctaText="Cotizar Impresión"
      />

      <ProductGallery 
        title="IMPRESIÓN SIN"
        accentTitle="LÍMITES."
        description="Transformamos tus diseños en piezas físicas de alto impacto. Desde tarjetas de presentación hasta brochures corporativos, cada detalle cuenta."
        images={images}
        category="Impresión"
      />

      <Section bg="gray">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-impulso-yellow mb-4 bg-zinc-900 p-6 rounded-2xl shadow-lg">{feature.icon}</div>
              <h3 className="font-black text-xl mb-3 uppercase tracking-tighter">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Section>
      <RelatedLinks title="Lo que imprimimos" links={RELATED_LINKS.impresion} />
    </main>
  );
}
