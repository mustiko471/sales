import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizePhone, whatsappLink } from '../src/utils/whatsapp.ts';
import {
  isActivePromotion,
  activePromotions,
  type Promotion,
} from '../src/utils/promotions.ts';
import { publicationErrors } from '../src/utils/validate.ts';
import { site } from '../src/data/site.ts';

test('WhatsApp normalizes local and international numbers without changing the recipient', () => {
  assert.equal(normalizePhone('0857-7401-0197'), '6285774010197');
  assert.equal(normalizePhone('+62 857 7401 0197'), '6285774010197');
  assert.throws(() => normalizePhone('08hello'));
  assert.throws(() => normalizePhone(''));
});

test('contextual WhatsApp messages preserve punctuation and the correct destination', () => {
  const message = 'Halo Fajar, Avanza & Zenix? Harga OTR BSD + promo.';
  const url = new URL(whatsappLink(site.whatsapp, message));
  assert.equal(url.hostname, 'wa.me');
  assert.equal(url.pathname, '/6285774010197');
  assert.equal(url.searchParams.get('text'), message);
});

const offer: Promotion = {
  id: 'test',
  title: 'Test',
  description: 'Test fixture only',
  carSlugs: ['toyota-avanza'],
  startsAt: '2026-10-01T00:00:00+07:00',
  endsAt: '2026-10-31T23:59:59+07:00',
  updatedAt: '2026-10-01T00:00:00+07:00',
  terms: ['Test'],
  published: true,
  verified: true,
};

test('promotions honor WIB boundaries and never publish draft or unverified content', () => {
  assert.equal(
    isActivePromotion(offer, new Date('2026-09-30T16:59:59Z')),
    false,
  );
  assert.equal(
    isActivePromotion(offer, new Date('2026-09-30T17:00:00Z')),
    true,
  );
  assert.equal(
    isActivePromotion(offer, new Date('2026-10-31T16:59:59Z')),
    true,
  );
  assert.equal(
    isActivePromotion(offer, new Date('2026-10-31T17:00:00Z')),
    false,
  );
  assert.equal(
    isActivePromotion({ ...offer, verified: false }, new Date('2026-10-15')),
    false,
  );
  assert.equal(
    isActivePromotion({ ...offer, published: false }, new Date('2026-10-15')),
    false,
  );
  assert.equal(
    isActivePromotion({ ...offer, endsAt: 'invalid' }, new Date('2026-10-15')),
    false,
  );
  assert.equal(
    isActivePromotion(
      { ...offer, startsAt: '2026-11-01' },
      new Date('2026-10-15'),
    ),
    false,
  );
  assert.equal(activePromotions([offer], new Date('2026-11-01')).length, 0);
});

test('production validation rejects incomplete identity, placeholder domains, and invalid contact', () => {
  assert.ok(publicationErrors(site).length > 0);
  const complete = {
    ...site,
    fullName: 'Test Sales',
    area: 'BSD',
    instagram: 'test_sales',
    dealer: 'Test Dealer',
    address: 'Test address',
    hours: '09.00–17.00 WIB',
    portrait: '/images/test.jpg',
    domain: 'https://sales-demo.id',
    identityVerified: true,
    assetsApproved: true,
    catalogApproved: true,
  };
  assert.deepEqual(publicationErrors(complete), []);
  assert.ok(
    publicationErrors({ ...complete, domain: 'http://localhost:4321' }).length >
      0,
  );
  assert.ok(
    publicationErrors({ ...complete, domain: 'https://example.com' }).length >
      0,
  );
  assert.ok(
    publicationErrors({ ...complete, whatsapp: 'not a phone' }).length > 0,
  );
  assert.ok(
    publicationErrors({ ...complete, instagram: 'bad/account' }).length > 0,
  );
});
