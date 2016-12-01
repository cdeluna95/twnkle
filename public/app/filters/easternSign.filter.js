(function() {
    'use strict';

    function EasternSignFilter() {
        return function(input) {
            switch(input) {
                case 0:
                    return 'Monkey';
                case 1:
                    return 'Rooster';
                case 2:
                    return 'Dog';
                case 3:
                    return 'Pig';
                case 4:
                    return 'Rat';
                case 5:
                    return 'Ox';
                case 6:
                    return 'Tiger';
                case 7:
                    return 'Rabbit';
                case 8:
                    return 'Dragon';
                case 9:
                    return 'Snake';
                case 10:
                    return 'Horse';
                case 11:
                    return 'Sheep';
                default:
                    return input;
            }
        }
    }

    angular.module('app').filter('easternSign', EasternSignFilter);
})();