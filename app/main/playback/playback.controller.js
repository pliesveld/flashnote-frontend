angular.module('flashnoteApp.playback.controllers', ['flashnoteApp.resource'])
  .controller("PlaybackBankCtrl", function($stateParams, QuestionBank) {
    var self = this;

    self.showAnswer = false;
    self.questionbank = QuestionBank.get({ id : $stateParams.id });
    self.title = "Playing back flashnotes from questionbank {{title}}";
    self.question = "This is an example question.";
    self.next = function() { self.showAnswer = false; };
  })
  .controller("PlaybackDeckCtrl", function($stateParams, Deck) {
    var self = this;

    self.showAnswer = false;
    self.deck = Deck.get({ id : $stateParams.id });
    self.title = "Playing back flashnotes from deck {{title}}";
    self.question = "This is an example question.";
    self.answer = "This is an answer.";
    self.show = function() { self.showAnswer = true; };
    self.next = function() { self.showAnswer = false; };
    self.prev = function() { console.log("prev!"); };
  })
  .controller("PlaybackMainCtrl", function($stateParams) {
    var self = this;
  })

;
