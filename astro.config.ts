import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://rairezende.github.io',
  base: '/dev-portfolio',
  integrations: [react(), tailwind()],
});