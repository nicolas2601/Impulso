'use client';

import { generateWhatsAppLink } from '@/utils/whatsapp';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  label?: string;
  variant?: 'primary' | 'floating';
}

export const WhatsAppButton = ({ 
  message = "Hola, quiero cotizar...", 
  className = "",
  label = "Cotizar por WhatsApp",
  variant = 'primary'
}: WhatsAppButtonProps) => {
  const link = generateWhatsAppLink(message);

  if (variant === 'floating') {
    return (
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-colors flex items-center justify-center ${className}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={32} />
      </motion.a>
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-lg transition-all transform hover:-translate-y-1 ${className}`}
    >
      <FaWhatsapp size={24} />
      {label}
    </a>
  );
};
