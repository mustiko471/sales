# Spesifikasi Website Profil Sales Toyota — Astro

Tanggal: 6 Oktober 2026  
Status: rancangan untuk implementasi; belum berupa website yang berjalan.  
Bahasa website: Bahasa Indonesia.

## 1. Tujuan

Membangun website statis untuk memperkenalkan sales mobil Toyota, menampilkan kendaraan dan penawaran yang relevan, serta mengarahkan calon pembeli ke WhatsApp dan Instagram sales.

Prioritas pengalaman pengunjung:

1. Mengenali sales melalui nama, foto asli, dan informasi dealer.
2. Menemukan mobil yang sesuai kebutuhan serta memahami penawarannya.
3. Menghubungi sales untuk harga, ketersediaan, konsultasi pembelian, dan jadwal test drive.

Target SEO utama adalah pencarian **“fajar sales toyota BSD”**. Peringkat pertama menjadi sasaran optimasi, bukan hasil yang dapat dijamin. Google menyatakan tidak ada praktik yang otomatis menempatkan website di posisi pertama. Hasil pencarian memerlukan evaluasi setelah publikasi. [Panduan SEO Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)

## 2. Asumsi dan data yang diperlukan

Nama **Fajar** dan lokasi **BSD** digunakan sebagai contoh dari permintaan. Semua identitas harus dapat diganti melalui satu konfigurasi. Tidak ada nomor kontak, afiliasi dealer, foto, harga, atau testimoni yang diasumsikan sebagai fakta.

| Data | Nilai sementara | Penggunaan |
| --- | --- | --- |
| Nama sales | Fajar, perlu dikonfirmasi | Judul, profil, metadata |
| Area utama | BSD, perlu dikonfirmasi | Konten layanan dan SEO |
| WhatsApp | `[NOMOR_WHATSAPP]` | Tombol konsultasi |
| Instagram | `[USERNAME_INSTAGRAM]` | Tautan profil sales |
| Dealer dan jabatan | `[NAMA_DEALER]`, `[JABATAN]` | Bukti identitas dan afiliasi |
| Alamat dealer | `[ALAMAT_DEALER]` | Informasi kunjungan |
| Tautan Google Maps | `[URL_MAPS_DEALER]` | Petunjuk lokasi |
| Jam layanan | `[JAM_LAYANAN]` | Ekspektasi waktu respons |
| Domain produksi | `[DOMAIN_WEBSITE]` | Canonical, sitemap, metadata |
| Foto sales | Foto asli yang disediakan | Hero dan profil |
| Foto kendaraan | Materi yang boleh digunakan | Katalog dan detail produk |
| Promo | Informasi penawaran terverifikasi | Kartu promo dan halaman detail |

Placeholder hanya boleh tampil pada dokumen atau preview pengembangan. Implementasi produksi harus menolak kontak kosong atau placeholder. Bagian opsional seperti testimoni dan promo nominal disembunyikan jika datanya belum tersedia.

## 3. Ruang lingkup

