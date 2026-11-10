const express = require('express');
const router = express.Router();
const { createGerai, getGerai } = require('../controllers/geraiController');

router.post('/', createGerai);
router.get('/', getGerai);

module.exports = router;
