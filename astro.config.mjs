// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://rhedshift.github.io/Autopilot-reviews',
  base: '/Autopilot-reviews',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});