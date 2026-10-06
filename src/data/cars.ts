import type { ImageMetadata } from 'astro';
import zenix from '../assets/cars/innova-zenix-hero.png';
import avanza from '../assets/cars/avanza.png';
import fortuner from '../assets/cars/fortuner.png';
import veloz from '../assets/cars/veloz.png';
import raize from '../assets/cars/raize.png';
import yaris from '../assets/cars/yaris-cross.png';

export interface Car {
  slug: string;
  name: string;
  edition: string;
  category: 'MPV' | 'SUV';
  powertrain: 'Hybrid EV' | 'Bensin' | 'Diesel';
  image: ImageMetadata;
  tagline: string;
  description: string;
  audience: string;
  talkingPoints: { title: string; text: string }[];
  source: string;
  brochure: string;
  updatedAt: string;
}

// Model names, categories, powertrains, and images checked against Toyota's
// public catalogue on 2026-10-06. Dealer availability still needs confirmation.
export const cars: Car[] = [
  {
    slug: 'toyota-innova-zenix',
    name: 'Kijang Innova Zenix',
    edition: 'Hybrid EV',
    category: 'MPV',
    powertrain: 'Hybrid EV',
    image: zenix,
    tagline: 'Ruang untuk cerita yang lebih besar.',
    description:
      'Kenali pilihan MPV hybrid Toyota untuk perjalanan bersama keluarga. Bandingkan kebutuhan kabin, fitur setiap varian, dan rencana pembelian Anda dalam satu konsultasi.',
    audience:
      'Untuk keluarga yang sedang mempertimbangkan MPV dengan teknologi hybrid.',
    talkingPoints: [
      {
        title: 'Mulai dari kebutuhan keluarga',
        text: 'Ceritakan aktivitas harian dan kebutuhan ruang Anda untuk menentukan varian yang relevan.',
      },
      {
        title: 'Kenali pilihan hybrid',
        text: 'Diskusikan cara penggunaan, perawatan, dan fitur Hybrid EV sebelum memilih kendaraan.',
      },
      {
        title: 'Lihat langsung pilihannya',
        text: 'Minta konfirmasi ketersediaan unit dan jadwal kunjungan atau test drive.',
      },
    ],
    source:
      'https://www.toyota.astra.co.id/product/kijang-innova-zenix-hybrid-ev',
    brochure: 'https://ebrochures.toyota.astra.co.id/kijang-innova-zenix.html',
    updatedAt: '2026-10-06',
  },
  {
    slug: 'toyota-avanza',
    name: 'Avanza',
    edition: 'All New',
    category: 'MPV',
    powertrain: 'Bensin',
    image: avanza,
    tagline: 'Menemani hari, mengantar cerita.',
    description:
      'Jelajahi Toyota Avanza sebagai pilihan MPV untuk kebutuhan keluarga dan aktivitas sehari-hari. Konsultasikan perbedaan varian serta pilihan pembelian yang sesuai rencana Anda.',
    audience: 'Untuk Anda yang mencari MPV bagi rutinitas keluarga.',
    talkingPoints: [
      {
        title: 'Sesuaikan dengan rutinitas',
        text: 'Mulai dari perjalanan kerja, antar jemput, hingga kebutuhan membawa barang keluarga.',
      },
      {
        title: 'Bandingkan varian',
        text: 'Periksa pilihan mesin, transmisi, dan fitur pada brosur sebelum menentukan tipe.',
      },
      {
        title: 'Minta rincian biaya',
        text: 'Dapatkan penjelasan harga OTR dan komponen penawaran untuk wilayah registrasi Anda.',
      },
    ],
    source: 'https://www.toyota.astra.co.id/product/avanza',
    brochure: 'https://ebrochures.toyota.astra.co.id/avanza.html',
    updatedAt: '2026-10-06',
  },
  {
    slug: 'toyota-fortuner',
    name: 'Fortuner',
    edition: 'GR Sport',
    category: 'SUV',
    powertrain: 'Diesel',
    image: fortuner,
    tagline: 'Karakter kuat di setiap perjalanan.',
    description:
      'Kenali Toyota Fortuner GR Sport, pilihan SUV diesel dengan identitas GR Sport. Diskusikan tipe, kebutuhan penggunaan, dan fitur yang Anda prioritaskan sebelum memilih.',
    audience: 'Untuk pencari SUV diesel dengan karakter GR Sport.',
    talkingPoints: [
      {
        title: 'Kenali tipe yang tepat',
        text: 'Bandingkan spesifikasi penggerak dan perlengkapan tiap tipe melalui brosur resmi.',
      },
      {
        title: 'Sesuaikan kebutuhan perjalanan',
        text: 'Diskusikan penggunaan harian maupun perjalanan luar kota agar pilihan lebih terarah.',
      },
      {
        title: 'Cek pilihan unit',
        text: 'Konfirmasikan warna, tipe, dan perkiraan ketersediaan langsung melalui WhatsApp.',
      },
    ],
    source: 'https://www.toyota.astra.co.id/product/new-fortuner-gr-sport',
    brochure: 'https://ebrochures.toyota.astra.co.id/all-new-fortuner.html',
    updatedAt: '2026-10-06',
  },
  {
    slug: 'toyota-veloz',
    name: 'Veloz',
    edition: 'Hybrid EV',
    category: 'MPV',
    powertrain: 'Hybrid EV',
    image: veloz,
    tagline: 'Pilihan baru untuk kebersamaan.',
    description:
      'Temukan Veloz Hybrid EV dalam pilihan MPV Toyota. Pelajari perbedaan varian, fitur yang Anda perlukan, serta informasi pembelian untuk area layanan Anda.',
    audience: 'Untuk keluarga yang ingin mengenal pilihan MPV hybrid Toyota.',
    talkingPoints: [
      {
        title: 'Jelajahi Hybrid EV',
        text: 'Pelajari pilihan teknologi hybrid dan informasi perawatannya dari materi resmi Toyota.',
      },
      {
        title: 'Perhatikan kebutuhan kabin',
        text: 'Bahas kebutuhan penumpang dan fitur kenyamanan yang menjadi prioritas Anda.',
      },
      {
        title: 'Rencanakan pembelian',
        text: 'Minta informasi harga, pilihan warna, dan waktu ketersediaan unit.',
      },
    ],
    source: 'https://www.toyota.astra.co.id/product/veloz-hybrid-ev',
    brochure: 'https://ebrochures.toyota.astra.co.id/veloz.html',
    updatedAt: '2026-10-06',
  },
  {
    slug: 'toyota-raize',
    name: 'Raize',
    edition: 'GR Sport',
    category: 'SUV',
    powertrain: 'Bensin',
    image: raize,
    tagline: 'Bawa semangat baru ke jalanan.',
    description:
      'Jelajahi Toyota Raize GR Sport, pilihan SUV bensin dengan sentuhan GR Sport. Cari tahu pilihan tipe dan perlengkapannya untuk kebutuhan mobilitas Anda.',
    audience:
      'Untuk Anda yang mempertimbangkan SUV bagi aktivitas sehari-hari.',
    talkingPoints: [
      {
        title: 'Gaya yang Anda sukai',
        text: 'Lihat tampilan GR Sport dan pilihan warna yang dapat dikonfirmasi melalui sales.',
      },
      {
        title: 'Cermati fiturnya',
        text: 'Periksa fitur berkendara dan keselamatan sesuai tipe pada brosur resmi.',
      },
      {
        title: 'Coba sebelum memilih',
        text: 'Sampaikan ketertarikan test drive untuk pemeriksaan jadwal dan unit yang tersedia.',
      },
    ],
    source: 'https://www.toyota.astra.co.id/product/new-raize-gr-sport',
    brochure: 'https://ebrochures.toyota.astra.co.id/all-new-raize.html',
    updatedAt: '2026-10-06',
  },
  {
    slug: 'toyota-yaris-cross',
    name: 'Yaris Cross',
    edition: 'G Hybrid EV',
    category: 'SUV',
    powertrain: 'Hybrid EV',
    image: yaris,
    tagline: 'Langkah berikutnya, bersama hybrid.',
    description:
      'Kenali Yaris Cross G Hybrid EV sebagai pilihan SUV hybrid Toyota. Bandingkan kebutuhan kendaraan Anda dengan fitur dan spesifikasi yang tersedia pada model ini.',
    audience:
      'Untuk Anda yang ingin mengeksplorasi SUV dengan teknologi hybrid.',
    talkingPoints: [
      {
        title: 'Kenali varian G Hybrid EV',
        text: 'Gunakan brosur resmi untuk melihat perlengkapan yang sesuai dengan varian ini.',
      },
      {
        title: 'Sesuaikan pola penggunaan',
        text: 'Diskusikan rutinitas perjalanan dan kebutuhan Anda saat mempertimbangkan hybrid.',
      },
      {
        title: 'Dapatkan penawaran personal',
        text: 'Tanyakan harga terbaru untuk wilayah registrasi dan pilihan pembelian Anda.',
      },
    ],
    source:
      'https://www.toyota.astra.co.id/product/new-yaris-cross-g-hybrid-ev',
    brochure: 'https://ebrochures.toyota.astra.co.id/yaris-cross.html',
    updatedAt: '2026-10-06',
  },
];
