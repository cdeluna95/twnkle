(function() {
    'use strict';

    function UserProfileCtrl($scope, ProfileSvc, $stateParams) {
        $scope.userProfile = {};

        $scope.getProfile = function() {
            ProfileSvc.getUserProfile($stateParams.userId).then(function(data) {
                console.log(data);
                $scope.userProfile = data;
            }, function(err) {
                console.log(err);
            });
        };
        
        $scope.getProfile();
    }

    angular.module('app').controller('UserProfileCtrl', UserProfileCtrl);
})();