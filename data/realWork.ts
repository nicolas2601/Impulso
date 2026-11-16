/** Every photo and clip here is a job Impulso actually produced and installed. */

export type WorkCategory = 'Avisos' | 'Señalética' | 'Adhesivos' | 'Etiquetas' | 'Impresión' | 'Empaques';

export interface WorkPhoto {
  src: string;
  alt: string;
  category: WorkCategory;
  width: number;
  height: number;
}

export interface WorkVideo {
  src: string;
  poster: string;
  title: string;
  category: WorkCategory;
  hasAudio: boolean;
  orientation: 'portrait' | 'landscape';
}

export const WORK_CATEGORIES: WorkCategory[] = ['Avisos', 'Señalética', 'Adhesivos', 'Etiquetas', 'Impresión', 'Empaques'];

const PHONE = { width: 1200, height: 2133 } as const;

const recent = (category: WorkCategory, file: string, alt: string): WorkPhoto => ({
  src: `/trabajos/${file}.webp`,
  alt,
  category,
  ...PHONE,
});

const archive = (category: WorkCategory, src: string, width: number, height: number): WorkPhoto => ({
  src,
  alt: `Trabajo de ${category.toLowerCase()} hecho por Impulso en Bucaramanga`,
  category,
  width,
  height,
});

const RECENT: WorkPhoto[] = [
  recent('Avisos', 'avisos/niko-neon-flex', 'Aviso en neón flex rosado para Niko'),
  recent('Avisos', 'avisos/maxident-fachada', 'Aviso iluminado en la fachada de la clínica odontológica Maxident'),
  recent('Avisos', 'avisos/colegio-reggio-amelia-fachada', 'Aviso de fachada del Colegio Reggio Amelia'),
  recent('Avisos', 'avisos/syh-letras-iluminadas', 'Letras iluminadas de SYH en fachada, de noche'),
  recent('Avisos', 'avisos/kakaw-anay-logo-iluminado', 'Logo iluminado de Kakaw Anay sobre pared rosada'),
  recent('Avisos', 'avisos/mi-grado-neon', 'Aviso en neón flex blanco cálido para Mi Grado'),
  recent('Avisos', 'avisos/drogueria-pague-al-costo', 'Aviso de poste iluminado para Droguería Pague al Costo'),
  recent('Avisos', 'avisos/fisioterapia-acrilico', 'Aviso circular en acrílico retroiluminado para Carolina Triana Fisioterapia'),
  recent('Avisos', 'avisos/entre-cejas-pared', 'Logo de Entre Cejas instalado en la pared del local'),
  recent('Avisos', 'avisos/maxident-recepcion', 'Aviso de recepción de la clínica odontológica Maxident'),
  recent('Avisos', 'avisos/maxident-aviso', 'Aviso de Maxident listo para instalar'),
  recent('Avisos', 'avisos/syh-fachada-nocturna', 'Fachada de SYH con su aviso encendido'),
  recent('Avisos', 'avisos/colegio-reggio-amelia-fachada-2', 'Fachada del Colegio Reggio Amelia con su aviso instalado'),
  recent('Avisos', 'avisos/maxident-instalacion', 'Instalación del aviso de fachada de Maxident'),
  recent('Avisos', 'avisos/helados-japi-pendon', 'Pendón 2x1 para Helados Japi en un centro comercial'),
  recent('Señalética', 'senaletica/syh-placa-direccion', 'Placa de dirección en la entrada de SYH'),
  recent('Señalética', 'senaletica/kakaw-anay-exhibidor-acrilico', 'Exhibidor de mesa en acrílico para Kakaw Anay'),
  recent('Señalética', 'senaletica/exhibidores-productos', 'Exhibidores impresos para productos saludables'),
  recent('Adhesivos', 'adhesivos/heladeria-cecilia-menus', 'Menús impresos en vinilo para la heladería Cecilia'),
  recent('Etiquetas', 'etiquetas/adriza-etiquetas', 'Pliego de etiquetas impresas para Adriza'),
  recent('Etiquetas', 'etiquetas/adriza-stickers-redondos', 'Stickers redondos troquelados para Adriza'),
  recent('Etiquetas', 'etiquetas/niko-etiqueta', 'Etiqueta impresa de Niko'),
  recent('Impresión', 'impresion/adriza-tarjetas', 'Tarjetas impresas de agradecimiento para Adriza'),
  recent('Impresión', 'impresion/reposteria-pieza-redonda', 'Pieza circular impresa para una repostería, con sus tarjetas'),
  recent('Empaques', 'empaques/cajas-impresas', 'Cajas impresas con logo, apiladas para entrega'),
];

