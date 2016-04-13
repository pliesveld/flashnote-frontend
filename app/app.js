angular.module('flashnoteApp', [
    'ngRoute', 
    'auth',
    'flashnoteApp.logInterceptor',
    'flashnoteApp.resource',
    'flashnoteApp.view.nav',
    'flashnoteApp.view.home',
])
    .config(
            
    function($routeProvider,$httpProvider,$logProvider) {
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
        $logProvider.debugEnabled(true);


        $routeProvider
            .otherwise(
                {
                    redirectTo: '/'

                });


            $httpProvider.interceptors.push('authInjector');
            $httpProvider.interceptors.push('logInterceptor');
    })

    .run(function(auth) {
                    var auth_host = 'http://localhost:9000';
                    auth.init('/', auth_host + '/auth', auth_host + '/account/logoff', auth_host + '/user');
    });


