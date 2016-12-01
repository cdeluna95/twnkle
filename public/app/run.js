/**
 * run.js is the run configuration for angular. I'm not really sure how to succinctly
 * explain what exactly this is, but this is somewhat important.
 *
 * @author David Edwards
 * @date 09/20/2016
 */

(function() {
    'use strict';

    function run($rootScope, $state, UserSvc) {

        $rootScope.$on('$stateChangeStart', function(event, toState) {
            var requiredLogin = toState.data.authenticate || false;

            if(requiredLogin && UserSvc.me() === null) {
                console.log('preventing login');
                $state.go('login');
                event.preventDefault();
            }
        });
    }

    angular.module('app').run(run);
})();
