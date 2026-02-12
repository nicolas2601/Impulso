'use client';

import { Dispatch, SetStateAction } from 'react';

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: Dispatch<SetStateAction<string>>;
}

export const ProjectFilter = ({ categories, activeCategory, setActiveCategory }: ProjectFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      <button
        onClick={() => setActiveCategory('Todos')}
        className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
          activeCategory === 'Todos'
            ? 'bg-impulso-gray-dark text-impulso-yellow shadow-md'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        Todos
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
            activeCategory === cat
              ? 'bg-impulso-gray-dark text-impulso-yellow shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
