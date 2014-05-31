angular.module('albumateApp')

    .controller('ArtistListCtrl', ['$scope', 'dataAPI', function ($scope, dataAPI) {

        $scope.entries = {
            items: [],
            totalItems: 0,
            pageNumber: 1,
            itemsPerPage: 5
        };

        $scope.refresh = function () {
            dataAPI.search($scope.entries.pageNumber, $scope.entries.itemsPerPage).then(function (data) {
                $scope.entries = data;
            });
        };

        $scope.refresh();

    }]);