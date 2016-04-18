angular.module('flashnoteApp.controller.signup', ['ui.router'])
    .controller('SignupCtrl',
		function signupController($state, $http, $log) {
			var self = this;

            self.signupURL = "http://localhost:9000/account/sign-up";

            self.credentials = {'name':null, 'email':null, 'password':null, "password2":null};

            self.signup = function(isValid) {

                if(isValid) {
                    $log.debug("Attempting to signup");
                    $log.debug(self.credentials);
                    $http.post(self.signupURL, self.credentials).success(
                        function(data,status) {
                            $log.debug(data);
                            $log.debug(status);
                        });
                        $state.go('home');
                } else {
                    $log.debug("form is invalid");
                }

            };

		})

