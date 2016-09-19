(function() {
    'use strict';

    function routes($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: '/app/login/_login.html',
                controller: 'LoginCtrl'
            });
    }

    angular.module('app').config(routes);
})();
