/**
 * This is the routing configuration for index.html
 *
 * @author David Edwards
 * @date 09/20/2016
 */
var router = require( 'express' ).Router();

var ctrl = require( '../controllers/index.ctrl' );

router.get( '/', ctrl.getIndex );

module.exports = router;
