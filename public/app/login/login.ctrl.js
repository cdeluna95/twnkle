(function() {
    'use strict';

    LoginCtrl.$inject = ['$scope', 'UserSvc'];
    function LoginCtrl($scope, UserSvc) {

        $scope.login = function(user) {
            UserSvc.login(user)
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(err) {
                    console.log('There was an error');
                    console.log(err);
                });
        };
    }

    angular.module('app').controller('LoginCtrl', LoginCtrl);
})();
