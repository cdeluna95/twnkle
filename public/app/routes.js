/**
 * @author David, Adrianna, Christan
 * @date 09/20/2016
 */

(function() {
    'use strict';

    function routes($stateProvider, $urlRouterProvider, $httpProvider) {
        
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/app/home/_home.html',
                controller: 'HomeCtrl',
                data: {
                    authenticate: false
                }
            })
            .state('user-home', {
                url: '/userhome',
                templateUrl: '/app/user-home/_user-home.html',
                controller: 'UserHomeCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/app/login/_login.html',
                controller: 'LoginCtrl',
                data: {
                    authenticate: false
                }
            })
            .state('logout', {
                url: '/logout',
                templateUrl: '/app/logout/_logout.html',
                controller: 'LogoutCtrl',
                data: {
                    authenticate: false
                }
            })
            .state('about', {
                url: '/about',
                templateUrl: '/app/about/_about.html',
                controller: 'AboutCtrl',
                data: {
                    authenticate: false
                }
            })
            .state('connections', {
                url: '/connections',
                templateUrl: '/app/connections/_connections.html',
                controller: 'ConnectionsCtrl',
                data: {
                    authenticate: true
                }
            })
            .state('matches', {
                url: '/matches',
                templateUrl: '/app/matches/_matches.html',
                controller: 'MatchesCtrl',
                data: {
                    authenticate: true
                }
            })
            .state('profile', {
                url: '/profile',
                templateUrl: '/app/profile/_profile.html',
                controller: 'ProfileCtrl',
                data: {
                    authenticate: true
                }
            })
            .state('user-profile', {
                url: '/user/:userId',
                templateUrl: '/app/user-profile/_userprofile.html',
                controller: 'UserProfileCtrl',
                data: {
                    authenticate: true
                }
            })
            .state('signup', {
                url: '/signup',
                templateUrl: '/app/signup/_signup.html',
                controller: 'SignupCtrl',
                data: {
                    authenticate: false
                }
            })
            .state('post-signup', {
                url: '/post-signup',
                templateUrl: '/app/signup/_post-signup.html',
                controller: 'PostSignupCtrl',
                data: {
                    authenticate: false
                }
            });

        $httpProvider.interceptors.push('AuthInterceptor');
    }

    angular.module('app').config(routes);
})();
