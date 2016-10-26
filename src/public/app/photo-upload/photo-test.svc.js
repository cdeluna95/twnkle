(function() {
    'use strict';

    PhotoTestSvc.$inject = [''];
    function PhotoTestSvc () {
        var files = [
            {
                name: '',
                url: ''
            },
            {
                name: '',
                url: ''
            },
            {
                name: '',
                url: ''
            },
            {
                name: '',
                url: ''
            }
        ];

        var getFiles = function() {
            return files;
        };
        return {
            getFiles: getFiles
        };
    }

    angular.module('app').factory('PhotoTestSvc', PhotoTestSvc);
})();