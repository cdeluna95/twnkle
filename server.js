var util = require('util');

var app = require('express')();
var http = require('http').Server(app);


app.get('/', function(req, res) {
    res.send('hello world');
})



var server = http.listen(process.env.PORT, function() {
    util.log('Listening on port: ' + process.env.PORT);
});