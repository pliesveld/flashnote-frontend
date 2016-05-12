angular.module("flashnoteApp.view.playback.questionbank", ['ui.router', 'flashnoteApp.resource'])
    .controller("PlaybackQuestionBankController",
        function playbackQuestionBankController($stateParams, QuestionBank) {
            var self = this;

            self.showAnswer = false;

            self.questionbank = QuestionBank.get({ id : $stateParams.id });

            self.title = "Playing back flashnotes from questionbank {{title}}";

            self.question = "This is an example question.";

            self.next = function() { self.showAnswer = false; };
        });

