var util = require('util');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

var rootPath = path.normalize(__dirname + '/..');


//TODO This is to be refractor to be environment specific
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(rootPath + '/public'));


app.use('/lib', express.static(rootPath + '/lib'));
app.use('/app', express.static(rootPath + '/public/app'));
app.use('/assets', express.static(rootPath + '/public/assets'));

app.use('/', routes);


module.exports = app;
