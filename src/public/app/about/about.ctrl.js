(function() {
    'use strict';

    AboutCtrl.$inject = ['$scope'];
    function AboutCtrl($scope) {
        $scope.test = 'This is the about page';
    }

    angular.module('app').controller('AboutCtrl', AboutCtrl);
})();
