# Tugas Week 4 – Song Cards

Project React sederhana yang menampilkan daftar lagu dalam bentuk card (gambar, judul, penyanyi, dan deskripsi). Dibuat dengan **React 19**, **Vite**, dan **Tailwind CSS v4**.

## Prasyarat

- [Node.js](https://nodejs.org/) versi 20.19+ atau 22.12+
- [pnpm](https://pnpm.io/) — kalau belum ada, install dengan:

  ```bash
  npm install -g pnpm
  ```

## Cara Menjalankan

1. Masuk ke folder project:

   ```bash
   cd "tugas week 4"
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Jalankan development server:

   ```bash
   pnpm dev
   ```

4. Buka browser ke alamat yang muncul di terminal (biasanya http://localhost:5173).

## Script Lainnya

| Perintah       | Fungsi                                             |
| -------------- | -------------------------------------------------- |
| `pnpm dev`     | Menjalankan development server dengan hot reload   |
| `pnpm build`   | Build project untuk production ke folder `dist/`   |
| `pnpm preview` | Menjalankan hasil build secara lokal               |
| `pnpm lint`    | Mengecek kode dengan ESLint                        |

## Struktur Folder

```
tugas week 4/
├── public/            # Gambar cover lagu
├── src/
│   ├── components/
│   │   ├── Card.jsx   # Komponen card lagu
│   │   └── Header.jsx # Komponen header
│   ├── App.jsx        # Halaman utama, berisi daftar card
│   ├── index.css      # Import Tailwind CSS
│   └── main.jsx       # Entry point React
├── index.html
├── package.json
└── vite.config.js
```
