var util = require('util');

var assert = require('chai').assert;
var sinon = require('sinon');
var httpMocks = require('node-mocks-http');

// var userCtrl = require('../../../src/server/controllers/user.ctrl');

describe('User Controller', function() {

    // describe('login()', function() {
    //     it('responds with a status of 200 and the user data', function() {
    //         var UserSvc = sinon.stub();
    //
    //         var request = httpMocks.createRequest({
    //             method: 'POST',
    //             url: '/user/login',
    //             body: {
    //                 user: {
    //                     username: 'dedward3',
    //                     password: 'mypassword'
    //                 }
    //             }
    //         });
    //
    //         var response = httpMocks.createResponse();
    //
    //         userCtrl.login(request, response);
    //
    //         var data = JSON.parse(response._getData());
    //
    //         util.log(util.inspect(data));
    //     });
    // });

    describe('register()', function() {
        it('register a valid user successfully', function() {

        });

        it('rejects a user is the username is already taken', function() {

        });

        it('rejects a user if the email address is already in use', function() {

        });
    });

    describe('authenticate()', function() {
        it('authenticate a valid user', function() {

        });
    });
});