Website memakai **Astro dengan output statis**, TypeScript, dan CSS responsif. Seluruh halaman dibuat saat build dan dilayani sebagai HTML, CSS, JavaScript, dan aset gambar. Astro mendukung pembuatan rute statis dari `src/pages/`, termasuk halaman produk menggunakan `getStaticPaths()`. [Dokumentasi routing Astro](https://docs.astro.build/en/reference/routing-reference/)

Termasuk dalam versi awal:

- Beranda yang menggabungkan profil sales, produk unggulan, promo, FAQ, dan kontak.
- Katalog kendaraan Toyota dan halaman detail setiap mobil yang benar-benar ditawarkan.
- Halaman promo dan kontak.
- WhatsApp pada hero, setiap produk, promo, dan tombol tetap di perangkat seluler.
- Instagram pada profil, bagian kontak, dan footer.
- SEO teknis, optimasi gambar, sitemap, robots.txt, serta halaman 404.

Pembaruan dilakukan melalui file lokal, kemudian build dan deploy ulang. Versi ini tidak membutuhkan database, akun pengguna, panel admin, server API, atau formulir yang menyimpan data. Permintaan penawaran dan test drive dilakukan melalui WhatsApp.

## 4. Struktur halaman

| URL | Isi utama | Fokus pencarian |
| --- | --- | --- |
| `/` | Profil Fajar, pilihan Toyota, promo, FAQ, kontak | Fajar sales Toyota BSD |
| `/mobil/` | Daftar mobil yang ditawarkan | Mobil Toyota BSD |
| `/mobil/[slug]/` | Foto, varian, spesifikasi, penawaran, CTA | Toyota + model + BSD |
| `/promo/` | Penawaran aktif beserta syarat dan periode | Promo Toyota BSD |
| `/kontak/` | WhatsApp, Instagram, jam layanan, dealer | Kontak Fajar Toyota BSD |
| `/404.html` | Pesan halaman tidak ditemukan dan navigasi | Tidak ditargetkan untuk indeks |

Contoh slug produk: `/mobil/toyota-avanza/`. Nama dan daftar model final mengikuti katalog sales yang sudah dikonfirmasi. Tidak membuat halaman kosong untuk setiap model atau lokasi hanya untuk mengejar kata kunci.

Navigasi: **Beranda · Mobil Toyota · Promo · Tentang Fajar · Kontak**. “Tentang Fajar” menuju bagian profil pada beranda. Semua halaman detail memiliki breadcrumb dan tautan kembali ke katalog.

## 5. Arah desain

Karakter visual: profesional, personal, bersih, dengan fotografi kendaraan yang dominan dan identitas sales yang mudah dikenali.

- Warna utama putih; teks gelap; aksen merah untuk penawaran dan navigasi penting.
- Tombol WhatsApp memakai hijau dengan teks yang tetap memiliki kontras memadai.
- Font sans-serif yang mudah dibaca, sebaiknya dilayani secara lokal.
- Konten desktop dibatasi sekitar 1.200 px; kartu produk memakai tiga kolom, dua pada tablet, satu pada ponsel.
- Hero desktop membagi teks dan foto; pada ponsel nama, pesan utama, dan CTA tampil terlebih dahulu.
- Foto mobil mempertahankan proporsi; foto sales tidak terpotong pada wajah.
- Animasi ringan, menghormati `prefers-reduced-motion`.

Nama sales menjadi identitas utama. Afiliasi dealer ditampilkan sesuai fakta. Website tidak menampilkan label “website resmi Toyota” atau “sales resmi” sebelum statusnya dikonfirmasi.

## 6. Konten beranda

### 6.1 Hero

H1 contoh: **Fajar — Sales Toyota BSD**.

Copy contoh, dipakai setelah nama dan area dikonfirmasi:

> Cari Toyota untuk keluarga atau aktivitas sehari-hari? Saya Fajar, sales Toyota untuk area BSD. Konsultasikan pilihan mobil, informasi harga, dan penawaran yang sesuai kebutuhan Anda melalui WhatsApp.

CTA utama: **Konsultasi via WhatsApp**.  
CTA kedua: **Lihat Pilihan Toyota**.

Foto asli sales, nama dealer yang terverifikasi, dan area layanan ditampilkan dekat CTA. Hindari klaim respons instan atau pengalaman bertahun-tahun tanpa data pendukung.

### 6.2 Produk unggulan

Tampilkan 3–6 kendaraan prioritas. Setiap kartu memuat:

- Foto kendaraan sesuai model dan varian.
- Nama model serta kategori kendaraan dari data terverifikasi.
- Ringkasan manfaat yang faktual.
- Harga atau penawaran jika tersedia dan masih berlaku.
- Tombol **Lihat Detail** dan **Tanya Mobil Ini**.

Jika harga belum tersedia, gunakan **“Hubungi Fajar untuk harga dan ketersediaan terbaru”**. Jangan menampilkan angka Rp0 atau harga contoh sebagai harga jual.

### 6.3 Penawaran menarik

Jenis penawaran yang dapat ditampilkan jika tersedia: paket pembelian, pilihan DP dan tenor, bonus aksesori, atau program tukar tambah. Tampilkan hanya program yang sudah disetujui pihak terkait.

Template kartu:

> **Penawaran Toyota [MODEL / VARIAN]**  
> [RINGKASAN_MANFAAT_PROMO]  
> Berlaku [TANGGAL_MULAI]–[TANGGAL_AKHIR] untuk [AREA / KETENTUAN].  
> **Minta Detail Penawaran**

Setiap penawaran menyebut model/varian, wilayah harga OTR jika relevan, masa berlaku, ketentuan, tanggal pembaruan, dan keterangan ketersediaan. Jika menampilkan cicilan, cantumkan DP, tenor, serta biaya yang termasuk atau belum termasuk berdasarkan penawaran pembiayaan yang valid. Website tidak memutuskan persetujuan kredit.

### 6.4 Profil sales

Judul: **Kenalan dengan Fajar**.

Memuat foto, jabatan, dealer, area layanan, jam kontak, dan cara sales membantu pembeli. Gunakan pernyataan konkret seperti konsultasi pilihan model dan penjelasan penawaran, sesuai layanan yang benar-benar diberikan.

Instagram: **Lihat aktivitas Fajar di Instagram**. Cukup tautan profil; feed Instagram yang bergantung pada API tidak diperlukan.

### 6.5 Alur pembelian

1. Hubungi sales dan jelaskan kebutuhan kendaraan.
2. Diskusikan model, varian, ketersediaan, dan penawaran.
3. Atur kunjungan atau test drive sesuai ketersediaan dealer.
4. Lanjutkan proses pembelian melalui prosedur dealer.

### 6.6 Testimoni dan dokumentasi

Opsional. Tampilkan hanya testimoni asli dan foto pelanggan yang diizinkan untuk publikasi. Jika belum ada, bagian ini tidak dirender. Tidak membuat rating, jumlah pelanggan, atau kutipan fiktif.

### 6.7 FAQ

Topik awal: cara menghubungi Fajar, area layanan, informasi harga terbaru, permintaan test drive, dan cara memperoleh detail promo. Jawaban berasal dari prosedur sales/dealer yang dikonfirmasi. FAQ tetap berguna sebagai konten biasa tanpa mengandalkan tampilan khusus di hasil pencarian.

### 6.8 Kontak dan footer

CTA akhir: **Siap mencari Toyota yang cocok? Hubungi Fajar.**

Sertakan WhatsApp, Instagram, jam layanan, alamat dealer dan tautan Maps bila tersedia, serta identitas pemilik website. Keterangan afiliasi harus konsisten dengan bagian profil.

## 7. Halaman detail mobil

Setiap halaman memiliki konten yang membedakan kendaraan tersebut:

- H1 nama model dan area layanan, tanpa pengulangan kata kunci berlebihan.
- Foto utama serta galeri tambahan jika tersedia.
- Gambaran penggunaan kendaraan dan manfaat fitur yang telah diverifikasi.
- Varian yang ditawarkan dan spesifikasi penting dari materi resmi/dealer.
- Harga dengan konteks varian, wilayah, dan tanggal pembaruan, jika tersedia.
- Promo yang berlaku untuk produk tersebut.
- FAQ khusus model bila informasinya tersedia.
- CTA WhatsApp dengan nama model/varian pada pesan.
- Tautan kendaraan terkait berdasarkan kebutuhan pembeli.

Perubahan generasi, varian, spesifikasi, harga, dan stok harus ditinjau sebelum publikasi. Jangan menyalin deskripsi panjang milik website lain; tulis penjelasan sendiri dari fakta yang sudah diperiksa.

## 8. WhatsApp dan Instagram

Gunakan tautan WhatsApp `https://wa.me/<nomor>?text=<pesan-terenkode>`. Nomor disimpan dalam format internasional berupa digit, misalnya awalan `62`, tanpa `+`, spasi, atau angka `0` domestik di awal. Pastikan format tautan dan nomor diuji saat implementasi.

Pesan contoh:

- Umum: “Halo Pak Fajar, saya melihat website Anda dan ingin konsultasi mobil Toyota untuk area BSD.”
- Produk: “Halo Pak Fajar, saya tertarik Toyota [MODEL/VARIAN]. Boleh minta harga dan ketersediaan terbaru?”
- Promo: “Halo Pak Fajar, saya ingin mengetahui detail penawaran [NAMA_PROMO] yang saya lihat di website.”

Pesan dienkode dengan `encodeURIComponent`. Link tetap berfungsi tanpa JavaScript, memakai nama aksesibel yang jelas. CTA mobile memiliki ruang aman di bagian bawah sehingga tidak menutupi teks atau kontrol lain.

Tautan Instagram: `https://www.instagram.com/<username>/`. Jika membuka tab baru, gunakan `rel="noopener noreferrer"`. Jangan memakai akun contoh pada produksi.

## 9. Strategi SEO

### 9.1 Pemetaan kata kunci

Daftar berikut adalah hipotesis awal, belum berdasarkan riset volume atau audit kompetitor:

| Prioritas | Contoh pencarian | Halaman tujuan |
| --- | --- | --- |
| Utama | fajar sales toyota BSD | Beranda |
| Identitas | kontak fajar toyota BSD | Kontak |
| Layanan | sales toyota BSD | Beranda |
| Produk | toyota [model] BSD | Detail model |
| Penawaran | promo toyota BSD | Promo |

Tulis konten secara alami. Hindari pengulangan kata kunci, konten tersembunyi, dan halaman area yang hanya mengganti nama kota. Domain dipilih agar mudah diingat, bukan sebagai janji peringkat. [Panduan SEO Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)

### 9.2 Metadata

Contoh beranda:

- Title: **Fajar Sales Toyota BSD | Mobil & Penawaran Toyota**.
- Meta description: **Kenali Fajar, sales Toyota area BSD. Lihat pilihan mobil dan penawaran, lalu hubungi melalui WhatsApp untuk konsultasi pembelian.**
- H1: **Fajar — Sales Toyota BSD**.
- Canonical: URL HTTPS beranda pada domain produksi.
- Open Graph: judul, deskripsi, URL, gambar berbagi, dan `locale: id_ID`.

Setiap halaman memiliki title dan deskripsi unik. Title harus menggambarkan isi secara ringkas; Google dapat menampilkan judul atau snippet berbeda dari metadata yang disediakan. [Dokumentasi title Google](https://developers.google.com/search/docs/appearance/title-link), [dokumentasi snippet Google](https://developers.google.com/search/docs/appearance/snippet)

Gunakan canonical absolut yang menunjuk versi URL utama, konsisten dengan sitemap dan tautan internal. Atur redirect untuk variasi domain/protokol dan URL yang memang berubah. [Panduan canonical Google](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)

### 9.3 SEO teknis

- HTML produksi memakai `lang="id"`, heading terstruktur, dan elemen semantik.
- Profil, spesifikasi, promo, dan tautan tersedia pada HTML hasil build.
- URL penting dapat diakses crawler dan tidak memakai `noindex` pada produksi.
- Preview pengembangan dicegah masuk indeks.
- Sitemap hanya memuat URL canonical halaman publik yang layak diindeks.
- `robots.txt` produksi mencantumkan lokasi sitemap; robots.txt bukan pengaman konten privat.
- Halaman 404 benar-benar menghasilkan status HTTP 404 di hosting.
- Semua tautan, gambar, metadata berbagi, dan redirect diperiksa setelah deploy.

Pakai `@astrojs/sitemap`, isi `site` dengan domain produksi, dan tautkan `/sitemap-index.xml` dari robots.txt. Integrasi menghasilkan sitemap untuk rute statis saat build. [Dokumentasi sitemap Astro](https://docs.astro.build/en/guides/integrations-guide/sitemap/)

### 9.4 Structured data

Rencana JSON-LD:

| Jenis | Penggunaan |
| --- | --- |
| `WebSite` | Nama dan URL website |
| `Person` | Nama sales, foto, URL, dan Instagram melalui `sameAs` |
| `BreadcrumbList` | Hierarki halaman katalog dan detail |
| `Product` | Detail mobil dengan data yang sesuai konten terlihat |
| `Offer` | Hanya jika harga, mata uang, periode, dan kondisi penawaran valid |
| `AutoDealer` | Hanya untuk entitas dealer yang faktual dan relevan, bukan identitas sales pribadi |

Jangan mengisi `worksFor`, alamat dealer, harga, stok, atau rating tanpa bukti. Validasi struktur dengan Schema Markup Validator dan tipe yang didukung Google dengan Rich Results Test. Markup valid tidak menjamin tampilan khusus atau peringkat pertama. [Panduan structured data bisnis lokal Google](https://developers.google.com/search/docs/appearance/structured-data/local-business)

### 9.5 Identitas lokal dan promosi profil

Nama sales, dealer, area, WhatsApp, dan Instagram konsisten di website dan profil publik. Tautkan website dari bio Instagram dan dari kanal dealer yang mengizinkan profil sales. Publikasikan dokumentasi serta konten yang berguna bagi calon pembeli sesuai kegiatan nyata.

Google menyebut sales associate atau agen lead generation perusahaan tidak memenuhi syarat sebagai praktisi individual untuk Google Business Profile. Karena itu, rancangan tidak mengandalkan profil bisnis pribadi Fajar. Penggunaan profil dealer harus dilakukan oleh pengelola yang berwenang dan mengikuti ketentuan Google. [Ketentuan Google Business Profile](https://support.google.com/business/answer/3038177)

### 9.6 Evaluasi setelah publikasi

Daftarkan domain di Google Search Console, kirim sitemap, dan periksa halaman penting melalui URL Inspection. Pantau indeks, impressions, clicks, dan posisi rata-rata untuk pencarian nama sales serta halaman produk. Posisi rata-rata menjadi data evaluasi, bukan bukti posisi pertama untuk semua pengguna.

Evaluasi dilakukan berkala setelah situs terindeks. Analitik klik WhatsApp dan Instagram dapat ditambahkan tanpa database website. Klik WhatsApp tidak sama dengan pesan terkirim atau penjualan; hasil percakapan dicatat oleh sales.

## 10. Performa dan aksesibilitas

Target pengalaman lapangan: LCP ≤ 2,5 detik, INP ≤ 200 ms, dan CLS ≤ 0,1 pada persentil ke-75. Angka ini merupakan sasaran, harus diukur setelah website berjalan. Website baru mungkin belum memiliki data lapangan; Lighthouse dipakai sebagai pemeriksaan awal. [Core Web Vitals Google](https://developers.google.com/search/docs/appearance/core-web-vitals)

Keputusan implementasi:

- Optimasi foto melalui `astro:assets` dan simpan sumber di `src/assets/`.
- Gambar responsif memakai ukuran sesuai perangkat; gunakan WebP/AVIF bila sesuai.
- Gambar hero yang menjadi elemen utama dimuat segera; gambar di bawahnya memakai lazy loading.
- Tentukan dimensi gambar untuk menghindari pergeseran layout.
- JavaScript dibatasi pada menu mobile dan interaksi yang diperlukan.
- Hindari carousel otomatis, video autoplay, dan embed Instagram berat.
- Navigasi dapat dioperasikan dengan keyboard, memiliki focus indicator dan skip link.
- Tombol sentuh minimal sekitar 44 × 44 px; teks memiliki kontras yang memadai.
- FAQ dapat memakai elemen HTML `details` dan `summary`.

Komponen gambar Astro mendukung optimasi gambar lokal pada saat build untuk halaman prerender. [Dokumentasi gambar Astro](https://docs.astro.build/en/guides/images/)

## 11. Struktur proyek yang direncanakan

```text
astro/
├── WEBSITE_SPEC.md
├── astro.config.mjs
├── package.json
├── public/
│   ├── favicon.svg
│   ├── og-cover.jpg
│   └── robots.txt
└── src/
    ├── assets/
    │   ├── sales/
    │   └── cars/
    ├── data/
    │   ├── site.ts
    │   ├── cars.ts
    │   ├── promos.ts
    │   └── faqs.ts
    ├── components/
    │   ├── Header.astro
    │   ├── Hero.astro
    │   ├── SalesProfile.astro
    │   ├── CarCard.astro
    │   ├── PromoCard.astro
    │   ├── ContactCTA.astro
    │   ├── WhatsAppButton.astro
    │   ├── SEO.astro
    │   └── Footer.astro
    ├── layouts/
    │   └── BaseLayout.astro
    ├── pages/
    │   ├── index.astro
    │   ├── mobil/
    │   │   ├── index.astro
    │   │   └── [slug].astro
    │   ├── promo.astro
    │   ├── kontak.astro
    │   └── 404.astro
    ├── styles/
    │   └── global.css
    └── utils/
        ├── whatsapp.ts
        └── promotions.ts
```

`site.ts` menjadi sumber identitas dan kontak. `cars.ts` menyimpan slug, model, varian, foto, ringkasan, spesifikasi, harga opsional, dan tanggal pembaruan. `promos.ts` menyimpan produk terkait, penawaran, syarat, periode, dan status publikasi. Data divalidasi sebelum build.

Konten inti memakai file TypeScript agar sederhana. Markdown dapat ditambahkan untuk artikel pada tahap berikutnya jika benar-benar dibutuhkan.

## 12. Pemeliharaan promo pada website statis

Harga dan penawaran tidak berubah otomatis karena tidak ada database atau koneksi stok langsung.

Prosedur pembaruan:

1. Sales memberikan data terbaru dari dealer.
2. Perbarui file kendaraan/promo, masa berlaku, dan tanggal pembaruan sebenarnya.
3. Periksa copy, ketentuan, kontak, dan gambar.
4. Build ulang; promo yang sudah berakhir dikeluarkan dari daftar aktif dan markup `Offer`.
5. Deploy hasil build ke hosting statis.

Tetapkan pengingat operasional untuk memperbarui situs sebelum promo berakhir; penjadwalan otomatis tidak dibuat pada tahap dokumen ini. File statis yang telah terbit tidak mengubah dirinya sendiri setelah tanggal kedaluwarsa. Jika belum bisa menjaga siklus pembaruan, gunakan CTA “Minta penawaran terbaru” tanpa nominal/periode promo yang dapat menyesatkan.

## 13. Tahapan implementasi

1. Lengkapi identitas, kontak, foto, daftar mobil, dan promo valid.
2. Inisialisasi Astro, TypeScript, konfigurasi statis, layout, dan gaya global.
3. Bangun beranda serta komponen profil, kartu produk, promo, dan kontak.
4. Bangun katalog, detail mobil, promo, kontak, serta 404.
5. Tambahkan metadata, canonical, JSON-LD, sitemap, dan optimasi aset.
6. Periksa build, tampilan responsif, aksesibilitas, tautan, serta data produksi.
7. Publikasikan pada domain HTTPS di hosting statis yang dipilih.
8. Verifikasi Search Console dan mulai evaluasi hasil pencarian.

Tahap saat ini hanya menghasilkan dokumen spesifikasi. Pembuatan website, registrasi domain, hosting, dan publikasi mengikuti tahap implementasi berikutnya.

## 14. Kriteria selesai untuk implementasi

- [ ] Build Astro berhasil dan menghasilkan website statis tanpa layanan database.
- [ ] Identitas sales, dealer, foto asli, WhatsApp, dan Instagram terkonfirmasi.
- [ ] Tidak ada placeholder, testimoni fiktif, atau promo contoh pada produksi.
- [ ] Foto sales dan foto mobil tampil dengan baik pada desktop dan ponsel.
- [ ] CTA WhatsApp bekerja pada mobile dan desktop, dengan pesan yang sesuai konteks.
- [ ] Tautan Instagram dan Maps mengarah ke profil/lokasi yang benar.
- [ ] Katalog serta setiap detail mobil memiliki data dan konten relevan.
- [ ] Promo aktif memuat periode dan syarat; promo berakhir tidak ditawarkan sebagai aktif.
- [ ] Konten inti dan tautan tetap tersedia saat JavaScript dinonaktifkan.
- [ ] Metadata unik, canonical produksi, JSON-LD, sitemap, dan robots.txt valid.
- [ ] Tidak ada `noindex` yang tidak sengaja terpasang pada halaman produksi utama.
- [ ] Navigasi keyboard, kontras, alt text, dan tata letak mobile diperiksa.
- [ ] 404 dan redirect diuji melalui hosting, bukan hanya preview lokal.
- [ ] Search Console dikonfigurasi setelah deploy dan halaman utama dapat diperiksa.

Keberhasilan teknis adalah website cepat, dapat dirayapi, berisi identitas yang jelas, dan mudah dipakai untuk menghubungi sales. Keberhasilan SEO dan penjualan dinilai melalui data setelah publikasi, dengan target utama meningkatkan keterlihatan pencarian nama sales dan menghasilkan konsultasi yang relevan.
