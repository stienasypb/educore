# EduCore

Aplikasi ujian TOEFL Like dan TPA berbasis React, Vite, dan Supabase.

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

Deployment menggunakan GitHub Actions ke GitHub Pages setiap kali ada push ke
branch `main`. Workflow tersedia di `.github/workflows/deploy.yml`.
