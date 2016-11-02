var util = require('util');
var mysql = require('mysql');


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

    DB.prototype.getConnection = function(cb) {
        this.pool.getConnection(function(err, connection) {
            if(err) {
                return cb(err, null);
            }

            cb(null, connection);
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