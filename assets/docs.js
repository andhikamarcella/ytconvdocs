export const siteConfig = {
  name: 'YTConv Docs',
  productName: 'YTConv',
  tagline: 'Dokumentasi resmi YTConv',
  converterUrl: 'https://ytconv.onrender.com/',
  guideUrl: 'https://ytconvguide.vercel.app/',
  statusUrl: 'https://ytconv.onrender.com/status',
  supportUrl: 'https://ytconv.onrender.com/',
  docsUrl: 'https://ytconvdocs.vercel.app/',
  lastUpdated: '11 Juli 2026'
};

export const categories = [
  { id: 'mulai', label: 'Mulai', icon: 'spark' },
  { id: 'penggunaan', label: 'Penggunaan', icon: 'play' },
  { id: 'format', label: 'Format & kualitas', icon: 'sliders' },
  { id: 'lanjutan', label: 'Fitur lanjutan', icon: 'layers' },
  { id: 'keamanan', label: 'Keamanan & privasi', icon: 'shield' },
  { id: 'bantuan', label: 'Bantuan', icon: 'life' },
  { id: 'informasi', label: 'Informasi produk', icon: 'info' }
];

const legalNote = `
  <div class="callout warning">
    <strong>Gunakan secara bertanggung jawab.</strong>
    <p>Unduh atau konversikan hanya media yang kamu miliki, berlisensi bebas, berada di domain publik, atau telah memperoleh izin dari pemilik hak.</p>
  </div>`;

