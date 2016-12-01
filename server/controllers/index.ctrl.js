/**
 * This is the index controller file it sends along the index.html file.
 *
 * @author David Edwards
 * @date 09/20/2016
 */

var util = require( 'util' );
var path = require( 'path' );

var indexPath = path.join( __dirname, '../views', 'index.html' );

/**
 *
 * @param req
 * @param res
 */
function getIndex( req, res ) {
    res.sendFile( indexPath )
}

module.exports = {
    getIndex: getIndex
};
