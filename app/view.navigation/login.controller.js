angular.module('flashnoteApp.controller.login', ['ngRoute', 'auth'])
    .config(function($routeProvider) {
        $routeProvider.when('/login', {
                templateUrl: 'view.navigation/login.html',
                controller: 'LoginController',
                controllerAs: 'controller'
        })
    })

    .controller('LoginController',
		function LoginController($route, $http, $log, auth) {
			var self = this;

			self.tab = function(route) {
				return $route.current && route === $route.current.controller;
			};

            self.credentials = { 'username':null, 'password':null, 'rememberme':false };

            self.login = function() {
                auth.authenticate(self.credentials, function(authenticated) {
                    if(authenticated) {
                        $log.debug("login successful");
                        self.error = false;
                    } else {
                        $log.debug("login unsuccessful");
                        self.error = true;
                    }

                });
            };

            self.logout = auth.clear;


		});

