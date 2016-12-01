/**
 * @author David, Adrianna, Christan
 * @date 09/20/2016
 */

(function() {
    'use strict';
    //test
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
                url: '/about',
                templateUrl: '/app/about/_about.html',
                controller: 'AboutCtrl'
            })
            .state('connections', {
                url: '/connections',
                templateUrl: '/app/connections/_connections.html',
                controller: 'AboutCtrl'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: '/app/profile/_profile.html',
                controller: 'ProfileCtrl'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: '/app/signup/_signup.html',
                controller: 'SignupCtrl'
            })
            .state('post-signup', {
                url: '/post-signup',
                templateUrl: '/app/signup/_post-signup.html'
            });
    }

    angular.module('app').config(routes);
})();
