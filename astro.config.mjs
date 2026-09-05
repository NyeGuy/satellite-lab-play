import { defineConfig } from 'astro/config';

const vercelHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const site = vercelHost
  ? `https://${vercelHost}`
  : 'https://satellite-lab-play.vercel.app';

// Vercel playground — root hosting. GitHub Pages stays on satellite-lab-site.
export default defineConfig({
  site,
  base: '/',
  output: 'static',
  trailingSlash: 'always',
});
