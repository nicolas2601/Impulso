import { Metadata } from 'next';
import { PageHero } from '@/components/common/PageHero';
import { Section } from '@/components/ui/Section';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { PriceRange } from '@/components/ui/PriceRange';
import { Button } from '@/components/ui/Button';
import { generateWhatsAppLink } from '@/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Stickers en Bucaramanga | Impresión de Etiquetas Adhesivas',
  description: 'Impresión de stickers personalizados y etiquetas adhesivas en vinilo o papel. Troquelado digital cualquier forma. Precios por cantidad.',
  alternates: {
    canonical: 'https://tikno.pro/impresion/stickers-bucaramanga',
  },
};

export default function StickersPage() {
  return (
    <main>
      <PageHero 
        title="Impresión de Stickers y Etiquetas"
        subtitle="Identifica tus productos, cierra tus empaques o promociona tu marca. Vinilo adhesivo resistente al agua y sol."
        ctaText="Cotizar mis stickers"
        bgImage="https://images.unsplash.com/photo-1616406432452-9226f785b46c?q=80&w=2000&auto=format&fit=crop"
      />
      
      <Breadcrumbs />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Etiquetas que Pegan</h2>
            <p className="text-gray-600 mb-8">
              No es lo mismo un sticker de papel que se rompe, a uno de vinilo PVC lavable. 
              En Tikno usamos vinilo americano de alta adherencia y tintas eco-solventes.
            </p>

            <h3 className="font-bold text-xl mb-4">Materiales Disponibles</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { name: "Vinilo Blanco Brillante", desc: "El estándar. Colores vivos." },
                { name: "Vinilo Blanco Mate", desc: "Elegante, sin reflejos." },
                { name: "Vinilo Transparente", desc: "Ideal para frascos de vidrio." },
                { name: "Holográfico", desc: "Efecto arcoíris premium." }
              ].map((m, i) => (
                <li key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <span className="font-bold block text-tikno-gray-dark">{m.name}</span>
                  <span className="text-xs text-gray-500">{m.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="font-bold text-xl mb-6 text-center">Tabla de Precios (Vinilo Estándar)</h3>
            <p className="text-xs text-gray-500 text-center mb-6">Precios aproximados para stickers de 5x5cm</p>
            
            <div className="space-y-4">
              {[
                { qty: "100 unds", price: "$45.000", unit: "$450 c/u" },
                { qty: "500 unds", price: "$120.000", unit: "$240 c/u", best: true },
                { qty: "1000 unds", price: "$180.000", unit: "$180 c/u" },
              ].map((tier, i) => (
                <div key={i} className={`flex justify-between items-center p-4 rounded-lg ${tier.best ? 'bg-tikno-yellow/10 border border-tikno-yellow' : 'bg-gray-50'}`}>
                  <span className="font-bold">{tier.qty}</span>
                  <div className="text-right">
                    <span className="block font-bold text-lg">{tier.price}</span>
                    <span className="text-xs text-gray-500">{tier.unit}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button fullWidth href={generateWhatsAppLink("Quiero cotizar stickers...")}>
                Pedir esta promo
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
