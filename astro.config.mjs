import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// Deploy adapter (@astrojs/vercel, @astrojs/netlify, @astrojs/cloudflare)
// still needs to be added when the hosting target is chosen — astro-deploy
// hasn't been run yet. Defaults to static output in the meantime.
export default defineConfig({
  site: 'https://scalekit.io',
  integrations: [sitemap(), mdx()],
  output: 'static',
});
