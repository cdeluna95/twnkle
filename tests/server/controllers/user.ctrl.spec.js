var util = require('util');

var assert = require('chai').assert;
var should = require('chai').should();
var sinon = require('sinon');
var httpMocks = require('node-mocks-http');
var mockery = require('mockery');
//var userCtrl = require('../../../src/server/controllers/user.ctrl');

describe('User Controller', function() {
    var userSvcStub, dbStub;

    // before(function() {
    //     mockery.enable({
    //         warnOnReplace: false,
    //         warnOnUnregister: false,
    //         useCleanCache: true
    //     });
    //
    //     userSvcStub = sinon.stub();
    //     dbStub = sinon.stub();
    //
    //     mockery.registerMock('../services/user.svc', userSvcStub);
    //     mockery.registerMock('../config/db', dbStub);
    // });
    //
    // after(function() {
    //     mockery.disable();
    // });
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
        var req, res;
        beforeEach(function() {
            req = httpMocks.createRequest({
                body: {
                    token: 'token'
                }
            });

            res = httpMocks.createResponse();
        });

        it('authenticate a valid user', function() {
        });
    });
});
