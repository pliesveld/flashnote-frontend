angular.module('flashnoteApp.author.controllers', ['ui.router'])
  .controller('AuthorCtrl', function($state, $log) {
      var self = this;
      self.testData = [1,2,3];
      self.testFunc = function() { return "what"; };

      //$log.debug("AuthorCtrl", self);
  })
  .controller("DeckCreateCtrl", function($log, $state, Deck) {
      var self = this;
      self.currentFlashcard = { question: { content: "" }, answer: { content: "" } };
      self.categories = [{ name: "TEST CATEGORY", id: 500},{name: "TEST SUB CATEGORY", id: 501}];
      self.deck = new Deck();
      self.deck.category = self.categories[0];

      self.deck.description = "";
      self.deck.flashcards = [];

      self.addFile = function() {
        console.log("controller add file"); 
      };

      self.addFlashcard = function() {
        self.deck.flashcards.push(self.currentFlashcard);
        self.currentFlashcard = { question: { content: "" }, answer: { content: "" } };
      };

      self.removeFlashcard = function(index) {
        console.log("Removing index", index);
        delete self.deck.flashcards[index];
      };

      self.submit= function() { 
        self.deck.$save(function(deck) {
          $log.debug("saved!", deck);
          $state.go('deck.details', {id: deck.id});
        }, function(error) {
          console.log(error.data);
        });
      };
  })
  .controller("QuestionBankCreateCtrl", function($log, $state, QuestionBank) {
      var self = this;
      self.currentQuestion = { content: "" };
      self.categories = [{name: "TEST CATEGORY", id: 500},{name: "TEST SUB CATEGORY", id: 501}];
      self.questionBank = new QuestionBank();
      self.questionBank.category = self.categories[0];
      self.questionBank.description = "";
      self.questionBank.questions = [];

      self.addFile = function() {
        $log.debug("controller add file"); 
      };

      self.addQuestion = function() {
        self.questionBank.questions.push(self.currentQuestion);
        self.currentQuestion = { content: "" };
      };

      self.removeQuestion = function(index) {
        $log.debug("Removing index", index);
        delete self.questionBank.questions[index];
      };

      self.submit = function() { 
        self.questionBank.$save(function(questionBank) {
          $log.debug("saved!", questionBank);
          $state.go('bank.details', {id: questionBank.id});
        });
      };
  });
