import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/info';
import { SectionGrounds } from '@/components/common/SectionGrounds';
import { WebHero } from '@/components/web/WebHero';
import { WebCombo, WebMarquee, WebPlans, WebProof } from '@/components/web/WebOffer';
import { WebFaq, WebFinalCta, WebIncluded, WebProcess } from '@/components/web/WebDetails';

const URL = `${SITE_CONFIG.domain}/desarrollo-web`;

export const metadata: Metadata = {
  title: 'Páginas Web para Negocios en Bucaramanga',
  description:
    'Diseño y desarrollo de páginas web rápidas que aparecen en Google y convierten visitas en mensajes de WhatsApp. Landing, web completa o tienda online, hechas en Bucaramanga.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Tu negocio también en Google | Impulso',
    description: 'Páginas web hechas por el mismo equipo que imprime tu marca.',
    url: URL,
    siteName: SITE_CONFIG.name,
    locale: SITE_CONFIG.locale,
    type: 'website',
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Diseño y desarrollo de páginas web',
    serviceType: 'Desarrollo web',
    provider: { '@type': 'LocalBusiness', name: SITE_CONFIG.name, url: SITE_CONFIG.domain },
    areaServed: { '@type': 'City', name: 'Bucaramanga' },
    url: URL,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_CONFIG.domain },
      { '@type': 'ListItem', position: 2, name: 'Desarrollo web', item: URL },
    ],
  }
];

export default function DesarrolloWebPage() {
  return (
    <main data-ground-root className="bg-zinc-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SectionGrounds />
      <WebHero />
      <WebMarquee />
      <WebProof />
      <WebCombo />
      <WebPlans />
      <WebProcess />
      <WebIncluded />
      <WebFaq />
      <WebFinalCta />
    </main>
  );
}