export const docs = [
  {
    slug: '',
    title: 'Dokumentasi YTConv',
    eyebrow: 'Pusat dokumentasi',
    description: 'Pelajari cara menggunakan YTConv, memilih format dan kualitas, memahami proses konversi, menjaga akun, serta menyelesaikan error.',
    category: 'mulai',
    keywords: ['beranda', 'dokumentasi', 'ytconv', 'panduan', 'mulai'],
    featured: true,
    sections: [
      {
        id: 'selamat-datang',
        title: 'Semua penjelasan dalam satu tempat',
        content: `
          <p>YTConv Docs adalah dokumentasi resmi untuk pengguna YTConv. Isi dokumentasi dibagi dari langkah paling sederhana sampai pembahasan teknis seperti format media, cookies, FFmpeg, yt-dlp, dan kode error.</p>
          <div class="hero-actions inline-actions">
            <a class="button primary" href="/mulai" data-route>Mulai membaca</a>
            <a class="button secondary" href="/error" data-route>Cari solusi error</a>
          </div>
          <div class="feature-grid">
            <a class="feature-card" href="/mulai" data-route><span class="feature-number">01</span><h3>Mulai cepat</h3><p>Tempel tautan, pilih hasil, lalu unduh.</p></a>
            <a class="feature-card" href="/kualitas" data-route><span class="feature-number">02</span><h3>Pilih kualitas</h3><p>Pahami resolusi, bitrate, ukuran, dan sumber asli.</p></a>
            <a class="feature-card" href="/cookies" data-route><span class="feature-number">03</span><h3>Login & cookies</h3><p>Gunakan cookies hanya ketika benar-benar diperlukan.</p></a>
            <a class="feature-card" href="/error" data-route><span class="feature-number">04</span><h3>Solusi error</h3><p>Cocokkan pesan error dengan langkah perbaikannya.</p></a>
          </div>`
      },
      {
        id: 'alur-belajar',
        title: 'Urutan belajar yang disarankan',
        content: `
          <ol class="steps-list">
            <li><span>1</span><div><strong>Baca Mulai Cepat</strong><p>Kenali alur dasar penggunaan converter.</p></div></li>
            <li><span>2</span><div><strong>Pahami format dan kualitas</strong><p>Pilih MP3, M4A, MP4, atau format lain sesuai kebutuhan.</p></div></li>
            <li><span>3</span><div><strong>Baca keamanan dan privasi</strong><p>Pahami file sementara, cookies, serta data yang tidak boleh dibagikan.</p></div></li>
            <li><span>4</span><div><strong>Simpan halaman error</strong><p>Gunakan halaman ini ketika konversi gagal atau hasil tidak sesuai.</p></div></li>
          </ol>`
      },
      {
        id: 'tautan-cepat',
        title: 'Layanan terkait',
        content: `
          <div class="link-cards">
            <a href="${siteConfig.converterUrl}" target="_blank" rel="noreferrer"><strong>Buka YTConv</strong><span>Gunakan converter utama ↗</span></a>
            <a href="${siteConfig.guideUrl}" target="_blank" rel="noreferrer"><strong>YTConv Guide</strong><span>Panduan perangkat dan command ↗</span></a>
            <a href="${siteConfig.statusUrl}" target="_blank" rel="noreferrer"><strong>Status layanan</strong><span>Periksa kondisi server ↗</span></a>
          </div>`
      }
    ]
  },
  {
    slug: 'mulai',
    title: 'Mulai cepat',
    eyebrow: 'Dasar penggunaan',
    description: 'Cara menggunakan YTConv dari menyalin tautan sampai menyimpan file hasil.',
    category: 'mulai',
    keywords: ['cara pakai', 'tutorial', 'tempel link', 'download', 'unduh', 'mulai'],
    sections: [
      {
        id: 'persiapan',
        title: 'Yang perlu disiapkan',
        content: `
          <p>Kamu hanya memerlukan browser modern, koneksi internet yang stabil, ruang penyimpanan yang cukup, dan tautan media yang dapat dibuka secara normal.</p>
          <div class="check-grid">
            <div>✓ Chrome, Edge, Firefox, Safari, atau browser modern lain</div>
            <div>✓ Tautan media lengkap</div>
            <div>✓ Penyimpanan perangkat mencukupi</div>
            <div>✓ Izin untuk menyimpan konten</div>
          </div>`
      },
      {
        id: 'langkah',
        title: 'Langkah menggunakan YTConv',
        content: `
          <ol class="steps-list">
            <li><span>1</span><div><strong>Salin tautan media</strong><p>Buka video, tekan Bagikan, lalu pilih Salin tautan. Tautan dari bilah alamat browser juga dapat digunakan.</p></div></li>
            <li><span>2</span><div><strong>Buka YTConv</strong><p>Masuk ke website utama YTConv dan tempel tautan ke kolom yang tersedia.</p></div></li>
            <li><span>3</span><div><strong>Pilih jenis hasil</strong><p>Pilih audio untuk MP3/M4A atau video untuk MP4. Pilihan yang tersedia bergantung pada sumber.</p></div></li>
            <li><span>4</span><div><strong>Pilih kualitas</strong><p>Gunakan Otomatis bila tidak yakin. Kualitas lebih tinggi biasanya menghasilkan file lebih besar.</p></div></li>
            <li><span>5</span><div><strong>Mulai proses</strong><p>Tekan tombol konversi atau unduh. Jangan menutup tab saat proses masih berjalan.</p></div></li>
            <li><span>6</span><div><strong>Simpan hasil</strong><p>Setelah siap, tekan Unduh. File biasanya masuk ke folder Downloads atau Unduhan.</p></div></li>
          </ol>`
      },
      {
        id: 'lokasi-file',
        title: 'Lokasi file hasil',
        content: `
          <div class="table-wrap"><table><thead><tr><th>Perangkat</th><th>Lokasi umum</th></tr></thead><tbody>
            <tr><td>Windows</td><td><code>C:\\Users\\NamaKamu\\Downloads</code></td></tr>
            <tr><td>Ubuntu/Linux</td><td><code>/home/nama/Downloads</code></td></tr>
            <tr><td>Android</td><td>Aplikasi File → Download/Unduhan</td></tr>
            <tr><td>iPhone/iPad</td><td>Files → Downloads, iCloud Drive, atau On My iPhone</td></tr>
            <tr><td>macOS</td><td>Finder → Downloads</td></tr>
          </tbody></table></div>
          <div class="callout tip"><strong>File tidak terlihat?</strong><p>Buka daftar unduhan browser dengan <kbd>Ctrl</kbd> + <kbd>J</kbd> di Windows/Linux atau <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>J</kbd> pada browser yang mendukung di macOS.</p></div>`
      },
      { id: 'aturan', title: 'Sebelum mengunduh', content: legalNote }
    ]
  },
  {
    slug: 'cara-kerja',
    title: 'Cara kerja YTConv',
    eyebrow: 'Di balik proses',
    description: 'Penjelasan sederhana tentang pemeriksaan tautan, pengambilan media, penggabungan, konversi, dan pengiriman file.',
    category: 'mulai',
    keywords: ['cara kerja', 'server', 'proses', 'yt-dlp', 'ffmpeg', 'temporary'],
    sections: [
      {
        id: 'alur',
        title: 'Alur umum konversi',
        content: `
          <div class="process-flow">
            <div><span>1</span><strong>Tautan diperiksa</strong><p>Sistem memvalidasi bentuk URL dan mencoba membaca informasi media.</p></div>
            <div><span>2</span><strong>Format dipilih</strong><p>Sistem mencari aliran audio atau video yang paling sesuai dengan pilihanmu.</p></div>
            <div><span>3</span><strong>Media diproses</strong><p>Aliran dapat diunduh sementara, digabung, atau dikonversi.</p></div>
            <div><span>4</span><strong>File dikirim</strong><p>Hasil tersedia untuk diunduh melalui browser.</p></div>
          </div>`
      },
      {
        id: 'alat',
        title: 'Peran yt-dlp dan FFmpeg',
        content: `
          <p><strong>yt-dlp</strong> membaca metadata dan format yang tersedia dari halaman sumber. <strong>FFmpeg</strong> menangani tugas media seperti menggabungkan video dan audio, mengubah wadah file, atau mengekstrak audio.</p>
          <div class="callout info"><strong>Mengapa video dan audio kadang diproses terpisah?</strong><p>Pada kualitas tertentu, sumber menyediakan aliran video dan audio secara terpisah. Keduanya perlu digabung agar file MP4 mempunyai gambar dan suara.</p></div>`
      },
      {
        id: 'waktu-proses',
        title: 'Mengapa lama proses berbeda-beda?',
        content: `
          <p>Durasi proses dipengaruhi oleh panjang media, kualitas pilihan, ukuran file, kecepatan server, kecepatan sumber, antrean pengguna, dan apakah file perlu dikonversi ulang.</p>
          <ul>
            <li>MP3 biasanya lebih kecil daripada video resolusi tinggi.</li>
            <li>Penggabungan tanpa encoding umumnya lebih cepat daripada konversi penuh.</li>
            <li>Video panjang atau resolusi tinggi membutuhkan waktu dan memori lebih banyak.</li>
            <li>Media yang meminta login dapat membutuhkan proses tambahan atau gagal jika autentikasi tidak tersedia.</li>
          </ul>`
      },
      {
        id: 'sumber-asli',
        title: 'Kualitas tidak dapat melebihi sumber',
        content: `
          <div class="callout warning"><strong>Bitrate tinggi bukan berarti detail baru.</strong><p>Mengubah audio sumber yang terkompresi menjadi MP3 320 kbps, WAV, atau FLAC tidak mengembalikan detail yang sudah hilang. Format keluaran hanya menentukan cara hasil disimpan.</p></div>`
      }
    ]
  },
  {
    slug: 'tautan-didukung',
    title: 'Tautan dan media yang didukung',
    eyebrow: 'Kompatibilitas',
    description: 'Jenis tautan yang dapat dicoba, penyebab media tidak tersedia, dan batas dukungan yang perlu dipahami.',
    category: 'penggunaan',
    keywords: ['url', 'link', 'youtube music', 'shorts', 'playlist', 'live', 'private', 'region'],
    sections: [
      {
        id: 'jenis-tautan',
        title: 'Jenis tautan yang umum digunakan',
        content: `
          <div class="check-grid">
            <div>✓ Video reguler</div><div>✓ Tautan pendek <code>youtu.be</code></div>
            <div>✓ YouTube Shorts</div><div>✓ YouTube Music</div>
            <div>✓ Playlist, jika fitur playlist diaktifkan</div><div>✓ Siaran langsung yang sudah selesai, jika tersedia</div>
          </div>
          <p>Dukungan aktual mengikuti kemampuan backend YTConv dan perubahan dari platform sumber. Sebuah tautan yang pernah bekerja dapat membutuhkan pembaruan sistem di kemudian hari.</p>`
      },
      {
        id: 'tidak-didukung',
        title: 'Media yang mungkin tidak dapat diproses',
        content: `
          <ul>
            <li>Video privat atau telah dihapus.</li>
            <li>Media berbayar, khusus anggota, atau membutuhkan akun yang memiliki akses.</li>
            <li>Media yang dibatasi usia, wilayah, sekolah, kantor, atau jaringan.</li>
            <li>Livestream yang masih berlangsung atau format live tertentu.</li>
            <li>Tautan yang rusak, tidak lengkap, atau mengarah ke halaman selain media.</li>
            <li>Konten yang formatnya belum dapat dibaca oleh versi backend saat ini.</li>
          </ul>`
      },
      {
        id: 'cek-tautan',
        title: 'Cara memeriksa tautan',
        content: `
          <ol>
            <li>Buka tautan di tab privat/incognito tanpa login.</li>
            <li>Pastikan media dapat diputar dari jaringan yang sama.</li>
            <li>Salin ulang tautan dari tombol Bagikan.</li>
            <li>Hapus parameter tambahan setelah ID video bila perlu.</li>
            <li>Jika tetap gagal, buka halaman <a href="/error" data-route>kode error</a>.</li>
          </ol>`
      }
    ]
  },
  {
    slug: 'mp3',
    title: 'Audio MP3',
    eyebrow: 'Format audio',
    description: 'Kapan memilih MP3, arti bitrate, kompatibilitas, dan keterbatasan kualitas.',
    category: 'format',
    keywords: ['mp3', 'audio', '128kbps', '192kbps', '320kbps', 'bitrate'],
    sections: [
      {
        id: 'apa-itu',
        title: 'Apa itu MP3?',
        content: `<p>MP3 adalah format audio terkompresi yang sangat kompatibel dengan ponsel, komputer, pemutar musik, mobil, dan aplikasi penyunting. Ukurannya relatif kecil karena sebagian informasi suara dikurangi melalui kompresi lossy.</p>`
      },
      {
        id: 'bitrate',
        title: 'Memilih bitrate',
        content: `
          <div class="table-wrap"><table><thead><tr><th>Bitrate</th><th>Kegunaan</th><th>Perkiraan karakter</th></tr></thead><tbody>
            <tr><td>128 kbps</td><td>Suara bicara, hemat data</td><td>File kecil</td></tr>
            <tr><td>192 kbps</td><td>Pemakaian umum</td><td>Seimbang</td></tr>
            <tr><td>256 kbps</td><td>Musik dengan ukuran masih wajar</td><td>Lebih besar</td></tr>
            <tr><td>320 kbps</td><td>Kompatibilitas tinggi dengan bitrate MP3 maksimum umum</td><td>Paling besar di antara pilihan ini</td></tr>
          </tbody></table></div>
          <div class="callout warning"><strong>Perhatikan sumber.</strong><p>Memilih 320 kbps tidak menjamin sumbernya mempunyai kualitas 320 kbps. Sistem dapat melakukan encoding ke bitrate tersebut, tetapi detail audio tetap dibatasi oleh sumber asli.</p></div>`
      },
      {
        id: 'kapan-pilih',
        title: 'Kapan memilih MP3?',
        content: `<ul><li>Kamu membutuhkan file yang dapat diputar hampir di semua perangkat.</li><li>Kamu ingin ukuran yang lebih kecil daripada WAV.</li><li>Kamu akan memindahkan lagu ke flashdisk, mobil, atau pemutar lama.</li><li>Kamu tidak memerlukan audio lossless untuk penyuntingan profesional.</li></ul>`
      },
      {
        id: 'metadata',
        title: 'Judul, artis, dan sampul',
        content: `<p>Metadata MP3 dapat berisi judul, artis, album, nomor trek, genre, dan gambar sampul. Ketersediaannya bergantung pada fitur YTConv dan metadata sumber. Judul video tidak selalu sama dengan judul lagu resmi.</p>`
      }
    ]
  },
  {
    slug: 'mp4',
    title: 'Video MP4',
    eyebrow: 'Format video',
    description: 'Penjelasan MP4, resolusi, codec, penggabungan audio, dan kompatibilitas perangkat.',
    category: 'format',
    keywords: ['mp4', 'video', '720p', '1080p', '4k', 'codec', 'h264', 'av1', 'vp9'],
    sections: [
      {
        id: 'wadah',
        title: 'MP4 adalah wadah media',
        content: `<p>MP4 adalah container atau wadah yang dapat menyimpan video, audio, subtitle, dan metadata. Tulisan “MP4” tidak selalu menjelaskan codec di dalamnya. Dua file MP4 dapat memakai codec video atau audio yang berbeda.</p>`
      },
      {
        id: 'resolusi',
        title: 'Memilih resolusi',
        content: `
          <div class="table-wrap"><table><thead><tr><th>Resolusi</th><th>Cocok untuk</th><th>Ukuran relatif</th></tr></thead><tbody>
            <tr><td>360p</td><td>Layar kecil dan hemat kuota</td><td>Kecil</td></tr>
            <tr><td>480p</td><td>Ponsel atau materi ringan</td><td>Kecil–sedang</td></tr>
            <tr><td>720p</td><td>Pemakaian umum</td><td>Sedang</td></tr>
            <tr><td>1080p</td><td>Laptop, monitor, dan TV</td><td>Besar</td></tr>
            <tr><td>1440p/2160p</td><td>Layar besar atau arsip sumber berkualitas tinggi</td><td>Sangat besar</td></tr>
          </tbody></table></div>`
      },
      {
        id: 'audio-terpisah',
        title: 'Mengapa 1080p ke atas perlu digabung?',
        content: `<p>Pada banyak sumber, video resolusi tinggi tersedia tanpa audio, sedangkan audio disediakan sebagai aliran terpisah. YTConv memilih keduanya lalu menggunakan FFmpeg untuk menggabungkannya menjadi satu file hasil.</p>`
      },
      {
        id: 'kompatibilitas',
        title: 'Jika video tidak dapat diputar',
        content: `
          <p>Masalah pemutaran sering berkaitan dengan codec, bukan ekstensi MP4. Coba pemutar modern seperti VLC, MPV, atau aplikasi bawaan yang telah diperbarui. Untuk kompatibilitas luas, kombinasi H.264 + AAC biasanya lebih mudah diputar pada perangkat lama, tetapi pilihan aktual bergantung pada backend dan sumber.</p>`
      }
    ]
  },
  {
    slug: 'format-audio',
    title: 'Format audio lainnya',
    eyebrow: 'M4A, WAV, FLAC, Opus',
    description: 'Perbandingan format audio selain MP3 dan kapan masing-masing format digunakan.',
    category: 'format',
    keywords: ['m4a', 'aac', 'wav', 'flac', 'opus', 'lossless'],
    sections: [
      {
        id: 'perbandingan',
        title: 'Perbandingan singkat',
        content: `
          <div class="table-wrap"><table><thead><tr><th>Format</th><th>Karakter</th><th>Kegunaan</th></tr></thead><tbody>
            <tr><td>M4A/AAC</td><td>Terkompresi, efisien</td><td>Ponsel dan perangkat modern</td></tr>
            <tr><td>Opus</td><td>Efisien pada bitrate rendah–menengah</td><td>Streaming, suara, dan pemakaian modern</td></tr>
            <tr><td>WAV</td><td>Umumnya tanpa kompresi</td><td>Penyuntingan dan kompatibilitas studio</td></tr>
            <tr><td>FLAC</td><td>Kompresi lossless</td><td>Arsip audio tanpa kehilangan tambahan</td></tr>
          </tbody></table></div>`
      },
      {
        id: 'lossless',
        title: 'Arti lossless yang benar',
        content: `<div class="callout warning"><strong>Lossless tidak sama dengan memperbaiki sumber.</strong><p>Menyimpan audio YouTube ke WAV atau FLAC dapat mencegah kompresi lossy tambahan pada tahap keluaran, tetapi tidak mengembalikan informasi yang sudah hilang sebelum media mencapai YTConv.</p></div>`
      },
      {
        id: 'pilihan',
        title: 'Pilihan praktis',
        content: `<ul><li>Pilih MP3 untuk kompatibilitas maksimum.</li><li>Pilih M4A atau Opus untuk efisiensi apabila perangkat mendukung.</li><li>Pilih WAV untuk masuk ke editor audio yang membutuhkan PCM.</li><li>Pilih FLAC untuk menyimpan hasil tanpa kompresi lossy tambahan dan ukuran lebih kecil dari WAV.</li></ul>`
      }
    ]
  },
  {
    slug: 'kualitas',
    title: 'Kualitas, bitrate, dan ukuran file',
    eyebrow: 'Memilih hasil',
    description: 'Hubungan kualitas sumber, resolusi, bitrate, codec, durasi, dan ukuran hasil.',
    category: 'format',
    keywords: ['kualitas', 'bitrate', 'resolusi', 'ukuran', 'source', 'auto'],
    sections: [
      {
        id: 'prinsip',
        title: 'Prinsip paling penting',
        content: `<p>Hasil akhir tidak dapat memiliki detail nyata melebihi media sumber. YTConv dapat memilih, menyalin, menggabungkan, atau mengodekan ulang format, tetapi tidak dapat menciptakan detail asli yang tidak tersedia.</p>`
      },
      {
        id: 'ukuran',
        title: 'Apa yang menentukan ukuran file?',
        content: `<ul><li>Durasi media.</li><li>Resolusi dan frame rate video.</li><li>Bitrate audio dan video.</li><li>Efisiensi codec.</li><li>Jumlah aliran audio atau subtitle.</li><li>Apakah media disalin langsung atau di-encode ulang.</li></ul>`
      },
      {
        id: 'otomatis',
        title: 'Kapan memilih Otomatis?',
        content: `<p>Pilih Otomatis saat kamu menginginkan hasil yang seimbang tanpa memahami format teknis. Sistem akan mencoba memilih format terbaik yang dapat diproses dan diputar dengan wajar.</p>`
      },
      {
        id: 'perkiraan',
        title: 'Perkiraan sederhana audio',
        content: `
          <p>Ukuran audio dapat diperkirakan dengan rumus kasar:</p>
          <pre><code>ukuran MB ≈ bitrate kbps × durasi detik ÷ 8 ÷ 1000</code></pre>
          <p>Contoh audio 5 menit pada 192 kbps:</p>
          <pre><code>192 × 300 ÷ 8 ÷ 1000 ≈ 7,2 MB</code></pre>
          <p>Hasil nyata dapat berbeda karena metadata, wadah, dan mode bitrate.</p>`
      }
    ]
  },
  {
    slug: 'playlist',
    title: 'Playlist dan banyak video',
    eyebrow: 'Penggunaan lanjutan',
    description: 'Cara kerja playlist, risiko proses massal, penamaan file, dan cara menghindari unduhan yang tidak disengaja.',
    category: 'lanjutan',
    keywords: ['playlist', 'batch', 'multiple', 'banyak video', 'index'],
    sections: [
      {
        id: 'dukungan',
        title: 'Ketersediaan fitur playlist',
        content: `<p>Playlist hanya dapat diproses jika fitur tersebut diaktifkan pada backend YTConv. Bila tidak tersedia, gunakan tautan video individual. Jangan menganggap seluruh tautan yang mengandung parameter playlist akan otomatis mengunduh semua item.</p>`
      },
      {
        id: 'risiko',
        title: 'Yang perlu diperhatikan',
        content: `<ul><li>Playlist besar memerlukan waktu dan penyimpanan lebih banyak.</li><li>Satu item privat atau terhapus dapat dilewati atau menghentikan proses, tergantung konfigurasi.</li><li>Urutan dan nama file dapat mengikuti indeks playlist.</li><li>Periksa apakah tautan video juga membawa parameter playlist yang tidak diinginkan.</li></ul>`
      },
      {
        id: 'tautan-tunggal',
        title: 'Memastikan hanya satu video',
        content: `<p>Gunakan tautan yang hanya memuat ID video atau pilih opsi “satu video” bila tersedia. Contoh struktur paling sederhana:</p><pre><code>https://www.youtube.com/watch?v=ID_VIDEO</code></pre>`
      }
    ]
  },
  {
    slug: 'subtitle',
    title: 'Subtitle dan caption',
    eyebrow: 'Fitur lanjutan',
    description: 'Perbedaan subtitle manual dan otomatis, bahasa, format SRT/VTT, serta penyematan ke video.',
    category: 'lanjutan',
    keywords: ['subtitle', 'caption', 'srt', 'vtt', 'auto subtitle', 'bahasa'],
    sections: [
      {
        id: 'jenis',
        title: 'Jenis subtitle',
        content: `<ul><li><strong>Subtitle manual:</strong> dibuat atau diunggah oleh pemilik video.</li><li><strong>Subtitle otomatis:</strong> dihasilkan oleh sistem pengenalan suara dan dapat mengandung kesalahan.</li><li><strong>Terjemahan otomatis:</strong> hasil terjemahan mesin dari bahasa yang tersedia.</li></ul>`
      },
      {
        id: 'format',
        title: 'SRT dan VTT',
        content: `<p>SRT sederhana dan kompatibel dengan banyak pemutar. VTT mendukung fitur web yang lebih luas. Mengubah wadah subtitle tidak otomatis memperbaiki teks atau waktu yang salah.</p>`
      },
      {
        id: 'embed',
        title: 'Terpisah atau tertanam?',
        content: `<ul><li><strong>File terpisah:</strong> fleksibel, mudah diedit, harus disimpan bersama video.</li><li><strong>Soft subtitle:</strong> berada di dalam container dan dapat dinyalakan atau dimatikan.</li><li><strong>Hard subtitle:</strong> dibakar ke gambar, selalu terlihat, memerlukan encoding video.</li></ul>`
      }
    ]
  },
  {
    slug: 'metadata-thumbnail',
    title: 'Metadata dan thumbnail',
    eyebrow: 'Fitur lanjutan',
    description: 'Informasi judul, artis, album, thumbnail, tanggal unggah, serta batas keakuratan metadata.',
    category: 'lanjutan',
    keywords: ['metadata', 'thumbnail', 'cover', 'judul', 'artist', 'album', 'id3'],
    sections: [
      {
        id: 'metadata',
        title: 'Metadata yang mungkin tersedia',
        content: `<div class="check-grid"><div>Judul media</div><div>Nama channel/uploader</div><div>Tanggal unggah</div><div>Durasi</div><div>ID media</div><div>Thumbnail</div><div>Playlist dan indeks</div><div>Deskripsi atau chapter</div></div>`
      },
      {
        id: 'akurasi',
        title: 'Mengapa metadata lagu bisa kurang tepat?',
        content: `<p>Sumber video tidak selalu menyediakan struktur musik resmi. Judul seperti “Nama Artis - Judul Lagu (Official Video)” perlu dibersihkan sebelum menjadi tag artis dan judul. Hasil otomatis dapat salah dan sebaiknya diperiksa kembali.</p>`
      },
      {
        id: 'thumbnail',
        title: 'Thumbnail sebagai sampul',
        content: `<p>Thumbnail dapat digunakan sebagai cover audio bila fitur embedding aktif. Ukuran file bertambah sedikit. Beberapa pemutar lama hanya mendukung JPG tertentu dan dapat gagal menampilkan gambar WebP atau gambar beresolusi sangat besar.</p>`
      }
    ]
  },
  {
    slug: 'cookies',
    title: 'Cookies dan media yang meminta login',
    eyebrow: 'Keamanan akun',
    description: 'Apa itu cookies, kapan diperlukan, cara paling aman menggunakannya, dan hal yang tidak boleh dilakukan.',
    category: 'keamanan',
    keywords: ['cookies', 'login', 'account', '403', 'age restricted', 'members only', 'netscape'],
    sections: [
      {
        id: 'apa-itu',
        title: 'Apa itu cookies?',
        content: `<p>Cookies adalah data sesi yang membantu website mengenali browser yang sudah login. Sebagian cookies dapat bertindak seperti kunci sementara untuk akun. Karena itu, file cookies harus diperlakukan sebagai data rahasia.</p>`
      },
      {
        id: 'kapan',
        title: 'Kapan cookies mungkin diperlukan?',
        content: `<ul><li>Media meminta konfirmasi usia atau login.</li><li>Konten hanya dapat dibuka oleh akun tertentu.</li><li>Platform menampilkan pemeriksaan bot.</li><li>Format tertentu hanya tersedia pada sesi atau wilayah tertentu.</li></ul>`
      },
      {
        id: 'metode-aman',
        title: 'Urutan metode yang disarankan',
        content: `
          <ol class="steps-list">
            <li><span>1</span><div><strong>Gunakan sesi lokal melalui yt-dlp</strong><p>Untuk penggunaan di perangkat sendiri, opsi <code>--cookies-from-browser</code> lebih aman daripada mengunggah file sesi ke pihak lain.</p></div></li>
            <li><span>2</span><div><strong>Gunakan cookies.txt hanya bila perlu</strong><p>Ekspor dalam format Netscape, simpan sementara, dan hapus setelah selesai.</p></div></li>
            <li><span>3</span><div><strong>Gunakan akun terpisah</strong><p>Jangan gunakan akun utama bila sebuah proses benar-benar memerlukan autentikasi.</p></div></li>
          </ol>
          <pre><code>yt-dlp --cookies-from-browser chrome "TAUTAN_VIDEO"</code></pre>`
      },
      {
        id: 'larangan',
        title: 'Jangan pernah lakukan ini',
        content: `<div class="callout danger"><strong>Jangan membagikan cookies.</strong><p>Jangan mengirim cookies melalui chat, tiket publik, forum, screenshot, GitHub, atau kepada orang yang mengaku sebagai admin. Pihak dukungan yang baik tidak memerlukan sesi akunmu untuk membaca pesan error.</p></div>`
      },
      {
        id: 'hapus',
        title: 'Jika cookies terlanjur tersebar',
        content: `<ol><li>Keluar dari semua sesi akun melalui pengaturan keamanan.</li><li>Ganti kata sandi.</li><li>Aktifkan verifikasi dua langkah.</li><li>Hapus file cookies dari perangkat dan penyimpanan awan.</li><li>Periksa aktivitas login yang tidak dikenal.</li></ol>`
      }
    ]
  },
  {
    slug: 'privasi',
    title: 'Privasi dan data',
    eyebrow: 'Keamanan & privasi',
    description: 'Jenis data yang mungkin diproses, file sementara, log teknis, dan informasi yang perlu dipastikan sebelum publikasi.',
    category: 'keamanan',
    keywords: ['privacy', 'privasi', 'data', 'log', 'temporary file', 'retention', 'ip'],
    sections: [
      {
        id: 'data-proses',
        title: 'Data yang diperlukan untuk menjalankan layanan',
        content: `<p>Layanan converter umumnya memproses tautan yang dikirim, pilihan format/kualitas, metadata media, informasi teknis permintaan, dan file sementara yang dibutuhkan untuk menghasilkan output. Implementasi aktual harus mengikuti kebijakan backend YTConv.</p>`
      },
      {
        id: 'sementara',
        title: 'File sementara',
        content: `<p>Media dapat disimpan sementara selama pengunduhan, penggabungan, atau konversi. Dokumen publik harus menyebutkan dengan jelas kapan file dihapus, apakah ada cache, dan apakah hasil dapat diakses melalui URL sementara.</p>
          <div class="callout warning"><strong>Catatan untuk pengelola.</strong><p>Sebelum menerbitkan halaman ini, sesuaikan periode retensi dengan sistem yang benar. Jangan menjanjikan “langsung dihapus” bila backend belum menjaminnya.</p></div>`
      },
      {
        id: 'log',
        title: 'Log teknis',
        content: `<p>Log dapat mencakup waktu permintaan, status berhasil/gagal, kode error, durasi proses, versi komponen, dan alamat IP yang terlihat oleh server atau penyedia hosting. Hindari menyimpan URL lengkap lebih lama dari yang diperlukan.</p>`
      },
      {
        id: 'pengguna',
        title: 'Yang dapat dilakukan pengguna',
        content: `<ul><li>Jangan memasukkan cookies kecuali benar-benar diperlukan.</li><li>Jangan mengonversi media pribadi melalui layanan publik.</li><li>Hapus file yang tidak lagi diperlukan.</li><li>Laporkan tautan hasil yang tetap aktif lebih lama dari kebijakan.</li><li>Baca kebijakan privasi layanan sebelum menggunakan akun.</li></ul>`
      }
    ]
  },
  {
    slug: 'batas-layanan',
    title: 'Batas dan penggunaan wajar',
    eyebrow: 'Kapasitas layanan',
    description: 'Mengapa ada batas durasi, ukuran, antrean, rate limit, timeout, dan media yang terlalu berat.',
    category: 'keamanan',
    keywords: ['limit', 'batas', 'timeout', 'rate limit', 'ukuran', 'durasi', 'antrean'],
    sections: [
      {
        id: 'mengapa',
        title: 'Mengapa layanan memerlukan batas?',
        content: `<p>Konversi media menggunakan bandwidth, CPU, memori, ruang sementara, dan waktu proses. Batas melindungi kestabilan layanan agar satu permintaan tidak menghabiskan seluruh sumber daya.</p>`
      },
      {
        id: 'jenis',
        title: 'Jenis batas yang mungkin diterapkan',
        content: `<div class="check-grid"><div>Durasi media</div><div>Ukuran input/output</div><div>Resolusi maksimum</div><div>Jumlah item playlist</div><div>Waktu proses</div><div>Permintaan per IP</div><div>Antrean bersamaan</div><div>Masa aktif link hasil</div></div>`
      },
      {
        id: 'dinamis',
        title: 'Batas dapat berubah',
        content: `<p>Batas aktual dapat berubah mengikuti kapasitas server, kebijakan hosting, kondisi platform sumber, dan pencegahan penyalahgunaan. UI sebaiknya menampilkan batas yang sedang berlaku sebelum pengguna memulai proses.</p>`
      }
    ]
  },
  {
    slug: 'error',
    title: 'Kode error dan solusi',
    eyebrow: 'Pemecahan masalah',
    description: 'Daftar error umum pada YTConv, yt-dlp, FFmpeg, browser, dan jaringan beserta langkah perbaikan.',
    category: 'bantuan',
    keywords: ['error', 'failed', 'gagal', '403', '429', 'ffmpeg', 'format unavailable', 'bot'],
    sections: [
      {
        id: 'langkah-awal',
        title: 'Lakukan pemeriksaan dasar terlebih dahulu',
        content: `<ol><li>Pastikan tautan dapat diputar di browser.</li><li>Salin ulang tautan dari tombol Bagikan.</li><li>Coba mode Otomatis.</li><li>Periksa status layanan.</li><li>Tunggu beberapa menit jika muncul 429 atau antrean penuh.</li><li>Catat request ID dan pesan error lengkap.</li></ol>`
      },
      {
        id: 'tabel-error',
        title: 'Error yang sering muncul',
        content: `
          <div class="error-list">
            <details open><summary><code>Video unavailable</code><span>Media tidak tersedia</span></summary><p>Video dapat dihapus, privat, dibatasi wilayah, atau tautannya salah. Buka sumber langsung dan pastikan dapat diputar.</p></details>
            <details><summary><code>Requested format is not available</code><span>Format pilihan tidak tersedia</span></summary><p>Pilih Otomatis atau kualitas yang lebih rendah. Format sumber dapat berubah, hilang karena autentikasi, atau tidak terbaca oleh versi extractor.</p></details>
            <details><summary><code>Sign in to confirm you're not a bot</code><span>Platform meminta verifikasi</span></summary><p>Perbarui yt-dlp dan JavaScript runtime. Untuk penggunaan lokal, gunakan cookies dari browser yang sudah login. Jangan mengirim cookies kepada pihak lain.</p></details>
            <details><summary><code>HTTP Error 403: Forbidden</code><span>Akses ditolak</span></summary><p>URL media sementara dapat kedaluwarsa, IP dibatasi, headers tidak cocok, atau sumber meminta sesi. Ulangi proses dan periksa login/region.</p></details>
            <details><summary><code>HTTP Error 429</code><span>Terlalu banyak permintaan</span></summary><p>Hentikan percobaan berulang, tunggu, lalu coba kembali. Backend perlu membatasi paralelisme dan menerapkan jeda.</p></details>
            <details><summary><code>ffmpeg not found</code><span>FFmpeg tidak tersedia</span></summary><p>Pasang FFmpeg dan pastikan executable berada di PATH. Pada server, pastikan binary tersedia di lingkungan deployment.</p></details>
            <details><summary><code>Postprocessing failed</code><span>Proses akhir gagal</span></summary><p>Periksa ruang disk, izin folder, codec, nama file, dan log FFmpeg. Coba format lain untuk mengisolasi penyebab.</p></details>
            <details><summary><code>No supported JavaScript runtime</code><span>Runtime JS tidak ditemukan</span></summary><p>Pasang runtime yang didukung, misalnya Deno, lalu pastikan dapat dipanggil oleh proses yt-dlp.</p></details>
            <details><summary><code>n challenge solving failed</code><span>Challenge YouTube gagal</span></summary><p>Perbarui yt-dlp, pasang JavaScript runtime, dan periksa distribusi script challenge sesuai dokumentasi resmi.</p></details>
            <details><summary><code>PO Token was not provided</code><span>Format tertentu memerlukan token</span></summary><p>Sebagian client atau format dapat membutuhkan PO Token. Hindari memaksa client yang membutuhkan token bila backend belum mengelolanya.</p></details>
            <details><summary><code>ENOENT / Permission denied</code><span>Path atau izin bermasalah</span></summary><p>Pastikan folder sementara ada, dapat ditulis, dan nama file aman. Jangan memakai path lokal yang tidak tersedia di server.</p></details>
            <details><summary><code>No space left on device</code><span>Penyimpanan penuh</span></summary><p>Bersihkan file sementara, batasi ukuran, dan pastikan proses gagal melakukan cleanup.</p></details>
            <details><summary><code>Conversion timed out</code><span>Proses melewati batas waktu</span></summary><p>Pilih kualitas lebih rendah, batasi durasi, atau gunakan worker dengan batas waktu lebih panjang.</p></details>
            <details><summary><code>Network error / connection reset</code><span>Koneksi terputus</span></summary><p>Coba lagi sekali, periksa status jaringan, DNS, proxy, firewall, dan kestabilan koneksi server ke sumber.</p></details>
          </div>`
      },
      {
        id: 'laporan',
        title: 'Cara membuat laporan error yang baik',
        content: `<div class="report-template"><p>Salin format berikut:</p><pre><code>Waktu kejadian:
Perangkat dan browser:
Jenis hasil: MP3 / MP4
Kualitas:
Pesan error lengkap:
Request ID:
Apakah tautan dapat diputar langsung?: Ya / Tidak
Langkah yang sudah dicoba:</code></pre></div>
          <div class="callout danger"><strong>Hapus data sensitif.</strong><p>Jangan menyertakan cookies, token, kata sandi, header Authorization, atau URL unduhan sementara.</p></div>`
      }
    ]
  },
  {
    slug: 'yt-dlp',
    title: 'yt-dlp untuk pengguna lokal',
    eyebrow: 'Alat teknis',
    description: 'Pemasangan, pembaruan, command dasar, format, output, cookies, dan log verbose yt-dlp.',
    category: 'bantuan',
    keywords: ['yt-dlp', 'command', 'cmd', 'terminal', 'linux', 'windows', 'update'],
    sections: [
      {
        id: 'fungsi',
        title: 'Apa fungsi yt-dlp?',
        content: `<p>yt-dlp adalah program command-line untuk membaca informasi dan mengambil media dari banyak situs yang didukung. YTConv dapat memakai yt-dlp di backend, sedangkan YTConv Guide membantu pengguna menjalankannya secara lokal.</p>`
      },
      {
        id: 'command',
        title: 'Command dasar',
        content: `
          <p>Unduh video dengan pemilihan format otomatis:</p><pre><code>yt-dlp "TAUTAN_VIDEO"</code></pre>
          <p>Video MP4 dengan video dan audio terbaik yang dapat digabung:</p><pre><code>yt-dlp -f "bv*+ba/b" --merge-output-format mp4 "TAUTAN_VIDEO"</code></pre>
          <p>Ekstrak audio menjadi MP3:</p><pre><code>yt-dlp -x --audio-format mp3 --audio-quality 0 "TAUTAN_VIDEO"</code></pre>`
      },
      {
        id: 'update',
        title: 'Perbarui sebelum mendiagnosis',
        content: `<p>Platform sumber sering berubah. Pastikan yt-dlp diperbarui sebelum menyimpulkan bahwa sebuah tautan tidak didukung.</p><pre><code>yt-dlp -U</code></pre><p>Metode pembaruan dapat berbeda bila yt-dlp dipasang melalui package manager seperti apt, pipx, winget, Homebrew, atau aplikasi pihak ketiga.</p>`
      },
      {
        id: 'format-list',
        title: 'Lihat format yang tersedia',
        content: `<pre><code>yt-dlp -F "TAUTAN_VIDEO"</code></pre><p>Daftar format menunjukkan ID, ekstensi, resolusi, codec, bitrate, dan apakah aliran hanya video atau hanya audio.</p>`
      },
      {
        id: 'verbose',
        title: 'Buat log diagnosis',
        content: `<pre><code>yt-dlp -vU "TAUTAN_VIDEO"</code></pre><p>Hapus cookies, token, alamat pribadi, dan data sensitif sebelum membagikan log.</p>`
      }
    ]
  },
  {
    slug: 'ffmpeg',
    title: 'FFmpeg dan proses media',
    eyebrow: 'Alat teknis',
    description: 'Peran FFmpeg, perbedaan copy dan encoding, pemeriksaan instalasi, serta error post-processing.',
    category: 'bantuan',
    keywords: ['ffmpeg', 'ffprobe', 'codec', 'merge', 'postprocess', 'encoding'],
    sections: [
      {
        id: 'fungsi',
        title: 'Apa yang dilakukan FFmpeg?',
        content: `<ul><li>Menggabungkan video dan audio terpisah.</li><li>Mengekstrak audio dari video.</li><li>Mengubah container atau codec.</li><li>Menyematkan metadata, thumbnail, dan subtitle.</li><li>Memotong atau memproses media bila fitur tersedia.</li></ul>`
      },
      {
        id: 'cek',
        title: 'Periksa instalasi',
        content: `<pre><code>ffmpeg -version
ffprobe -version</code></pre><p>Jika perintah tidak ditemukan, pasang FFmpeg atau tambahkan folder executable ke PATH.</p>`
      },
      {
        id: 'copy-encode',
        title: 'Stream copy dan encoding',
        content: `<p><strong>Stream copy</strong> memindahkan aliran tanpa mengubah codec sehingga cepat dan tidak menurunkan kualitas. <strong>Encoding</strong> menghitung ulang media, membutuhkan CPU lebih banyak, dan dapat menurunkan kualitas jika menggunakan kompresi lossy.</p>`
      },
      {
        id: 'inspect',
        title: 'Periksa file hasil',
        content: `<pre><code>ffprobe -hide_banner "hasil.mp4"</code></pre><p>Output menampilkan durasi, container, codec, resolusi, bitrate, sample rate, dan stream yang ada.</p>`
      }
    ]
  },
  {
    slug: 'runtime-js',
    title: 'JavaScript runtime dan challenge',
    eyebrow: 'Alat teknis',
    description: 'Mengapa extractor modern memerlukan runtime JavaScript, arti challenge, dan langkah pemecahan masalah.',
    category: 'bantuan',
    keywords: ['deno', 'javascript runtime', 'challenge', 'n challenge', 'ejs', 'po token'],
    sections: [
      {
        id: 'mengapa',
        title: 'Mengapa JavaScript runtime dibutuhkan?',
        content: `<p>Platform video dapat menggunakan JavaScript untuk menghasilkan atau memverifikasi parameter akses media. yt-dlp dapat memerlukan runtime yang didukung agar challenge tersebut diselesaikan dan format tidak hilang.</p>`
      },
      {
        id: 'gejala',
        title: 'Gejala runtime belum siap',
        content: `<ul><li>Peringatan “No supported JavaScript runtime”.</li><li>“n challenge solving failed”.</li><li>Format tertentu hilang.</li><li>Unduhan mendapat 403 meskipun metadata berhasil dibaca.</li></ul>`
      },
      {
        id: 'solusi',
        title: 'Langkah umum',
        content: `<ol><li>Perbarui yt-dlp.</li><li>Pasang runtime yang direkomendasikan oleh dokumentasi resmi, misalnya Deno.</li><li>Pastikan executable dapat ditemukan melalui PATH.</li><li>Jalankan ulang dengan log verbose.</li><li>Jangan mengabaikan peringatan client atau token.</li></ol>`
      }
    ]
  },
  {
    slug: 'browser-perangkat',
    title: 'Masalah browser dan perangkat',
    eyebrow: 'Pemecahan masalah',
    description: 'Solusi ketika tombol tidak bekerja, file tidak tersimpan, tab tertutup, atau browser membatasi unduhan.',
    category: 'bantuan',
    keywords: ['browser', 'android', 'iphone', 'windows', 'download blocked', 'storage permission'],
    sections: [
      {
        id: 'tombol',
        title: 'Tombol tidak merespons',
        content: `<ol><li>Muat ulang halaman.</li><li>Nonaktifkan extension yang mengubah script atau jaringan untuk pengujian.</li><li>Hapus cache situs, bukan seluruh data browser bila tidak perlu.</li><li>Coba browser modern lain.</li><li>Buka Developer Console hanya jika memahami log dan jangan membagikan token.</li></ol>`
      },
      {
        id: 'blocked',
        title: 'Unduhan diblokir browser',
        content: `<p>Browser dapat memblokir banyak unduhan otomatis, popup, nama file tertentu, atau file yang dianggap berisiko. Izinkan unduhan hanya untuk domain YTConv yang benar dan jangan menonaktifkan perlindungan browser secara permanen.</p>`
      },
      {
        id: 'mobile',
        title: 'Android dan iPhone',
        content: `<ul><li>Pastikan browser mempunyai izin penyimpanan bila sistem memintanya.</li><li>Periksa aplikasi Files/Unduhan, bukan galeri saja.</li><li>File audio mungkin muncul di pemutar setelah pemindaian media selesai.</li><li>iOS dapat membuka pratinjau terlebih dahulu; gunakan tombol Bagikan → Simpan ke Files.</li></ul>`
      }
    ]
  },
  {
    slug: 'faq',
    title: 'Pertanyaan umum',
    eyebrow: 'FAQ',
    description: 'Jawaban singkat untuk pertanyaan yang paling sering ditanyakan tentang YTConv.',
    category: 'bantuan',
    keywords: ['faq', 'pertanyaan', 'gratis', 'aman', 'legal', '320kbps', 'file'],
    sections: [
      {
        id: 'daftar',
        title: 'Pertanyaan paling sering ditanyakan',
        content: `
          <div class="faq-list">
            <details open><summary>Apakah YTConv perlu diinstal?</summary><p>Website utama berjalan di browser. Untuk penggunaan lokal melalui yt-dlp, pengguna perlu memasang yt-dlp, FFmpeg, dan komponen pendukung.</p></details>
            <details><summary>Mengapa hasil 320 kbps tidak selalu terdengar lebih baik?</summary><p>Karena kualitas dibatasi sumber asli. Encoding ke bitrate lebih tinggi tidak menciptakan detail yang sudah hilang.</p></details>
            <details><summary>Mengapa MP4 1080p membutuhkan waktu lebih lama?</summary><p>Video dan audio dapat tersedia sebagai aliran terpisah sehingga harus diunduh dan digabung.</p></details>
            <details><summary>Apakah WAV atau FLAC memperbaiki audio YouTube?</summary><p>Tidak. Keduanya dapat mencegah kompresi lossy tambahan, tetapi tidak memulihkan detail sumber.</p></details>
            <details><summary>Mengapa video yang dapat diputar tetap gagal?</summary><p>Sesi browser dan server berbeda. Media dapat bergantung pada login, wilayah, token sementara, challenge, atau format tertentu.</p></details>
            <details><summary>Apakah aman mengirim cookies ke admin?</summary><p>Tidak. Cookies adalah data sesi rahasia. Jangan pernah mengirimkannya melalui chat, tiket, atau forum.</p></details>
            <details><summary>Di mana file tersimpan?</summary><p>Biasanya di folder Downloads/Unduhan browser atau lokasi yang kamu pilih ketika dialog penyimpanan muncul.</p></details>
            <details><summary>Apakah playlist didukung?</summary><p>Hanya jika fitur playlist diaktifkan pada backend. Periksa UI atau dokumentasi batas layanan.</p></details>
            <details><summary>Mengapa muncul 429?</summary><p>Server atau sumber menerima terlalu banyak permintaan. Berhenti mencoba berulang-ulang dan tunggu sebelum mencoba kembali.</p></details>
            <details><summary>Apakah YTConv menyimpan file?</summary><p>Proses dapat memerlukan file sementara. Periode penyimpanan yang benar harus dijelaskan pada kebijakan privasi layanan yang diterbitkan.</p></details>
          </div>`
      }
    ]
  },
  {
    slug: 'penggunaan-legal',
    title: 'Penggunaan yang bertanggung jawab',
    eyebrow: 'Hak dan izin',
    description: 'Panduan umum untuk menghormati hak cipta, lisensi, privasi, dan ketentuan platform.',
    category: 'informasi',
    keywords: ['legal', 'copyright', 'hak cipta', 'izin', 'license', 'terms'],
    sections: [
      {
        id: 'prinsip',
        title: 'Gunakan hanya ketika kamu memiliki hak',
        content: `${legalNote}<p>Contoh yang umumnya lebih aman adalah media milik sendiri, rekaman yang telah diberi izin, konten berlisensi Creative Commons sesuai ketentuannya, atau materi domain publik. Status hukum dapat berbeda menurut negara dan tujuan penggunaan.</p>`
      },
      {
        id: 'hindari',
        title: 'Hindari penggunaan berikut',
        content: `<ul><li>Mendistribusikan ulang karya berhak cipta tanpa izin.</li><li>Menghapus atribusi atau tanda kepemilikan.</li><li>Mengambil konten privat atau berbayar dengan cara melewati akses.</li><li>Menggunakan data pribadi orang lain tanpa persetujuan.</li><li>Mengklaim karya orang lain sebagai karya sendiri.</li></ul>`
      },
      {
        id: 'bukan-nasihat',
        title: 'Bukan nasihat hukum',
        content: `<p>Dokumentasi ini bersifat informasi umum. Untuk keputusan berisiko tinggi, periksa lisensi konten, ketentuan platform, dan hukum yang berlaku di wilayahmu.</p>`
      }
    ]
  },
  {
    slug: 'status-pembaruan',
    title: 'Status, versi, dan pembaruan',
    eyebrow: 'Informasi produk',
    description: 'Cara membaca status layanan, arti degraded performance, maintenance, versi backend, dan changelog.',
    category: 'informasi',
    keywords: ['status', 'uptime', 'maintenance', 'changelog', 'version', 'update'],
    sections: [
      {
        id: 'status',
        title: 'Arti status layanan',
        content: `<div class="table-wrap"><table><thead><tr><th>Status</th><th>Arti</th></tr></thead><tbody>
          <tr><td>Operational</td><td>Layanan bekerja normal.</td></tr>
          <tr><td>Degraded Performance</td><td>Layanan tersedia tetapi lebih lambat atau sebagian fitur terganggu.</td></tr>
          <tr><td>Partial Outage</td><td>Beberapa komponen tidak bekerja.</td></tr>
          <tr><td>Major Outage</td><td>Layanan utama tidak tersedia.</td></tr>
          <tr><td>Maintenance</td><td>Pemeliharaan sedang berlangsung atau dijadwalkan.</td></tr>
        </tbody></table></div>`
      },
      {
        id: 'versi',
        title: 'Komponen yang perlu diperbarui',
        content: `<ul><li>yt-dlp atau extractor media.</li><li>FFmpeg dan codec terkait.</li><li>JavaScript runtime.</li><li>Dependensi backend.</li><li>Browser dan frontend YTConv.</li></ul>`
      },
      {
        id: 'changelog',
        title: 'Isi changelog yang baik',
        content: `<p>Setiap rilis sebaiknya mencantumkan tanggal, versi, fitur baru, perbaikan bug, perubahan perilaku, known issues, dan apakah pengguna perlu melakukan tindakan tertentu.</p>`
      }
    ]
  },
  {
    slug: 'tentang',
    title: 'Tentang dokumentasi ini',
    eyebrow: 'Informasi produk',
    description: 'Tujuan YTConv Docs, hubungan dengan YTConv Guide, cara memperbarui konten, dan referensi teknis.',
    category: 'informasi',
    keywords: ['about', 'tentang', 'docs', 'guide', 'reference', 'kontribusi'],
    sections: [
      {
        id: 'perbedaan',
        title: 'YTConv Docs dan YTConv Guide',
        content: `<div class="comparison-grid"><div><span>Docs</span><h3>Menjelaskan apa dan mengapa</h3><p>Konsep, format, kualitas, kebijakan, cara kerja, dan referensi lengkap.</p></div><div><span>Guide</span><h3>Menjelaskan langkah praktis</h3><p>Panduan perangkat, command siap salin, pemasangan, dan solusi cepat.</p></div></div>`
      },
      {
        id: 'pemeliharaan',
        title: 'Dokumentasi harus mengikuti produk',
        content: `<p>Perbarui dokumentasi setiap kali format, batas, kebijakan, URL, UI, atau backend berubah. Hindari menulis klaim yang tidak dapat dibuktikan seperti “100% aman”, “tanpa batas”, atau “file langsung dihapus” tanpa jaminan teknis.</p>`
      },
      {
        id: 'referensi',
        title: 'Referensi teknis utama',
        content: `<ul class="reference-list"><li><a href="https://github.com/yt-dlp/yt-dlp" target="_blank" rel="noreferrer">Dokumentasi resmi yt-dlp ↗</a></li><li><a href="https://github.com/yt-dlp/yt-dlp/wiki/FAQ" target="_blank" rel="noreferrer">FAQ resmi yt-dlp ↗</a></li><li><a href="https://ffmpeg.org/documentation.html" target="_blank" rel="noreferrer">Dokumentasi resmi FFmpeg ↗</a></li><li><a href="https://vercel.com/docs" target="_blank" rel="noreferrer">Dokumentasi resmi Vercel ↗</a></li></ul>`
      },
      {
        id: 'tanggal',
        title: 'Pembaruan terakhir',
        content: `<p>Konten paket awal ini diperbarui pada <strong>${siteConfig.lastUpdated}</strong>. Detail layanan seperti masa penyimpanan file, batas durasi, dan fitur yang diaktifkan harus disesuaikan dengan backend produksi.</p>`
      }
    ]
  }
];

export function getDocBySlug(slug = '') {
  const normalized = slug.replace(/^\/+|\/+$/g, '');
  return docs.find((doc) => doc.slug === normalized) || null;
}

export function docsByCategory(categoryId) {
  return docs.filter((doc) => doc.category === categoryId && doc.slug !== '');
}
