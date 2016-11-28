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

// angular.module("app").directive('footer", function() {
//     return {
//     restrict: 'A',
//         templateUrl: '/app/footer/_footer.html',
//         scope: true,
//         transclude: false,
//         controller: 'FooterController'
//     };
// });
