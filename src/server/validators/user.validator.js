var util = require('util');
var validator = require('validator');
var _ = require('lodash');

/*
Validation Status codes
0 -> success
1 -> invalid
2 -> not provided
3 ->
 */

var validateFirstName = function(fn) {
    if (_.isNull(fn) || _.isUndefined(fn))
        return "First name is required";

    if(!_.isString(fn))
        return "First name must be a string";

    if(fn.length <= 0)
        return 'Field cannot be blank';

    if(fn.length > 30)
        return "First name is too long";

    return null;
};

var validateLastName = function(ln) {
    if(_.isNull(ln) || _.isUndefined(ln))
        return 'Last name is required';
    if(!_.isString(ln))
        return "Last name must be a string";
    if(ln.length <= 0)
        return "Last name is required";
    if(ln.length > 30)
        return "Last name is too long";

    return null;
};

var validateUsername = function(username) {
    if(_.isNull(username) || _.isUndefined(username))
        return 'Username is required';
    if(!_.isString(username))
        return 'Username must be a string';
    if(username.length <= 0)
        return 'Username is required';
    if(username.length > 20)
        return 'Username is too long';

    return null;
};

var validateEmail = function(email) {
    if(_.isNull(email) || _.isUndefined(email))
        return 'Email is required';
    if(!_.isString(email))
        return "Email is required";
    if(email.length <= 0)
        return "Email is required";
    if(!validator.isEmail(email))
        return 'Email is not valid';
    if(email.length > 256)
        return "Email is too long";

    return null;
};

var validateDOB = function(dob) {
    if(_.isNull(dob) || _.isUndefined(dob))
        return 'Date of birth is required';
    if(dob.length <= 0)
        return "Date of Birth Required";
    if(!validator.isDate(dob))
        return "Date of birth is not valid";

    return null;
};

var validatePassword = function(pw) {
    if(_.isNull(pw) || _.isUndefined(pw))
        return 'Password is required';
    if(!_.isString(pw))
        return 'Password must be a string';
    if(pw.length <= 0)
        return 'Password is required';

    if(pw.length < 8 || pw.length > 20)
        return "password must be between 8 to 20 characters";

    var upperCasePattern = new RegExp(/[A-Z]/);
    var numberPattern = new RegExp(/[0-9]/);
    var specialCharpattern = new RegExp(/[!#$%\^&*+=\-\[\];,/|:<>\?]/);

    if(!upperCasePattern.test(pw))
        return 'Password must contain at least one capital letter';
    if(!numberPattern.test(pw))
        return 'Password must contain at least 1 number';
    if(!specialCharpattern.test(pw))
        return 'Password must contain at least 1 special character';

    return null;
};

var validateGender = function(gender) {
    if(_.isNull(gender) || _.isUndefined(gender))
        return 'Gender is required';
    if(!_.isString(gender)) {
        return "Gender is required";
    }

    if(gender.toLowerCase() !== 'male' && gender !== 'female') {
        return "Please select a gender";
    }

    return null;
};

var validateSexualPreference = function(preference) {
    if(_.isNull(preference) || _.isUndefined(preference))
        return 'Sexual preference is required';

    if(!_.isArray(preference))
        return 'Sexual preference is required';

    for(var i = 0; i < preference.length; i++)
        if(!_.isString(preference[i]))
            return 'Preference must be a string';

    return null;
};

var validate = function(user, cb) {
    var fnErr, lnErr, usernameErr, emailErr, dobErr, passErr, genderErr, spErr;
    var errs = [];
    if((fnErr = validateFirstName(user.firstName)) != null)
        errs.push(fnErr);
    if((lnErr = validateLastName(user.lastName)) != null)
        errs.push(lnErr);
    if((usernameErr = validateUsername(user.username)) != null)
        errs.push(usernameErr);
    if((emailErr = validateEmail(user.email)) != null)
        errs.push(emailErr);
    if((dobErr = validateDOB(user.dob)) != null)
        errs.push(dobErr);
    if((passErr = validatePassword(user.password)) != null)
        errs.push(passErr);
    if((genderErr = validateGender(user.gender)) != null)
        errs.push(genderErr);
    if((spErr = validateSexualPreference(user.sexualPreference)) != null)
        errs.push(spErr);

    if(errs.length > 0)
        return cb(errs, null);
    cb(null, user);
};

module.exports = exports = {
    validate: validate
};