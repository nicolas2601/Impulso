import { Metadata } from 'next';
import { ModernHero } from '@/components/home/ModernHero';
import { BentoServices } from '@/components/home/BentoServices';
import { Benefits } from '@/components/home/Benefits';
import { PortfolioGallery } from '@/components/home/PortfolioGallery';
import { ProcessTimeline } from '@/components/home/ProcessTimeline';
import { FinalCTA } from '@/components/home/FinalCTA';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { SITE_CONFIG, CONTACT_INFO } from '@/constants/info';

export const metadata: Metadata = {
  title: 'Impulso - Diseño, Impresión y Avisos Luminosos en Bucaramanga',
  description: 'Fabricamos empaques, avisos luminosos y material publicitario para negocios en Bucaramanga. Precios claros, entrega rápida y diseño profesional.',
  alternates: {
    canonical: SITE_CONFIG.domain,
  },
  openGraph: {
    title: 'Impulso - Soluciones Visuales para Negocios',
    description: 'Diseño, impresión y fabricación de empaques y avisos. Cotiza rápido por WhatsApp.',
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.name,
    locale: SITE_CONFIG.locale,
    type: 'website',
  },
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
      CONTACT_INFO.social.instagram,
      CONTACT_INFO.social.facebook,
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <ModernHero />
      <BentoServices />
      <Benefits />
      <PortfolioGallery />
      <ProcessTimeline />
      <FinalCTA />
      
      {/* Persistent Floating WhatsApp Button */}
      <WhatsAppButton variant="floating" />
    </main>
  );
}
