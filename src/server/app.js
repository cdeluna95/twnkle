/**
 * This file is responsible for bootstrapping express together. It pulls in all of the route configurations
 * and other modules that we will need and makes sure that everything gets up and running
 *
 * @author David Edwards
 * @date 09/20/2016
 *
 * ---------- PLEASE DON'T TOUCH THIS FILE ----------
 */

var util = require('util');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var userRoutes = require('./routes/user.routes');
var apiRoutes = require('./routes/api.routes');

var app = express();

var rootPath = path.normalize(__dirname + '/..');


//TODO This is to be refractor to be environment specific
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/lib', express.static(rootPath + '/lib'));
app.use('/app', express.static(rootPath + '/public/app'));
app.use('/assets', express.static(rootPath + '/public/assets'));

app.use('/', routes);
app.use('/user', userRoutes);
app.use('/api', apiRoutes);

module.exports = app;
