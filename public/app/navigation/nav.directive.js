(function() {
    'use strict';

    function Navbar() {
        return {
            restrict: 'E',
            controller: function($scope, $rootScope, UserSvc) {
                $scope.navbarCollapsed = true;
                $scope.isAuthenticated = UserSvc.isAuthenticated();

                $rootScope.$on('$stateChangeSuccess', function() {
                    $scope.isAuthenticated = UserSvc.isAuthenticated();
                });
            },
            templateUrl: '/app/navigation/_nav.html'
        }
    }

    angular.module('app').directive('astromeetNav', Navbar);
})();
