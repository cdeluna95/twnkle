var config = require('../config/config');
var Promise = require('bluebird');
var jwt = Promise.promisifyAll(require('jsonwebtoken'));

var jwtsvc = (function() {
    function JWTSvc() {

    }

    JWTSvc.prototype.verify = function() {

    };

    JWTSvc.prototype.sign = function (user) {
        jwt.sign(user, config.server.secret, { expiresIn: 900 })
            .then(function(token) {
                return token;
            });
    };

    return JWTSvc;
}());

module.exports = jwtsvc;