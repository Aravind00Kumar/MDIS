
(function () {

    'use strict'
    angular.module('app')
        .factory('dtos', [function () {

            function Record(id, name, isSelected) {
                this.id = id;
                this.name = name;
                this.isSelected = isSelected || false;
            }

            return {
                Record: Record
            };

        }])


})();

