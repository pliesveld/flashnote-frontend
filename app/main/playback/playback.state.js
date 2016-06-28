angular.module('flashnoteApp.playback')
  .config(function($stateProvider) {
    $stateProvider
      .state('playback', {
        url: '/playback',
        template: '<div ui-view></div>',
      })

      .state('playback.bank', {
        url: '/bank/:id',
        templateUrl : 'main/playback/view/bank.html',
        controller : 'PlaybackBankCtrl',
        controllerAs : 'controller',
        params: {id: null},
        resolve: {
          questionbank: function($stateParams, QuestionBank) {
            return QuestionBank.get({id: $stateParams.id}).$promise;
          }
        },
      })
      .state('playback.deck', {
        url: '/deck/:id',
        templateUrl : 'main/playback/view/deck.html',
        controller : 'PlaybackDeckCtrl',
        controllerAs : 'controller',
        params: {id: null},
        resolve: {
          deck: function($stateParams, Deck) {
            return Deck.get({id: $stateParams.id}).$promise;
          }
        },
      });
  });
