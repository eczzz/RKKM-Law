// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Production site URL — required for sitemap generation and absolute URLs.
  site: 'https://rkkmlaw.com',
  // Astro 7 changed the default to 'jsx', which strips spaces between inline
  // elements. Keep the Astro 5 output.
  compressHTML: true,
  integrations: [
    sitemap({
      // Utility pages like /thank-you carry noindex,nofollow and shouldn't
      // appear in the sitemap submitted to Google Search Console.
      filter: (page) => !page.includes('/thank-you'),
    }),
  ],
  vite: {
    build: {
      // Vite 8 minifies media queries to range syntax (width<=768px), which
      // older Safari ignores. Keep the max-width form Astro 5 shipped.
      cssTarget: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    },
  },
});
