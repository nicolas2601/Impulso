import { Metadata } from 'next';
import { PageHero } from '@/components/common/PageHero';
import { Section } from '@/components/ui/Section';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Diseño Gráfico para Empaques y Packaging | Impulso',
  description: 'Agencia de diseño de empaques en Bucaramanga. Creamos la identidad visual de tu producto. Packaging que enamora y vende.',
  alternates: {
    canonical: 'https://impulso.pro/diseno-empaques',
  },
};

export default function DisenoPage() {
  return (
    <main>
      <PageHero 
        title="Diseño Profesional de Empaques"
        subtitle="El empaque es el único vendedor que acompaña a tu producto hasta la casa del cliente. Haz que valga la pena."
        ctaText="Hablar con un diseñador"
        bgImage="https://images.unsplash.com/photo-1633535926529-65a837e3d17a?q=80&w=2000&auto=format&fit=crop"
      />
      
      <Breadcrumbs />

      <Section>
        <div className="max-w-4xl mx-auto prose prose-lg text-gray-600">
          <p className="lead text-2xl text-impulso-gray-dark font-light mb-8">
            Un buen diseño no es solo poner el logo en la caja. Es psicología, funcionalidad y branding trabajando juntos.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
            <div>
              <h3 className="text-xl font-bold text-impulso-gray-dark mb-4">Lo que hacemos</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Diseño estructural (troqueles a medida)</li>
                <li>Identidad visual y branding</li>
                <li>Rediseño de línea de productos</li>
                <li>Mockups 3D para validación</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-impulso-gray-dark mb-4">El Proceso Creativo</h3>
              <ol className="list-decimal pl-5 space-y-3 font-medium">
                <li>Briefing (Entendemos tu marca)</li>
                <li>Investigación de competencia</li>
                <li>Bocetación y Propuestas</li>
                <li>Ajustes y Arte Final</li>
              </ol>
            </div>
          </div>

          <div className="bg-impulso-blue/5 border-l-4 border-impulso-blue p-8 my-12">
            <h3 className="text-impulso-blue font-bold text-xl mb-2">¿Ya tienes quien imprima?</h3>
            <p className="mb-4">No hay problema. Te entregamos los archivos editables listos para producción en cualquier imprenta del mundo.</p>
            <Button variant="outline" href="/impresion">Pero también imprimimos :)</Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
