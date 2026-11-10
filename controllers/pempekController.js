const Pempek = require('../models/Pempek');

exports.createPempek = async (req, res, next) => {
  try {
    // Whitelist: hanya field yang ditentukan topik yang diterima.
    const { kodePempek, nama, harga, jenis, kemasan, geraiId } = req.body;
    const pempek = await Pempek.create({
      kodePempek, nama, harga, jenis, kemasan, geraiId
    });
    res.status(201).json(pempek);
  } catch (error) {
    next(error);
  }
};

exports.getAllPempek = async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.jenis !== undefined) filter.jenis = req.query.jenis;

    // Projection diterapkan baik saat memakai filter maupun tanpa filter.
    const data = await Pempek.find(filter)
      .select('_id kodePempek nama harga jenis');
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

exports.getPempekById = async (req, res, next) => {
  try {
    const data = await Pempek.findById(req.params.id)
      .populate('geraiId', 'kode nama');

    if (!data) {
      const error = new Error('Data pempek tidak ditemukan');
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
