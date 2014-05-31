angular.module('albumateApp')

    .factory('dataAPI', ['$q', '$http', 'dataURL', function ($q, $http, dataURL) {

        var DataAPI = function () {

            this.search = function (pageNumber, itemsPerPage) {
                var deferred = $q.defer();

                $http.get(dataURL).
                    success(function (data) {

                        var entry = {
                            items: data.slice((pageNumber * itemsPerPage) - itemsPerPage, pageNumber * itemsPerPage),
                            totalItems: data.length,
                            pageNumber: pageNumber,
                            itemsPerPage: itemsPerPage
                        };

                        deferred.resolve(entry);
                    }).
                    error(function (data, status, headers, config) {
                        console.log(status);
                        deferred.reject([data, status, headers, config]);
                    });

                return deferred.promise;
            };

        };

        return new DataAPI();
    }]);