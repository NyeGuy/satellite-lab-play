import { defineConfig } from 'astro/config';

// Vercel playground (root). GitHub Pages stays on satellite-lab-site.
export default defineConfig({
  site: 'https://satellite-lab-play.vercel.app',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
});
