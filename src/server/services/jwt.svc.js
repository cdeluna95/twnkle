var jwt = require('jsonwebtoken');
var config = require('../config/config');
var Promise = require('bluebird');

var jwtsvc = (function() {
    function JWTSvc() {

    }

    JWTSvc.prototype.verify = function() {

    };

    JWTSvc.prototype.sign = function () {

    };

    return JWTSvc;
}());

module.exports = jwtsvc;