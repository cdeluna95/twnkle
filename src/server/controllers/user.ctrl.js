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


    UserValidator.validate(newUser, function(errs, validUser) {
        if(errs) {
            return res.status(422).json({ errs: errs });
        }
        
        svc.register(validUser, function (err, registeredUser) {
            if (err) {
                return res.status(401).json({err: err});
            }

            // //generate verification email token
            jwt.sign({ userId: registeredUser.userId }, config.server.secret, function(err, token) {
                if(err) {
                    return res.status(400).json({ err: err });
                }
                
                EmailSvc.sendVerificationEmail(registeredUser, token, function(err, result) {
                    if(err) {
                        return res.status(400).json({ err: err });
                    }    
                    
                    res.status(200).json({ success: true });        
                });
            })
            // //send verification email
            
        });    
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