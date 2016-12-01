var router = require( 'express' ).Router();

var photoRoutes   = require( './api/photo.routes' );
var profileRoutes = require( './api/profile.routes' );
var matchRoutes   = require('./api/match.routes');

router.use( '/photo', photoRoutes );
router.use( '/profile', profileRoutes );
router.use('/match', matchRoutes);

module.exports = router;