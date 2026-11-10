// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// SITE_URL and BASE_PATH are injected by the GitHub Pages workflow.
// Locally they fall back to the root so `pnpm dev` works without config.
export default defineConfig({
  site: process.env.SITE_URL ?? 'http://localhost:4321',
  base: process.env.BASE_PATH ?? '/',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
