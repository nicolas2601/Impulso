import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { PageHero } from '@/components/common/PageHero';
import { Section } from '@/components/ui/Section';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { generateWhatsAppLink } from '@/utils/whatsapp';
import { FaQuoteLeft } from 'react-icons/fa';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    return { title: 'Proyecto no encontrado' };
  }

  return {
    title: `${project.title} - Caso de Éxito Tikno`,
    description: project.description,
    openGraph: {
      images: [project.imageUrl],
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <PageHero 
        title={project.title}
        subtitle={`Categoría: ${project.category} | Cliente: ${project.client}`}
        bgImage={project.imageUrl}
        ctaText="Quiero algo así"
        ctaMessage={`Hola, vi el proyecto ${project.title} y me gustaría cotizar algo similar...`}
      />
      
      <Breadcrumbs />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-tikno-gray-dark">El Desafío</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">{project.challenge}</p>

            <h2 className="text-3xl font-bold mb-6 text-tikno-gray-dark">La Solución Tikno</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">{project.solution}</p>

            {/* Gallery */}
            <div className="space-y-6 mt-12">
              <h3 className="font-bold text-xl">Galería del Proyecto</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {project.images.map((img, idx) => (
                   <div key={idx} className="relative h-64 rounded-xl overflow-hidden bg-gray-100">
                     <Image 
                       src={img} 
                       alt={`${project.title} detalle ${idx + 1}`} 
                       fill 
                       className="object-cover hover:scale-105 transition-transform duration-500"
                     />
                   </div>
                 ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 sticky top-24">
               <h3 className="font-bold text-xl mb-6">Detalles del Proyecto</h3>
               <ul className="space-y-4 mb-8">
                 <li className="flex flex-col">
                   <span className="text-xs font-bold text-gray-400 uppercase">Cliente</span>
                   <span className="font-medium">{project.client}</span>
                 </li>
                 <li className="flex flex-col">
                   <span className="text-xs font-bold text-gray-400 uppercase">Servicio</span>
                   <span className="font-medium">{project.category}</span>
                 </li>
                 <li className="flex flex-col">
                   <span className="text-xs font-bold text-gray-400 uppercase">Ubicación</span>
                   <span className="font-medium">Bucaramanga, CO</span>
                 </li>
               </ul>

               {project.testimonial && (
                 <div className="mb-8 relative">
                   <FaQuoteLeft className="text-tikno-yellow/30 text-4xl absolute -top-4 -left-2" />
                   <blockquote className="relative z-10 italic text-gray-600 mb-4 pl-4">
                     "{project.testimonial.text}"
                   </blockquote>
                   <div className="pl-4">
                     <p className="font-bold text-sm">{project.testimonial.author}</p>
                     <p className="text-xs text-gray-400">{project.testimonial.business}</p>
                   </div>
                 </div>
               )}

               <Button fullWidth href={generateWhatsAppLink(`Me interesa un proyecto como ${project.title}`)}>
                 Cotizar Proyecto Similar
               </Button>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Schema Markup for CreativeWork */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: project.title,
            creator: {
              '@type': 'Organization',
              name: 'Tikno'
            },
            description: project.description,
            image: project.imageUrl
          })
        }}
      />
    </main>
  );
}
