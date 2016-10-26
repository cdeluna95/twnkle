(function () {
    'use strict';

    PhotoTestCtrl.$inject = ['$scope'];
    function PhotoTestCtrl($scope) {
        $scope.test = "this is a test"
    }

    angular.module('app').controller('PhotoTestCtrl', PhotoTestCtrl);
})();