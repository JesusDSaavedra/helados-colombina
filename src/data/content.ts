/**
 * Landing content and image slots.
 *
 * Each image starts as `null`. Once you generate or receive the final file,
 * drop it in /public/images and set `src` to its path (e.g. 'images/hero.webp').
 * While `src` is null, the page renders a branded placeholder.
 */

export interface ImageSlot {
  src: string | null;
  alt: string;
  width: number;
  height: number;
}

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nuestros Helados', href: '#helados' },
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Tour Escolar', href: '#tour' },
  { label: 'Colombina', href: '#contacto' },
];

export const brandLogo: ImageSlot = {
  // Official logo (version for dark backgrounds), taken from colombina.com.
  // Never generate it with AI.
  src: 'images/brand/colombina-logo.svg',
  alt: 'Colombina',
  width: 345,
  height: 176,
};

export const hero = {
  titleLines: ['Disfruta', 'lo bueno'],
  titleScript: 'de la vida',
  description: 'Con Helados Colombina, cada momento sabe mejor.',
  cta: { label: 'Descubre más', href: '#helados' },
  image: {
    src: 'images/hero.webp',
    alt: 'Joven disfrutando un cono de helado bajo un cielo azul',
    width: 1122,
    height: 1402,
  } satisfies ImageSlot,
};

export interface Flavor {
  name: string;
  description: string;
  image: ImageSlot;
}

export const flavors: Flavor[] = [
  {
    name: 'Chocolate',
    description: 'Intenso y cremoso, para los amantes del cacao.',
    image: { src: 'images/flavor-chocolate.webp', alt: 'Bola de helado de chocolate', width: 800, height: 800 },
  },
  {
    name: 'Cookies & Cream',
    description: 'Base de vainilla con trozos de galleta de chocolate.',
    image: { src: 'images/flavor-cookies.webp', alt: 'Bola de helado Cookies & Cream', width: 800, height: 800 },
  },
  {
    name: 'Fresa',
    description: 'Fresco, frutal y lleno de color.',
    image: { src: 'images/flavor-strawberry.webp', alt: 'Bola de helado de fresa', width: 800, height: 800 },
  },
  {
    name: 'Vainilla',
    description: 'El clásico suave que nunca falla.',
    image: { src: 'images/flavor-vanilla.webp', alt: 'Bola de helado de vainilla', width: 800, height: 800 },
  },
];

export const products = {
  title: 'Nuestros Helados',
  subtitle: 'Variedad, sabor y mucha felicidad.',
  cta: {
    label: 'Conoce toda nuestra línea',
    href: 'https://colombina.com/co-es/product/category/linea-heladeria',
  },
};

export const moments = {
  titleLines: ['Pequeños', 'placeres,', 'grandes'],
  titleScript: 'momentos',
  description: 'Comparte, disfruta y vive la experiencia Colombina.',
  cta: { label: 'Únete a la familia', href: '#contacto' },
  image: {
    src: 'images/friends.webp',
    alt: 'Tres amigos riendo mientras comparten helados',
    width: 1484,
    height: 1060,
  } satisfies ImageSlot,
};

export const socials = [
  // Official profiles listed on colombina.com (no TikTok profile is linked there).
  { label: 'Instagram', icon: 'simple-icons:instagram', href: 'https://www.instagram.com/colombinaoficial/' },
  { label: 'Facebook', icon: 'simple-icons:facebook', href: 'https://www.facebook.com/ColombinaOficial/' },
  { label: 'YouTube', icon: 'simple-icons:youtube', href: 'https://www.youtube.com/channel/UC1gY2nCVfJJe3_oFrge8NpQ' },
  { label: 'LinkedIn', icon: 'simple-icons:linkedin', href: 'https://www.linkedin.com/company/colombina-s-a/' },
];

export interface TourStop {
  /** Number shown on the pin (matches the official tour list). */
  number: number;
  name: string;
  /** Short name used inside the map label. */
  shortName: string;
  address: string;
  /** Position on the illustrated map (viewBox 800x560). Not geographic. */
  x: number;
  y: number;
}

export const tour = {
  title: 'Tour Escolar',
  titleScript: 'Colombina',
  description:
    'Recorremos colegios de Bogotá llevando helado, juegos y muchas sonrisas. ¿Quieres que la próxima parada sea el tuyo?',
  signupLabel: 'Inscribe tu colegio',
  checkLabel: '¿Tu colegio participa?',
  /**
   * Form endpoint that receives sign-ups as JSON (e.g. Formspree).
   * While empty, the form only shows a local confirmation.
   */
  signupEndpoint: '',
  stops: [
    { number: 1, name: 'Colegio Anglo Colombiano', shortName: 'Anglo Colombiano', address: 'Cra. 19 #152A-48', x: 180, y: 400 },
    { number: 2, name: 'Colegio Los Nogales', shortName: 'Los Nogales', address: 'Cl. 202 #56-50', x: 360, y: 482 },
    { number: 3, name: 'Colegio Andino / Deutsche Schule Bogotá', shortName: 'Colegio Andino', address: 'Cra. 51 #218-85', x: 560, y: 410 },
    { number: 4, name: 'Colegio Marymount', shortName: 'Marymount', address: 'Cl. 169B #74A-02', x: 650, y: 312 },
    { number: 5, name: 'Colegio San Carlos', shortName: 'San Carlos', address: 'Cl. 192 #9-45', x: 560, y: 218 },
    { number: 6, name: 'Colegio Nueva Granada', shortName: 'Nueva Granada', address: 'Cra. 2 Este #70-20', x: 500, y: 120 },
    { number: 7, name: 'Lycée Français Louis Pasteur', shortName: 'Lycée Français', address: 'Cl. 87 #7-77', x: 170, y: 150 },
    { number: 8, name: 'Gimnasio Moderno', shortName: 'Gimnasio Moderno', address: 'Cra. 9 #74-99', x: 320, y: 60 },
  ] satisfies TourStop[],
  /** Order in which the bus visits the stops (follows the route sketch). */
  routeOrder: [1, 2, 3, 4, 5, 6, 8, 7],
  /** Where the bus starts and ends its loop. */
  depot: { x: 130, y: 278 },
};
