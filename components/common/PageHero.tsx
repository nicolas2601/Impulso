'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { generateWhatsAppLink } from '@/utils/whatsapp';

interface PageHeroProps {
  title: string;
  subtitle: string;
  bgImage?: string;
  ctaText?: string;
  ctaMessage?: string;
  align?: 'left' | 'center';
}

export const PageHero = ({ 
  title, 
  subtitle, 
  bgImage, 
  ctaText = "Cotizar ahora", 
  ctaMessage = "Hola, me interesa cotizar...",
  align = 'left'
}: PageHeroProps) => {
  return (
    <div className="relative w-full py-24 md:py-32 overflow-hidden bg-impulso-gray-dark text-white">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className={`absolute inset-0 bg-gradient-to-r ${align === 'left' ? 'from-black via-black/50 to-transparent' : 'from-black/80 via-black/80 to-black/80'} z-10`} />
        {/* Placeholder gradient instead of image if not provided */}
        <div className={`w-full h-full ${bgImage ? '' : 'bg-gradient-to-br from-gray-800 to-gray-900'}`} 
             style={bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}} 
        />
      </div>

      <div className={`container-impulso relative z-20 ${align === 'center' ? 'text-center' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto md:mx-0"
          style={align === 'center' ? { margin: '0 auto' } : {}}
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed">
            {subtitle}
          </p>
          <Button 
            variant="primary" 
            href={generateWhatsAppLink(ctaMessage)}
            target="_blank"
            className="text-lg px-8"
          >
            {ctaText}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