const ARCHIVE: WorkPhoto[] = [
  archive('Avisos', '/Avisos/Avisos 1.webp', 1200, 1600),
  archive('Avisos', '/Avisos/Avisos 2.webp', 1200, 1600),
  archive('Avisos', '/Avisos/Avisos 3.webp', 1200, 1600),
  archive('Avisos', '/Avisos/Avisos 4.webp', 913, 1600),
  archive('Avisos', '/Avisos/Avisos 5.webp', 1080, 1080),
  archive('Señalética', '/Señalética/Señalética 1.webp', 1200, 1600),
  archive('Señalética', '/Señalética/Señalética 2.webp', 955, 1299),
  archive('Señalética', '/Señalética/Señalética 3.webp', 1170, 969),
  archive('Señalética', '/Señalética/Señalética 4.webp', 1170, 891),
  archive('Señalética', '/Señalética/Señalética 5.webp', 784, 1434),
  archive('Adhesivos', '/Adhesivos/Adhesivos 1.webp', 1200, 1600),
  archive('Adhesivos', '/Adhesivos/Adhesivos 2.webp', 1200, 1600),
  archive('Adhesivos', '/Adhesivos/Adhesivos 3.webp', 1200, 1600),
  archive('Adhesivos', '/Adhesivos/Adhesivos 4.webp', 1600, 1200),
  archive('Adhesivos', '/Adhesivos/Adhesivos 5.webp', 1600, 1200),
  archive('Adhesivos', '/Adhesivos/Adhesivos 6.webp', 1200, 1600),
  archive('Adhesivos', '/Adhesivos/Adhesivos 7.webp', 1200, 1600),
  archive('Adhesivos', '/Adhesivos/Adhesivos 8.webp', 1081, 1081),
  archive('Etiquetas', '/Etiquetas/Etiquetas 1.webp', 720, 1280),
  archive('Etiquetas', '/Etiquetas/Etiquetas 2.webp', 1200, 1600),
  archive('Etiquetas', '/Etiquetas/Etiquetas 3.webp', 1200, 1600),
  archive('Etiquetas', '/Etiquetas/Etiquetas 4.webp', 1081, 1081),
  archive('Impresión', '/Impresion/Impresion 1.webp', 890, 975),
  archive('Impresión', '/Impresion/Impresion 2.webp', 960, 1280),
  archive('Impresión', '/Impresion/Impresion 3.webp', 720, 1280),
  archive('Impresión', '/Impresion/Impresion 4.webp', 1200, 1600),
  archive('Impresión', '/Impresion/Impresion 5.webp', 1200, 1600),
  archive('Impresión', '/Impresion/Impresion 6.webp', 1200, 1600),
  archive('Impresión', '/Impresion/Impresion 7.webp', 1081, 1081),
  archive('Impresión', '/Impresion/Impresion 8.webp', 1081, 1081),
  archive('Empaques', '/Empaques/Empaques.webp', 1200, 1600),
  archive('Empaques', '/Empaques/Empaques 2.webp', 1181, 874),
  archive('Empaques', '/Empaques/Empaques 3.webp', 1092, 815),
  archive('Empaques', '/Empaques/Empaques 4.webp', 1391, 1043),
  archive('Empaques', '/Empaques/Empaques 5.webp', 1338, 1004),
  archive('Empaques', '/Empaques/Empaques 6.webp', 1260, 946),
  archive('Empaques', '/Empaques/Empaques 7.webp', 1081, 1081),
  archive('Empaques', '/Empaques/Empaques 8.webp', 1200, 1600),
  archive('Empaques', '/Empaques/Empaques 9.webp', 1200, 1600),
  archive('Empaques', '/Empaques/Empaques 10.webp', 1200, 1600),
];

/** Newest jobs first, so every gallery opens with the latest work. */
export const WORK_PHOTOS: WorkPhoto[] = [...RECENT, ...ARCHIVE];

const clip = (file: string, title: string, hasAudio: boolean, orientation: WorkVideo['orientation'] = 'portrait'): WorkVideo => ({
  src: `/trabajos/videos/${file}.mp4`,
  poster: `/trabajos/videos/${file}.webp`,
  title,
  category: 'Avisos',
  hasAudio,
  orientation,
});

export const WORK_VIDEOS: WorkVideo[] = [
  clip('niko-neon-flex', 'Neón flex encendido para Niko', true),
  clip('maxident-fachada-iluminada', 'Fachada iluminada de Maxident', true),
  clip('syh-instalacion-nocturna', 'Instalación nocturna del aviso de SYH', true),
  clip('fisioterapia-aviso-acrilico', 'Aviso en acrílico para Carolina Triana Fisioterapia', true),
  clip('colegio-reggio-amelia-fachada', 'Recorrido por la fachada del Colegio Reggio Amelia', true),
  clip('colegio-reggio-amelia-instalacion', 'Instalación del aviso del Colegio Reggio Amelia', false, 'landscape'),
];

export const photosOf = (category: WorkCategory): WorkPhoto[] => WORK_PHOTOS.filter((p) => p.category === category);

export const videosOf = (category: WorkCategory): WorkVideo[] => WORK_VIDEOS.filter((v) => v.category === category);

export const photoBySrc = (src: string): WorkPhoto => {
  const photo = WORK_PHOTOS.find((p) => p.src === src);
  if (!photo) throw new Error(`Unknown work photo: ${src}`);
  return photo;
};
