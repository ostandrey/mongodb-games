const express = require('express');
const PlatformsController = require('../controllers/PlatformController.js');

const router = express.Router();

router.post('/', PlatformsController.create);
router.get('/', PlatformsController.getAll);
router.get('/:id', PlatformsController.getOne);
router.delete('/delete/:id', PlatformsController.delete);

module.exports = router;
