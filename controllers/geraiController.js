const Gerai = require('../models/Gerai');

exports.createGerai = async (req, res, next) => {
  try {
    const { kode, nama } = req.body;
    const gerai = await Gerai.create({ kode, nama });
    res.status(201).json(gerai);
  } catch (error) {
    next(error);
  }
};

exports.getGerai = async (req, res, next) => {
  try {
    const data = await Gerai.find();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
