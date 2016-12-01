(function() {
    'use strict';

    function Navbar() {
        return {
            restrict: 'E',
            controller: function($scope, UserSvc) {
                $scope.navbarCollapsed = true;
                $scope.isAuthenticated = UserSvc.isAuthenticated();

                console.log('I\'m running');
                console.log($scope.isAuthenticated);
            },
            templateUrl: '/app/navigation/_nav.html'
        }
    }

    angular.module('app').directive('astromeetNav', Navbar);
})();