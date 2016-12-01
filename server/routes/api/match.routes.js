var router = require('express').Router();

var ctrl = require('../../controllers/match.ctrl');

router.get('/:userId', ctrl.getMatches);


module.exports = exports = router;