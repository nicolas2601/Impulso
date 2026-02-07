import { Metadata } from 'next';
import { PageHero } from '@/components/common/PageHero';
import { Section } from '@/components/ui/Section';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { productsData } from '@/data/products';
import { FaCheckCircle, FaRocket, FaClock } from 'react-icons/fa';
import { formatPrice } from '@/utils/formatPrice';
import { generateWhatsAppLink } from '@/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Kits Publicitarios Emprendedores | Todo en Uno Bucaramanga',
  description: 'Paquetes de publicidad completos para iniciar tu negocio: Logo, avisos, papelería y redes sociales. Solución integral llave en mano.',
  alternates: {
    canonical: 'https://tikno.pro/kits-emprendedor-publicidad',
  },
};

export default function KitsPage() {
  const kits = productsData.kits;

  return (
    <main>
      <PageHero 
        title="Kit Publicitario para Emprendedores"
        subtitle="¿Abriendo local nuevo? No te compliques con 5 proveedores distintos. Aquí tienes todo lo visual para arrancar con pie derecho."
        ctaText="Ver los Kits"
        ctaMessage="Hola, me interesa un Kit Emprendedor..."
        align="center"
        bgImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop"
      />
      
      <Breadcrumbs />

      <Section>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Soluciones Llave en Mano</h2>
          <p className="text-gray-600">
            Diseñamos estos paquetes pensando en lo que realmente necesita un negocio que empieza. 
            Sin rellenos, solo herramientas para vender.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {kits.map((kit, idx) => (
             <div key={kit.id} className={`relative flex flex-col p-8 rounded-2xl border-2 transition-transform hover:-translate-y-2 ${kit.isPopular ? 'border-tikno-yellow bg-white shadow-xl scale-105 z-10' : 'border-gray-100 bg-gray-50'}`}>
               {kit.isPopular && (
                 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-tikno-yellow text-tikno-gray-dark px-4 py-1 rounded-full font-bold text-sm uppercase tracking-wide">
                   Más Vendido
                 </div>
               )}
               
               <h3 className="text-2xl font-bold mb-2">{kit.name}</h3>
               <p className="text-gray-500 mb-6 text-sm">{kit.description}</p>
               
               <div className="mb-8">
                 <span className="text-4xl font-black text-tikno-gray-dark">{formatPrice(kit.priceRange!.min)}</span>
                 <span className="text-gray-500 text-sm block mt-1">+ IVA</span>
               </div>

               <ul className="space-y-4 mb-8 flex-grow">
                 {kit.features.map((feature, i) => (
                   <li key={i} className="flex items-start gap-3">
                     <FaCheckCircle className={`mt-1 flex-shrink-0 ${kit.isPopular ? 'text-tikno-yellow' : 'text-gray-400'}`} />
                     <span className="text-gray-700 font-medium text-sm">{feature}</span>
                   </li>
                 ))}
               </ul>

               <Button 
                 variant={kit.isPopular ? 'primary' : 'outline'} 
                 fullWidth 
                 href={generateWhatsAppLink(`Me interesa el ${kit.name}...`)}
               >
                 Elegir este plan
               </Button>
             </div>
           ))}
        </div>
      </Section>

      <Section bg="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div>
             <h2 className="text-3xl font-bold mb-6">¿Por qué elegir un Kit?</h2>
             <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-tikno-blue/10 text-tikno-blue p-4 rounded-lg h-min"><FaRocket size={24} /></div>
                  <div>
                    <h4 className="font-bold text-lg">Rapidez Total</h4>
                    <p className="text-gray-600 text-sm">Producimos todo en paralelo. En 5-8 días hábiles tienes todo listo para inaugurar.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-tikno-yellow/20 text-tikno-yellow-dark p-4 rounded-lg h-min"><FaClock size={24} /></div>
                  <div>
                    <h4 className="font-bold text-lg">Ahorro de Tiempo y Dinero</h4>
                    <p className="text-gray-600 text-sm">Al comprar en paquete ahorras hasta un 20% vs productos individuales y te entiendes con un solo proveedor.</p>
                  </div>
                </div>
             </div>
           </div>
           
           <div className="bg-white p-8 rounded-xl shadow-sm">
             <h3 className="font-bold mb-4">Línea de Tiempo Promedio</h3>
             <div className="relative border-l-2 border-gray-200 ml-3 space-y-8 pl-8 py-2">
               {['Compra y Brief', 'Propuestas Diseño (2 días)', 'Aprobación y Ajustes', 'Producción (3-5 días)', 'Entrega Total'].map((step, i) => (
                 <div key={i} className="relative">
                   <div className="absolute -left-[41px] bg-tikno-gray-dark w-6 h-6 rounded-full border-4 border-white"></div>
                   <p className="font-bold text-sm text-gray-800">{step}</p>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </Section>
    </main>
  );
}
