(function() {
    'use strict';

    function UserSvc($http, $q, TokenSvc, $localStorage) {
        var _user = null;
        var authenticated = false;

        var login = function(user, success, error) {
            $http.post('/user/login', { user: user })
                .success(function(res) {
                    _user = res.user;
                    $localStorage.token = res.token;
                    authenticated = true;
                    success();
                }).error(function(err) {
                    error(err);
                });
        };

        function register(newUser) {
            var deferred = $q.defer();
            console.log(newUser);
            $http.post('/user/register', { newUser: newUser }).then(function(data) {
                deferred.resolve(data);
            }, function(err) {
                deferred.reject(err.data.errs);
            });

            return deferred.promise;
        }

        var me = function() {
            if(_user !== null)
                return _user;
            else {
                $http.get('/user/me')
                    .success(function(res) {
                        console.log(res);
                        _user = res.user;
                        authenticated = true;
                        return _user;
                    })
                    .error(function(err) {
                        authenticated = false;
                        return null;
                    });
            }

        };

        var logout = function() {
            _user = null;
            delete $localStorage.token;
            authenticated = false;
        };

        var isAuthenticated = function() {
            return authenticated;
        };

        return {
            login: login,
            register: register,
            me: me,
            logout: logout,
            isAuthenticated: isAuthenticated
        }
    }

    angular.module('app').factory('UserSvc', UserSvc);
})();