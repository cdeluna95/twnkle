/**
 * This service handles user registration and user login functions
 *
 * @author David Edwards
 * @version 0.0.1
 * @since 10/3/2016
 */

var bcrypt = require('bcrypt');
var Promise = require('bluebird');
var util = require('util');
var jwt = require('jsonwebtoken');

var User = require('../models/user.model');
var config = require('../config/config');

var usersvc = (function() {
    function UserSvc() {

    }


    UserSvc.prototype.getUser = function(user) {

    };

    /**
     * This function is used to login a user
     * @param user
     *
     * TODO add code to update lastSignin from the database
     */
    UserSvc.prototype.login = function(user) {
        var self = this;

        return new Promise(function(resolve, reject) {
            User.find({ username: user.username })
                .then(function(results) {
                    if(results.length === 0) {
                        reject(new Error('Bad username/password'));
                    }

                    var resUser = results[0];

                    bcrypt.compare(user.password, resUser.hashedPassword, function(err, res) {
                        if(err) {
                            reject('Server error');
                        }

                        if(res) {
                            var ret = {
                                userId: resUser.userId,
                                firstName: resUser.firstName,
                                lastName: resUser.lastName,
                                username: resUser.username,
                                email: resUser.email,
                                dob: resUser.dob,
                                gender: resUser.gender,
                                preference: resUser.preference,
                                lastActive: resUser.lastActive
                            };

                            debugger;
                            jwt.sign(ret, config.server.secret, { expiresIn: 900 }, function(err, token) {
                                resolve({
                                    user: ret,
                                    token: token
                                });
                            });
                        } else {
                            reject(new Error('Bad username/password'));
                        }
                    });
                })
                .catch(function(err) {
                    reject(err);
                });
        });
    };

    /**
     * This function is used to register a new user on the system.
     *
     * @param newUser
     */
    UserSvc.prototype.register = function(newUser) {
        User.insert(newUser)
    };

    /**
     * This function is used to authenticate a user with a token
     *
     * @param token
     */
    UserSvc.prototype.authenticate = function(token) {
        return new Promise(function(resolve, reject) {
            jwt.verify(token, config.server.secret, function(err, decoded) {
                if(err) {
                    reject(err);
                }

                resolve(decoded);
            });
        })
    };

    return UserSvc;
}());


module.exports = exports = usersvc;