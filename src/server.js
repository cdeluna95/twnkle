/**
 * This is the entry point for our application. This file is what kicks off our server
 * This starts the server and bootstraps the application together.
 *
 * @author David Edwards
 * @date 09/20/2016
 *
 * ------------- PLEASE DON'T MAKE CHANGES TO THIS FILE ---------------
 */

var util = require('util');

var app = require('./server/app');
var http = require('http');

var port = normalizePort(process.env.PORT || '3030');
app.set('port', port);

var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if(isNaN(port))
        return val;

    if(port >= 0)
        return port;

    return false;
}

function onError(error) {
    if(error.syscall !== 'listen')
        throw error

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    switch(error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated priviledges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'Pipe ' + addr
        : 'Port ' + addr.port;
    util.log('Listening on ' + bind);
}
