angular.module('flashnoteApp.controller.navigation', ['ui.router', 'auth'])
    .controller('navigation', function navigationController($state, auth) {
			var self = this;

            self.handle = function() { return auth.handle(); };

            self.authenticated = function() {
                return auth.authenticated;
            };

            self.logout = function() {
                auth.clear();
            };

    })
