import { Project } from '../types';

export interface ProjectData extends Project {
  slug: string;
  description: string;
  challenge: string;
  solution: string;
  images: string[];
  relatedServices: string[];
  testimonial?: {
    author: string;
    business: string;
    text: string;
  };
}

export const projects: ProjectData[] = [
  {
    id: '1',
    title: 'Burger Stack Rebranding',
    slug: 'burger-stack-rebranding-empaques',
    client: 'Burger Stack',
    category: 'Empaques',
    imageUrl: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop',
    description: 'Diseño y producción de línea completa de empaques para cadena de hamburguesas.',
    challenge: 'Necesitaban un empaque que mantuviera la temperatura y reflejara su nueva imagen urbana.',
    solution: 'Desarrollamos cajas automontables en cartón micro-corrugado con impresión a 2 tintas y bolsas kraft a juego.',
    images: ['https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5', 'https://images.unsplash.com/photo-1586190848861-99c8a3fb7ea5'],
    relatedServices: ['/empaques/cajas-hamburguesas-bucaramanga', '/empaques/bolsas-papel-logo'],
    testimonial: { author: 'Carlos Ruiz', business: 'Burger Stack', text: 'Las ventas a domicilio subieron porque la comida llega caliente y se ve increíble.' }
  },
  {
    id: '2',
    title: 'Neon Bar La Terraza',
    slug: 'neon-bar-la-terraza',
    client: 'La Terraza Rooftop',
    category: 'Avisos',
    imageUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&auto=format&fit=crop',
    description: 'Aviso neón flex gigante para zona de fotos "Instagrameable".',
    challenge: 'Crear un punto focal que motivara a los clientes a tomar fotos y compartirlas.',
    solution: 'Instalación de neón flex fucsia y cyan sobre pared vegetal artificial.',
    images: ['https://images.unsplash.com/photo-1563245372-f21724e3856d'],
    relatedServices: ['/avisos/neon-flex'],
  },
  {
    id: '3',
    title: 'Branding e Identidad Corporativa',
    slug: 'branding-tienda-ropa',
    client: 'Velvet Store',
    category: 'Impresión',
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800&auto=format&fit=crop',
    description: 'Paquete completo de identidad visual para boutique de ropa femenina.',
    challenge: 'Lograr una imagen coherente desde las etiquetas hasta el aviso principal.',
    solution: 'Desarrollo de logotipo, tarjetas premium, etiquetas de ropa, bolsas y aviso acrílico.',
    images: ['https://images.unsplash.com/photo-1556740738-b6a63e27c4df'],
    relatedServices: ['/impresion', '/papeleria-comercial'],
  },
  {
    id: '4',
    title: 'Señalética Clínica',
    slug: 'senaletica-clinica-dental',
    client: 'Dentix',
    category: 'Avisos',
    imageUrl: 'https://images.unsplash.com/photo-1587316831580-b08855663675?q=80&w=800&auto=format&fit=crop',
    description: 'Sistema completo de señalización interior en acrílico.',
    challenge: 'Guiar a los pacientes de forma clara pero elegante.',
    solution: 'Avisos en acrílico cristal con distanciadores y vinilo esmerilado.',
    images: [],
    relatedServices: ['/avisos/avisos-acrilico-precios'],
  },
  {
    id: '5',
    title: 'Etiquetas Cerveza Artesanal',
    slug: 'etiquetas-cerveza-artesanal',
    client: 'Cervecería del Valle',
    category: 'Impresión',
    imageUrl: 'https://images.unsplash.com/photo-1605218427360-69643445d045?q=80&w=800&auto=format&fit=crop',
    description: 'Stickers metalizados resistentes a la humedad para botellas.',
    challenge: 'Las etiquetas normales se despegaban con el frío.',
    solution: 'Vinilo adhesivo premium con laminado mate resistente al agua.',
    images: [],
    relatedServices: ['/impresion/stickers-bucaramanga'],
  },
  {
    id: '6',
    title: 'Caja Pizza Premium',
    slug: 'caja-pizza-negra',
    client: 'Pizza & Co',
    category: 'Empaques',
    imageUrl: 'https://images.unsplash.com/photo-1593560708920-638928075060?q=80&w=800&auto=format&fit=crop',
    description: 'Caja negra elegante para pizzas gourmet.',
    challenge: 'Diferenciarse de las pizzerías tradicionales.',
    solution: 'Impresión litográfica sobre cartón negro con tinta metalizada.',
    images: [],
    relatedServices: ['/empaques'],
  },
  // Adding placeholders to reach typical volume visually
  {
    id: '7',
    title: 'Menú Restaurante',
    slug: 'menu-restaurante-italiano',
    client: 'Trattoria',
    category: 'Papelería',
    imageUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop',
    description: 'Diseño e impresión de cartas menú plastificadas.',
    challenge: 'Menús duraderos y lavables.',
    solution: 'Papel propalcote 300g con laminado rígido mate.',
    images: [],
    relatedServices: ['/papeleria-comercial'],
  },
  {
    id: '8',
    title: 'Aviso Luminoso Farmacia',
    slug: 'aviso-luminoso-farmacia',
    client: 'FarmaExpress',
    category: 'Avisos',
    imageUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&auto=format&fit=crop', // Reusing placeholder style
    description: 'Caja de luz LED de alto brillo para fachada.',
    challenge: 'Visibilidad nocturna en calle oscura.',
    solution: 'Caja backlit con módulos LED de alta potencia.',
    images: [],
    relatedServices: ['/avisos/avisos-luminosos-bucaramanga'],
  }
];
