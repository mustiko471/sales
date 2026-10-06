import { normalizePhone } from './whatsapp.ts';

interface PublishConfig {
  fullName: string;
  area: string;
  whatsapp: string;
  instagram: string;
  dealer: string;
  address: string;
  hours: string;
  portrait: string;
  domain: string;
  identityVerified: boolean;
  assetsApproved: boolean;
  catalogApproved: boolean;
}

export function publicationErrors(config: PublishConfig): string[] {
  const errors: string[] = [];
  for (const key of [
    'fullName',
    'area',
    'instagram',
    'dealer',
    'address',
    'hours',
    'portrait',
    'domain',
  ] as const) {
    if (
      !config[key]?.trim() ||
      /\[|\]|placeholder|example\./i.test(config[key])
    )
      errors.push(`Lengkapi ${key}.`);
  }
  try {
    normalizePhone(config.whatsapp);
  } catch {
    errors.push('Nomor WhatsApp tidak valid.');
  }
  if (config.instagram && !/^@?[a-zA-Z0-9._]{1,30}$/.test(config.instagram))
    errors.push('Username Instagram tidak valid.');
  try {
    const url = new URL(config.domain);
    if (
      url.protocol !== 'https:' ||
      /localhost|127\.0\.0\.1|\.test$|\.example$/.test(url.hostname) ||
      url.pathname !== '/'
    ) {
      errors.push('Domain produksi harus berupa origin HTTPS publik.');
    }
  } catch {
    errors.push('Isi domain produksi yang valid.');
  }
  if (!config.identityVerified)
    errors.push('Konfirmasi identitas sales dan dealer.');
  if (!config.assetsApproved)
    errors.push('Konfirmasi izin penggunaan foto dan aset.');
  if (!config.catalogApproved)
    errors.push('Konfirmasi daftar kendaraan yang ditawarkan.');
  return errors;
}
