import { Metadata } from 'next';
import Image from 'next/image';
import { photoBySrc } from '@/data/realWork';
import { PageHero } from '@/components/common/PageHero';
import { Section } from '@/components/ui/Section';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { generateWhatsAppLink } from '@/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Avisos Luminosos Bucaramanga | Cajas de Luz y Letras 3D',
  description: 'Avisos luminosos LED, cajas de luz y letras corpóreas. Aumenta tus ventas con un aviso que destaque. Garantía y mantenimiento incluido.',
  alternates: {
    canonical: 'https://impulsopublicidad.pro/avisos/avisos-luminosos-bucaramanga',
  },
};

const FACADE = photoBySrc('/trabajos/avisos/maxident-fachada.webp');

export default function AvisosLuminososPage() {
  return (
    <main>
      <PageHero 
        title="Avisos Luminosos en Bucaramanga"
        subtitle="Cajas de luz, letras corpóreas y avisos LED programables. La mejor inversión para atraer clientes a tu local físico."
        bgImage="/trabajos/avisos/syh-letras-iluminadas.webp"
        ctaText="Cotizar mi aviso"
      />
      <Breadcrumbs />
      
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Tipos de Avisos Luminosos</h2>
            <div className="space-y-6">
              {[
                { title: "Caja de Luz (Backlit)", desc: "Estructura metálica con lona translúcida e iluminación interna. La opción más económica y versátil." },
                { title: "Letras Corpóreas (3D)", desc: "Letras individuales en acrílico o metal con luz LED indirecta o frontal. Elegancia total." },
                { title: "Avisos Doble Cara (Bandera)", desc: "Se instalan perpendicular a la fachada para que te vean los peatones en ambos sentidos." }
              ].map((item) => (
                <div key={item.title} className="border-l-4 border-impulso-yellow pl-6 py-2">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <figure>
            <Image
              src={FACADE.src}
              alt={FACADE.alt}
              width={FACADE.width}
              height={FACADE.height}
              sizes="(min-width: 768px) 45vw, 100vw"
              className="h-auto max-h-[560px] w-full rounded-2xl object-cover"
            />
            <figcaption className="mt-3 text-sm text-gray-500">Trabajo real: aviso iluminado de la clínica Maxident.</figcaption>
          </figure>
        </div>
      </Section>
    </main>
  );
}
