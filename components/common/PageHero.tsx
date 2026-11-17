import Image from 'next/image';
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

/** Server-rendered hero: the title paints on the first frame and the photo is the preloaded LCP image. */
export const PageHero = ({
  title,
  subtitle,
  bgImage,
  ctaText = 'Cotizar ahora',
  ctaMessage = 'Hola, me interesa cotizar...',
  align = 'left',
}: PageHeroProps) => {
  const centered = align === 'center';
  return (
    <div className="relative w-full overflow-hidden bg-impulso-gray-dark py-24 text-white md:py-32">
      <div className="absolute inset-0 z-0 opacity-30">
        <div
          className={`absolute inset-0 z-10 bg-gradient-to-r ${centered ? 'from-black/80 via-black/80 to-black/80' : 'from-black via-black/50 to-transparent'}`}
        />
        {bgImage ? (
          <Image src={bgImage} alt="" fill preload sizes="100vw" className="object-cover" />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-gray-800 to-gray-900" />
        )}
      </div>

      <div className={`container-impulso relative z-20 ${centered ? 'text-center' : ''}`}>
        <div className={`hero-rise max-w-3xl ${centered ? 'mx-auto' : 'mx-auto md:mx-0'}`}>
          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight md:text-6xl">{title}</h1>
          <p className="mb-8 text-xl font-light leading-relaxed text-gray-300">{subtitle}</p>
          <Button variant="primary" href={generateWhatsAppLink(ctaMessage)} target="_blank" className="px-8 text-lg">
            {ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
};
