var assert = require('chai').assert;
var msgValidator = require('../../../src/server/validators/msg.validator');

describe('Message Validator', function() {
    var testMsg = {};

    beforeEach(function() {
        testMsg.sender = "dedward3";
        testMsg.receiver = "dedward4";
        testMsg.body = "This is a test message";
    });

    describe('Message Sender validation', function() {
        it('Should reject a sender that is null', function() {
            testMsg.sender = null;
            var expected = "Message sender required";

            msgValidator.validate(testMsg, function(errs, msg) {
                assert.equal(errs.length, 1, 'There should only be 1 error');
                assert.equal(errs[0], expected);
                assert.equal(msg, null, 'Message should not have been returned');
            });
        });

        it('Should reject a sender that is undefined', function() {
            testMsg.sender = undefined;
            var expected = "Message sender required";

            msgValidator.validate(testMsg, function(errs, msg) {
                assert.equal(errs.length, 1, 'There should only be 1 error returned');
                assert.equal(errs[0], expected);
                assert.equal(msg, null, 'Message should not have been returned');
            });
        });

        it('Should reject a sender that is not a string', function() {
            testMsg.sender = 1;
            var expected = "Message sender must be a string";

            msgValidator.validate(testMsg, function(errs, msg) {
                assert.equal(errs.length, 1, 'There should only be 1 error returned');
                assert.equal(errs[0], expected);
                assert.equal(msg, null, 'Message should not have been returned');
            });
        });

        it('Should reject a sender that is an empty string', function() {
            testMsg.sender = "";
            var expected = "Message sender required";

            msgValidator.validate(testMsg, function(errs, msg) {
                assert.equal(errs.length, 1, 'There should only be 1 error returned');
                assert.equal(errs[0], expected);
                assert.equal(msg, null, 'Message should not have been returned');
            });
        });

        it('Should accept a valid sender', function() {

            msgValidator.validate(testMsg, function(errs, msg) {
                assert.equal(errs, null, 'No errors should have been returned');
                assert.deepEqual(testMsg, msg, 'The msg should not have been changed');
            });
        });
    });

    describe('Message receiver validation', function() {
        it('should reject a null receiver', function() {

        });

        it('should rejct an undefined receiver', function() {

        });

        it('should reject a receiver that is not a string', function() {

        });

        it('should reject an empty receiver', function() {

        });

        it('should accept a valid receiver', function() {

        });
    });


    describe('Message body validation', function() {
        it('should reject a null body', function() {

        });

        it('should reject an undefined body', function() {

        });

        it('should reject a body that is not a string', function() {

        });

        it('should reject a body that is an empty string', function() {

        });

        it('should accept a valid message body', function() {

        });
    });
});