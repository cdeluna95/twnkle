(function() {
    'use strict';


    function TokenSvc () {

        var set = function(token) {
            window.localStorage.setItem('auth_token', token);
        };

        var get = function() {
            return window.localStorage.getItem('auth_token');
        };

        var destroy = function() {
            return window.localStorage.removeItem('auth_token');
        };

        return {
            set: set,
            get: get,
            destroy: destroy
        };
    }

    angular.module('app').factory('TokenSvc', TokenSvc);
})();