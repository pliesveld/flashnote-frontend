angular.module('flashnoteApp.view.author', ['ui.router', 'flashnoteApp.view.author.questionbank','flashnoteApp.view.author.deck'])
    .config(function($stateProvider) {
        $stateProvider
        .state('author', {
            url : "/author",
            templateUrl : 'view.author/author.html',
            controller: 'AuthorCtrl',
            controllerAs: 'controller',
        })
        .state('author.questionbank', {
            url : "/questionbank/create",
            templateUrl : 'view.author/questionbank-create.html',
            controller: 'QuestionBankCreateCtrl',
            controllerAs: 'controller',
        })   
        .state('author.deck', {
            url : "/deck/create",
            templateUrl : 'view.author/deck-create.html',
            controller: 'DeckCreateCtrl',
            controllerAs: 'controller',
        });
    })
    .controller('AuthorCtrl', function($state, $log) {
        var self = this;
        $log.debug("AuthorCtrl");
    });

