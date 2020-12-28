const express = require('express');
const GameController = require('../controllers/GameController');

const router = express.Router();

router.post('/', GameController.create);
router.get('/', GameController.getAll);
router.get('/:id', GameController.getOne);
router.delete('/delete/:id', GameController.delete);

module.exports = router;
