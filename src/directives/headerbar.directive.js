'use strict';

angular.module('albumateApp')

.directive('albuHeaderBar', function() {
    return {
        restrict: 'E',
        scope: {
            selected: '@selected'
        },
        link: function(scope, element, attrs) {

        },
        templateUrl: 'views/headerbar/headerbar.html'
    }
});