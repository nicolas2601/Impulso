import { Metadata } from 'next';
import { PageHero } from '@/components/common/PageHero';
import { Section } from '@/components/ui/Section';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { PriceRange } from '@/components/ui/PriceRange';
import { Button } from '@/components/ui/Button';
import { FaCheck } from 'react-icons/fa';
import { generateWhatsAppLink } from '@/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Cajas para Hamburguesas en Bucaramanga | Personalizadas',
  description: 'Fabricación de cajas para hamburguesas con logo en Bucaramanga. Cartón kraft antigrasa, automontables y económicas. Cotiza por millar.',
  alternates: {
    canonical: 'https://tikno.pro/empaques/cajas-hamburguesas-bucaramanga',
  },
};

export default function CajasHamburguesaPage() {
  return (
    <main>
      <PageHero 
        title="Cajas para Hamburguesas en Bucaramanga"
        subtitle="Protege el sabor y destaca tu marca. Cajas automontables, antigrasa y 100% personalizadas con tu logo."
        bgImage="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2000&auto=format&fit=crop"
        ctaText="Cotizar Cajas Ahora"
        ctaMessage="Hola, quiero cotizar cajas para hamburguesa..."
      />
      
      <Breadcrumbs />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-tikno-gray-dark">
              Especificaciones Técnicas
            </h2>
            <p className="text-gray-600 mb-6">
              Nuestras cajas están diseñadas pensando en la operación rápida de tu cocina y la experiencia de tu cliente. No se desfondan ni se humedecen.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Cartón Maule (Reverso blanco) o Kraft (Ecológico)",
                "Barrera antigrasa certificada (opcional)",
                "Sistema automontable (ahorra tiempo en cocina)",
                "Impresión offset full color o 1-2 tintas",
                "Ventilación trasera para evitar condensación"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1 text-tikno-yellow bg-tikno-gray-dark rounded-full p-1 text-xs"><FaCheck /></span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <PriceRange min={450} max={900} label="Precio por unidad (aprox)" />
          </div>
          
          <div className="grid grid-cols-1 gap-6">
             {/* Visual Placeholder for Gallery */}
             <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
               <span className="text-gray-400 font-bold">Galería Cajas Hamburguesa</span>
             </div>
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 rounded-xl h-32"></div>
                <div className="bg-gray-100 rounded-xl h-32"></div>
             </div>
          </div>
        </div>
      </Section>

      <Section bg="gray">
        <h2 className="text-3xl font-bold mb-10 text-center text-tikno-gray-dark">Opciones Disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Línea Económica", desc: "Cartón Kraft 280g, 1 tinta, sin plastificar. Ideal para iniciar.", price: "Desde $450" },
            { title: "Línea Standard", desc: "Cartón Maule reverso blanco, full color, barniz protector.", price: "Desde $650" },
            { title: "Línea Premium", desc: "Cartón rígido, plastificado mate, reserva UV sectorizada.", price: "Desde $900" }
          ].map((opt, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-xl mb-2">{opt.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{opt.desc}</p>
              <p className="text-tikno-blue font-bold text-lg mb-6">{opt.price}</p>
              <Button variant="outline" fullWidth href={generateWhatsAppLink(`Me interesa la ${opt.title} de cajas...`)}>
                Cotizar esta
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Cajas para Hamburguesas Personalizadas',
            description: 'Cajas de cartón para hamburguesas con impresión personalizada en Bucaramanga.',
            brand: { '@type': 'Brand', name: 'Tikno' },
            offers: {
              '@type': 'AggregateOffer',
              priceCurrency: 'COP',
              lowPrice: 450,
              highPrice: 900,
              offerCount: 3
            }
          })
        }}
      />
    </main>
  );
}
