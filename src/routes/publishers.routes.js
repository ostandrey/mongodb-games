const express = require('express');
const PublisherController = require('../controllers/PublisherController');

const router = express.Router();

router.post('/', PublisherController.create);
router.get('/', PublisherController.getAll);
router.get('/:id', PublisherController.getOne);

module.exports = router;
