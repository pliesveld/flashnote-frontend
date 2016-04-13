angular.module('flashnoteApp.controller.navigation', ['ngRoute', 'auth'])
    .controller('navigation', function navigationController($route, auth) {
			var self = this;
			self.tab = function(route) {
				return $route.current && route === $route.current.controller;
			};

            self.authenticated = function() {
                return auth.authenticated;
            };

            self.logout = function() {
                auth.clear();
            };

    })
