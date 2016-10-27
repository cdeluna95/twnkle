var assert = require('chai').assert;
var userValidator = require('../../../src/server/validators/user.validator');

describe('user validator', function() {


    describe('Firstname validation', function() {
        it('should reject a first name that is not a string', function() {

        });

        it('should reject a first name that is null or undefined', function() {

        });

        it('should reject a first name that is too long', function() {

        });

        it('should accept a valid first name', function() {

        });
    });

    describe('Lastname validation', function() {
        it('should reject a last name t hat is not a string', function() {

        });

        it('should reject a last name that is null or undefined', function() {

        });

        it('should reject a last name that is too long', function() {

        });

        it('should accept a valid last name', function() {

        });
    });

    describe('username validation', function() {
        it('should reject a username that is not a string', function() {

        });

        it('should reject a username that is null or undefined', function() {

        });

        it('should reject a username that is too long', function() {

        });

        it('should reject a username that is already taken', function() {

        });

        it('should accept a valid username', function() {

        });
    });

    describe('Email address validation', function() {
        it('should reject an email address that is not a string', function() {

        });

        it('should reject an email address that is null or undefined', function() {

        });

        it('should reject an invalid email address', function() {

        });

        it('should reject an email address that is already in use', function() {

        });

        it('should accept a valid email address', function() {

        });
    });

    describe('Date of Birth validation', function() {
        it('should reject a dob that is not in valid date format', function() {

        });

        it('should reject a dob that is null or undefined', function() {

        });

        it('should reject a dob that doesn\'t fit in the acceptable range', function() {

        });

        it('should accept a valid dob', function() {

        });
    });

    describe('Password validation', function() {
        it('should reject a password that is not a string', function() {

        });

        it('should reject a password that is null or undefined', function() {

        });

        it('should reject a password that doesn\'t meet the constraints', function() {

        });

        it('should accept a valid password', function() {

        });
    });

    describe('Gender validation', function() {
        it('should reject a gender that is not a string', function() {

        });

        it('should reject a gender that is null or undefined', function() {

        });

        it('should reject a gender that isn\'t male or female', function() {

        });

        it('should accept a valid gender', function() {

        });
    });

    describe('Sexual preference validation', function() {
        it('should reject a sexual preference that is not an array', function() {

        });

        it('should sexual preferences within the array that are not strings', function() {

        });

        it('should accept valid objects', function() {

        });
    });
});