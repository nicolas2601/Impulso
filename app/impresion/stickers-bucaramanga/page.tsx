import { Metadata } from 'next';
import { PageHero } from '@/components/common/PageHero';
import { Section } from '@/components/ui/Section';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { generateWhatsAppLink } from '@/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Stickers en Bucaramanga | Impresión de Etiquetas Adhesivas',
  description: 'Impresión de stickers personalizados y etiquetas adhesivas en vinilo o papel. Troquelado digital en cualquier forma. Cotiza por cantidad en WhatsApp.',
  alternates: {
    canonical: 'https://impulsopublicidad.pro/impresion/stickers-bucaramanga',
  },
};

const QUANTITIES = ['100 unds', '500 unds', '1000 unds'];

export default function StickersPage() {
  return (
    <main>
      <PageHero 
        title="Impresión de Stickers y Etiquetas"
        subtitle="Identifica tus productos, cierra tus empaques o promociona tu marca. Vinilo adhesivo resistente al agua y sol."
        ctaText="Cotizar mis stickers"
        bgImage="/trabajos/etiquetas/adriza-stickers-redondos.webp"
      />
      
      <Breadcrumbs />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Etiquetas que Pegan</h2>
            <p className="text-gray-600 mb-8">
              No es lo mismo un sticker de papel que se rompe, a uno de vinilo PVC lavable. 
              En Impulso usamos vinilo americano de alta adherencia y tintas eco-solventes.
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
                  <span className="font-bold block text-impulso-gray-dark">{m.name}</span>
                  <span className="text-xs text-gray-500">{m.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="font-bold text-xl mb-2 text-center">Cotiza por cantidad</h3>
            <p className="text-sm text-gray-500 text-center mb-6">Elige cuántos necesitas y te respondemos por WhatsApp con el valor según tamaño y material.</p>
            <ul className="space-y-3">
              {QUANTITIES.map((qty) => (
                <li key={qty}>
                  <a
                    href={generateWhatsAppLink(`Hola, quiero cotizar ${qty} de stickers.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-12 items-center justify-between rounded-lg bg-gray-50 p-4 font-bold transition-colors hover:bg-impulso-yellow/20"
                  >
                    {qty} <span className="text-sm font-semibold text-impulso-blue">Cotizar &rarr;</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button fullWidth href={generateWhatsAppLink('Hola, quiero cotizar stickers con una medida especial.')}>
                Otra cantidad o medida
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
