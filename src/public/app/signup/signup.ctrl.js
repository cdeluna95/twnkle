(function() {
    'use strict';

    SignupCtrl.$inject = ['$scope', 'UserSvc', '$state'];
    function SignupCtrl($scope, UserSvc, $state) {


        $scope.register = function(newUser) {
            console.log(newUser);
            // UserSvc.register(newUser)
            //     .then(function(response) {
            //         console.log(response);
            //     })
            //     .catch(function(err) {
            //         console.log("There was a registration error");
            //         console.log(err);
            //     });
        };
    }

    angular.module('app').controller('SignupCtrl', SignupCtrl);
})();
