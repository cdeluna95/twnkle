(function() {
    'use strict';

    MatchesCtrl.$inject = ['$scope', 'MatchSvc', 'UserSvc'];
    function MatchesCtrl($scope, MatchSvc, UserSvc) {
        var user = UserSvc.me();
        $scope.userMatches = [];
        $scope.testMatch = {};

        $scope.getUserMatches = function() {
            MatchSvc.getUserMatches(user.userId).then(function(data) {
                console.log('from controller');
                console.log(data);
                $scope.userMatches = data;
            }, function(err) {
                console.log(err);
            });
        };
        $scope.getUserMatches();


    }

    angular.module('app').controller('MatchesCtrl', MatchesCtrl);
})();
