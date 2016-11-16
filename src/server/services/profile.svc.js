var util = require('util');
var _ = require('lodash');
var Profile  = require('../models/profile.model');
var model = new Profile();

var findById = function(id, cb) {
    if(_.isNumber(id)) {
        return cb(new Error('Id must be a number'), null);
    }
    util.log('finding by id');
    model.findById(id, function(err, result) {
        if(err) {
            return cb(err, null);
        }

        cb(null, result);
    });
};


module.exports = {
    findById: findById
};