angular.module('albumateApp')

    .directive('artistListEntry', function () {
        return {
            restrict: 'E',
            scope: {
                entryIndex: '@',
                songTitle: '@',
                artist: '@',
                time: '@',
                album: '@'
            },
            templateUrl: 'views/listentry/listentry.html'
        };
    });