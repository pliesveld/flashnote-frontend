angular.module('flashnoteApp', [
    'ui.router', 
    'auth',
    'flashnoteApp.logInterceptor',
    'flashnoteApp.resource',
    'flashnoteApp.view.nav',
    'flashnoteApp.view.home',
    'flashnoteApp.view.categories',
])
    .config(
            
    function($httpProvider, $stateProvider, $urlRouterProvider, $logProvider) {
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
        $logProvider.debugEnabled(true);


        $stateProvider
            .state('login', { 
                url : '/login',
                templateUrl : 'view.navigation/login.html',
                controller : 'LoginCtrl',
                controllerAs : 'controller'
            })

            .state('signup', { 
                url : '/signup',
                templateUrl : 'view.navigation/signup.html',
                controller : 'SignupCtrl',
                controllerAs : 'controller'
            })

            .state('browse',
            {
                url : "/categories",
                templateUrl: 'view.categories/categories-list.html',
                controller: 'CategoryListCtrl',
                controllerAs: 'controller'
            })


            .state('home',
            {
                url : "/home",
                templateUrl: 'view.home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'controller'
            })

            .state('welcome',
            {
                url : "/welcome",
                templateUrl: 'view.navigation/welcome.html',
                controller: 'WelcomeCtrl',
                controllerAs: 'controller'
            });

            $urlRouterProvider.otherwise('/welcome');


            $httpProvider.interceptors.push('authInjector');
            $httpProvider.interceptors.push('logInterceptor');
    })

    .run(function(auth) {
        var auth_host = 'http://localhost:9000';
        auth.init('/', auth_host + '/auth', auth_host + '/account/logoff', auth_host + '/user');
    });


