'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChevronRight } from 'react-icons/fa';

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);

  if (paths.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-4 bg-gray-50">
      <div className="container-impulso">
        <ol className="flex items-center text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-impulso-blue transition-colors">Inicio</Link>
          </li>
          {paths.map((path, idx) => {
            const href = `/${paths.slice(0, idx + 1).join('/')}`;
            const isLast = idx === paths.length - 1;
            const title = path.replace(/-/g, ' ');

            return (
              <li key={path} className="flex items-center">
                <FaChevronRight className="mx-2 text-xs text-gray-300" />
                {isLast ? (
                  <span className="font-bold text-impulso-gray-dark capitalize" aria-current="page">
                    {title}
                  </span>
                ) : (
                  <Link href={href} className="hover:text-impulso-blue transition-colors capitalize">
                    {title}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};
