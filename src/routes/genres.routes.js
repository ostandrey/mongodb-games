const express = require('express');
const GenresController = require('../controllers/GenreController.js');

const router = express.Router();

router.post('/', GenresController.create);
router.get('/', GenresController.getAll);
router.get('/:id', GenresController.getOne);
router.delete('/delete/:id', GenresController.delete);
router.put('/update/:id', GenresController.update);

module.exports = router;
