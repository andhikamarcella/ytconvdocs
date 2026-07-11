# Deploy YTConv Docs ke Vercel

## Cara paling mudah: GitHub

1. Buat repository baru, misalnya `ytconv-docs`.
2. Upload semua file dan folder proyek ini ke repository tersebut.
3. Masuk ke Vercel.
4. Pilih **Add New → Project**.
5. Pilih repository `ytconv-docs`.
6. Pada **Framework Preset**, pilih **Other**.
7. Biarkan **Build Command**, **Output Directory**, dan **Install Command** kosong.
8. Tekan **Deploy**.

Website ini tidak membutuhkan database, environment variable, atau proses build.

## Mengganti alamat produksi

Setelah Vercel memberikan domain, misalnya `ytconvdocs.vercel.app`:

1. Buka `assets/docs.js`.
2. Ubah nilai `docsUrl` bila alamat berbeda.
3. Buka `robots.txt` dan ganti alamat sitemap.
4. Buka `sitemap.xml` dan ganti semua alamat domain.
5. Commit dan push; Vercel akan melakukan deployment ulang otomatis.

## Custom domain

Di dashboard Vercel:

1. Buka proyek.
2. Pilih **Settings → Domains**.
3. Tambahkan domain, misalnya `docs.ytconv.id`.
4. Ikuti instruksi DNS yang ditampilkan Vercel.
5. Setelah aktif, ubah URL di `assets/docs.js`, `robots.txt`, dan `sitemap.xml`.

## Struktur yang disarankan

- `ytconv.onrender.com` — converter utama
- `ytconvguide.vercel.app` — panduan praktis
- `ytconvdocs.vercel.app` — dokumentasi lengkap
- `docs.ytconv.id` — custom domain dokumentasi, bila tersedia
