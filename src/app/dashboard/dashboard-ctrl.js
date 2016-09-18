
(function () {



    function Record(name, isSelected) {
        this.name = name;
        this.isSelected = isSelected || false;
    }

    'use strict'
    angular.module('app')
        .controller('DashBoardController', [function () {
            var vm = this;

            function init(vm) {

                vm.years = [
                    new Record(1900), new Record(2001), new Record(1987), new Record(1984), new Record(2015), new Record(2012), new Record(2002), new Record(1950)];

                vm.sectors = [
                    new Record('abc'), new Record('xyz'), new Record('ijk'), new Record('abc'), new Record('xyz'), new Record('ijk'), new Record('abc'), new Record('xyz')];

                vm.bookNames = [
                    new Record('abc'), new Record('xyz'), new Record('ijk'), new Record('abc'), new Record('xyz'), new Record('ijk'), new Record('abc'), new Record('xyz')];

                vm.contents = [
                    new Record('abc'), new Record('xyz'), new Record('ijk'), new Record('abc'), new Record('xyz'), new Record('ijk'), new Record('abc'), new Record('xyz')];

                vm.indicators = [
                    new Record('abc'), new Record('xyz'), new Record('ijk'), new Record('abc'), new Record('xyz'), new Record('ijk'), new Record('abc'), new Record('xyz')];

            }


            function activate(vm) {
                init(vm);
            }

            activate(vm);

        }])


})();

