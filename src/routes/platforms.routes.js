const express = require('express');
const PlatformsController = require('../controllers/PlatformController.js');

const router = express.Router();

router.post('/', PlatformsController.create);
router.get('/', PlatformsController.getAll);
router.get('/:id', PlatformsController.getOne);
router.delete('/:id', PlatformsController.delete);
router.put('/:id', PlatformsController.update);

module.exports = router;
