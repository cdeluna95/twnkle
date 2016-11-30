(function() {
    'use strict';

    SignupCtrl.$inject = ['$scope', 'UserSvc', '$state'];
    function SignupCtrl($scope, UserSvc, $state) {
        $scope.errs = null;

        $scope.register = function(newUser) {
            UserSvc.register(newUser).then(function(data) {
                console.log(data);
            }, function(err) {
                console.log(err);
            })
        }
    }

    angular.module('app').controller('SignupCtrl', SignupCtrl);
})();
