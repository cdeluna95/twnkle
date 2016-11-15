var assert = require('chai').assert;
var helper = require('../../helpers/helper');

var profileValidator = require('../../../src/server/validators/profile.validator');

describe('Profile Validator', function() {
    var testProfile = {};

    beforeEach(function() {
        testProfile.aboutMe = "This is my about me section. This is where I just say whatever I want.";
        testProfile.interests = [
            'walking',
            'talking',
            'eating',
            'breathing'
        ];
        testProfile.lookingFor = "This is where I go on about what I'm looking for";
    });

    describe('About Me Validation', function() {
        it('should reject an about me that is too long', function() {
            testProfile.aboutMe = helper.genStr(1100);
            var expected = "About me must be 1000 characters or less";

            profileValidator.validate(testProfile, function(errs, profile) {
                assert.equal(errs.length, 1, 'Only 1 error should have been returned');
                assert.equal(errs[0], expected);
                assert.equal(profile, null, 'Profile object should not have been returned');
            });
        });

        it('should reject a non string', function() {
            testProfile.aboutMe = 1;
            var expected = 'About me must be a string';

            profileValidator.validate(testProfile, function(errs, profile) {
                assert.equal(errs.length, 1, 'Only 1 error should have been returned');
                assert.equal(errs[0], expected);
                assert.equal(profile, null, 'Profile object should not have been returned');
            });
        });

        it('should accept a valid profile', function() {
            profileValidator.validate(testProfile, function(errs, profile) {
                assert.equal(errs, null, 'No errors should have been returned');
                assert.deepEqual(testProfile, profile);
            });
        });
    });

    describe('Looking for validation', function() {
        it('should reject a non string', function() {
            testProfile.lookingFor = 1;
            var expected = "Looking for must be a string";

            profileValidator.validate(testProfile, function(errs, profile) {
                assert.equal(errs.length, 1, 'Only 1 error should have been returned');
                assert.equal(errs[0], expected);
                assert.equal(profile, null, 'Profile should be null');
            });
        });

        it('should reject strings bigger then 500 characters', function() {
            testProfile.lookingFor = helper.genStr(512);
            var expected = 'Looking for must be 500 characters or less';

            profileValidator.validate(testProfile, function(errs, profile) {
                assert.equal(errs.length, 1, 'Only 1 error should have been returned');
                assert.equal(errs[0], expected);
                assert.equal(profile, null, 'Profile should be null');
            });
        });

        it('should accept a valid profile', function() {
            profileValidator.validate(testProfile, function(errs, profile) {
                assert.equal(errs, null, 'No errors should have been returned');
                assert.deepEqual(testProfile, profile);
            });
        });
    });
});