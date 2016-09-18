
(function () {



    function Record(name, isSelected) {
        this.name = name;
        this.isSelected = isSelected || false;
    }

    'use strict'
    angular.module('app')
        .controller('DashBoardController', ['data.sectorService', 'data.bookNameService', function (sectorService, bookNameService) {
            var vm = this;

            function init(vm) {

                vm.modelSource = [
                    new Record('abc'), new Record('xyz'), new Record('ijk'), new Record('abc'), new Record('xyz'), new Record('ijk'), new Record('abc'), new Record('xyz')];

                vm.years = [
                    new Record(1900), new Record(2001), new Record(1987), new Record(1984), new Record(2015), new Record(2012), new Record(2002), new Record(1950)];

                // vm.sectors = [
                //     new Record('abc'), new Record('xyz'), new Record('ijk'), new Record('abc'), new Record('xyz'), new Record('ijk'), new Record('abc'), new Record('xyz')];

                // vm.bookNames = [
                //     new Record('abc'), new Record('xyz'), new Record('ijk'), new Record('abc'), new Record('xyz'), new Record('ijk'), new Record('abc'), new Record('xyz')];

                vm.contents = [
                    new Record('abc'), new Record('xyz'), new Record('ijk'), new Record('abc'), new Record('xyz'), new Record('ijk'), new Record('abc'), new Record('xyz')];

                vm.indicators = [
                    new Record('abc'), new Record('xyz'), new Record('ijk'), new Record('abc'), new Record('xyz'), new Record('ijk'), new Record('abc'), new Record('xyz')];

            }

            function getSectorData() {
                sectorService.get().then(function (data) {

                    vm.sectors = data;
                }, function () {

                });
            }
            function getBookNameData() {
                bookNameService.get().then(function (data) {
                    vm.bookNames = data;
                }, function () {

                });
            }

            function activate(vm) {
                init(vm);
                getSectorData();
                getBookNameData();
            }

            activate(vm);

        }])


})();

