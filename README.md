# EduCore

Aplikasi ujian TOEFL Like dan TPA berbasis React, Vite, dan Supabase.

Jika halaman tidak menerima interaksi selama 60 detik, TimeSpot menampilkan jam
Banjarmasin (WITA), Jakarta (WIB), Tokyo, dan London. Gerakkan kursor, sentuh
layar, atau tekan tombol untuk kembali. TimeSpot tidak aktif selama sesi ujian
berlangsung. Jamnya disinkronkan dengan waktu server Hosting dan akan memakai
waktu perangkat jika server tidak tersedia.

Alamat GitHub Pages lama mengarahkan pengunjung ke
`https://educore-stienasbjm.web.app`.

## Menjalankan secara lokal

```bash
npm ci
npm run dev
```

Buat file `.env.local` berdasarkan `.env.example`, lalu isi konfigurasi Supabase
sebelum menjalankan aplikasi.

## Build

```bash
npm run build
```

Hasil build dibuat di folder `docs`.

## Deployment

Deployment menggunakan GitHub Actions ke Firebase Hosting setiap kali ada push
ke branch `main`. URL Hosting yang dituju adalah
`https://educore-stienasbjm.web.app`.

Project Firebase `educore-stienasbjm` sudah dibuat dan deployment awal dilakukan
langsung melalui Firebase CLI. Untuk mengaktifkan deployment otomatis dari
GitHub Actions, buat service account dengan izin Firebase Hosting, lalu simpan
JSON key-nya di GitHub repository secret bernama
`FIREBASE_SERVICE_ACCOUNT_EDUCORE_STIENASBJM`. Setelah itu jalankan workflow
`Deploy to Firebase Hosting` atau push ke branch `main`.
