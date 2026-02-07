'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectData } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectFilter } from './ProjectFilter';

interface ProjectsGalleryProps {
  projects: ProjectData[];
}

export const ProjectsGallery = ({ projects }: ProjectsGalleryProps) => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const categories = Array.from(new Set(projects.map(p => p.category)));

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <ProjectFilter 
        categories={categories} 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />
      
      <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
