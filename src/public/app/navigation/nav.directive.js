(function() {
    'use strict';

    function Navbar() {
        return {
            restrict: 'E',
            controller: function($scope) {
                $scope.navbarCollapsed = true;
            },
            templateUrl: '/app/navigation/_nav.html'
        }
    }

    angular.module('app').directive('astromeetNav', Navbar);
})();
