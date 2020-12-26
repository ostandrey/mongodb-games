const express = require('express');
const PlatformsController = require('../controllers/PlatformController.js');

const router = express.Router();

router.post('/', PlatformsController.create);
router.get('/', PlatformsController.getAll);

module.exports = router;
