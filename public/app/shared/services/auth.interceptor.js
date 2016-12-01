(function() {
    'use strict';

    function AuthInterceptor($location, $q, $localStorage) {
        return {
            request: function(config) {
                config.headers = config.headers || {};
                if($localStorage.token) {
                    config.headers.authtoken = $localStorage.token;
                }
                return config;
            },
            responseError: function(response) {
                if(response.status === 401 || response.status === 403)
                    $location.path('/login');
                return $q.reject(response);
            }
        };
    }

    angular.module('app').factory('AuthInterceptor', AuthInterceptor);
})();