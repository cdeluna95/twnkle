(function() {
    'use strict';

    ProfileCtrl.$inject = ['$scope', 'UserSvc'];
    function ProfileCtrl($scope, UserSvc) {
        $scope.user = UserSvc.me();
        console.log($scope.user);
    }

    angular.module('app').controller('ProfileCtrl', ProfileCtrl);
})();
