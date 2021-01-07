const express = require('express');

const DataController = require('../controllers/DataController');

const router = express.Router();

router.get('/', DataController.getAll);

module.exports = router;
