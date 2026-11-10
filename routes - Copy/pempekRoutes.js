const express = require('express');
const router = express.Router();
const {
  createPempek,
  getAllPempek,
  getPempekById
} = require('../controllers/pempekController');

router.post('/', createPempek);
router.get('/', getAllPempek);
router.get('/:id', getPempekById);

module.exports = router;
