
(function () {
    'use strict'
    angular.module('app', ['ui.router'])
        .run(['$rootScope', '$timeout', function ($rootScope, $timeout) {

            function init(root) {
                root.current = {
                    stateName: ''
                }
            }

            function registerEvents(root) {
                root.$on('$stateChangeSuccess',
                    function (event, toState, toParams, fromState, fromParams) {
                        $rootScope.current.stateName = toState.name;
                    });
            }
            function activate(root) {
                init(root);
                registerEvents(root);
            }
            activate($rootScope);

        }])

        // route configuration
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: "/home",
                    templateUrl: 'app/dashboard/dashboard.html',
                    controller: 'DashBoardController',
                    controllerAs: 'dashBoardCtrl'
                })

                // JAVASCRIPR                
                .state('help', {
                    url: "/help",
                    templateUrl: 'app/help/help.html',
                    controller: 'HelpController',
                    controllerAs: 'helpCtrl'
                })
                .state('about', {
                    url: "/about",
                    templateUrl: 'app/about/about.html',
                    controller: 'AboutController',
                    controllerAs: 'aboutCtrl'
                });

            $urlRouterProvider.otherwise("/home");
        }])

                .controller('HelpController', [function () {
            var vm = this;
            this.title = 'Help';
        }])

        .controller('AboutController', [function () {
            var vm = this;
            this.title = 'About';
        }]);



    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
    });

})();

