(function() {
    'use strict';

    function ProfileSvc($http, $q) {

        var getUserProfile = function(id) {
            var deferred = $q.defer();

            $http.get('/api/profile/' + id).success(function(res) {
                console.log(res);
                deferred.resolve(res.data);
            }).error(function(err) {
                deferred.reject(err);
            });
            
            return deferred.promise;
        };

        return {
            getUserProfile: getUserProfile
        };
    }

    angular.module('app').factory('ProfileSvc', ProfileSvc);
})();