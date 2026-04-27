// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Production site URL — required for sitemap generation and absolute URLs.
  site: 'https://www.rkkmlaw.com',
  integrations: [sitemap()],
});
