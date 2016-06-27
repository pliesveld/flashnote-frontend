angular.module('flashnoteApp.navigation')
  .config(function($stateProvider) {
    $stateProvider
      .state('login', { 
        url : '/login',
        templateUrl : 'main/navigation/view/login.html',
        controller : 'LoginCtrl',
        controllerAs : 'controller'
      })
      .state('signup', { 
        url : '/signup',
        templateUrl : 'main/navigation/view/signup.html',
        controller : 'SignupCtrl',
        controllerAs : 'controller'
      })
      .state('welcome',
      {
        url : "/welcome",
        templateUrl: 'main/navigation/view/welcome.html',
        controller: 'WelcomeCtrl',
        controllerAs: 'controller'
      })
      .state('about',
      {
        url : "/about",
        templateUrl: 'main/navigation/view/about.html',
        controller: 'WelcomeDetailsCtrl',
        controllerAs: 'controller'
      });


  });


