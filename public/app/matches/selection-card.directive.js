(function() {

    function SelectionCard() {
        return {
            restrict: 'E',
            scope: {
                user: '='
            },
            templateUrl: '/app/matches/_selection-card.html'
        };
    }

    angular.module('app').directive('selectionCard', SelectionCard);
})();