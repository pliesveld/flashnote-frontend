angular.module('flashnoteApp.playback.controllers', ['ngAudio', 'flashnoteApp.resource'])
  .controller("PlaybackBankCtrl", function($scope, $stateParams, ngAudio, API_ENDPOINT, questionbank) {
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

    self.questionId = function() {
      return self.questionObj().id;
    };

    self.questionObj = function() {
      return self.questions[self.currentIdx];
    };

    self.attachmentURL = function() {
      return API_ENDPOINT + "/attachments/" + self.questionObj().attachment.id;
    };

    self.hasAttachment = function() {
      return self.questions[self.currentIdx].attachment && self.questions[self.currentIdx].attachment.id;
    };

    self.playSpeech = function() {
      ngAudio.play(API_ENDPOINT + "/speech/question/" + self.questionId());
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
  .controller("PlaybackDeckCtrl", function($stateParams, ngAudio, API_ENDPOINT, deck) {
    var self = this;

    self.showAnswer = false;
    self.deckId = deck.id;

    self.deck = deck;
    self.title = deck.description;

    self.currentIdx = 0;
    self.maxIdx = deck.flashcards.length - 1;


    self.questionObj = function() {
      return self.deck.flashcards[self.currentIdx].question;
    };

    self.answerObj = function() {
      return self.deck.flashcards[self.currentIdx].answer;
    };

    self.question = function() {
      return self.deck.flashcards[self.currentIdx].question.content;
    };

    self.answer = function() {
      return self.deck.flashcards[self.currentIdx].answer.content;
    };

    self.questionId = function() {
      return self.questionObj().id;
    };

    self.answerId = function() {
      return self.answerObj().id;
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

    self.attachmentURL = function() {
      return API_ENDPOINT + "/attachments/" + self.questionObj().attachment.id;
    };

    self.hasAttachment = function() {
      return self.questionObj.attachment && self.questionObj.attachment.id;
    };

    self.playSpeech = function() {
      if(self.showAnswer) {
        ngAudio.play(API_ENDPOINT + "/speech/answer/" + self.answerId());
      } else {
        ngAudio.play(API_ENDPOINT + "/speech/question/" + self.questionId());
      }
    };

  })
  .controller("PlaybackMainCtrl", function($stateParams) {
    var self = this;
  })

;
