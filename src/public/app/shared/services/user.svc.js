(function() {
    'use strict';

    UserSvc.$inject = ['$q', '$http'];
    function UserSvc ($q, $http) {

        var login = function(user) {
            var deferred = $q.defer();

            $http.post('/user/login', user)
                .then(function(response) {
                    deferred.resolve(response);
                })
                .catch(function(err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        };

        var register = function(newUser) {
            var deferred = $q.defer();

            $http.post('/user/register', newUser)
                .then(function(response) {
                   deferred.resolve(response);
                })
                .catch(function(err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        };

        return {
            login: login,
            register: register
        };
    }

    angular.module('app').factory('UserSvc', UserSvc);
})();