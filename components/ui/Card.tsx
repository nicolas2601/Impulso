'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { formatPrice } from '@/utils/formatPrice';

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  priceFrom?: number;
  badge?: string;
  href: string;
}

export const ProductCard = ({ title, description, imageSrc, priceFrom, badge, href }: ProductCardProps) => {
  return (
    <Link href={href} className="group block h-full">
      <motion.article 
        className="h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="relative h-64 overflow-hidden bg-gray-200">
          {imageSrc ? (
            <Image 
              src={imageSrc} 
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-tikno-gray-light text-gray-400 font-bold text-xl uppercase tracking-widest">
              {title.substring(0, 2)}
            </div>
          )}
          
          {badge && (
            <div className="absolute top-4 right-4 bg-tikno-yellow text-tikno-gray-dark text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
              {badge}
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-tikno-gray-dark mb-2 group-hover:text-tikno-blue transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
            {description}
          </p>
          
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
            {priceFrom && (
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase font-semibold">Desde</span>
                <span className="text-lg font-bold text-tikno-gray-dark">{formatPrice(priceFrom)}</span>
              </div>
            )}
            <span className="text-tikno-blue font-bold text-sm group-hover:translate-x-1 transition-transform">
              Ver detalles &rarr;
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
};
