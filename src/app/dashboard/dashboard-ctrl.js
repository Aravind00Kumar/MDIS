
(function () {
    'use strict'
    angular.module('app')
        .controller('DashBoardController', [function () {
            var vm = this;

            function init(vm) {
                vm.title = 'Office';
                vm.alPhaPaging = ['A', ' B', ' C', ' D', ' E', ' F', ' G', ' H', ' I', ' J', ' K', ' L', ' M', 'N', ' O', ' P', ' Q', ' R', ' S', ' T', ' U', ' V', ' W', ' X', ' Y', ' Z']
                vm.sectors = ['abc', 'xyz', 'ijk', 'abc', 'xyz', 'ijk', 'abc', 'xyz'];
                vm.bookNames = ['abc', 'xyz', 'ijk', 'abc', 'xyz', 'ijk', 'abc', 'xyz'];
                vm.years = ['1900', '1901', '2000'];
                vm.contents = ['abc', 'xyz', 'ijk', 'abc', 'xyz', 'ijk', 'abc', 'xyz'];
                vm.indicators = ['abc', 'xyz', 'ijk', 'abc', 'xyz', 'ijk', 'abc', 'xyz'];
            }


            function activate(vm) {
                init(vm);
            }

            activate(vm);

        }])


})();

