angular.module('flashnoteApp.profile')
  .config(function($stateProvider) {
    $stateProvider
      .state('profile', {
        url: "/profile",
        template: "<div ui-view></div>",
      })
      .state('profile.home',
      {
        url : "/home",
        templateUrl: 'main/profile/view/profile-home.html',
        controller: 'ProfileHomeCtrl',
        controllerAs: 'controller'
      })
      .state('profile.details', {
        url : "/details",
        templateUrl: 'main/profile/view/profile-details.html',
        controller: 'ProfileDetailsCtrl',
        controllerAs: 'controller'
      })
      .state('profile.details.changepassword', {
        url : "/changepassword",
        templateUrl : 'main/profile/view/profile-changepassword.html',
        controller: 'ProfileChangePasswordCtrl',
        controllerAs: 'controller'
      })
      .state('profile.details.changepicture', {
        url : "/picture",
        templateUrl : 'main/profile/view/profile-changepicture.html',
        controller: 'ProfileChangePictureCtrl',
        controllerAs: 'controller'
      });

  });

