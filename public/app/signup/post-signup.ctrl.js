(function () {
    'use strict';

    function PostSignupCtrl($scope, $stateParams) {
        if($stateParams.firstName)
            $scope.firstName = $stateParams.firstName;
        else
            $scope.firstName = "David";
    }

    angular.module('app').controller('PostSignupCtrl', PostSignupCtrl);
})();