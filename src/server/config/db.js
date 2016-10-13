var util = require('util');
var mysql = require('mysql');
var Promise = require('bluebird');

var db = (function() {
    function DB() {
        this.pool = this._getConnectionPool();
        var self = this;
        process.on('exit', function() {
            util.log('closing db connection pool');
            self.pool.end(function(err) {
                if(err) {
                    util.log('connection pool not closed properly');
                    return;
                }

                util.log('connection pool closed');
            });
        });
    }

    DB.prototype.getConnection = function() {
        var self = this;
        return new Promise(function(resolve, reject) {
            self.pool.getConnection(function(err, connection) {
                if(err) {
                    reject(err);
                }

                resolve(connection);
            })
        });
    };

    DB.prototype._getConnectionPool = function() {
        return mysql.createPool({
            connectionLimit: 10,
            host: 'localhost',
            user: 'app',
            password: 'astropass',
            database: 'astroapp'
        });
    };

    return DB;
}());

module.exports = exports = new db;