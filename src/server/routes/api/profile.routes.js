var router = require('express').Router();

var ctrl = require('../../controllers/profile.ctrl');

router.get('/:userId', ctrl.getProfileById);

module.exports = router;