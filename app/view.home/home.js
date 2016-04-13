angular.module('flashnoteApp.view.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/',
            {
                templateUrl: 'view.home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'controller'
            })
        .when('/home/construct',
            {
                templateUrl: 'view.home/home-construct.html',
                controller: 'HomeCtrl',
                controllerAs: 'controller'
            });
    }])

    .controller('HomeCtrl', function HomeController($route, $http) {
        var self = this;

        self.tab = function(route) {
            return $route.current && route === $route.current.controller; 
        }

        self.user = "Student";
    });
