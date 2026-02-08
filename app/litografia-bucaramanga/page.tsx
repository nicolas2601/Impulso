import { Metadata } from 'next';
import { PageHero } from '@/components/common/PageHero';
import { Section } from '@/components/ui/Section';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { generateWhatsAppLink } from '@/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Litografía Bucaramanga | Impresión Offset Mayorista',
  description: 'Servicios de litografía e imprenta offset para grandes volúmenes. Revistas, catálogos, y papelería masiva. Calidad industrial.',
  alternates: {
    canonical: 'https://tikno.pro/litografia-bucaramanga',
  },
};

export default function LitografiaPage() {
  return (
    <main>
      <PageHero 
        title="Litografía e Imprenta Offset"
        subtitle="Soluciones industriales para grandes volúmenes. La mejor relación costo-beneficio para tirajes superiores a 1.000 unidades."
        ctaText="Cotizar producción masiva"
        bgImage="https://images.unsplash.com/photo-1560241029-4d6932454b52?q=80&w=2000&auto=format&fit=crop"
      />
      
      <Breadcrumbs />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-tikno-gray-dark">
              ¿Cuándo elegir Offset (Litografía)?
            </h2>
            <p className="text-gray-600 mb-6">
              La impresión digital es fantástica para pocas unidades y entrega inmediata. Pero cuando necesitas miles de volantes, cajas o revistas, la litografía es el rey indiscutible.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
               <h3 className="font-bold mb-4">Ventajas del Offset</h3>
               <ul className="space-y-3">
                 <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                   <span>Costo por unidad</span>
                   <span className="font-bold text-green-600">Baja drásticamente con el volumen</span>
                 </li>
                 <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                   <span>Calidad de Color</span>
                   <span className="font-bold">Pantones exactos y metalizados</span>
                 </li>
                 <li className="flex justify-between items-center">
                   <span>Sustratos</span>
                   <span className="font-bold">Imprime sobre texturizados y gruesos</span>
                 </li>
               </ul>
            </div>
          </div>
          
          <div>
             <h3 className="text-2xl font-bold mb-6">Nuestros Productos Litográficos</h3>
             <div className="grid grid-cols-2 gap-4">
               {['Revistas y Catálogos', 'Cajas Plegadizas', 'Afiches B1', 'Etiquetas en Rollo', 'Libros', 'Carpetas'].map((item, i) => (
                 <div key={i} className="p-4 bg-white shadow-sm border border-gray-100 rounded-lg text-center font-medium hover:border-tikno-blue transition-colors cursor-default">
                   {item}
                 </div>
               ))}
             </div>
             
             <div className="mt-8 text-center">
               <p className="text-sm text-gray-500 mb-4">¿Dudas si tu proyecto requiere offset?</p>
               <Button variant="secondary" href={generateWhatsAppLink("Hola, necesito asesoría técnica para un proyecto de litografía...")}>Asesoría Técnica Gratuita</Button>
             </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
