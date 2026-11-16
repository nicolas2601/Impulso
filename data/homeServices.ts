// Home services bento (Figma: "Rediseño home · Servicios"). No prices on the home (owner's call);
// photos are Impulso's own work from /public.

export interface PhotoService {
  title: string;
  desc: string;
  href: string;
  photo: string;
  alt: string;
  /** Tailwind classes for the card's place in the grid (mobile order + desktop span). */
  layout: string;
  sizes: string;
  big?: boolean;
}

export const PHOTO_SERVICES: PhotoService[] = [
  {
    title: 'Empaques',
    desc: 'Cajas, bolsas y empaques con tu marca para comida y retail.',
    href: '/empaques',
    photo: '/projects/empaques.jpeg',
    alt: 'Bolsas de papel con logo impresas por Impulso para una heladería',
    layout: 'col-span-2 order-1 h-[380px] lg:order-none lg:h-auto lg:col-span-7',
    sizes: '(min-width: 1024px) 58vw, 100vw',
    big: true,
  },
  {
    title: 'Avisos',
    desc: 'Letreros luminosos y neón flex que se ven de día y de noche.',
    href: '/avisos',
    photo: '/projects/AVISOS.jpeg',
    alt: 'Letrero de neón flex con el logo de una heladería en Bucaramanga',
    layout: 'col-span-2 order-2 h-[300px] lg:order-none lg:h-auto lg:col-span-5',
    sizes: '(min-width: 1024px) 41vw, 100vw',
  },
  {
    title: 'Adhesivos',
    desc: 'Vinilos para vitrinas, paredes y vidrios.',
    href: '/adhesivos',
    photo: '/projects/VINILOS.jpeg',
    alt: 'Vitrina de una droguería decorada con vinilos adhesivos',
    layout: 'col-span-2 order-5 h-[240px] lg:order-none lg:h-auto lg:col-span-4',
    sizes: '(min-width: 1024px) 33vw, 100vw',
  },
  {
    title: 'Señalética',
    desc: 'Señalización para oficinas, clínicas y edificios.',
    href: '/avisos-profesionales',
    photo: '/projects/SEÑALÉTICA.jpeg',
    alt: 'Señalización numerada de pisos instalada en un edificio',
    layout: 'col-span-2 order-6 h-[240px] lg:order-none lg:h-auto lg:col-span-4',
    sizes: '(min-width: 1024px) 33vw, 100vw',
  },
  {
    title: 'Impresión',
    desc: 'Litografía, papelería comercial y gran formato.',
    href: '/impresion',
    photo: '/projects/IMPRESION.jpeg',
    alt: 'Tarjetas de regalo impresas en litografía con acabados dorados',
    layout: 'col-span-2 order-7 h-[260px] lg:order-none lg:h-auto lg:col-span-5',
    sizes: '(min-width: 1024px) 41vw, 100vw',
  },
];

export const ETIQUETAS_PHOTO = '/Etiquetas/Etiquetas 1.jpeg';
export const EMPAQUES_PROP_PHOTO = '/Empaques/Empaques.jpeg';
export const PROJECT_THUMBS = ['/Avisos/Avisos 4.jpeg', '/Adhesivos/Adhesivos 2.jpeg', '/Señalética/Señalética 1.jpeg'];
