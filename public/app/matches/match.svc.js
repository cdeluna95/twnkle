(function() {
    'use strict';

    function MatchSvc($http, $q) {

        var getUserMatches = function(userId) {
            var deferred = $q.defer();

            $http.get('/api/match/' + userId).success(function(res) {
                deferred.resolve(res.data);
            }).error(function(err) {
                deferred.reject(err);
            });

            return deferred.promise;
        };

        return {
            getUserMatches: getUserMatches
        };
    }

    angular.module('app').factory('MatchSvc', MatchSvc);
})();