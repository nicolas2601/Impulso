import { Product } from '../types';

export const productsData: Record<string, Product[]> = {
  empaques: [
    {
      id: 'cajas-comida-rapida',
      name: '',
      slug: 'cajas-hamburguesas-bucaramanga',
      description: 'Cajas en cartón kraft o esmaltado con tu logo. Resistentes a grasa, automontables y 100% personalizables.',
      priceRange: { min: 450, max: 900 },
      category: 'Empaques',
      images: [],
      features: ['Biodegradable', 'Automontable', 'Impresión 1-4 tintas'],
      isPopular: true
    },
    {
      id: 'bolsas-papel',
      name: 'Bolsas de Papel con Logo',
      slug: 'bolsas-papel-logo',
      description: 'Bolsas boutique y delivery en papel kraft. La opción ecológica para entregar tus productos.',
      priceRange: { min: 300, max: 1200 },
      category: 'Empaques',
      images: [],
      features: ['Manija troquelada o cordón', 'Varios gramajes', 'Ecológicas'],
      isPopular: false
    },
    {
      id: 'cajas-pizza',
      name: 'Cajas para Pizza',
      slug: 'cajas-pizza-bucaramanga',
      description: 'Cartón corrugado micro o flauta B que mantiene el calor. Impresión de alta calidad.',
      priceRange: { min: 1200, max: 2500 },
      category: 'Empaques',
      images: [],
      features: ['Conserva calor', 'Resistente apilamiento', 'Ventilación'],
      isPopular: true
    }
  ],
  avisos: [
    {
      id: 'aviso-luminoso',
      name: 'Avisos Luminosos Backlit',
      slug: 'avisos-luminosos-bucaramanga',
      description: 'Cajas de luz con lona o acrílico e iluminación LED interna. Visibilidad garantizada día y noche.',
      priceRange: { min: 450000, max: 2000000 },
      category: 'Avisos',
      images: [],
      features: ['LED alto brillo', 'Estructura metálica', 'Garantía 1 año'],
      isPopular: true
    },
    {
      id: 'aviso-acrilico',
      name: 'Avisos en Acrílico',
      slug: 'avisos-acrilico-precios',
      description: 'Señalética elegante para oficinas y recepciones. Acrílico cortado a láser con distanciadores.',
      priceRange: { min: 150000, max: 800000 },
      category: 'Avisos',
      images: [],
      features: ['Corte láser preciso', 'Acabado brillante', 'Fácil instalación'],
      isPopular: false
    },
    {
      id: 'neon-flex',
      name: 'Neón Flex Personalizado',
      slug: 'neon-flex',
      description: 'El toque moderno y vibrante para tu local. Neón LED flexible sobre base de acrílico.',
      priceRange: { min: 250000, max: 1500000 },
      category: 'Avisos',
      images: [],
      features: ['Bajo consumo', 'No se rompe', 'Colores intensos'],
      isPopular: true
    }
  ],
  impresion: [
    {
      id: 'gran-formato',
      name: 'Gran Formato',
      slug: 'gran-formato',
      description: 'Pendones, vallas, vinilos adhesivos para paredes y vidrios.',
      priceRange: { min: 25000, max: 150000 }, // m2
      category: 'Impresión',
      images: [],
      features: ['Lona banner', 'Vinilo microperforado'],
      isPopular: true
    },
    {
      id: 'sublimacion',
      name: 'Sublimación',
      slug: 'sublimacion',
      description: 'Personalización de textiles, camisetas, gorras y mugs.',
      priceRange: { min: 15000, max: 45000 },
      category: 'Impresión',
      images: [],
      features: ['Full color', 'Desde 1 unidad'],
      isPopular: false
    }
  ]
};
