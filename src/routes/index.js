const express = require('express');
const genres = require('./genres.routes.js');
const platforms = require('./platform.routes');
const router = express.Router();

router.use(express.json());

router.use('/genres', genres);
router.use('/platforms', platforms);

module.exports = router;
