import { WORK_VIDEOS, photoBySrc, type WorkCategory, type WorkPhoto, type WorkVideo } from './realWork';

/** A real job told through its own photos and clips. No invented quotes or numbers. */
export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: WorkCategory;
  summary: string;
  pieces: string[];
  photos: WorkPhoto[];
  videos: WorkVideo[];
  relatedServices: Array<{ href: string; title: string }>;
}

const photos = (...files: string[]) => files.map((file) => photoBySrc(`/trabajos/${file}.webp`));

const clips = (...files: string[]) =>
  files.map((file) => {
    const clip = WORK_VIDEOS.find((v) => v.src === `/trabajos/videos/${file}.mp4`);
    if (!clip) throw new Error(`Unknown work clip: ${file}`);
    return clip;
  });

export const projects: ProjectData[] = [
  {
    id: 'maxident',
    slug: 'avisos-clinica-maxident',
    title: 'Avisos para la clínica Maxident',
    client: 'Maxident Clínica Odontológica',
    category: 'Avisos',
    summary: 'Aviso iluminado para la fachada de la clínica y aviso de marca para su recepción. Fabricamos las piezas y las instalamos en sitio.',
    pieces: ['Aviso de fachada iluminado', 'Aviso de recepción', 'Instalación en altura'],
    photos: photos('avisos/maxident-fachada', 'avisos/maxident-instalacion', 'avisos/maxident-recepcion', 'avisos/maxident-aviso'),
    videos: clips('maxident-fachada-iluminada'),
    relatedServices: [{ href: '/avisos/avisos-luminosos-bucaramanga', title: 'Avisos luminosos' }, { href: '/avisos/avisos-acrilico-precios', title: 'Avisos en acrílico' }],
  },
  {
    id: 'reggio-amelia',
    slug: 'aviso-fachada-colegio-reggio-amelia',
    title: 'Aviso de fachada para el Colegio Reggio Amelia',
    client: 'Colegio Reggio Amelia',
    category: 'Avisos',
    summary: 'Aviso de gran formato para la fachada del colegio, instalado con andamio sobre la estructura del edificio.',
    pieces: ['Aviso de fachada de gran formato', 'Instalación con andamio'],
    photos: photos('avisos/colegio-reggio-amelia-fachada', 'avisos/colegio-reggio-amelia-fachada-2'),
    videos: clips('colegio-reggio-amelia-fachada', 'colegio-reggio-amelia-instalacion'),
    relatedServices: [{ href: '/avisos', title: 'Avisos' }, { href: '/avisos/avisos-luminosos-bucaramanga', title: 'Avisos luminosos' }],
  },
  {
    id: 'niko',
    slug: 'neon-flex-niko-granizados',
    title: 'Neón flex para Niko Granizados',
    client: 'Niko Granizados',
    category: 'Avisos',
    summary: 'Aviso en neón flex rosado con el logo de la marca, acompañado de sus etiquetas impresas.',
    pieces: ['Aviso en neón flex', 'Etiquetas impresas'],
    photos: photos('avisos/niko-neon-flex', 'etiquetas/niko-etiqueta'),
    videos: clips('niko-neon-flex'),
    relatedServices: [{ href: '/avisos/neon-flex', title: 'Neón flex' }, { href: '/etiquetas', title: 'Etiquetas' }],
  },
  {
    id: 'syh',
    slug: 'aviso-iluminado-y-placa-syh',
    title: 'Aviso iluminado y placa de dirección para SYH',
    client: 'SYH',
    category: 'Avisos',
    summary: 'Letras iluminadas para la fachada y placa de dirección para la entrada. La instalación se hizo de noche.',
    pieces: ['Letras iluminadas de fachada', 'Placa de dirección', 'Instalación nocturna'],
    photos: photos('avisos/syh-letras-iluminadas', 'avisos/syh-fachada-nocturna', 'senaletica/syh-placa-direccion'),
    videos: clips('syh-instalacion-nocturna'),
    relatedServices: [{ href: '/avisos/avisos-luminosos-bucaramanga', title: 'Avisos luminosos' }, { href: '/avisos-profesionales', title: 'Señalética' }],
  },
  {
    id: 'kakaw-anay',
    slug: 'logo-iluminado-y-exhibidor-kakaw-anay',
    title: 'Logo iluminado y exhibidor para Kakaw Anay',
    client: 'Kakaw Anay',
    category: 'Avisos',
    summary: 'Logo iluminado para la pared del punto de venta y exhibidor de mesa en acrílico para sus productos.',
    pieces: ['Logo iluminado de pared', 'Exhibidor de mesa en acrílico'],
    photos: photos('avisos/kakaw-anay-logo-iluminado', 'senaletica/kakaw-anay-exhibidor-acrilico'),
    videos: [],
    relatedServices: [{ href: '/avisos', title: 'Avisos' }, { href: '/avisos-profesionales', title: 'Señalética' }],
  },
  {
    id: 'carolina-triana',
    slug: 'aviso-acrilico-carolina-triana-fisioterapia',
    title: 'Aviso en acrílico para Carolina Triana Fisioterapia',
    client: 'Carolina Triana Fisioterapia',
    category: 'Avisos',
    summary: 'Aviso circular en acrílico con iluminación posterior para el consultorio.',
    pieces: ['Aviso en acrílico retroiluminado'],
    photos: photos('avisos/fisioterapia-acrilico'),
    videos: clips('fisioterapia-aviso-acrilico'),
    relatedServices: [{ href: '/avisos/avisos-acrilico-precios', title: 'Avisos en acrílico' }],
  },
  {
    id: 'adriza',
    slug: 'etiquetas-y-tarjetas-adriza',
    title: 'Etiquetas y tarjetas para Adriza',
    client: 'Adriza',
    category: 'Etiquetas',
    summary: 'Pliegos de etiquetas, stickers redondos y tarjetas de agradecimiento con la identidad de la marca.',
    pieces: ['Etiquetas en pliego', 'Stickers redondos', 'Tarjetas de agradecimiento'],
    photos: photos('etiquetas/adriza-etiquetas', 'etiquetas/adriza-stickers-redondos', 'impresion/adriza-tarjetas'),
    videos: [],
    relatedServices: [{ href: '/etiquetas', title: 'Etiquetas' }, { href: '/impresion/stickers-bucaramanga', title: 'Stickers' }],
  },
];

/** Slugs of the old placeholder cases, kept so their URLs can redirect to the portfolio. */
export const RETIRED_PROJECT_SLUGS = [
  'burger-stack-rebranding-empaques',
  'neon-bar-la-terraza',
  'branding-tienda-ropa',
  'senaletica-clinica-dental',
  'etiquetas-cerveza-artesanal',
  'caja-pizza-negra',
  'menu-restaurante-italiano',
  'aviso-luminoso-farmacia',
];
