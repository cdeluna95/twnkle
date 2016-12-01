(function() {
    'use strict';

    LoginCtrl.$inject = ['$scope', 'UserSvc', '$state'];
    function LoginCtrl($scope, UserSvc, $state) {
        $scope.err = {};

        $scope.user = {
            username: '',
            password: ''
        };

        $scope.login = function(user) {
            UserSvc.login(user, function() {
                $state.go('matches');
            }, function(err) {
                console.log(err);
            });
        };
    }

    angular.module('app').controller('LoginCtrl', LoginCtrl);
})();
