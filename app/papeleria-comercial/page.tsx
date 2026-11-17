import { Metadata } from 'next';
import { PageHero } from '@/components/common/PageHero';
import { Section } from '@/components/ui/Section';
import { ProductCard } from '@/components/ui/Card';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { productsData } from '@/data/products';
import { FaWhatsapp } from 'react-icons/fa';
import { generateWhatsAppLink } from '@/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Papelería Comercial Bucaramanga | Tarjetas y Factureros',
  description: 'Imprenta de papelería corporativa: tarjetas de presentación, volantes, factureros y carpetas. Precios especiales por mayor en Bucaramanga.',
  alternates: {
    canonical: 'https://impulsopublicidad.pro/papeleria-comercial',
  },
};

const PACKS = [
  { title: 'Pack Inicio', items: ['1000 Tarjetas', '1000 Volantes'] },
  { title: 'Pack Administrativo', items: ['10 Talonarios Factura', '2 Sellos', '1000 Tarjetas'] },
  { title: 'Pack Feria', items: ['1000 Volantes', '100 Carpetas', '1 Rollup Banner'] },
];

export default function PapeleriaPage() {
  const products = productsData.papeleria;

  return (
    <main>
      <PageHero 
        title="Papelería Corporativa que Vende"
        subtitle="Tu imagen es lo primero. Tarjetas, volantes y papelería administrativa con acabados profesionales que generan confianza."
        ctaMessage="Hola, quiero cotizar papelería..."
        ctaText="Ver catálogo PDF"
      />
      
      <Breadcrumbs />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {products.map((product) => (
            <ProductCard 
              key={product.id}
              title={product.name}
              description={product.description}
              href="#"
            />
          ))}
        </div>
      </Section>

      <Section bg="gray">
        <h2 className="text-3xl font-bold mb-12 text-center text-impulso-gray-dark">Combos Corporativos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
           {PACKS.map((pack) => (
             <article key={pack.title} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-impulso-blue flex flex-col">
               <h3 className="font-bold text-xl mb-4">{pack.title}</h3>
               <ul className="space-y-2 mb-8 text-gray-600">
                 {pack.items.map((item) => (
                   <li key={item} className="flex items-center gap-2">
                     <span aria-hidden className="text-impulso-blue text-sm">✓</span> {item}
                   </li>
                 ))}
               </ul>
               <a
                 href={generateWhatsAppLink(`Hola, quiero cotizar el ${pack.title}: ${pack.items.join(', ')}.`)}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="mt-auto inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-impulso-gray-dark px-6 py-3 font-bold text-white transition-transform duration-150 active:scale-[0.97]"
               >
                 <FaWhatsapp aria-hidden /> Cotizar este pack
               </a>
             </article>
           ))}
        </div>
      </Section>
    </main>
  );
}
