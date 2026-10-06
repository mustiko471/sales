import type { APIRoute } from 'astro';
import { isProduction, siteUrl } from '../data/site';

export const GET: APIRoute = () =>
  new Response(
    isProduction
      ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', siteUrl).href}\n`
      : 'User-agent: *\nAllow: /\n# Preview pages include a noindex meta tag.\n',
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
