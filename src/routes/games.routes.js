const express = require('express');
const GameController = require('../controllers/GameController');

const router = express.Router();

router.post('/', GameController.create);
router.get('/', GameController.getAll);
router.get('/:id', GameController.getOne);
router.delete('/:id', GameController.delete);
router.put('/:id', GameController.update);

module.exports = router;
