import { Metadata } from 'next';
import { PageHero } from '@/components/common/PageHero';
import { Section } from '@/components/ui/Section';
import { ProductGallery } from '@/components/products/ProductGallery';
import { FaEye, FaBolt, FaLightbulb } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Avisos Luminosos y Letreros Bucaramanga | Impulso',
  description: 'Fabricación de avisos luminosos, neón flex, letras corpóreas y cajas de luz. Visibilidad 24/7 para tu negocio en Bucaramanga.',
  alternates: {
    canonical: 'https://impulso.pro/avisos',
  },
};

export default function AvisosPage() {
  const images = [
    '/Avisos/Avisos 1.jpeg',
    '/Avisos/Avisos 2.jpeg',
    '/Avisos/Avisos 3.jpeg',
    '/Avisos/Avisos 4.jpeg',
    '/Avisos/Avisos 5.jpeg',
  ];

  const benefits = [
    { icon: <FaEye size={28} />, title: 'Visibilidad 24/7', desc: 'Tu negocio vendiendo incluso cuando está cerrado.' },
    { icon: <FaBolt size={28} />, title: 'Bajo Consumo', desc: 'Tecnología LED eficiente que no impacta tu recibo de luz.' },
    { icon: <FaLightbulb size={28} />, title: 'Larga Duración', desc: 'Materiales resistentes al sol y lluvia (IP65).' },
  ];

  return (
    <main>
      <PageHero 
        title="Avisos Luminosos que Impactan"
        subtitle="Hacemos que tu marca brille día y noche. Avisos en acrílico, neón flex y estructuras metálicas con acabados industriales."
        ctaMessage="Hola, quiero cotizar un aviso luminoso..."
        bgImage="/projects/AVISOS.jpeg"
        ctaText="Cotizar Aviso"
      />

      <ProductGallery 
        title="ILUMINA TU"
        accentTitle="MARCA."
        description="Cada aviso es una pieza de ingeniería visual. Utilizamos materiales premium para garantizar que tu inversión destaque por años."
        images={images}
        category="AVISOS"
      />

      <Section bg="dark">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-impulso-yellow mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="font-bold text-xl mb-2 text-white">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center max-w-3xl mx-auto">
           <h2 className="text-3xl font-bold mb-6 italic tracking-tighter uppercase">PROCESO DE INSTALACIÓN</h2>
           <p className="text-gray-600 mb-12">No te preocupes por nada. Nosotros medimos, diseñamos, fabricamos e instalamos en todo Santander.</p>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm font-bold text-impulso-gray-dark">
              <div className="bg-gray-100 px-6 py-6 rounded-2xl w-full border border-black/5">1. Visita Técnica</div>
              <div className="bg-gray-100 px-6 py-6 rounded-2xl w-full border border-black/5">2. Diseño 3D</div>
              <div className="bg-gray-100 px-6 py-6 rounded-2xl w-full border border-black/5">3. Fabricación</div>
              <div className="bg-impulso-yellow px-6 py-6 rounded-2xl w-full text-black border border-black/10">4. Instalación</div>
           </div>
        </div>
      </Section>
    </main>
  );
}
