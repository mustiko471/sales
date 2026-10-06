export interface Promotion {
  id: string;
  title: string;
  description: string;
  carSlugs: string[];
  startsAt: string;
  endsAt: string;
  updatedAt: string;
  terms: string[];
  published: boolean;
  verified: boolean;
}

// Use explicit timezone offsets in content, for example +07:00 for WIB.
export function isActivePromotion(promo: Promotion, now = new Date()): boolean {
  const start = Date.parse(promo.startsAt);
  const end = Date.parse(promo.endsAt);
  return (
    promo.published &&
    promo.verified &&
    Number.isFinite(start) &&
    Number.isFinite(end) &&
    start <= end &&
    now.getTime() >= start &&
    now.getTime() <= end
  );
}

export function activePromotions(promos: Promotion[], now = new Date()) {
  return promos.filter((promo) => isActivePromotion(promo, now));
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Jakarta',
  }).format(new Date(value));
}
