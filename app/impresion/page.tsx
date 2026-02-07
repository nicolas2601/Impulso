import { Metadata } from 'next';
import { PageHero } from '@/components/common/PageHero';
import { Section } from '@/components/ui/Section';
import { ProductCard } from '@/components/ui/Card';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { productsData } from '@/data/products';

export const metadata: Metadata = {
  title: 'Impresión Digital y Gran Formato Bucaramanga | Tikno',
  description: 'Centro de impresión digital en Bucaramanga. Gran formato, vinilos adhesivos, sublimación y stickers. Calidad fotográfica y entregas express.',
  alternates: {
    canonical: 'https://tikno.pro/impresion',
  },
};

export default function ImpresionPage() {
  const products = productsData.impresion;
  // Add stickers manually as it's a subpage highlight
  const allServices = [
    {
      id: 'stickers-main',
      name: 'Stickers y Etiquetas',
      description: 'El producto más versátil. Etiquetas en rollo o individuales, troqueladas con la forma de tu logo.',
      slug: 'stickers-bucaramanga', // This links to subpage
      priceRange: { min: 40000, max: 200000 },
      isPopular: true
    },
    ...products
  ];

  return (
    <main>
      <PageHero 
        title="Impresión Digital y Offset"
        subtitle="Desde una tarjeta de presentación hasta vallas gigantes. Tecnología de punta para colores fieles y duraderos."
        ctaMessage="Hola, necesito imprimir..."
        ctaText="Cotizar Impresión"
      />
      
      <Breadcrumbs />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {allServices.map((product) => (
            <ProductCard 
              key={product.id}
              title={product.name}
              description={product.description}
              href={`/impresion/${product.slug}`}
              priceFrom={product.priceRange?.min}
              badge={product.isPopular ? 'Express' : undefined}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}
