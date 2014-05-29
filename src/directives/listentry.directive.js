'use strict';

angular.module('albumateApp')

.directive('artistListEntry', function() {
    return {
        restrict: 'E',
        scope: {
            entryIndex: '@',
            songTitle: '@',
            artist: '@',
            time: '@',
            album: '@'
        },
        link: function(scope, element, attrs) {

        },
        templateUrl: 'views/listentry/listentry.html'
    }
});