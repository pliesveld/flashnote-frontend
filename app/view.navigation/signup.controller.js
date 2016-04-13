angular.module('flashnoteApp.controller.signup', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when('/sign-up',
            {
                templateUrl: 'view.navigation/signup.html',
                controller: 'SignupController',
                controllerAs: 'controller'
            })
    })    
    .controller('SignupController',
		function signupController($route, $http, $log) {
			var self = this;

            self.signupURL = "http://localhost:9000/account/sign-up";

            self.credentials = {'name':null, 'email':null, 'password':null, "password2":null};

			self.tab = function(route) {
				return $route.current && route === $route.current.controller;
			};

            self.signup = function(isValid) {

                if(isValid) {
                    $log.debug("Attempting to signup");
                    $log.debug(self.credentials);
                    $http.post(self.signupURL, self.credentials).success(
                        function(data,status) {
                            $log.debug(data);
                            $log.debug(status);
                        });
                } else {
                    $log.debug("form is invalid");
                }

            };

		})

