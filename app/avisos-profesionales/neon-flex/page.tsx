import { Metadata } from 'next';
import { PageHero } from '@/components/common/PageHero';
import { Section } from '@/components/ui/Section';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { generateWhatsAppLink } from '@/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Letreros Neón Flex Personalizados | Impulso Bucaramanga',
  description: 'Diseño y fabricación de letreros en neón flex. Decoración moderna para bares, restaurantes y habitaciones. Colores vibrantes y bajo consumo.',
  alternates: {
    canonical: 'https://impulso.pro/avisos/neon-flex',
  },
};

export default function NeonFlexPage() {
  return (
    <main>
      <PageHero 
        title="Letreros Neón Flex Personalizados"
        subtitle="Dale vida y color a tus espacios con la tecnología Neón Flex. Más brillante, más seguro y más económico que el neón tradicional."
        bgImage="https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2000&auto=format&fit=crop"
        ctaText="Diseñar mi Neón"
      />
      <Breadcrumbs />

      <Section bg="dark">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div>
             <h2 className="text-3xl font-bold mb-6 text-white">¿Por qué Neón Flex?</h2>
             <ul className="space-y-4 text-gray-300">
               <li className="flex items-center gap-3">
                 <span className="w-3 h-3 rounded-full bg-impulso-yellow"></span>
                 No se rompe (es silicona, no vidrio)
               </li>
               <li className="flex items-center gap-3">
                 <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                 Bajo consumo (12V)
               </li>
               <li className="flex items-center gap-3">
                 <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                 Vida útil de 30.000 horas
               </li>
               <li className="flex items-center gap-3">
                 <span className="w-3 h-3 rounded-full bg-green-500"></span>
                 Seguro al tacto (no calienta)
               </li>
             </ul>
             
             <div className="mt-8">
               <p className="text-sm text-gray-400 mb-2 font-bold uppercase">Colores Disponibles</p>
               <div className="flex gap-2">
                 {['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-400', 'bg-pink-500', 'bg-purple-500', 'bg-white'].map((color, i) => (
                   <div key={i} className={`w-8 h-8 rounded-full ${color} border-2 border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.3)]`}></div>
                 ))}
               </div>
             </div>
           </div>
           
           <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-pink-600 to-purple-600 opacity-30 blur-xl rounded-full"></div>
             <div className="relative bg-black/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm text-center">
                <p className="text-5xl font-black text-white drop-shadow-[0_0_10px_rgba(255,0,255,0.8)] font-serif italic mb-4">
                  Open Late
                </p>
                <p className="text-gray-400 text-sm">Ejemplo de acabado real</p>
             </div>
           </div>
        </div>
      </Section>
    </main>
  );
}
