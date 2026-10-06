import assert from 'node:assert/strict';
import { readdir, readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const results = await Promise.all(
    entries.map((entry) =>
      entry.isDirectory() ? walk(join(dir, entry.name)) : join(dir, entry.name),
    ),
  );
  return results.flat();
}
const files = (await walk('dist')).filter((path) => path.endsWith('.html'));
const titles = new Set();
let contacts = 0;
for (const file of files) {
  const html = await readFile(file, 'utf8');
  assert.match(html, /<html lang="id"/, `${file}: language`);
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${file}: one H1`);
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  assert.ok(title && !titles.has(title), `${file}: unique title`);
  titles.add(title);
  assert.match(
    html,
    /name="description" content="[^"]+"/,
    `${file}: description`,
  );
  assert.match(
    html,
    /name="robots" content="noindex, nofollow"/,
    `${file}: preview not indexed`,
  );
  assert.doesNotMatch(
    html,
    /\[(?:NOMOR|USERNAME|NAMA|ALAMAT|DOMAIN)_/,
    `${file}: no raw placeholders`,
  );
  for (const match of html.matchAll(/href="(https:\/\/wa\.me\/[^" ]+)"/g)) {
    const url = new URL(match[1].replace(/&amp;/g, '&'));
    assert.equal(url.pathname, '/6285774010197', `${file}: WhatsApp recipient`);
    assert.ok(url.searchParams.get('text'), `${file}: WhatsApp message`);
    contacts++;
  }
  for (const match of html.matchAll(/(?:href|src)="(\/[^"?#]*)/g)) {
    const path = decodeURIComponent(match[1]);
    const target = join(
      'dist',
      path.endsWith('/') ? `${path}index.html` : path,
    );
    assert.ok(
      (await stat(target).catch(() => null))?.isFile(),
      `${file}: missing local asset/link ${path}`,
    );
  }
}
assert.equal(files.length, 11);
assert.ok(contacts > 20);
console.log(
  `PASS: ${files.length} static pages, unique metadata, assets/internal links, and ${contacts} WhatsApp links.`,
);
