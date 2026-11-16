import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import { projects } from '@/data/projects';

/** Entry point to every case page, so none of them is orphaned. */
export const CaseStudies = () => (
  <section aria-labelledby="cases-title" className="bg-white py-20 md:py-24">
    <div className="container-impulso">
      <p className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500">Clientes de Bucaramanga</p>
      <h2 id="cases-title" className="mt-3 text-4xl font-black tracking-tighter text-zinc-950 md:text-6xl">
        Casos reales, de principio a fin.
      </h2>
      <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => {
          const cover = project.photos[0];
          return (
            <li key={project.slug}>
              <Link
                href={`/proyectos/${project.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden rounded-[1.75rem] bg-zinc-900 outline-none focus-visible:ring-4 focus-visible:ring-impulso-yellow"
              >
                <Image
                  src={cover.src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent" />
                {project.videos.length > 0 && (
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-zinc-950/80 px-3 py-1.5 text-[11px] font-bold text-white">
                    <FaPlay aria-hidden className="text-[8px] text-impulso-yellow" /> Con video
                  </span>
                )}
                <span className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-5">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-impulso-yellow">{project.category}</span>
                  <span className="text-xl font-black leading-tight tracking-tight text-white">{project.title}</span>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300">
                    Ver el caso <FaArrowRight aria-hidden className="text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);
