(function() {
    'use strict';

    ProfileCtrl.$inject = ['$scope'];
    function ProfileCtrl($scope) {
        $scope.test = 'This is the about page';
    }

    angular.module('app').controller('ProfileCtrl', ProfileCtrl);
})();
