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
