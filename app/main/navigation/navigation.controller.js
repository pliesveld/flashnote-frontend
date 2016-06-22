angular.module('flashnoteApp.navigation.controllers', ['ui.router', 'flashnoteApp.auth'])
  .controller('NavigationCtrl', function($state, auth) {
    var self = this;

    self.handle = function() { return auth.handle(); };

    self.authenticated = function() {
        return auth.authenticated;
    };

    self.logout = function() {
        auth.clear();
    };

  })
  .controller('LoginCtrl', function($state, $http, $log, auth) {
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

  })
  .controller('SignupCtrl', function($state, $http, $log) {
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
    .controller('WelcomeCtrl', function($state) {
			var self = this;
    })
