import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { existsSync } from 'node:fs';
import { site, siteUrl, isProduction } from './src/data/site.ts';
import { publicationErrors } from './src/utils/validate.ts';

if (isProduction) {
  const errors = publicationErrors(site);
  if (
    site.portrait &&
    (!site.portrait.startsWith('/images/') ||
      !existsSync(`public${site.portrait}`))
  ) {
    errors.push('Foto sales harus tersedia di public/images/.');
  }
  if (errors.length)
    throw new Error(
      `Website belum siap dipublikasikan:\n- ${errors.join('\n- ')}`,
    );
}

export default defineConfig({
  site: siteUrl,
  output: 'static',
  trailingSlash: 'always',
  integrations: isProduction
    ? [
        sitemap({
          filter: (page) =>
            !['/404/', '/404.html'].includes(new URL(page).pathname),
        }),
      ]
    : [],
  devToolbar: { enabled: false },
});
