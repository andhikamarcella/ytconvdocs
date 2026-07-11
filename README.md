# YTConv Docs

Website dokumentasi YTConv bergaya senada dengan YTConv Guide. Proyek ini statis, ringan, responsif, dan siap dipasang ke Vercel.

## Fitur

- Navigasi dokumentasi berdasarkan kategori
- Pencarian seluruh artikel (`Ctrl/⌘ + K` atau tombol cari)
- Mode terang dan gelap
- Halaman ramah perangkat seluler
- Tautan artikel yang dapat dibuka langsung
- Blok command dengan tombol salin
- Daftar isi otomatis
- SEO dasar, Open Graph, sitemap, robots.txt, dan manifest
- Tidak memerlukan framework atau proses build

## Menjalankan secara lokal

Gunakan salah satu cara berikut dari folder proyek:

```bash
python3 -m http.server 4173
```

Lalu buka `http://localhost:4173`.

Atau:

```bash
npx serve .
```

## Deploy ke Vercel

### Melalui GitHub

1. Upload seluruh isi folder ini ke repository GitHub.
2. Buka Vercel dan pilih **Add New → Project**.
3. Impor repository tersebut.
4. Pilih **Framework Preset: Other**.
5. Kosongkan Build Command dan Output Directory.
6. Tekan **Deploy**.

### Melalui Vercel CLI

```bash
npm i -g vercel
vercel
```

Ikuti pertanyaan di terminal, lalu jalankan `vercel --prod` untuk deployment produksi.

## Mengubah identitas dan tautan

Buka `assets/docs.js`, lalu ubah objek `siteConfig` di bagian paling atas:

- `name`
- `productName`
- `converterUrl`
- `guideUrl`
- `statusUrl` — saat ini: `https://ytconvstatus.vercel.app/`
- `supportUrl`
- `docsUrl`

## Mengubah isi dokumentasi

Semua artikel berada di array `docs` pada `assets/docs.js`. Setiap artikel mempunyai:

- `slug`: alamat halaman
- `title`: judul
- `description`: ringkasan
- `category`: kategori sidebar
- `keywords`: kata kunci pencarian
- `sections`: isi artikel

## Sebelum dipublikasikan

- Ganti domain di `robots.txt` dan `sitemap.xml` apabila alamat produksinya bukan `ytconvdocs.vercel.app`.
- Sesuaikan batas layanan, kebijakan penyimpanan, dan detail privasi dengan perilaku backend YTConv yang sebenarnya.
- Ganti alamat dukungan/status jika endpoint tersebut belum tersedia.
