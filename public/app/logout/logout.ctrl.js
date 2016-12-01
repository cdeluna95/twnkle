(function () {
    'use strict';

    LogoutCtrl.$inject = ['$scope', 'UserSvc', '$state'];
    function LogoutCtrl($scope, UserSvc, $state) {
        UserSvc.logout();
        $state.go('home');
    }

    angular.module('app').controller('LogoutCtrl', LogoutCtrl);
})();