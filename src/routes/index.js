const express = require('express');
const genres = require('./genres.routes.js');

const router = express.Router();
router.use(express.json());

router.use('/genres', genres);

module.exports = router;
