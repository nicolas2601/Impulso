'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { generateWhatsAppLink } from '@/utils/whatsapp';

const navLinks = [
  { name: 'Empaques', href: '/empaques' },
  { name: 'Avisos', href: '/avisos' },
  { name: 'Adhesivos', href: '/adhesivos' },
  { name: 'Etiquetas', href: '/etiquetas' },
  { name: 'Impresión', href: '/impresion' },
  { name: 'Señalética', href: '/avisos-profesionales', key: 'senaletica' },
  { name: 'Proyectos', href: '/proyectos' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    setIsScrolled(latest > 50);
    if (latest > 150 && latest > previous) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-[120] flex justify-center pt-4 md:pt-8 px-6 pointer-events-none"
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: visible ? 0 : -120, 
          opacity: visible ? 1 : 0 
        }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.div 
          className={`relative flex items-center justify-between px-6 py-2 rounded-full border border-white/10 transition-all duration-500 pointer-events-auto bg-black/60 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] ${
            isScrolled ? 'w-full max-w-4xl' : 'w-full max-w-6xl'
          }`}
        >
          {/* Logo with interactive hover */}
          <Link href="/" className="flex items-center gap-3 group shrink-0 relative z-[130]">
            <motion.div 
              className="relative w-8 h-8 md:w-9 md:h-9"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "anticipate" }}
            >
              <Image
                src="/logo.png"
                alt="Impulso Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <span className="text-lg md:text-xl font-black tracking-tighter uppercase text-white">
              Impulso<span className="text-impulso-yellow">.</span>
            </span>
          </Link>

          {/* Floating Pill Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.key || link.href} 
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider transition-all duration-300 ${
                    isActive ? 'text-black' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-impulso-yellow rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Interactive Actions */}
          <div className="flex items-center gap-3 relative z-[130]">
            <motion.a
              href={generateWhatsAppLink("Hola Impulso, quiero cotizar...")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-impulso-yellow transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp size={14} />
              <span>Cotizar</span>
            </motion.a>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-impulso-yellow transition-colors relative"
            >
              <motion.div
                animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </motion.div>
            </button>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Menu - High End Motion Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-3xl md:hidden flex flex-col justify-center items-center p-8"
          >
            <nav className="flex flex-col gap-4 w-full text-center">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <Link 
                      href={link.href}
                      className={`text-5xl font-black uppercase tracking-tighter ${
                        isActive ? 'text-impulso-yellow' : 'text-white/40 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12"
              >
                <a
                  href={generateWhatsAppLink("Hola Impulso, quiero cotizar...")}
                  className="flex items-center justify-center gap-4 bg-impulso-yellow text-black w-full py-6 rounded-full font-black text-xl uppercase tracking-widest"
                >
                  <FaWhatsapp size={28} />
                  COTIZAR
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
