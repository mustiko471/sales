import sharp from 'sharp';
import { site } from '../src/data/site.ts';

const escape = (value) =>
  value.replace(
    /[&<>"']/g,
    (char) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;',
      })[char],
  );
const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
<rect width="1200" height="630" fill="#f7f7f8"/><rect width="16" height="630" fill="#e52431"/>
<circle cx="960" cy="245" r="260" fill="none" stroke="#e2e2e7"/><circle cx="960" cy="245" r="205" fill="none" stroke="#e2e2e7"/>
<text x="75" y="116" font-family="Arial,sans-serif" font-size="66" font-weight="bold" letter-spacing="-4" fill="#202124">${escape(site.name.toLowerCase())}<tspan fill="#e52431">.</tspan></text>
<text x="78" y="177" font-family="Arial,sans-serif" font-size="22" letter-spacing="3" fill="#656871">SALES TOYOTA ${escape(site.area.toUpperCase())}</text>
<text x="75" y="290" font-family="Arial,sans-serif" font-size="52" font-weight="bold" letter-spacing="-2" fill="#202124">Untuk setiap</text>
<text x="75" y="357" font-family="Arial,sans-serif" font-size="52" font-weight="bold" letter-spacing="-2" fill="#e52431">cerita perjalanan.</text>
<rect x="77" y="433" rx="10" width="310" height="59" fill="#167044"/>
<text x="109" y="470" font-family="Arial,sans-serif" font-size="21" fill="white">Konsultasi via WhatsApp</text>
<text x="78" y="557" font-family="Arial,sans-serif" font-size="20" fill="#6b6d73">${escape(site.phoneDisplay)}</text>
</svg>`;
const car = await sharp('src/assets/cars/innova-zenix-hero.png')
  .resize({ width: 650 })
  .png()
  .toBuffer();
await sharp(Buffer.from(svg))
  .composite([{ input: car, left: 543, top: 174 }])
  .png()
  .toFile('public/og-cover.png');
console.log('Created public/og-cover.png');
