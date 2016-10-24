var router = require('express').Router();

var ctrl = require('../../controllers/photo.ctrl');

router.post('/upload/single', ctrl.uploadSingle);
router.post('/upload/batch', ctrl.uploadBatch);

module.exports = router;