import { Metadata } from 'next';
import { PageHero } from '@/components/common/PageHero';
import { ProjectsCollage } from '@/components/projects/ProjectsCollage';

export const metadata: Metadata = {
  title: 'Portafolio de Proyectos - Impulso Bucaramanga',
  description: 'Galería de trabajos realizados en diseño gráfico, empaques, avisos luminosos e impresión digital. Clientes satisfechos en Santander.',
  alternates: {
    canonical: 'https://impulsopublicidad.pro/proyectos',
  },
};

export default function ProyectosPage() {
  return (
    <main>
      <PageHero 
        title="Portafolio de Proyectos"
        subtitle="Hablamos con resultados. Explora una selección de proyectos realizados para marcas locales que confían en nuestra calidad."
        ctaText="Iniciar mi proyecto"
        bgImage="/projects/AVISOS.jpeg"
        align="center"
      />
      
      <ProjectsCollage />
    </main>
  );
}
