import { Metadata } from 'next';
import { PageHero } from '@/components/common/PageHero';
import { Section } from '@/components/ui/Section';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { generateWhatsAppLink } from '@/utils/whatsapp';
import { formatPrice } from '@/utils/formatPrice';

export const metadata: Metadata = {
  title: 'Avisos en Acrílico Precios | Señalética Oficina Bucaramanga',
  description: 'Precios transparentes de avisos en acrílico y vidrio templado. Señalética para oficinas, recepciones y consultorios en Bucaramanga.',
  alternates: {
    canonical: 'https://impulso.pro/avisos/avisos-acrilico-precios',
  },
};

const priceTable = [
  { size: 'Pequeño (20x30cm)', desc: 'Ideal para puertas o escritorio', price: 120000 },
  { size: 'Mediano (40x60cm)', desc: 'Recepción estándar o logos', price: 280000 },
  { size: 'Grande (80x50cm)', desc: 'Fachadas interiores o directorios', price: 450000 },
  { size: 'Extra Grande (100x70cm)', desc: 'Logos corporativos principales', price: 650000 },
];

export default function AcrilicoPage() {
  return (
    <main>
      <PageHero 
        title="Avisos en Acrílico - Precios Claros"
        subtitle="Elegancia y profesionalismo para tu oficina o consultorio. Corte láser de precisión y materiales de alta durabilidad."
        ctaText="Cotizar medida especial"
        align="center"
      />
      <Breadcrumbs />

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Tabla de Precios Referenciales</h2>
          <p className="text-center text-gray-500 mb-10">Incluye: Acrílico 3mm/5mm, corte láser, dilatadores en acero inoxidable e impresión/vinilo. No incluye instalación ($50.000 aprox).</p>
          
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-4 font-bold text-impulso-gray-dark">Tamaño</th>
                  <th className="p-4 font-bold text-impulso-gray-dark hidden md:table-cell">Uso Recomendado</th>
                  <th className="p-4 font-bold text-impulso-gray-dark">Precio Desde</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                {priceTable.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-medium">{row.size}</td>
                    <td className="p-4 text-gray-500 text-sm hidden md:table-cell">{row.desc}</td>
                    <td className="p-4 font-bold text-impulso-blue text-lg">{formatPrice(row.price)}</td>
                    <td className="p-4">
                      <Button 
                        variant="ghost" 
                        className="text-sm px-3 py-1"
                        href={generateWhatsAppLink(`Me interesa un aviso en acrílico tamaño ${row.size}`)}
                      >
                        Pedir
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
