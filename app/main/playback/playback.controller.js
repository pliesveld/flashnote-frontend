angular.module('flashnoteApp.playback.controllers', ['flashnoteApp.resource'])
  .controller("PlaybackBankCtrl", function($scope, $stateParams, questionbank) {
    var self = this;

    self.showAnswer = false;


    console.log(questionbank);
    self.title = questionbank.description;

    self.questionbankId = questionbank.id;

    self.currentIdx = 0;
    self.maxIdx = questionbank.questions.length;
    self.questions = questionbank.questions;


    self.test = [1,2,3,5];
    //$scope.test = [1,2,3,5];
 

    self.next = function() { 
      console.log('next!');
      if(self.currentIdx < self.maxIdx) {
        self.currentIdx += 1;
      }
      
    };

    self.prev = function() { 
      console.log('prev!');
    };

      self.showAnswer = false;
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
