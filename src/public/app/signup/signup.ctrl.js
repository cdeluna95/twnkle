(function() {
    'use strict';

    SignupCtrl.$inject = ['$scope'];
    function SignupCtrl($scope) {
        $scope.test = 'This is the signup page';
    }

    angular.module('app').controller('SignupCtrl', SignupCtrl);
})();
