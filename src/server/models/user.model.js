'use strict';
/**
 * This is the model file for system users. The user's model is responsible
 * for validating registration information, as well as login information.
 *
 * @author David Edwards
 * @date 09/20/2016
 */

var util = require('util');
var Promise = require('bluebird');
var db = require('../config/db');

var User = (function() {
    function User() {
        this.db = db;
    }

    User.prototype.findById = function(id) {
        var self = this;
        var obj = {
            userId: id,
            active: 1
        };

        var sql = 'SELECT * FROM users ' + this._createWhere(obj);
        return new Promise(function(resolve, reject) {
            self.db.getConnection()
                .then(function(connection) {
                    connection.query(sql, function(err, results) {
                        if(err) {
                            reject(err);
                        }

                        resolve(results);
                        connection.release();
                    });
                })
                .catch(function(err) {
                    reject(err);
                });
        });

    };

    User.prototype.find = function(user) {
        var self = this;
        var sql = 'SELECT * FROM users ' + this._createWhere(user);

        return new Promise(function(resolve, reject) {
            self.db.getConnection()
                .then(function(connection) {
                    util.log(sql);
                    connection.query(sql, function(err, results) {
                        if(err) {
                            reject(err);
                        }
                        connection.release();
                        resolve(results);
                    });
                })
                .catch(function(err) {
                    reject(err);
                });
        });
    };

    User.prototype.insert = function(newUser) {
        var self = this;
        var sql = 'INSERT INTO users (firstName, lastName, username, hashedPassword, email, dob, gender, preference)' +
            'VALUES '
    };

    User.prototype._createWhere = function(vars) {
        var clause = ['WHERE'];
        var keys = Object.keys(vars);

        for(var i = 0; i < keys.length; i++) {
            if(typeof vars[keys[i]] === 'string') {
                clause.push(keys[i] + "='" + vars[keys[i]] + "' AND");
            } else {
                clause.push(keys[i] + '=' + vars[keys[i]] + " AND");
            }
        }
        clause.push('active=1');
        return clause.join(" ");
    };

    return User;
}());

module.exports = new User;