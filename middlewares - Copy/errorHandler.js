function notFoundHandler(req, res, next) {
  const error = new Error(`Rute ${req.originalUrl} tidak ditemukan`);
  error.statusCode = 404;
  next(error);
}

function errorHandler(err, req, res, next) {
  // Kesalahan saat parsing JSON oleh express.json()
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ message: 'Format JSON tidak valid' });
  }

  if (err.name === 'CastError') {
    return res.status(400).json({ message: 'ID tidak valid' });
  }

  if (err.name === 'ValidationError') {
    const detail = Object.values(err.errors).map(item => item.message);
    return res.status(400).json({ message: 'Data tidak valid', detail });
  }

  if (err.code === 11000) {
    return res.status(409).json({ message: 'Nilai unik sudah digunakan' });
  }

  const status = err.statusCode || err.status || 500;
  if (status >= 500) {
    return res.status(500).json({ message: 'Terjadi kesalahan pada server' });
  }

  return res.status(status).json({ message: err.message || 'Terjadi kesalahan' });
}

module.exports = { notFoundHandler, errorHandler };
