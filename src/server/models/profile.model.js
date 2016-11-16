var util = require('util');
var db = require('../config/db');

var Profile = (function() {
    function Profile() {
        this.db = db;
    }

    Profile.prototype.findById = function(id, cb) {
        var self = this;

        var sql = "SELECT * FROM user_profile WHERE userID=?";

        this.db.getConnection(function(err, connection) {
            if(err) {
                return cb(err, null);
            }

            connection.query(sql, [id], function(err, results) {
                if(err) {
                    return cb(err, null);
                }

                if(results.length <= 0) {
                    return cb(new Error('Profile not found'), null);
                }

                connection.release();
                cb(null, results[0]);
            });
        });
    };

    return Profile;
}());

module.exports = Profile;