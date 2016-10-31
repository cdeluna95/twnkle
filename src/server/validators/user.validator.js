var util = require('util');
var validator = require('validator');

var validateFirstName = function(fn) {
    if(typeof fn !== 'string')
        return "first name must be a string";

};

var validateLastName = function(ln) {
    if(typeof ln !== 'string')
        return "last name must be a string";
};

var validateEmail = function(email) {
    if(!validator.isEmail(email)) {
        return "email address is not valid";
    }
};

var validateDOB = function(dob) {
    if(!validator.isDate(dob)) {
        return "date of birth is not valid";
    }
};

var validatePassword = function(pw) {
    if(pw.length < 8 || pw.length > 20) {
        return "password must be between 8 to 20 characters";
    }

    return true;
};

var validateGender = function(gender) {
    if(typeof gender !== 'string') {
        return "gender must be a string";
    }

    if(gender !== 'male' || gender !== 'female') {
        return "please select a gender";
    }
};

var validateSexualPreference = function(preference) {
    if(typeof preference !== 'array') {
        return "something went wrong";
    }

    for(var i = 0; i < preference.length; i++) {
        if(typeof preference[i] !== 'string') {
            return "something went wrong with the sexual preference option";
        }
    }


};

var validate = function(user) {

};

module.exports = exports = {
    validate: validate
};