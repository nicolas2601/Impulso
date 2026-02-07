import { Metadata } from 'next';
import { PageHero } from '@/components/common/PageHero';
import { Section } from '@/components/ui/Section';
import { ProductCard } from '@/components/ui/Card';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { productsData } from '@/data/products';
import { FaLightbulb, FaBolt, FaEye } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Avisos Luminosos y Señalética en Bucaramanga | Tikno',
  description: 'Fabricación de avisos luminosos, neón flex y señalética en acrílico. Haz que tu negocio destaque día y noche. Instalación incluida en Bucaramanga.',
  alternates: {
    canonical: 'https://tikno.pro/avisos',
  },
};

export default function AvisosPage() {
  const products = productsData.avisos;

  const benefits = [
    { icon: <FaEye size={28} />, title: 'Visibilidad 24/7', desc: 'Tu negocio vendiendo incluso cuando está cerrado.' },
    { icon: <FaBolt size={28} />, title: 'Bajo Consumo', desc: 'Tecnología LED eficiente que no impacta tu recibo de luz.' },
    { icon: <FaLightbulb size={28} />, title: 'Larga Duración', desc: 'Materiales resistentes al sol y lluvia (IP65).' },
  ];

  return (
    <main>
      <PageHero 
        title="Avisos Luminosos y Señalética para tu Negocio"
        subtitle="Que te vean desde la otra cuadra. Fabricamos avisos impactantes con tecnología LED y acabados premium."
        ctaMessage="Hola, quiero cotizar un aviso..."
        bgImage="https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2000&auto=format&fit=crop"
        ctaText="Cotizar Aviso"
      />
      
      <Breadcrumbs />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 -mt-20 relative z-30">
           {products.map((product) => (
            <ProductCard 
              key={product.id}
              title={product.name}
              description={product.description}
              href={`/avisos/${product.slug}`}
              priceFrom={product.priceRange?.min}
              badge={product.isPopular ? 'Tendencia' : undefined}
            />
          ))}
        </div>
      </Section>

      <Section bg="dark">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-tikno-yellow mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="font-bold text-xl mb-2 text-white">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center max-w-3xl mx-auto">
           <h2 className="text-3xl font-bold mb-6">Proceso de Instalación</h2>
           <p className="text-gray-600 mb-12">No te preocupes por nada. Nosotros medimos, diseñamos, fabricamos e instalamos.</p>
           
           <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold text-tikno-gray-dark">
              <div className="bg-gray-100 px-6 py-4 rounded-lg w-full">1. Visita Técnica</div>
              <div className="hidden md:block text-gray-300">➜</div>
              <div className="bg-gray-100 px-6 py-4 rounded-lg w-full">2. Diseño 3D</div>
              <div className="hidden md:block text-gray-300">➜</div>
              <div className="bg-gray-100 px-6 py-4 rounded-lg w-full">3. Fabricación</div>
              <div className="hidden md:block text-gray-300">➜</div>
              <div className="bg-tikno-yellow/20 px-6 py-4 rounded-lg w-full text-tikno-gray-dark border border-tikno-yellow">4. Instalación</div>
           </div>
        </div>
      </Section>
    </main>
  );
}
