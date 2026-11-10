# API Toko Pempek — Topik 36

RESTful API menggunakan Node.js, Express 5, Mongoose, dan MongoDB.

## Menjalankan aplikasi

1. Pastikan Node.js dan MongoDB tersedia.
2. Jalankan `npm install`.
3. Salin `.env.example` menjadi `.env`.
4. Sesuaikan `MONGODB_URI` jika memakai MongoDB Atlas.
5. Jalankan `npm start`.

Server baru mulai menerima request setelah koneksi MongoDB berhasil.

## Model dan alasan desain

- **Pempek** adalah entity utama. Field `kemasan` menggunakan embedding karena informasi isi dan bentuk kemasan melekat pada satu data pempek dan biasanya dibaca bersamaan.
- **Gerai** adalah entity pendukung. Field `geraiId` menggunakan referencing karena satu gerai dapat dirujuk oleh banyak data pempek dan informasi gerai disimpan terpisah.

## Endpoint

| Method | Endpoint | Fungsi |
|---|---|---|
| POST | `/gerai` | Membuat gerai |
| GET | `/gerai` | Membaca seluruh gerai |
| POST | `/pempek` | Membuat data pempek |
| GET | `/pempek` | Membaca seluruh pempek (projection) |
| GET | `/pempek?jenis=lenjer` | Filter jenis pempek (projection) |
| GET | `/pempek/:id` | Membaca satu pempek dan populate gerai |

## Contoh request

### POST /gerai

```json
{ "kode": "GR01", "nama": "Gerai Sudirman" }
```

### POST /pempek

Ganti `geraiId` dengan `_id` dari respons POST `/gerai`.

```json
{
  "kodePempek": "PMK-2428240161-01",
  "nama": "Pempek Kapal Selam",
  "harga": 15000,
  "jenis": "kapal_selam",
  "kemasan": {
    "isi": "Pempek dan cuko",
    "bentuk": "Kotak"
  },
  "geraiId": "ISI_DENGAN_OBJECT_ID_GERAI"
}
```

Gunakan kode unik yang berbeda untuk setiap data.

## Catatan keamanan

Jangan commit file `.env`. Repository harus memuat `.env.example` saja.
