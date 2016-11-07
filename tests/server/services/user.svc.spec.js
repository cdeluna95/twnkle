var assert = require('chai').assert;
var mockery = require('mockery');

describe('User Service', function() { 

    describe('Authenticate', function() {
        before(function() {
            mockery.enable({
                warnOnUnregistered: false
            });

            mockery.registerMock('jsonwebtoken', {
                verify: function(token, secret, cb) {
                    cb(null, {
                        userId: 1,
                        firstName: 'John',
                        lastName: 'Doe',
                        username: 'jd331',
                        email: 'johndoe@gmail.com',
                        dob: '12/31/1991',
                        gender: 'male',
                        preference: ['women'],
                        lastActive: null
                    });
                }
            });
        });

        it('should authenticate correctly', function() {

        })
    });
});
