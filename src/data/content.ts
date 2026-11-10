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
  // Official logo must come from Colombina. Never generate it with AI.
  src: null,
  alt: 'Colombina',
  width: 240,
  height: 80,
};

export const hero = {
  titleLines: ['Disfruta', 'lo bueno'],
  titleScript: 'de la vida',
  description: 'Con Helados Colombina, cada momento sabe mejor.',
  cta: { label: 'Descubre más', href: '#helados' },
  image: {
    src: null,
    alt: 'Joven disfrutando un cono de helado bajo un cielo azul',
    width: 1200,
    height: 1400,
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
    description: 'Intenso, cremoso y con trocitos de chocolate.',
    image: { src: null, alt: 'Bola de helado de chocolate', width: 800, height: 800 },
  },
  {
    name: 'Galleta & Crema',
    description: 'Base de vainilla con galleta de chocolate.',
    image: { src: null, alt: 'Bola de helado de galleta con crema', width: 800, height: 800 },
  },
  {
    name: 'Fresa',
    description: 'Fresco, frutal y con fresas de verdad.',
    image: { src: null, alt: 'Bola de helado de fresa', width: 800, height: 800 },
  },
  {
    name: 'Vainilla',
    description: 'El clásico suave que nunca falla.',
    image: { src: null, alt: 'Bola de helado de vainilla', width: 800, height: 800 },
  },
];

export const products = {
  title: 'Nuestros Helados',
  subtitle: 'Variedad, sabor y mucha felicidad.',
  cta: { label: 'Conoce toda nuestra línea', href: '#helados' },
};

export const moments = {
  titleLines: ['Pequeños', 'placeres,', 'grandes'],
  titleScript: 'momentos',
  description: 'Comparte, disfruta y vive la experiencia Colombina.',
  cta: { label: 'Únete a la familia', href: '#contacto' },
  image: {
    src: null,
    alt: 'Tres amigos riendo mientras comparten helados',
    width: 1400,
    height: 1000,
  } satisfies ImageSlot,
};

export const socials = [
  { label: 'Instagram', icon: 'simple-icons:instagram', href: 'https://www.instagram.com/colombina/' },
  { label: 'TikTok', icon: 'simple-icons:tiktok', href: 'https://www.tiktok.com/@colombina' },
  { label: 'Facebook', icon: 'simple-icons:facebook', href: 'https://www.facebook.com/Colombina' },
  { label: 'YouTube', icon: 'simple-icons:youtube', href: 'https://www.youtube.com/@colombina' },
];
