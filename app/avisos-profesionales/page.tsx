import { Metadata } from 'next';
import { PageHero } from '@/components/common/PageHero';
import { Section } from '@/components/ui/Section';
import { ProductGallery } from '@/components/products/ProductGallery';
import { FaExclamationTriangle, FaDoorOpen, FaShieldAlt } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Señalética Profesional e Industrial Bucaramanga | Impulso',
  description: 'Fabricación de señalética corporativa, industrial y de seguridad. Materiales resistentes como acrílico, PVC y aluminio en Bucaramanga.',
  alternates: {
    canonical: 'https://impulso.pro/avisos-profesionales',
  },
};

export default function SenaleticaPage() {
  const images = [
    '/Señalitica/Señalitica 1.jpeg',
    '/Señalitica/Señalitica 2.jpeg',
    '/Señalitica/Señalitica 3.jpeg',
    '/Señalitica/Señalitica 4.jpeg',
    '/Señalitica/Señalitica 5.jpeg',
  ];

  const categories = [
    { icon: <FaShieldAlt size={28} />, title: 'Corporativa', desc: 'Directorios, placas de escritorio y señalización de oficinas con acabados premium.' },
    { icon: <FaExclamationTriangle size={28} />, title: 'Industrial', desc: 'Señales de seguridad vial y salud ocupacional bajo normativa vigente.' },
    { icon: <FaDoorOpen size={28} />, title: 'Arquitectónica', desc: 'Señalización para edificios, centros comerciales y conjuntos residenciales.' },
  ];

  return (
    <main>
      <PageHero 
        title="Señalética Profesional y Corporativa"
        subtitle="Organiza y protege tus espacios con señalización de alta durabilidad. Diseñamos bajo norma y con la estética de tu marca."
        ctaMessage="Hola, quiero cotizar señalética profesional..."
        bgImage="/projects/SEÑALITICA.jpeg"
        ctaText="Cotizar Señalética"
      />

      <ProductGallery 
        title="ORDEN Y"
        accentTitle="SEGURIDAD."
        description="Soluciones integrales de señalización en materiales como Acrílico, PVC, Poliestireno y Aluminio. Visibilidad clara y duradera para interiores y exteriores."
        images={images}
        category="SEÑALÉTICA"
      />

      <Section bg="dark">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-impulso-yellow transition-all group">
              <div className="text-impulso-yellow mb-4 flex justify-center group-hover:scale-110 transition-transform">{cat.icon}</div>
              <h3 className="font-bold text-xl mb-3 text-white uppercase tracking-tighter">{cat.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-8 italic uppercase tracking-tighter">Materiales de Alta Resistencia</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Acrílico 3mm/5mm', 'PVC Espumado', 'Aluminio Compuesto', 'Vinilo Reflectivo'].map((mat, i) => (
              <div key={i} className="py-4 px-2 border border-black/10 rounded-xl font-bold text-xs uppercase bg-gray-50">
                {mat}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
