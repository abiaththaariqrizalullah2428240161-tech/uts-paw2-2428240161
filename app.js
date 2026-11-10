require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const pempekRoutes = require('./routes/pempekRoutes');
const geraiRoutes = require('./routes/geraiRoutes');
const { notFoundHandler, errorHandler } = require('./middlewares/errorHandler');

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  methods: ['GET', 'POST']
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API Toko Pempek aktif' });
});

app.use('/pempek', pempekRoutes);
app.use('/gerai', geraiRoutes);

// Middleware error harus didaftarkan paling akhir.
app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
  });
});
