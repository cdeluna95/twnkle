(function() {
    'use strict';

    function AmFooter() {
        return {
            restrict: 'E',
            templateUrl: '/app/footer/_footer.html'
        };
    }

    angular.module('app').directive('amFooter', AmFooter);
})();