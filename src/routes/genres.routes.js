const express = require('express');
const GenresController = require('../controllers/GenreController.js');

const router = express.Router();

router.post('/', GenresController.create);
router.get('/', GenresController.getAll);
router.get('/:id', GenresController.getOne);
router.delete('/:id', GenresController.delete);
router.put('/:id', GenresController.update);

module.exports = router;
