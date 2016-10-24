(function() {
    'use strict';

    ConnectionsCtrl.$inject = ['$scope'];
    function ConnectionsCtrl($scope) {
        $scope.test = 'This is the connections page';
    }

    angular.module('app').controller('ConnectionsCtrl', ConnectionsCtrl);
})();
