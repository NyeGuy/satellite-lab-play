import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const loc = new URL(
    import.meta.env.BASE_URL,
    site ?? 'https://satellite-lab-play.vercel.app',
  ).href;
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
  </url>
</urlset>
`;
  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
