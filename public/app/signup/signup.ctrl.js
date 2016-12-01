(function() {
    'use strict';

    SignupCtrl.$inject = ['$scope', 'UserSvc', '$state'];
    function SignupCtrl($scope, UserSvc, $state) {
        $scope.errs = {};


        $scope.sexualPreference = {
            male: false,
            female: false
        };

        $scope.newUser = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            dob: '',
            gender: '',
            sexualPreference: []
        };

        $scope.register = function(newUser) {
            console.log(newUser);
            if($scope.sexualPreference.male) {
                $scope.newUser.sexualPreference.push('Male');
            }

            if($scope.sexualPreference.female) {
                $scope.newUser.sexualPreference.push('Female');
            }

            UserSvc.register(newUser).then(function (data) {
                console.log(data);
            }, function (err) {
                $scope.errs = angular.copy(err);
                console.log('errors');
                console.log($scope.errs);
            });
        };
    }

    angular.module('app').controller('SignupCtrl', SignupCtrl);
})();
