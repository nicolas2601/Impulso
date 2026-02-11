'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { FaBars, FaTimes, FaWhatsapp, FaBolt } from 'react-icons/fa';
import { generateWhatsAppLink } from '@/utils/whatsapp';

const navLinks = [
  { name: 'Empaques', href: '/empaques' },
  { name: 'Avisos', href: '/avisos' },
  { name: 'Kits', href: '/kits-emprendedor-publicidad' },
  { name: 'Proyectos', href: '/proyectos' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-2 md:pt-4 px-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <motion.div 
          className={`relative flex items-center justify-between px-6 py-2.5 rounded-full border transition-all duration-300 ${
            isScrolled 
              ? 'bg-black/80 backdrop-blur-xl border-white/10 shadow-2xl w-full max-w-4xl' 
              : 'bg-transparent border-transparent w-full max-w-7xl'
          }`}
          animate={{
            width: isScrolled ? "90%" : "100%",
            maxWidth: isScrolled ? "56rem" : "80rem",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-tikno-yellow p-1.5 rounded-lg text-black transform group-hover:rotate-12 transition-transform">
              <FaBolt size={16} />
            </div>
            <span className={`text-xl font-black tracking-tighter ${isScrolled ? 'text-white' : 'text-zinc-900'} uppercase`}>
              Impulso
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                    isActive 
                      ? 'bg-white text-black shadow-sm' 
                      : isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <motion.a
              href={generateWhatsAppLink("Hola Impulso, quiero cotizar...")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-tikno-yellow text-black px-5 py-2 rounded-full font-bold text-sm hover:bg-yellow-300 transition-colors shadow-[0_0_15px_rgba(247,211,51,0.4)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp size={16} />
              <span>Cotizar</span>
            </motion.a>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-full ${isScrolled ? 'text-white hover:bg-white/10' : 'text-black hover:bg-black/5'}`}
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-40 bg-zinc-900 flex flex-col items-center justify-center p-6 md:hidden"
          >
            <nav className="flex flex-col items-center gap-6 w-full max-w-xs">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="w-full"
                >
                  <Link 
                    href={link.href}
                    className="block w-full text-center text-3xl font-black text-white py-2 hover:text-tikno-yellow transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full mt-8"
              >
                <a
                  href={generateWhatsAppLink("Hola Impulso, quiero cotizar...")}
                  className="flex items-center justify-center gap-2 bg-tikno-yellow text-black w-full py-4 rounded-xl font-black text-lg"
                >
                  <FaWhatsapp size={24} />
                  Iniciar Chat
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
