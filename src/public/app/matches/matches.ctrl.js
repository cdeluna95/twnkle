function() {
    'use strict'

    MatchesCtrl.inject = ['scope'];
    function MatchesCtrl($scope) {

        $scope.selectUser = function(user) {
            // TODO
        };

        $scope.declineUser = function(user) {
            // TODO
        };

        $scope.selectProfile = function(user) {
            // TODO
        }
    }

    angular.module.('app').controller('MatchesCtrl', MatchesCtrl);
})();
