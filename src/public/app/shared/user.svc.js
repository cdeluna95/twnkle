(function() {
    'use strict';
    
    function UserSvc($http, $q) {
        
        var login = function(user) {
            var deferred = $q.defer();
            
            $http.post('/user/login', {user: user }).then(function(response) {
                deferred.resolve('logged in'); 
            }, function(err) {
                deferred.reject('not logged in');
            });
            
            return deferred.promise;
        };
        
        var register = function(newUser) {
            var deferred = $q.defer();
            
            $http.post('/user/register', { newUser: newUser }).then(function(response) {
                deferred.resolve(response); 
            }, function(err) {
                deferred.reject(err);
            });
            
            return deferred.promise;
        }
        
        return {
            login: login,
            register: register
        };
    }
    
    angular.module('app').factory('UserSvc', UserSvc);
})();