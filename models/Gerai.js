const mongoose = require('mongoose');

const geraiSchema = new mongoose.Schema({
  kode: {
    type: String,
    required: [true, 'Kode gerai wajib diisi'],
    unique: true,
    trim: true,
    uppercase: true
  },
  nama: {
    type: String,
    required: [true, 'Nama gerai wajib diisi'],
    trim: true
  }
}, { versionKey: false });

module.exports = mongoose.model('Gerai', geraiSchema);
