const express = require('express');
const GameController = require('../controllers/GameController');

const router = express.Router();

router.post('/', GameController.create);
router.get('/', GameController.getAll);

module.exports = router;
