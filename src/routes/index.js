const express = require('express');
const genres = require('./genres.routes.js');
const platforms = require('./platforms.routes');
const publishers = require('./publishers.routes');
const games = require('./games.routes');
const data = require('./data.routes');

const router = express.Router();

router.use(express.json());

router.use('/genres', genres);
router.use('/platforms', platforms);
router.use('/publishers', publishers);
router.use('/games', games);
router.use('/data', data);

module.exports = router;
