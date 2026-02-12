import { Metadata } from 'next';
import { PageHero } from '@/components/common/PageHero';
import { Section } from '@/components/ui/Section';
import { ProductCard } from '@/components/ui/Card';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { productsData } from '@/data/products';
import { FaLeaf, FaPalette, FaTruck } from 'react-icons/fa';
import { Button } from '@/components/ui/Button';
import { generateWhatsAppLink } from '@/utils/whatsapp';
import { EmpaquesGallery } from '@/components/products/EmpaquesGallery';

export const metadata: Metadata = {
  title: 'Empaques Personalizados Comida Rápida | Impulso Bucaramanga',
  description: 'Fabricación de cajas para hamburguesa, bolsas de papel y empaques take away con tu logo. Materiales biodegradables y entregas rápidas en Bucaramanga.',
  alternates: {
    canonical: 'https://impulso.pro/empaques',
  },
};

export default function EmpaquesPage() {
  const products = productsData.empaques;

  const features = [
    { icon: <FaLeaf size={32} />, title: 'Materiales Eco-amigables', desc: 'Cartón kraft biodegradable y tintas a base de agua.' },
    { icon: <FaPalette size={32} />, title: 'Impresión Alta Calidad', desc: 'Tu logo nítido y colores vibrantes que destacan tu marca.' },
    { icon: <FaTruck size={32} />, title: 'Entregas Locales', desc: 'Producción rápida y envío directo a tu negocio en Bucaramanga.' },
  ];

  return (
    <main>
      <PageHero 
        title="Empaques Personalizados para tu Negocio de Comida"
        subtitle="Eleva la presentación de tus productos con cajas y bolsas que venden. Biodegradables, resistentes y a precios que te convienen."
        ctaMessage="Hola, quiero cotizar empaques personalizados..."
        bgImage="/projects/empaques.jpeg"
      />

      <EmpaquesGallery />

      <Section bg="gray">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="text-impulso-gray-dark mb-4">{feature.icon}</div>
              <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="yellow" className="text-center">
        <h2 className="text-3xl font-bold mb-6">¿No encuentras lo que buscas?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Fabricamos empaques a la medida para todo tipo de productos. Cuéntanos tu idea.
        </p>
        <Button variant="secondary" href={generateWhatsAppLink("Hola, quiero consultar por un pedido especial de empaques...")}>
          Consultar pedido especial
        </Button>
      </Section>
    </main>
  );
}
