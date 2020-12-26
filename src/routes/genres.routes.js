const express = require('express');
const GenresController = require('../controllers/GenreController.js');

const router = express.Router();

router.post('/', GenresController.create);
router.get('/', GenresController.getAll);

module.exports = router;
