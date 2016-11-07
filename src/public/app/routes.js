(function() {
    'use strict';

    function routes($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: '/app/login/_login.html',
                controller: 'LoginCtrl'
            })
            .state('home', {
                url: '/home',
                templateUrl: '/app/home/_home.html',
                controller: 'HomeCtrl'
            })
            .state('about', {
                url: '/home',
                templateUrl: '/app/about/_about.html',
                controller: 'AboutCtrl'
            })
            .state('phototest', {
                url: '/photo-test',
                templateUrl: '/app/photo-upload/_test.html',
                controller: 'PhotoTestCtrl'
            });
    }

    angular.module('app').config(routes);
})();
