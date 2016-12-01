var util    = require( 'util' );
var _       = require( 'lodash' );
var Profile = require( '../models/profile.model' );
var db = require('../config/db');

var ProfileSvc = (function() {
    function ProfileSvc() {
        this.db = db;
    }

    ProfileSvc.prototype.findById = function(userId, cb) {
        db.getConnection(function(err, connection) {
            if(err) {
                return cb({ type: 'system', err: err }, null);
            }

            var sql = "SELECT u.userId, u.firstName, u.lastName, u.westernSign, u.easternSign, u.profilePicture, up.aboutMe, up.lookingFor " +
            "FROM users u " +
            "LEFT OUTER JOIN user_profile up on u.userId = up.userId " +
            "WHERE u.userId = ?";

            connection.query(sql, [userId], function(err, results) {
                if(err) {
                    return cb({ type: 'system', err: err }, null);
                }

                if(results.length === 0) {
                    return cb({ type: 'user', err: 'Profile not found' });
                }

                connection.release();
                return cb(null, results[0]);
            });
        });
    };

    return ProfileSvc;
}());


module.exports = exports = ProfileSvc;