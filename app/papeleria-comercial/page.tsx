import { Metadata } from 'next';
import { PageHero } from '@/components/common/PageHero';
import { Section } from '@/components/ui/Section';
import { ProductCard } from '@/components/ui/Card';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { productsData } from '@/data/products';
import { FaFileContract, FaRegIdCard, FaFolderOpen } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Papelería Comercial Bucaramanga | Tarjetas y Factureros',
  description: 'Imprenta de papelería corporativa: tarjetas de presentación, volantes, factureros y carpetas. Precios especiales por mayor en Bucaramanga.',
  alternates: {
    canonical: 'https://impulso.pro/papeleria-comercial',
  },
};

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
              priceFrom={product.priceRange?.min}
              badge={product.isPopular ? 'Oferta' : undefined}
            />
          ))}
        </div>
      </Section>

      <Section bg="gray">
        <h2 className="text-3xl font-bold mb-12 text-center text-impulso-gray-dark">Combos Corporativos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
           {[
             { title: "Pack Inicio", items: ["1000 Tarjetas", "1000 Volantes"], price: "$140.000", save: "Ahorras $10k" },
             { title: "Pack Administrativo", items: ["10 Talonarios Factura", "2 Sellos", "1000 Tarjetas"], price: "$450.000", save: "Ahorras $40k" },
             { title: "Pack Feria", items: ["1000 Volantes", "100 Carpetas", "1 Rollup Banner"], price: "$800.000", save: "Ahorras $80k" },
           ].map((pack, i) => (
             <div key={i} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-impulso-blue relative overflow-hidden">
               <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                 {pack.save}
               </div>
               <h3 className="font-bold text-xl mb-4">{pack.title}</h3>
               <ul className="space-y-2 mb-6 text-gray-600">
                 {pack.items.map((item, idx) => (
                   <li key={idx} className="flex items-center gap-2">
                     <span className="text-impulso-blue text-sm">✓</span> {item}
                   </li>
                 ))}
               </ul>
               <p className="text-2xl font-bold text-impulso-gray-dark mb-4">{pack.price}</p>
             </div>
           ))}
        </div>
      </Section>
    </main>
  );
}
