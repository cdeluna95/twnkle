(function() {
    'use strict';

    ConnectionsCtrl.$inject = ['$scope'];
    function ConnectionsCtrl($scope) {
        $scope.test = 'This is the about page';
    }

    angular.module('app').controller('ConnectionsCtrl', ConnectionsCtrl);
})();
