(function() {
    'use strict';

    HomeCtrl.$inject = ['$scope'];
    function HomeCtrl($scope) {
        $scope.test = 'This is the homepage';
    }

    angular.module('app').controller('HomeCtrl', HomeCtrl);
})();