angular.module('flashnoteApp.playback')
  .config(function($stateProvider) {
    $stateProvider
      .state('playback', {
        controller : 'PlaybackMainCtrl',
        controllerAs : 'controller'
      })

      .state('playback.bank', {
        url : '/bank',
        templateUrl : 'main/playback/view/bank.html',
        controller : 'PlaybackBankCtrl',
        controllerAs : 'controller'
      })
      .state('playback.deck', {
        url : '/deck',
        templateUrl : 'main/playback/view/deck.html',
        controller : 'PlaybackDeckCtrl',
        controllerAs : 'controller'
      });
  });
