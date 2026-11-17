import { Metadata } from 'next';
import { PageHero } from '@/components/common/PageHero';
import { Section } from '@/components/ui/Section';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { generateWhatsAppLink } from '@/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Avisos en Acrílico Bucaramanga | Señalética para Oficinas',
  description: 'Avisos en acrílico con corte láser para oficinas, recepciones y consultorios en Bucaramanga. Cotiza tu medida por WhatsApp.',
  alternates: {
    canonical: 'https://impulsopublicidad.pro/avisos/avisos-acrilico-precios',
  },
};

const SIZES = [
  { size: 'Pequeño (20x30cm)', desc: 'Ideal para puertas o escritorio' },
  { size: 'Mediano (40x60cm)', desc: 'Recepción estándar o logos' },
  { size: 'Grande (80x50cm)', desc: 'Fachadas interiores o directorios' },
  { size: 'Extra Grande (100x70cm)', desc: 'Logos corporativos principales' },
];

export default function AcrilicoPage() {
  return (
    <main>
      <PageHero 
        title="Avisos en Acrílico a tu Medida"
        subtitle="Elegancia y profesionalismo para tu oficina o consultorio. Corte láser de precisión y materiales de alta durabilidad."
        ctaText="Cotizar medida especial"
        align="center"
      />
      <Breadcrumbs />

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Tamaños de referencia</h2>
          <p className="text-center text-gray-500 mb-10">Elige un tamaño o pídenos tu medida exacta: te cotizamos por WhatsApp según material y acabado.</p>
          
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-4 font-bold text-impulso-gray-dark">Tamaño</th>
                  <th className="p-4 font-bold text-impulso-gray-dark hidden md:table-cell">Uso Recomendado</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                {SIZES.map((row) => (
                  <tr key={row.size} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-medium">{row.size}</td>
                    <td className="p-4 text-gray-500 text-sm hidden md:table-cell">{row.desc}</td>
                    <td className="p-4">
                      <Button 
                        variant="ghost" 
                        className="text-sm px-3 py-1"
                        href={generateWhatsAppLink(`Me interesa un aviso en acrílico tamaño ${row.size}`)}
                      >
                        Cotizar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>
    </main>
  );
}
