
(function () {

    'use strict'
    angular.module('app')
        .factory('data.baseService', ['$http', '$q', function ($http, $q) {

            var _baseUrl = "http://localhost/mdis/app/mock/"

            function get(url, payload) {
                var defer = $q.defer();
                var urlPayload = '';
                if (payload !== undefined)
                    urlPayload = window.encodeURI(JSON.stringify(payload));
                $http.get(_baseUrl + url + urlPayload).then(function (data) {
                    defer.resolve(data);
                }, function (error) {
                    defer.reject(error);
                });
                return defer.promise;
            }

            return {
                get: get
            }
        }])
        .factory('data.sectorService', ['$q', 'dtos', 'data.baseService', function ($q, dtos, base) {

            var url = "sector.json";

            function get() {
                var defer = $q.defer();
                base.get(url).then(function (result) {
                    var data = _.sortBy(_.map(result.data, function (item) { return new dtos.Record(item.id, item.name) }), 'name');
                    defer.resolve(data);
                }, function (error) {
                    defer.reject(error);
                });
                return defer.promise;
            }

            return {
                get: get
            }
        }])
        // .factory('sectorService', ['$q', 'data.sectorService', function ($q, dtos, base) {

        //     var _cache = [];

        //     function get() {
        //         var defer = $q.defer();
        //         sectorService.get().then(function (data) {
        //             _cache = data;
        //             defer.defer(data);
        //         }, function () {
        //             defer.reject(data);
        //         });
        //     }



        //     return {
        //         get: get
        //     }
        // }])
        .factory('data.bookNameService', ['$q', 'dtos', 'data.baseService', function ($q, dtos, base) {

            var url = "bookname.json";

            function get(sector) {
                var defer = $q.defer();
                base.get(url, sector).then(function (result) {
                    var data = _.sortBy(_.map(result.data, function (item) { return new dtos.Record(item.id, item.name) }), 'name');
                    defer.resolve(data);
                }, function (error) {
                    defer.reject(error);
                });
                return defer.promise;
            }

            return {
                get: get
            }
        }])

})();

