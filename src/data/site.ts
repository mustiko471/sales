export const site = {
  name: 'Fajar',
  fullName: 'Fajar',
  area: 'BSD',
  role: 'Sales Toyota',
  whatsapp: '6285774010197',
  phoneDisplay: '0857-7401-0197',
  instagram: '',
  dealer: '',
  address: '',
  mapsUrl: '',
  hours: '',
  // Put the real portrait in public/images/ and set this to its public path.
  portrait: '',
  domain: '',
  identityVerified: false,
  assetsApproved: false,
  catalogApproved: false,
};

export const isProduction = process.env.SITE_STAGE === 'production';
export const siteUrl = (site.domain || 'http://localhost:4321').replace(
  /\/+$/,
  '',
);
export const siteTitle = `${site.name} Sales Toyota ${site.area}`;
export const instagramUrl = site.instagram
  ? `https://www.instagram.com/${site.instagram.replace(/^@/, '')}/`
  : null;
