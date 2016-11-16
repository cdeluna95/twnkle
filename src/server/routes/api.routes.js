var router = require('express').Router();

var photoRoutes = require('./api/photo.routes');
var profileRoutes = require('./api/profile.routes');

router.use('/photo', photoRoutes);
router.use('/profile', profileRoutes);

module.exports = router;