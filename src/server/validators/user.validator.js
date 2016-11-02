var util = require('util');
var validator = require('validator');

/*
Validation Status codes
0 -> success
1 -> invalid
2 -> not provided
3 ->
 */

var validateFirstName = function(fn) {
    if(typeof fn !== 'string')
        return "first name must be a string";

    if(fn.length <= 0)
        return "Fields is required";

    if(fn.length > 30)
        return "First name is too long";

    return true;
};

var validateLastName = function(ln) {
    if(typeof ln !== 'string')
        return "last name must be a string";
    if(ln.length <= 0)
        return "Last name is required";
    if(ln.length > 30)
        return "Last name is too long";

    return true;
};

var validateEmail = function(email) {
    if(typeof email !== 'string')
        return "Email must be a string";
    if(email.length <= 0)
        return "Email address is required";
    if(!validator.isEmail(email))
        return "email address is not valid";
    if(email.length > 256)
        return "email address is too long";

    return true;
};

var validateDOB = function(dob) {
    if(dob.length <= 0)
        return "Date of Birth Required";
    if(!validator.isDate(dob))
        return "date of birth is not valid";

    return true;
};

var validatePassword = function(pw) {
    if(pw.length < 8 || pw.length > 20)
        return "password must be between 8 to 20 characters";


    return true;
};

var validateGender = function(gender) {
    if(typeof gender !== 'string') {
        return "gender must be a string";
    }

    if(gender !== 'male' || gender !== 'female') {
        return "please select a gender";
    }

    return true;
};

var validateSexualPreference = function(preference) {
    if(typeof preference !== typeof []) {
        return "something went wrong";
    }

    for(var i = 0; i < preference.length; i++) {
        if(typeof preference[i] !== 'string') {
            return "invalid data";
        }
    }

    return true;
};


module.exports = exports = {
    firstName: validateFirstName,
    lastName: validateLastName,
    email: validateEmail,
    dob: validateDOB,
    password: validatePassword,
    gender: validateGender,
    sexualPreference: validateSexualPreference
};