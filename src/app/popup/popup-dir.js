
(function () {
    'use strict'
    angular.module('app')
        .directive('appPopup', [function () {
            return {
                restrict: 'E',
                templateUrl: './app/popup/popup.html',
                bindToController: {
                    source: '=?',
                    title: '=?',
                },
                scope: true,
                controller: ['$scope', 'dashboardService', function ($scope, dashboardService) {
                    var vm = this;

                    function init(vm) {
                        vm.source = _.sortBy(vm.source, 'name');
                        vm.mainSource = vm.source.slice();
                    }

                    function activate(vm) {
                        init(vm);
                        $scope.$watch(
                            function watchFoo(scope) {
                                return (vm.source);
                            },
                            function handleFooChange(newValue, oldValue) {
                                if (vm.mainSource.length === 0 && vm.source.length !== 0)
                                    vm.mainSource = vm.source.slice();
                            }
                        );
                    }

                    this.select = function () {
                        dashboardService.set(vm.title, vm.source);
                    }

                    activate(vm);
                }],
                controllerAs: 'popupCtrl',
            }
        }]);

})();

