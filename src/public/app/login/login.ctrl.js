(function() {
    'use strict';

    LoginCtrl.$inject = ['$scope'];
    function LoginCtrl($scope) {
        $scope.test = 'This is the login page';
    }

    angular.module('app').controller('LoginCtrl', LoginCtrl);
})();
