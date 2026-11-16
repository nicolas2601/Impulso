import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import { projects } from '@/data/projects';
import { SITE_CONFIG } from '@/constants/info';
import { PageHero } from '@/components/common/PageHero';
import { Section } from '@/components/ui/Section';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { VideoClip } from '@/components/common/VideoClip';
import { generateWhatsAppLink } from '@/utils/whatsapp';

interface Props {
  params: Promise<{ slug: string }>;
}

const findProject = async ({ params }: Props) => {
  const { slug } = await params;
  return projects.find((p) => p.slug === slug);
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const project = await findProject(props);
  if (!project) return { title: 'Proyecto no encontrado' };
  return {
    title: `${project.title} - Trabajo real`,
    description: project.summary,
    alternates: { canonical: `${SITE_CONFIG.domain}/proyectos/${project.slug}` },
    openGraph: { images: [project.photos[0].src] },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage(props: Props) {
  const project = await findProject(props);
  if (!project) notFound();

  const cover = project.photos[0];
  const quote = generateWhatsAppLink(`Hola, vi el trabajo "${project.title}" y quiero cotizar algo similar.`);

  return (
    <main>
      <PageHero
        title={project.title}
        subtitle={`${project.category} · ${project.client} · Bucaramanga`}
        bgImage={cover.src}
        ctaText="Quiero algo así"
        ctaMessage={`Hola, vi el trabajo "${project.title}" y me gustaría cotizar algo similar.`}
      />

      <Breadcrumbs />

      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-3xl font-bold text-impulso-gray-dark">Qué hicimos</h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">{project.summary}</p>
            <ul className="mb-12 space-y-3">
              {project.pieces.map((piece) => (
                <li key={piece} className="flex items-center gap-3 font-medium text-zinc-800">
                  <FaCheck aria-hidden className="text-impulso-yellow" /> {piece}
                </li>
              ))}
            </ul>

            <h3 className="mb-6 text-xl font-bold">Fotos del trabajo</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.photos.map((photo) => (
                <Image
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full rounded-2xl bg-zinc-100"
                />
              ))}
            </div>

            {project.videos.length > 0 && (
              <>
                <h3 className="mb-6 mt-12 text-xl font-bold">En video</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {project.videos.map((video) => (
                    <figure key={video.src} className={video.orientation === 'landscape' ? 'sm:col-span-2' : ''}>
                      <VideoClip video={video} />
                      <figcaption className="mt-2 text-sm text-zinc-500">{video.title}</figcaption>
                    </figure>
                  ))}
                </div>
              </>
            )}
          </div>

          <aside className="space-y-8">
            <div className="sticky top-24 rounded-xl border border-gray-100 bg-gray-50 p-8">
              <h3 className="mb-6 text-xl font-bold">Detalles del proyecto</h3>
              <dl className="mb-8 space-y-4">
                {[
                  ['Cliente', project.client],
                  ['Servicio', project.category],
                  ['Ubicación', 'Bucaramanga, CO'],
                ].map(([term, value]) => (
                  <div key={term} className="flex flex-col">
                    <dt className="text-xs font-bold uppercase text-gray-500">{term}</dt>
                    <dd className="font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
              <Button fullWidth href={quote}>
                Cotizar proyecto similar
              </Button>
              <nav aria-label="Servicios relacionados" className="mt-8">
                <ul className="space-y-2">
                  {project.relatedServices.map((service) => (
                    <li key={service.href}>
                      <Link href={service.href} className="inline-flex min-h-11 items-center gap-2 font-semibold text-zinc-900 underline-offset-4 hover:underline">
                        {service.title} <FaArrowRight aria-hidden className="text-xs" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: project.title,
            creator: { '@type': 'Organization', name: SITE_CONFIG.name },
            description: project.summary,
            image: `${SITE_CONFIG.domain}${cover.src}`,
            locationCreated: { '@type': 'Place', name: 'Bucaramanga, Colombia' },
          }),
        }}
      />
    </main>
  );
}
