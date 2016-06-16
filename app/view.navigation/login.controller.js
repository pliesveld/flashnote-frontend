angular.module('flashnoteApp.controller.login', ['ui.router', 'flashnoteApp.auth'])
    .controller('LoginCtrl',
		function LoginController($state, $http, $log, auth) {
			var self = this;

            self.credentials = { 'username':null, 'password':null, 'rememberme':false };

            self.login = function() {
                auth.authenticate(self.credentials, function(authenticated) {
                    if(authenticated) {
                        $log.debug("login successful");
                        self.error = false;
                        $state.go('home');
                    } else {
                        $log.debug("login unsuccessful");
                        self.error = true;
                    }

                });
            };

            self.logout = auth.clear;


		});

