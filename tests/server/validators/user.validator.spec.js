var assert = require('chai').assert;
var userValidator = require('../../../src/server/validators/user.validator');
var util = require('util');
var helper = require('../../helpers/helper');

describe('user validator', function() {
    var user = {};
    var thirtyTwoCharString = "asdfasdfasdfasdfasdfasdfasdfasdf";

    beforeEach(function() {
        user['firstName'] = 'David';
        user['lastName'] = 'Edwards';
        user['username'] = 'dedward3';
        user['email'] = 'dedward3@ggc.edu';
        user['dob'] = '1991-12-31';
        user['password'] = 'pAssword!56';
        user['gender'] = 'male';
        user['sexualPreference'] = ['Female'];
    });
    describe('Firstname validation', function() {
        it('should reject a first name that is not a string', function() {
            user.firstName = 1;
            var expected = 'First name must be a string';

            userValidator.validate(user, function(errs, retUser) {
                assert(errs.length === 1, 'There should only be one error');
                assert.equal(errs[0], expected);
            });
        });

        it('should reject a first name that is null or undefined', function() {
            user.firstName = undefined;
            var expected = 'First name is required';

            userValidator.validate(user, function(errs, retUser) {
                assert(errs.length === 1, 'There should only be one error');
                assert.equal(errs[0], expected);
            });
        });

        it('should reject a first name that is an empty string', function() {
            user.firstName = '';
            var expected = 'Field cannot be blank';

            userValidator.validate(user, function(errs, retUser) {
                assert(errs.length === 1, 'There should only be one error');
                assert.equal(errs[0], expected);
            });
        });

        it('should reject a first name that is too long', function() {
            user.firstName = thirtyTwoCharString;
            var expected = 'First name is too long';

            userValidator.validate(user, function(errs, retUser) {
                assert(errs.length === 1, 'There should only be one error');
                assert.equal(errs[0], expected);
            });
        });

        it('should accept a valid first name', function() {
            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs, null);
            });
        });
    });

    describe('Lastname validation', function() {
        it('should reject a last name that is not a string', function() {
            user.lastName = 1;
            var expected = 'Last name must be a string';

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs.length, 1);
                assert.equal(errs[0], expected);
            });
        });

        it('should reject a last name that is null', function() {
            user.lastName = null;
            var expected = 'Last name is required';

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs.length, 1);
                assert.equal(errs[0], expected);
            });
        });

        it('should reject a last name that is undefined', function() {
            user.lastName = undefined;
            var expected = 'Last name is required';

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs.length, 1);
                assert.equal(errs[0], expected);
            });
        });

        it('should reject a last name that is too long', function() {
            user.lastName = thirtyTwoCharString;
            var expected = 'Last name is too long';

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs.length, 1);
                assert.equal(errs[0], expected);
            });
        });

        it('should accept a valid last name', function() {
            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs, null);
            });
        });
    });

    describe('Username validation', function() {
        it('should reject a username that is not a string', function() {
            user.username = 1;
            userValidator.validate(user, function(errs, retUser) {
                assert.equal();
            });
        });

        it('should reject a username that is null', function() {
            user.username = null;
            var expected = 'Username is required';

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs.length, 1, 'There should only be one error');
                assert.equal(errs[0], expected);
            });
        });

        it('should reject a username that is undefined', function() {
            user.username = undefined;
            var expected = 'Username is required';

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs.length, 1, 'There should only be one error');
                assert.equal(errs[0], expected);
            });
        });

        it('should reject a username that is too long', function() {
            user.username = "usernameusernameusername";
            var expected = 'Username is too long';

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs.length, 1, 'There should only be one error');
                assert.equal(errs[0], expected);
            });
        });

        it('should accept a valid username', function() {

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs, null);
                assert.deepEqual(retUser, user, 'User object should not have been changed');
            });
        });
    });

    describe('Email address validation', function() {
        it('should reject an email address that is not a string', function() {
            user.email = 1;
            var expected = 'Email is required';

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs.length, 1, 'There should only be one error');
                assert.equal(errs[0], expected);
            });
        });

        it('should reject an email address that is null', function() {
            user.email = null;
            var expected = 'Email is required';

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs.length, 1, 'There should only be one error');
                assert.equal(errs[0], expected);
            });
        });

        it('should reject an email address that is undefined', function() {
            user.email = undefined;
            var expected = 'Email is required';

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs.length, 1, 'There should only be one error');
                assert.equal(errs[0], expected);
            });
        });

        it('should reject an invalid email address', function() {
            user.email = 'invalidemail';
            var expected = 'Email is not valid';

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs.length, 1, 'There should only be one error');
                assert.equal(errs[0], expected);
            });
        });

        it('should accept a valid email address', function() {

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs, null, 'There should be no errors returned');
                assert.deepEqual(user, retUser, 'User object shouldn\'t have been changed');
            });
        });
    });

    describe('Date of Birth validation', function() {
        it('should reject a dob that is not in valid date format', function() {
            user.dob = '191-319';
            var expected = 'Date of birth is not valid';

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs.length, 1, 'There should only be one error');
                assert.equal(errs[0], expected);
            });
        });

        it('should reject a dob that is null', function() {
            user.dob = null;
            var expected = 'Date of birth is required';

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs.length, 1, 'There should only be one error');
                assert.equal(errs[0], expected);
                assert.equal(retUser, null, 'User object should be null');
            });
        });

        it('should reject a dob that is undefined', function() {
            user.dob = undefined;
            var expected = 'Date of birth is required';

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs.length, 1, 'There should only be one error');
                assert.equal(errs[0], expected);
                assert.equal(retUser, null, 'User object should be null');
            });
        });

        // it('should reject a dob that doesn\'t fit in the acceptable range', function() {
        //
        //     userValidator.validate(user, function(errs, user) {
        //         assert.equal(errs.length, 1, 'There should only be one error');
        //         assert.equal(errs[0], expected);
        //     });
        // });

        it('should accept a valid dob', function() {

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs, null, 'No errors should have been returned');
                assert.deepEqual(user, retUser, 'User object should not change');
            });
        });
    });

    describe('Password validation', function() {
        it('should reject a password that is not a string', function() {
            user.password = 1;
            var expected = 'Password must be a string';

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs.length, 1, 'There should only be one error');
                assert.equal(errs[0], expected);
                assert.equal(retUser, null, 'User object should not have been returned');
            });
        });

        it('should reject a password that is null', function() {
            user.password = null;
            var expected = 'Password is required';

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs.length, 1, 'There should only be one error');
                assert.equal(errs[0], expected);
                assert.equal(retUser, null, 'User object should not have been returned');
            });
        });

        it('should reject a password that is undefined', function() {
            user.password = undefined;
            var expected = 'Password is required';

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs.length, 1, 'There should only be one error');
                assert.equal(errs[0], expected);
                assert.equal(retUser, null, 'User object should not have been returned');
            });
        });

        it('should reject a password that only contains letters', function() {
            user.password = 'password';

        });

        it('should accept a valid password', function() {

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs, null, 'No errors should have been returned');
                assert.deepEqual(user, retUser);
            });
        });
    });

    describe('Gender validation', function() {
        it('should reject a gender that is not a string', function() {
            user.gender = 1;
            var expected = 'Gender is required';

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs.length, 1, 'There should be only 1 error');
                assert.equal(errs[0], expected);
                assert.equal(retUser, null, 'User object should not have been returned');
            });
        });

        it('should reject a gender that is null', function() {
            user.gender = null;
            var expected = 'Gender is required';

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs.length, 1, 'There should be only 1 error');
                assert.equal(errs[0], expected);
                assert.equal(retUser, null, 'User object should not have been returned');
            });
        });

        it('should reject a gender that is undefined', function() {
            user.gender = undefined;
            var expected = 'Gender is required';

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs.length, 1, 'There should be only 1 error');
                assert.equal(errs[0], expected);
                assert.equal(retUser, null, 'User object should not have been returned');
            });
        });

        it('should reject a gender that isn\'t male or female', function() {
            user.gender = 'not anything';
            var expected = 'Please select a gender';

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs.length, 1, 'There should be only 1 error');
                assert.equal(errs[0], expected);
                assert.equal(retUser, null, 'User object should not have been returned');
            });
        });

        it('should accept a valid gender', function() {

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs, null, 'No errors should have been returned');
                assert.deepEqual(retUser, user, 'User object should not have been changed');
            });
        });
    });

    describe('Sexual preference validation', function() {
        it('should reject a sexual preference that is not an array', function() {
            user.sexualPreference = 1;
            var expected = 'Sexual preference is required';

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs.length, 1, 'Only 1 error should have been returned');
                assert.equal(errs[0], expected);
                assert.deepEqual(retUser, null, 'User object should not have been returned');
            });
        });

        it('should sexual preferences within the array that are not strings', function() {
            user.sexualPreference = [1];
            var expected = 'Preference must be a string';

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs.length, 1, 'Only 1 error should have been returned');
                assert.equal(errs[0], expected);
                assert.equal(retUser, null, 'User object should not have been returneda');
            });
        });

        it('should accept valid objects', function() {

            userValidator.validate(user, function(errs, retUser) {
                assert.equal(errs, null, 'No errors should have been returned');
                assert.deepEqual(retUser, user, 'User object should not have been changed');
            });
        });
    });
});