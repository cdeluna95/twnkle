/**
 * This service handles user registration and user login functions
 *
 * @author David Edwards
 * @version 0.0.1
 * @since 10/3/2016
 */

var bcrypt = require('bcrypt');
var util = require('util');
var jwt = require('jsonwebtoken');

var User = require('../models/user.model');
var config = require('../config/config');
var db = require('../config/db');

var usersvc = (function() {
    function UserSvc() {

    }


    UserSvc.prototype.getUser = function(user) {

    };

    /**
     * This function is used to login a user
     * @param user
     * @param cb
     * TODO add code to update lastSignin from the database
     */
    UserSvc.prototype.login = function(user, cb) {
        User.find({ username: user.username }, function(err, results) {
            if(results.length === 0) {
                return cb(err, null);
            }

            var resUser = results[0];

            bcrypt.compare(user.password, resUser.hashedPassword, function(err, result) {
                if(err) {
                    return cb(err, null);
                }

                if(result) {
                    var ret = {
                        userId: resUser.userId
                    };

                    jwt.sign(ret, config.server.secret, { expiresIn: 900 }, function(err, token) {
                        cb(null, {
                            token: token
                        });
                    });
                }
            });
        });
    };

    /**
     * This function is used to register a new user on the system.
     *
     * @param newUser
     * @param cb
     */
    UserSvc.prototype.register = function(newUser, cb) {
        db.getConnection(function(err, connection) {
            if(err) {
                return cb(err, null);
            }

            //check if the password matches the confirmation password

            //check if the email address is already in use
            var sql = "SELECT email from users where email=?";
            connection.query(sql, [newUser.email], function(err, result) {
                if(err) {
                    return cb(err, null);
                }

                if(result.length > 0) {
                    return cb(new Error('email address already in use'), null);
                }

                //check if the username is already in use
                var usernameSql = "SELECT username from users where username=?";
                connection.query(usernameSql, [newUser.username], function(err, result) {
                    if(err) {
                        return cb(err, null);
                    }

                    if(result.length > 0) {
                        return cb(new Error('username is taken'), null);
                    }

                    //process a user and apply analysis for matching

                    //hash the password
                    bcrypt.genSalt(10, function(err, salt) {
                        bcrypt.hash(newUser.password, salt, function(err, hash) {
                            //insert the user into the database
                            var insertSql = "INSERT INTO users (firstName, lastName, username, hashedPassword, email, dob, gender, preference)" +
                                "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
                            var data = [newUser.firstName, newUser.lastName, newUser.username, hash, newUser.email, newUser.dob, newUser.gender, newUser.preference];
                            connection.query(insertSql, data, function(err, result) {
                                if(err) {
                                    return cb(err, null);
                                }

                                connection.release();
                                return cb(null, { success: true });
                            });
                        });
                    });
                });
            });
        });
    };

    /**
     * This function is used to authenticate a user with a token
     *
     * @param token
     * @param cb
     */
    UserSvc.prototype.authenticate = function(token, cb) {
        jwt.verify(token, config.server.secret, function(err, decoded) {
            if(err) {
                return cb(err, null);
            }

            cb(null, decoded);
        });
    };

    return UserSvc;
}());


module.exports = exports = usersvc;