import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// Deploy adapter (@astrojs/vercel, @astrojs/netlify, @astrojs/cloudflare)
// still needs to be added when the hosting target is chosen — astro-deploy
// hasn't been run yet. Defaults to static output in the meantime.
export default defineConfig({
  site: 'https://scalekit.io',
  integrations: [
    // /thank-you is the post-form booking step, not a search landing page.
    sitemap({ filter: (page) => !page.includes('/thank-you') && !page.includes('/preview/') }),
    mdx(),
  ],
  output: 'static',
});
