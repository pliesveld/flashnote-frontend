angular.module('flashnoteApp.author')
  .config(function($stateProvider) {
    $stateProvider
    .state('author', {
      url : "/author",
      templateUrl : 'main/author/view/author.html',
      controller: 'AuthorCtrl',
      controllerAs: 'controller',
    })
    .state('author.questionbank', {
      url : "/questionbank/create",
      templateUrl : 'main/author/view/questionbank-create.html',
      controller: 'QuestionBankCreateCtrl',
      controllerAs: 'controller',
    })   
    .state('author.deck', {
      url : "/deck/create",
      templateUrl : 'main/author/view/deck-create.html',
      controller: 'DeckCreateCtrl',
      controllerAs: 'controller',
    });
  })

