# Fajar — Sales Toyota BSD

Website profil sales Toyota berbasis Astro, TypeScript, dan CSS. Seluruh halaman dirender menjadi file statis. Tidak ada database, API runtime, atau penyimpanan data pengunjung.

## Menjalankan lokal

Gunakan Node.js versi yang didukung Astro 7 (proyek ini diuji menggunakan Node 25.9.0) dan npm.

```sh
npm ci
npm run dev
```

Buka [preview lokal](http://localhost:4321). Website berjalan dalam **mode preview** secara default. Nomor WhatsApp yang diberikan pengguna sudah dipasang: **0857-7401-0197**.

```sh
npm run build          # Pemeriksaan tipe + hasil statis di dist/
npm run preview        # Memeriksa hasil build
npm test               # Kontak, masa berlaku promo, validasi publikasi
npm run audit:preview  # Audit HTML, metadata, aset, dan tautan di dist/
npm run format         # Format kode Astro, CSS, dan TypeScript
```

Pada lingkungan sandbox yang membatasi direktori konfigurasi Astro, gunakan `ASTRO_TELEMETRY_DISABLED=1` untuk proses lokal. Contoh: `ASTRO_TELEMETRY_DISABLED=1 npm run dev`.

## Yang tersedia

- Beranda dengan hero Toyota, katalog enam model, penawaran, profil sales, alur pembelian, FAQ, dan kontak.
- Katalog dengan filter MPV, SUV, Hybrid EV, pencarian model, serta kondisi pencarian kosong.
- Enam halaman detail mobil dengan kategori, jenis mesin, informasi pemilihan, brosur resmi, dan produk terkait.
- Halaman penawaran, kontak, serta 404.
- WhatsApp dengan pesan sesuai model/penawaran; tidak mengirim pesan otomatis.
- Menu mobile, navigasi keyboard, FAQ native HTML, dan CTA WhatsApp tetap di ponsel.
- Gambar lokal yang dioptimasi saat build, font lokal, metadata sosial, serta SEO produksi.

Instagram menampilkan “Segera hadir” sampai username tersedia. Profil menggunakan monogram F sebagai pengganti sementara, bukan foto orang lain. Penawaran nominal dan testimoni tidak ditampilkan karena belum diberikan.

## Memperbarui isi

| File                    | Isi                                                                   |
| ----------------------- | --------------------------------------------------------------------- |
| `src/data/site.ts`      | Identitas, WhatsApp, Instagram, dealer, domain, dan status verifikasi |
| `src/data/cars.ts`      | Model, kategori, gambar, deskripsi, referensi, dan brosur             |
| `src/data/promos.ts`    | Promo yang telah disetujui                                            |
| `src/data/faqs.ts`      | FAQ                                                                   |
| `src/styles/global.css` | Gaya visual dan breakpoint                                            |
| `public/images/`        | Foto asli sales yang akan ditambahkan                                 |

Foto sales: simpan misalnya sebagai `public/images/fajar.jpg`, lalu isi `site.portrait` dengan `/images/fajar.jpg`. Gunakan foto potret yang cukup tajam. Konfirmasi nama dan area contoh Fajar–BSD sebelum publikasi.

Username Instagram cukup nama akun, tanpa URL. Semua tombol WhatsApp memakai `site.whatsapp` dalam format internasional. Tautan yang belum tersedia tidak dialihkan ke akun pihak lain.

### Menambah promo

Tambahkan objek ke `promos` sesuai tipe `Promotion`. Isi ID unik, judul, deskripsi, slug kendaraan, tanggal mulai/akhir dengan zona waktu (contoh format `2026-10-31T23:59:59+07:00`), tanggal pembaruan, dan ketentuan. Set `verified` serta `published` ke `true` hanya setelah penawaran disetujui.

Promo yang belum mulai, sudah berakhir, belum diverifikasi, atau masih draft tidak ditampilkan ketika build dijalankan. **Build statis tidak memperbarui dirinya saat waktu berlalu:** build dan deploy ulang sebelum penawaran berubah/berakhir. Tanpa jadwal pemeliharaan yang pasti, gunakan CTA permintaan penawaran tanpa nominal seperti kondisi saat ini.

## Publikasi dan SEO

1. Lengkapi nama, area, Instagram, dealer, alamat, jam layanan, foto asli, dan domain HTTPS di `site.ts`.
2. Konfirmasi identitas, daftar model yang ditawarkan, dan hak penggunaan aset. Set `identityVerified`, `catalogApproved`, dan `assetsApproved` sesuai konfirmasi tersebut.
3. Jalankan `npm run build:production`. Validasi akan menghentikan build jika data wajib belum lengkap.
4. Upload isi `dist/` ke hosting statis pilihan. Jalankan website dengan HTTPS, satu domain canonical, dan redirect domain alternatif bila diperlukan.
5. Pastikan URL tidak ditemukan menghasilkan **HTTP 404** dengan halaman `404.html`; jangan menggunakan fallback SPA ke beranda. Periksa juga redirect HTTP ke HTTPS dan konsistensi trailing slash.
6. Daftarkan domain di Google Search Console, kirim `/sitemap-index.xml`, lalu periksa URL utama.
7. Validasi JSON-LD pada tipe yang didukung Google dan periksa performa melalui PageSpeed Insights.

Mode preview selalu memakai `noindex, nofollow`, tidak menerbitkan sitemap, dan tidak mengeluarkan JSON-LD identitas yang belum dikonfirmasi. Mode produksi mengaktifkan canonical, sitemap, WebSite, Person, breadcrumb, dan Product sesuai halaman. Tidak ada harga/rating rekaan atau klaim dealer resmi pada structured data.

Gambar berbagi `public/og-cover.png` dibuat ulang otomatis sebelum build. Teksnya mengikuti konfigurasi identitas. Jika model hero diganti, sesuaikan juga `scripts/create-social-image.mjs`.

Target pencarian utama mengikuti spesifikasi: “Fajar sales Toyota BSD”. Implementasi teknis tidak menjamin peringkat pertama. Search Console, status indeks, dan Core Web Vitals lapangan baru dapat dievaluasi setelah domain produksi aktif.

## Status data

- WhatsApp: diterima dari pengguna dan sudah dikonfigurasi.
- Nama Fajar dan area BSD: contoh dari permintaan, menunggu konfirmasi.
- Instagram, dealer, alamat, jam layanan, domain, dan foto sales: belum diberikan.
- Nominal promo, harga dealer, stok, dan testimoni: belum diberikan.
- Kategori, nama model, jenis mesin, dan foto Toyota: referensi katalog publik; daftar penjualan serta izin publikasi aset tetap perlu dikonfirmasi pemilik website.

Lihat `ASSET_SOURCES.md` untuk asal gambar dan `WEBSITE_SPEC.md` untuk spesifikasi awal.
