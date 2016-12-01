var util = require('util');

var db = require('../config/db');


var MatchSvc = (function() {
    function MatchSvc() {
        this.db = db;
    }

    MatchSvc.prototype.getUsers = function(userId, cb) {
        //lookup user
        util.log(userId);
        db.getConnection(function(err, connection) {
            if(err) {
                util.log(err);
                return cb({ type: 'system', err: 'There was a system error'}, null);
            }

            var lookupSql = "SELECT userId, firstName, lastName, username, easternSign, westernSign, gender, profilePicture FROM users WHERE gender=(SELECT preference from users where userId=?)";
            connection.query(lookupSql, [userId], function(err, result) {
                if(err) {
                    util.log(err);
                    return cb({ type: 'system', err: 'There was a system error' }, null);
                }

                if(result.length === 0) {
                    return cb(null, null);
                }

                connection.release();
                cb(null, result);
            });
        });
    };

    return MatchSvc;
}());

module.exports = exports = MatchSvc;