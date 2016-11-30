(function() {
    'use strict';

    function UserSvc($http, $q, TokenSvc) {
        var LOCAL_TOKEN_KEY = '';
        var _user = {};
        var isAuthenticated = false;
        var authtoken;

        function authenticateUser(token) {
            var deferred = $q.defer();
            console.log(token);
            $http.post('/user/authenticate', token)
                .then(function(data) {
                    deferred.resolve(data)
                }, function(err) {
                    deferred.reject({ err: err });
                });

            return deferred.promise;
        }

        function loadUserCredentials() {
            var token = TokenSvc.get();
            if(token) {
                authenticateUser({ token: token }).then(function(data) {
                    useCredentials(data.user, token);
                }, function(err) {
                    console.log(err);
                });
            }
        }

        function storeUserCredentials(user, token) {
            TokenSvc.set(token);
            useCredentials(user, token);
        }

        function useCredentials(user, token) {
            _user = angular.copy(user);
            isAuthenticated = true;
            authtoken = token;
            $http.defaults.headers.common['x-access-token'] = token;
        }

        function destroyUserCredentials() {
            authtoken = undefined;
            _user = {
                firstName: '',
                lastName: '',
                email: '',
                username: ''
            };
            isAuthenticated = false;
            $http.defaults.headers.common['x-access-token'] = undefined;
            TokenSvc.destroy();
        }

        function login(user) {
            var deferred = $q.defer();
            $http.post('/user/login', user)
                .success(function(data) {
                    console.log(JSON.stringify(data.user));
                    storeUserCredentials(data.user, data.token);
                    deferred.resolve({ msg: 'Login Successful!' });
                })
                .error(function(err) {
                    deferred.reject({ msg: err});
                });
            return deferred.promise;
        }

        function logout(user) {
            destroyUserCredentials();
        }

        function register(newUser) {
            console.log('posting: ' + newUser);
            return $http.post('/user/register', newUser);
        }
        function authenticated() {
            if(isAuthenticated) {
                return isAuthenticated;
            }
            else if(!isAuthenticated && TokenSvc.get()) {
                authenticateUser({token: TokenSvc.get() }).then(function(data) {
                    console.log("user = " + _user);
                    storeUserCredentials(data.user, TokenSvc.get());
                    return isAuthenticated;
                }, function (err) {
                    return isAuthenticated;
                });
            }
            else {
                return isAuthenticated;
            }
        }
        loadUserCredentials();

        return {
            login: login,
            logout: logout,
            register: register,
            isAuthenticated: authenticated,
            getUser: function() { console.log('user = ' + JSON.stringify(_user)); return _user; }
        }
    }

    angular.module('app').factory('UserSvc', UserSvc);
})();