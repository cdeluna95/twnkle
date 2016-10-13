/**
 * This is the user controller. This file is responsible for handling the request routing
 * and calling the appropriate services.
 *
 * @author David Edwards
 * @date 09/20/2016
 */

var util = require('util');
var UserSvc = require('../services/user.svc');
var svc = new UserSvc();

/**
 *
 * @param req
 * @param res
 */
function login(req, res) {
    var user = JSON.parse(req.body.user);

    svc.login(user).then(function(user) {
        if(user.length === 0) {
            return res.status(401).json({ msg: 'Bad username/password combination' });
        }
        util.log(util.inspect(user));
        res.status(200).json({ data: user });
    }).catch(function(err) {
        util.log(util.inspect(err));
        res.status(500).json({ err: err });
    });
}

/**
 *
 * @param req
 * @param res
 */
function register(req, res) {
    return res.status(400).json({ err: 'Not implemented'});
}

function authenticate(req, res) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if(!token) {
        return res
            .status(403)
            .json({ err: 'No token provided' });
    }

    svc.authenticate(token)
        .then(function(decoded) {
            return res
                .status(200)
                .json({ token: decoded });
        })
        .catch(function(err) {
            return res
                .status(401)
                .json({ err: 'Not authorized' });
        });
}


module.exports = {
    login: login,
    register: register,
    authenticate: authenticate
};