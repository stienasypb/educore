# EduCore

Aplikasi ujian TOEFL Like dan TPA berbasis React, Vite, dan Supabase.

Jika halaman tidak menerima interaksi selama 60 detik, TimeSpot menampilkan jam
Banjarmasin (WITA), Jakarta (WIB), Tokyo, dan London. Gerakkan kursor, sentuh
layar, atau tekan tombol untuk kembali. TimeSpot tidak aktif selama sesi ujian
berlangsung. Jamnya disinkronkan dengan waktu server Hosting dan akan memakai
waktu perangkat jika server tidak tersedia.

Data rekap peserta disinkronkan ke Supabase. Pengelola dapat menekan
**Sinkronkan** pada Rekap Peserta untuk mengirim ulang data lokal yang gagal
terkirim dan mengambil versi server terbaru. Data selesai yang memiliki waktu
penyelesaian diperbaiki statusnya saat rekap dimuat.

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

Perubahan Edge Function peserta dideploy oleh workflow terpisah. Untuk
mengaktifkannya, simpan personal access token Supabase sebagai repository
secret `SUPABASE_ACCESS_TOKEN`, lalu jalankan `Deploy participant sync
function` atau ubah file Edge Function pada push berikutnya.
