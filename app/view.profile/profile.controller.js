angular.module('flashnoteApp.view.profile', ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider
        .state('profile', {
            url : "/profile",
            templateUrl : 'view.profile/profile.html',
            controller: 'ProfileViewCtrl',
            controllerAs: 'controller'
        })
        .state('profile.changepassword', {
            templateUrl : 'view.profile/profile-changepassword.html',
            controller: 'ProfileChangePasswordCtrl',
            controllerAs: 'controller'
        });
    })
    .controller('ProfileViewCtrl', function($state) {
    })
    .controller('ProfileChangePasswordCtrl', function($state, $log) {
        var self = this;

        self.credentials = { oldpassword : null, newpassword: null };

        self.updatePassword = function() {
            $log.debug("Updating password from " +  self.credentials.oldpassword  + " to " + self.credentials.newpassword);
        }
    });

