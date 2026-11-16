import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import type { SiteLink } from '@/data/siteLinks';

/** "Especialidades" block on a hub page: links to its landing pages so none is orphaned. */
export const RelatedLinks = ({ title, links }: { title: string; links: SiteLink[] }) => (
  <section className="bg-white py-20">
    <div className="container-impulso">
      <h2 className="text-3xl font-black tracking-tight text-zinc-900 md:text-4xl">{title}</h2>
      <nav aria-label={`Especialidades: ${title}`} className="mt-10">
        <ul className="grid gap-4 md:grid-cols-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex h-full flex-col justify-between gap-6 rounded-3xl border border-zinc-200 bg-zinc-50 p-7 transition-[border-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-zinc-900 active:scale-[0.98]"
              >
                <span>
                  <span className="block text-xl font-black tracking-tight text-zinc-900">{link.title}</span>
                  <span className="mt-2 block text-zinc-600">{link.desc}</span>
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-zinc-900">
                  Ver más <FaArrowRight aria-hidden className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </section>
);
