var router = require('express').Router();

var photoRoutes = require('./api/photo.routes');

router.use('/photo', photoRoutes);

module.exports = router;