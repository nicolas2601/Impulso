import { Metadata } from 'next';
import { PageHero } from '@/components/common/PageHero';
import { Section } from '@/components/ui/Section';
import { ProductGallery } from '@/components/products/ProductGallery';
import { FaShapes, FaFillDrip, FaStore, FaCheckCircle, FaQuestionCircle } from 'react-icons/fa';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/utils/schema';

export const metadata: Metadata = {
  title: 'Vinilos Adhesivos en Bucaramanga | Decoración y Publicidad | Impulso',
  description: 'Expertos en vinilos adhesivos en Bucaramanga. Decoración de paredes, vitrinas (vitrinismo), vinilo microperforado, esmerilado y stickers de alta calidad. ¡Cotiza hoy!',
  alternates: {
    canonical: 'https://impulsopublicidad.pro/adhesivos',
  },
  openGraph: {
    title: 'Vinilos Adhesivos y Decoración Profesional en Bucaramanga',
    description: 'Transformamos tus espacios con vinilos de alta adherencia. Murales, oficinas y locales comerciales.',
    url: 'https://impulsopublicidad.pro/adhesivos',
    siteName: 'Impulso Publicidad',
    images: [
      {
        url: 'https://impulsopublicidad.pro/projects/VINILOS.jpeg',
        width: 1200,
        height: 630,
        alt: 'Vinilos Adhesivos Impulso Bucaramanga',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
};

export default function AdhesivosPage() {
  const images = [
    '/Ahdesivos/Ahdesivos 1.jpeg',
    '/Ahdesivos/Ahdesivos 2.jpeg',
    '/Ahdesivos/Ahdesivos 3.jpeg',
    '/Ahdesivos/Ahdesivos 4.jpeg',
    '/Ahdesivos/Ahdesivos 5.jpeg',
    '/Ahdesivos/Ahdesivos 6.jpeg',
    '/Ahdesivos/Ahdesivos 7.jpeg',
    '/Ahdesivos/Ahdesivos 8.jpeg',
  ];

  const services = [
    { 
      icon: <FaStore size={28} />, 
      title: 'Vitrinismo Comercial', 
      desc: 'Estrategias visuales con vinilos de corte y microperforados para captar clientes en Bucaramanga.' 
    },
    { 
      icon: <FaShapes size={28} />, 
      title: 'Vinilos Decorativos', 
      desc: 'Murales y paredes personalizadas para oficinas, locales y hogares con acabado profesional.' 
    },
    { 
      icon: <FaFillDrip size={28} />, 
      title: 'Esmerilados y Privacidad', 
      desc: 'Vinilo tipo sandblasting para vidrios en oficinas y consultorios. Elegancia y funcionalidad.' 
    },
  ];

  const faqs = [
    {
      q: "¿Cuánto dura un vinilo adhesivo en exteriores?",
      a: "Nuestros vinilos de alta gama tienen una durabilidad estimada de 3 a 5 años, dependiendo de la exposición directa al sol y condiciones climáticas en Bucaramanga."
    },
    {
      q: "¿El vinilo daña la pintura de la pared al retirarlo?",
      a: "Si la pared tiene una pintura de buena calidad y está bien curada, nuestros vinilos se pueden retirar sin dejar residuos ni levantar la pintura."
    },
    {
      q: "¿Qué es el vinilo microperforado?",
      a: "Es un material ideal para vidrios de fachadas o vehículos; permite ver hacia afuera desde el interior, pero desde afuera solo se ve la publicidad impresa."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Instalación de Vinilos Adhesivos Bucaramanga",
    "description": "Servicio profesional de diseño e instalación de vinilos decorativos, microperforados y esmerilados.",
    "provider": generateLocalBusinessSchema(),
    "areaServed": [
      { "@type": "City", "name": "Bucaramanga" },
      { "@type": "City", "name": "Floridablanca" },
      { "@type": "City", "name": "Girón" },
      { "@type": "City", "name": "Piedecuesta" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Vinilos",
      "itemListElement": services.map((s, i) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.title
        }
      }))
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: 'https://impulsopublicidad.pro' },
    { name: 'Vinilos Adhesivos', url: 'https://impulsopublicidad.pro/adhesivos' }
  ]);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero 
        title="Vinilos Adhesivos Bucaramanga: Calidad que se Nota"
        subtitle="Transformamos cualquier superficie en una herramienta de ventas. Vinilos duraderos, colores reales e instalación garantizada en todo Santander."
        ctaMessage="Hola Impulso, quiero cotizar vinilos adhesivos para mi negocio..."
        bgImage="/projects/VINILOS.jpeg"
        ctaText="Cotizar Adhesivos"
      />

      <ProductGallery 
        title="DALE VIDA A TUS"
        accentTitle="PAREDES Y VIDRIOS."
        description="Somos especialistas en branding ambiental. Desde stickers pequeños hasta fachadas completas con microperforado en Bucaramanga."
        images={images}
        category="ADHESIVOS"
      />

      <Section bg="dark">
        <div className="container-impulso">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic">Nuestras Especialidades</h2>
            <p className="text-zinc-400 mt-4 max-w-2xl mx-auto font-light">Soluciones a medida para cada tipo de superficie y necesidad comercial.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-zinc-900/50 p-10 rounded-[2.5rem] border border-white/5 hover:border-impulso-yellow/50 transition-all group backdrop-blur-sm">
                <div className="text-impulso-yellow mb-6 flex justify-center group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                <h3 className="font-black text-2xl mb-4 text-white uppercase tracking-tighter text-center">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed font-light text-center">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6 italic uppercase tracking-tighter leading-none">
                ¿Por qué somos los <span className="text-impulso-yellow">mejores en vinilos?</span>
              </h2>
              <p className="text-zinc-600 mb-8 font-light leading-relaxed">
                En Impulso no solo imprimimos; entendemos que tu espacio es tu mejor vendedor. Por eso cuidamos cada detalle de la instalación.
              </p>
              <ul className="space-y-4">
                {[
                  'Materiales de marcas líderes (Avery, 3M, Arlon)',
                  'Instalación sin burbujas ni arrugas',
                  'Tintas ecológicas con protección UV',
                  'Atención rápida en toda el área metropolitana'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-800 font-bold text-sm uppercase tracking-tight">
                    <FaCheckCircle className="text-impulso-yellow text-lg shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-zinc-100 p-8 rounded-[3rem] border border-zinc-200">
              <div className="flex items-center gap-3 mb-6">
                <FaQuestionCircle className="text-impulso-yellow text-2xl" />
                <h3 className="text-2xl font-black uppercase tracking-tighter">Preguntas Frecuentes</h3>
              </div>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-zinc-200 pb-4 last:border-0">
                    <h4 className="font-black text-sm uppercase mb-2 tracking-tight">{faq.q}</h4>
                    <p className="text-zinc-500 text-sm font-light leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="dark" className="border-t border-white/5">
        <div className="container-impulso text-center py-12">
          <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-4">Servicio Local en Santander</h2>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-zinc-500 font-bold text-xs uppercase tracking-[0.2em]">
            <span>Bucaramanga</span>
            <span className="text-impulso-yellow">•</span>
            <span>Floridablanca</span>
            <span className="text-impulso-yellow">•</span>
            <span>Girón</span>
            <span className="text-impulso-yellow">•</span>
            <span>Piedecuesta</span>
          </div>
        </div>
      </Section>
    </main>
  );
}
