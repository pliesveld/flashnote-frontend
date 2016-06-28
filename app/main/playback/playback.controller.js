angular.module('flashnoteApp.playback.controllers', ['flashnoteApp.resource'])
  .controller("PlaybackBankCtrl", function($scope, $stateParams, questionbank) {
    var self = this;

    self.showAnswer = false;


    console.log(questionbank);
    self.title = questionbank.description;

    self.questionbankId = questionbank.id;

    self.currentIdx = 0;
    self.maxIdx = questionbank.questions.length - 1;
    self.questions = questionbank.questions;
    console.log(self.questions);

    self.question = function() {
      return self.questions[self.currentIdx].content;
    };

    self.next = function() {
      console.log('next!');
      if(self.currentIdx < self.maxIdx) {
        self.currentIdx += 1;
      }
    };

    self.prev = function() {
      if(self.currentIdx > 0) {
        self.currentIdx -= 1;
      }
    };

  })
  .controller("PlaybackDeckCtrl", function($stateParams, deck) {
    var self = this;

    self.showAnswer = false;
    self.deckId = deck.id;

    self.deck = deck;
    self.title = deck.description;

    self.currentIdx = 0;
    self.maxIdx = deck.flashcards.length - 1;

    self.question = function() {
      return self.deck.flashcards[self.currentIdx].question.content;
    };

    self.answer = function() {
      return self.deck.flashcards[self.currentIdx].answer.content;
    };

    self.show = function() {
      self.showAnswer = true;
    };

    self.next = function() {
      if(self.currentIdx < self.maxIdx) {
        self.showAnswer = false;
        self.currentIdx += 1;
      }
    };

    self.prev = function() {
      if(self.showAnswer === true)
        self.showAnswer = false;
      else if(self.currentIdx > 0) {
        self.currentIdx -= 1;
      }
    };
  })
  .controller("PlaybackMainCtrl", function($stateParams) {
    var self = this;
  })

;
