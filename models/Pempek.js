const mongoose = require('mongoose');

const kemasanSchema = new mongoose.Schema({
  isi: {
    type: String,
    required: [true, 'Isi kemasan wajib diisi'],
    trim: true
  },
  bentuk: {
    type: String,
    required: [true, 'Bentuk kemasan wajib diisi'],
    trim: true
  }
}, { _id: false });

const pempekSchema = new mongoose.Schema({
  kodePempek: {
    type: String,
    required: [true, 'Kode pempek wajib diisi'],
    unique: true,
    trim: true
  },
  nama: {
    type: String,
    required: [true, 'Nama pempek wajib diisi'],
    trim: true
  },
  harga: {
    type: Number,
    required: [true, 'Harga wajib diisi'],
    min: [0, 'Harga minimal 0']
  },
  jenis: {
    type: String,
    required: [true, 'Jenis pempek wajib diisi'],
    trim: true
  },
  kemasan: {
    type: kemasanSchema,
    required: [true, 'Data kemasan wajib diisi']
  },
  geraiId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gerai',
    required: [true, 'Gerai wajib dipilih']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { versionKey: false });

module.exports = mongoose.model('Pempek', pempekSchema);
