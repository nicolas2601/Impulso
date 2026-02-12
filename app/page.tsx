import { Metadata } from 'next';
import { ModernHero } from '@/components/home/ModernHero';
import { BentoServices } from '@/components/home/BentoServices';
import { TrustMarquee } from '@/components/home/TrustMarquee';
import { ImmersiveGallery } from '@/components/home/ImmersiveGallery';
import { StickyProcess } from '@/components/home/StickyProcess';
import { MassiveFooter } from '@/components/home/MassiveFooter';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { NoiseOverlay } from '@/components/common/NoiseOverlay';
import { SITE_CONFIG, CONTACT_INFO } from '@/constants/info';

export const metadata: Metadata = {
  title: 'Impulso - Diseño Visual de Alto Impacto en Bucaramanga',
  description: 'Estudio de producción gráfica y visual. Empaques, avisos luminosos y branding que transforman negocios. Calidad industrial, diseño boutique.',
  alternates: {
    canonical: SITE_CONFIG.domain,
  },
  openGraph: {
    title: 'Impulso - Make It Bold',
    description: 'Diseño, impresión y fabricación visual. Hacemos que tu marca destaque.',
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.name,
    locale: SITE_CONFIG.locale,
    type: 'website',
  },
  authors: [{ name: 'Nicolas Moreno', url: 'https://nicolasmoreno.site' }],
  creator: 'impulsopublicidad.pro',
  publisher: 'impulsopublicidad.pro',
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.domain}/og-image.jpg`,
    '@id': SITE_CONFIG.domain,
    url: SITE_CONFIG.domain,
    telephone: CONTACT_INFO.displayPhone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bucaramanga',
      addressRegion: 'Santander',
      addressCountry: 'CO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 7.1193,
      longitude: -73.1227,
    },
    priceRange: '$$',
    sameAs: [
      CONTACT_INFO.social.facebook,
    ],
  };

  return (
    <main className="min-h-screen bg-zinc-50 relative selection:bg-impulso-yellow selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <NoiseOverlay />
      
      <ModernHero />
      <TrustMarquee />
      <BentoServices />
      <ImmersiveGallery />
      <StickyProcess />
      <MassiveFooter />
      
      <WhatsAppButton variant="floating" />
    </main>
  );
}
