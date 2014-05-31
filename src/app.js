angular.module('albumateApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap'])

    .value('dataURL', 'data/example.data.json')

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home/home.html'
            })
            .when('/artist/list', {
                controller: 'ArtistListCtrl',
                templateUrl: 'views/artist/list.html'
            })
            .when('/artist/view/:index', {
                controller: 'ArtistViewCtrl',
                templateUrl: 'views/artist/view.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])

    .filter('tidyAuthor', function () {
        return function (input) {
            return input.match(/\((.+?)\)/)[1];
        };
    })

    .filter('htmlToPlaintext', function () {
        return function (text) {
            return String(text).replace(/<[^>]+>/gm, '');
        };
    });