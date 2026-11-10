// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// Production lives on Vercel at the root path. SITE_URL / BASE_PATH can
// override this for other hosts (e.g. a GitHub Pages sub-path).
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://helados-colombina.vercel.app',
  base: process.env.BASE_PATH ?? '/',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
