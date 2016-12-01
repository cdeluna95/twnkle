(function() {
    'use strict';

    function WesternSignFilter() {
        return function(input) {
            switch(input) {
                case 0:
                    return 'Capricorn';
                case 1:
                    return 'Aquarius';
                case 2:
                    return 'Pisces';
                case 3:
                    return 'Aries';
                case 4:
                    return 'Taurus';
                case 5:
                    return 'Gemini';
                case 6:
                    return 'Cancer';
                case 7:
                    return 'Leo';
                case 8:
                    return 'Virgo';
                case 9:
                    return 'Libra';
                case 10:
                    return 'Scorpio';
                case 11:
                    return 'Sagittarius';
                default:
                    return input;
            }
        }
    }

    angular.module('app').filter('westernSign', WesternSignFilter);
})();