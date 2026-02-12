import { Metadata } from 'next';
import { PageHero } from '@/components/common/PageHero';
import { Section } from '@/components/ui/Section';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { generateWhatsAppLink } from '@/utils/whatsapp';
import { formatPrice } from '@/utils/formatPrice';

export const metadata: Metadata = {
  title: 'Avisos Luminosos Bucaramanga | Cajas de Luz y Letras 3D',
  description: 'Avisos luminosos LED, cajas de luz y letras corpóreas. Aumenta tus ventas con un aviso que destaque. Garantía y mantenimiento incluido.',
  alternates: {
    canonical: 'https://impulsopublicidad.pro/avisos/avisos-luminosos-bucaramanga',
  },
};

export default function AvisosLuminososPage() {
  return (
    <main>
      <PageHero 
        title="Avisos Luminosos en Bucaramanga"
        subtitle="Cajas de luz, letras corpóreas y avisos LED programables. La mejor inversión para atraer clientes a tu local físico."
        bgImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop"
        ctaText="Cotizar mi aviso"
      />
      <Breadcrumbs />
      
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Tipos de Avisos Luminosos</h2>
            <div className="space-y-6">
              {[
                { title: "Caja de Luz (Backlit)", desc: "Estructura metálica con lona translúcida e iluminación interna. La opción más económica y versátil.", price: "Desde $450.000" },
                { title: "Letras Corpóreas (3D)", desc: "Letras individuales en acrílico o metal con luz LED indirecta o frontal. Elegancia total.", price: "Desde $1.200.000" },
                { title: "Avisos Doble Cara (Bandera)", desc: "Se instalan perpendicular a la fachada para que te vean los peatones en ambos sentidos.", price: "Desde $350.000" }
              ].map((item, idx) => (
                <div key={idx} className="border-l-4 border-impulso-yellow pl-6 py-2">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-1">{item.desc}</p>
                  <span className="text-impulso-blue font-bold text-sm">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-900 rounded-2xl h-80 flex items-center justify-center text-white/20 font-bold text-2xl">
            Galería Instalaciones
          </div>
        </div>
      </Section>
    </main>
  );
}
