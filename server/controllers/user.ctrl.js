/**
 * This is the user controller. This file is responsible for handling the request routing
 * and calling the appropriate services.
 *
 * @author David Edwards
 * @date 09/20/2016
 */

var util    = require('util');
var UserSvc = require('../services/user.svc');
var emailSvc = require('../services/email.svc');
var svc     = new UserSvc();
var EmailSvc = new emailSvc();
var UserValidator = require('../validators/user.validator');
var jwt = require('jsonwebtoken');
var config = require('../config/config');

/**
 *
 * @param req
 * @param res
 */
var login = function (req, res) {
    var user = req.body.user;
    util.log(util.inspect(user));
    UserValidator.validateLogin(user, function(err, user) {
        if(err) {
            return res.status(422).json({ err: err });
        }

        svc.login(user, function(err, results) {
            if(err) {
                if(err.type === 'user')
                    return res.status(422).json({ err: err.err });
                else if(err.type === 'system')
                    return res.status(500).json({ err: 'There was a system error' });
            }
            util.log(util.inspect(results));
            res.status(200).json(results);
        });
    });
};

/**
 *
 * @param req
 * @param res
 */
var register = function (req, res) {
    debugger;
    var newUser = req.body.newUser;


    UserValidator.validate(newUser, function(errs, validUser) {
        if(errs) {
            return res.status(422).json({ errs: errs });
        }
        
        svc.register(validUser, function (err, registeredUser) {
            if (err) {
                if(err.type === 'user')
                    return res.status(401).json({errs: err});
                else if(err.type === 'system')
                    return res.status(500).json({ err: 'There was a system error'} )
            }

            res.status(200).json({ success: true });
        });    
    });
    
};

var authenticate = function (req, res) {
    var token = req.body.token || req.query.token || req.headers['authtoken'];

    if (!token) {
        return res
            .status(403)
            .json({err: 'No token provided'});
    }

    svc.authenticate(token, function (err, results) {
        if (err) {
            return res
                .status(401)
                .json({err: 'Not authorized'});
        }

        res
            .status(200)
            .json(results);
    });
};


module.exports = {
    login: login,
    register: register,
    authenticate: authenticate
};