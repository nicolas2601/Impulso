'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectData } from '@/data/projects';
import { FaArrowRight } from 'react-icons/fa';

interface ProjectCardProps {
  project: ProjectData;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-xl bg-gray-100 mb-6 break-inside-avoid"
    >
      <Link href={`/proyectos/${project.slug}`}>
        <div className="relative aspect-[4/3] w-full">
           {/* Placeholder handling if image fails or is empty, relying on next/image */}
           <Image
             src={project.imageUrl}
             alt={`Proyecto ${project.title} - Impulso`}
             fill
             className="object-cover transition-transform duration-700 group-hover:scale-110"
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="inline-block px-3 py-1 bg-impulso-yellow text-impulso-gray-dark text-xs font-bold rounded-full mb-3 w-fit">
                {project.category}
              </span>
              <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
              
              <span className="text-impulso-yellow font-bold text-sm flex items-center gap-2">
                Ver caso completo <FaArrowRight />
              </span>
           </div>
        </div>
      </Link>
    </motion.div>
  );
};
