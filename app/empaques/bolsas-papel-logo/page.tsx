import { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/common/PageHero';
import { Section } from '@/components/ui/Section';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { FaRecycle } from 'react-icons/fa';
import { generateWhatsAppLink } from '@/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Bolsas de Papel con Logo | Kraft y Bond en Bucaramanga',
  description: 'Bolsas de papel personalizadas para tiendas y domicilios. Ecológicas, resistentes y económicas. Cotiza bolsas kraft con tu marca.',
  alternates: {
    canonical: 'https://impulsopublicidad.pro/empaques/bolsas-papel-logo',
  },
};

export default function BolsasPapelPage() {
  return (
    <main>
      <PageHero 
        title="Bolsas de Papel con Logo"
        subtitle="Deja de usar plástico. Pásate a bolsas biodegradables que tus clientes amarán reutilizar. Publicidad móvil para tu marca."
        ctaText="Cotizar bolsas"
        ctaMessage="Hola, quiero cotizar bolsas de papel..."
      />
      
      <Breadcrumbs />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="order-2 md:order-1">
             <Image
               src="/Empaques/Empaques 7.webp"
               alt="Bolsas de papel con logo impresas para Helados Japi"
               width={1081}
               height={1081}
               sizes="(min-width: 768px) 45vw, 100vw"
               className="h-full w-full rounded-2xl object-cover"
             />
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6 text-impulso-gray-dark">
              Tu marca caminando por toda la ciudad
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Una bolsa bonita no se bota, se reutiliza. Convierte a cada cliente en un embajador de tu marca con bolsas de alta resistencia y diseño impecable.
            </p>

            <div className="flex gap-8 mb-8">
              <div className="flex flex-col gap-2">
                <FaRecycle className="text-green-600 text-2xl" />
                <span className="font-bold text-sm">100%<br/>Reciclables</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-black text-impulso-gray-dark">90g+</span>
                <span className="font-bold text-sm">Resistencia<br/>Superior</span>
              </div>
            </div>

            <div className="mt-8">
              <Button href={generateWhatsAppLink("Me interesan las bolsas de papel...")}>
                Solicitar catálogo de medidas
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
