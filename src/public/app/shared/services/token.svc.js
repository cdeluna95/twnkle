(function() {
    'use strict';

    TokenSvc.$inject = [''];
    function TokenSvc () {

        var get = function() {
            //TODO implement function to get token
        };

        var set = function(token) {
            //TODO implement function to set the auth token
        };

        return {
            get: get,
            set: set
        };
    }

    angular.module('app').factory('TokenSvc', TokenSvc);
})();