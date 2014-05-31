angular.module('albumateApp')

    .directive('albuHeaderBar', function () {
        return {
            restrict: 'E',
            scope: {
                selected: '@selected'
            },
            templateUrl: 'views/headerbar/headerbar.html'
        };
    });