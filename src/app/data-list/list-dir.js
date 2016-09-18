
(function () {
    'use strict'
    angular.module('app')
        .directive('appList', [function () {
            return {
                restrict: 'E',
                templateUrl: './app/data-list/list.html',
                bindToController: {
                    type: '@?',
                    source: '=?',
                    title: '@?'
                },
                scope: true,
                controller: [function () {
                    var vm = this;
                    this.query = '';
                    vm.sortOrder = 'fa-sort-alpha-asc';
                    vm.selectAll = 'fa-square-o'
                    function init(vm) {
                        vm.alPhaPaging = ['A', ' B', ' C', ' D', ' E', ' F', ' G', ' H', ' I', ' J', ' K', ' L', ' M', 'N', ' O', ' P', ' Q', ' R', ' S', ' T', ' U', ' V', ' W', ' X', ' Y', ' Z']
                        vm.numbers = [5, 10, 15, 20, 25];
                        vm.source = _.sortBy(vm.source, 'name');
                        vm.mainSource = vm.source.slice();
                    }

                    function activate(vm) {
                        init(vm);
                    }

                    this.toggleSelection = function (toggle) {
                        vm.selectAll = vm.selectAll === 'fa-square-o' ? 'fa-check-square-o' : 'fa-square-o'
                        vm.source.forEach(function (item) {
                            if (toggle !== undefined) {
                                item.isSelected = toggle;
                                vm.selectAll = 'fa-square-o';
                            } else {
                                item.isSelected = vm.selectAll === 'fa-check-square-o';
                            }
                        })
                    }

                    this.sort = function () {
                        vm.sortOrder = vm.sortOrder === 'fa-sort-alpha-asc' ? 'fa-sort-alpha-desc' : 'fa-sort-alpha-asc'
                        vm.source = vm.source.reverse();
                    }

                    this.filter = function (startsWith) {
                        vm.source = vm.mainSource.slice();
                        var _temp = [];
                        vm.source.forEach(function (item) {
                            if (item.name.toUpperCase().substring(0, 1) === startsWith.trim()) {
                                _temp.push(item);
                            };
                        });
                        vm.source = [];
                        vm.source = _temp.slice();
                    }

                    this.filterByNumbers = function (num) {
                        vm.source = _.sortBy(vm.mainSource.slice(), 'name').reverse().slice(0, num);
                    }

                    this.search = function () {
                        vm.source = vm.mainSource.slice();
                        var _temp = [];
                        vm.source.forEach(function (item) {
                            if (item.name.toUpperCase().indexOf(vm.query.toUpperCase()) !== -1) {
                                _temp.push(item);
                            };
                        });
                        vm.source = [];
                        vm.source = _temp.slice();
                    }

                    this.reset = function () {
                        vm.source = vm.mainSource.slice();
                        vm.toggleSelection(false);
                        vm.query = '';
                    }

                    activate(vm);
                }],
                controllerAs: 'listCtrl',
            }
        }]);

})();

