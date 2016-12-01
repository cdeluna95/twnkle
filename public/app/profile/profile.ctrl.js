(function() {
    'use strict';

    ProfileCtrl.$inject = ['$scope'];
    function ProfileCtrl($scope) {
        $scope.test = 'This is the profile page';
    }

    angular.module('app').controller('ProfileCtrl', ProfileCtrl);
})();
