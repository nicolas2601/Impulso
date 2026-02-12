import { Metadata } from 'next';
import { PageHero } from '@/components/common/PageHero';
import { Section } from '@/components/ui/Section';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { projects } from '@/data/projects';
import { ProjectsGallery } from '@/components/projects/ProjectsGallery';

export const metadata: Metadata = {
  title: 'Portafolio de Proyectos - Impulso Bucaramanga',
  description: 'Galería de trabajos realizados en diseño gráfico, empaques, avisos luminosos e impresión digital. Clientes satisfechos en Santander.',
  alternates: {
    canonical: 'https://impulso.pro/proyectos',
  },
};

export default function ProyectosPage() {
  return (
    <main>
      <PageHero 
        title="Nuestros Trabajos"
        subtitle="Hablamos con resultados. Explora una selección de proyectos realizados para marcas locales que confían en nuestra calidad."
        ctaText="Iniciar mi proyecto"
        bgImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop"
      />
      
      <Breadcrumbs />

      <Section>
        <ProjectsGallery projects={projects} />
      </Section>
    </main>
  );
}
