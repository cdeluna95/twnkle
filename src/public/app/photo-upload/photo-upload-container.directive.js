(function() {
    'use strict';

    function PhotoUploadContainer() {
        return {
            restrict: 'EA',
            templateUrl: '/app/photo-upload/_container.html',
            controller: function($scope, PhotoSvc) {
                $scope.files = PhotoSvc.getFiles();
            }
        }
    }

    angular.module('app').directive('photoUploadContainer', PhotoUploadContainer);
})();