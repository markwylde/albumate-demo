'use strict';

angular.module('albumateApp')

    .controller('ArtistListCtrl', ['$scope', 'dataAPI', function($scope, dataAPI) {

        $scope.entries = {
            items: [],
            totalItems: 0,
            pageNumber: 1,
            itemsPerPage: 5
        };

        $scope.refresh = function() {
            dataAPI.search($scope.entries.pageNumber, $scope.entries.itemsPerPage).then( function(data) {
                $scope.entries = data;
            });
        };

        $scope.refresh();

    }])

    .controller('ArtistViewCtrl', ['$scope', '$routeParams', 'dataAPI', function($scope, $routeParams, dataAPI) {

        $scope.refresh = function() {
            dataAPI.search().then( function(data) {
                $scope.entry = data.items[$routeParams.index];
            });
        };

        $scope.refresh();

    }]);