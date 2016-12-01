(function() {
    'use strict';

    MatchesCtrl.$inject = ['$scope'];
    function MatchesCtrl($scope) {
        $scope.test = 'This is the matches page';
    }

    angular.module('app').controller('MatchesCtrl', MatchesCtrl);
})();
