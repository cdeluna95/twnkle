(function() {
    'use strict';

    function PhotoUploadFrame() {
        return {
            restrict: 'EA',
            templateUrl: '/app/photo-upload/_frame.html',
            scope: {
                file: '='
            }
        }
    }
})();