# Praktikum Pemrograman Web - Modul 2: REST API Express.js + MySQL

REST API Manajemen Buku dan Penulis (E-Library) dengan arsitektur Controller-Service,
validasi Joi, Centralized Error Handler, dan Parameterized Query.

## Cara menjalankan
1. Nyalakan MySQL (XAMPP -> Start MySQL).
2. `npm install`
3. Sesuaikan `.env` (salin dari `.env.example`; password root XAMPP bawaan = kosong).
4. `node migrate.js` (membuat database `praktikum_db` + tabel; **menghapus tabel lama**).
5. `node server.js` -> server aktif di http://localhost:3000

## Endpoint
| Method | URL | Keterangan |
|---|---|---|
| GET | /api/v1/books | Semua buku + nama penulis (JOIN) |
| POST | /api/v1/books | Tambah buku (validasi Joi) |
| PATCH | /api/v1/books/:id | Ubah judul buku |
| POST | /api/v1/authors | Tambah penulis (validasi Joi) |
| DELETE | /api/v1/authors/:id | Hapus penulis (buku ikut terhapus, ON DELETE CASCADE) |
