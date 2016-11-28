/**
 * This is the user controller. This file is responsible for handling the request routing
 * and calling the appropriate services.
 *
 * @author David Edwards
 * @date 09/20/2016
 */

var util    = require('util');
var UserSvc = require('../services/user.svc');
var svc     = new UserSvc();

/**
 *
 * @param req
 * @param res
 */
var login = function (req, res) {
    var user = req.body.user;

    svc.login(user, function (err, result) {
        if (err) {
            return res.status(401).json({msg: 'There was a login error'});
        }

        res.status(200).json({data: result.token});
    });
};

/**
 *
 * @param req
 * @param res
 */
var register = function (req, res) {
    var newUser = req.body.newUser;

    svc.register(newUser, function (err, result) {
        if (err) {
            return res.status(401).json({err: err.message});
        }

        res.status(200).json({result: result});
    });
};

var authenticate = function (req, res) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        return res
            .status(403)
            .json({err: 'No token provided'});
    }

    svc.authenticate(token, function (err, decoded) {
        if (err) {
            return res
                .status(401)
                .json({err: 'Not authorized'});
        }

        res
            .status(200)
            .json({success: true});
    });
};


module.exports = {
    login: login,
    register: register,
    authenticate: authenticate
};