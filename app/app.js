angular.module('flashnoteApp', [
    'ui.router', 
    'flashnoteApp.auth',
    'flashnoteApp.debug.logInterceptor',
    'flashnoteApp.resource',
    'flashnoteApp.view.nav',
    'flashnoteApp.view.home',
    'flashnoteApp.view.author',
    'flashnoteApp.view.profile',
    'flashnoteApp.view.categories',
    'flashnoteApp.view.search',
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

    }).value('API_ENDPOINT', 'http://lalmec.no-ip.info:9000')


    .run(function(auth, $rootScope, $log) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            $log.debug(event, toState.name);
        });

        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            $log.debug('stateChangeSuccess', toState.name);
        });


        $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
            $log.error(event, toState.name);
        });

        $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
            $log.error(event, toState.name, error);
        });

        $rootScope.$on('$viewContentLoading', function(event, viewConfig) {
            $log.debug(event, viewConfig);
        });

        $rootScope.$on('$viewContentLoaded', function(event) {
            $log.debug(event);
        });

        auth.init('/', '/auth', '/account/logoff', '/user');
    });


