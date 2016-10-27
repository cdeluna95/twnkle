var util = require('util');
var validator = require('validator');

function validateFirstName(fn) {
    if(typeof fn !== 'string')
        return "first name must be a string";

}

function validateLastName(ln) {
    if(typeof ln !== 'string')
        return "last name must be a string";
}

function validateEmail(email) {
    if(!validator.isEmail(email)) {
        return "email address is not valid";
    }
}

function validateDOB(dob) {
    if(!validator.isDate(dob)) {
        return "date of birth is not valid";
    }
}

function validatePassword(pw) {
    if(pw.length < 8 || pw.length > 20) {
        return "password must be between 8 to 20 characters";
    }

    return true;
}

function validateGender(gender) {
    if(typeof gender !== 'string') {
        return "gender must be a string";
    }

    if(gender !== 'male' || gender !== 'female') {
        return "please select a gender";
    }
}

function validateSexualPreference(preference) {
    if(typeof preference !== 'array') {
        return "something went wrong";
    }

    for(var i = 0; i < preference.length; i++) {
        if(typeof preference[i] !== 'string') {
            return "something went wrong with the sexual preference option";
        }
    }


}

function validate(user) {

}

module.exports = exports = {
    validate: validate
};