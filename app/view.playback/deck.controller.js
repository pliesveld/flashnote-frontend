angular.module("flashnoteApp.view.playback.deck", ['ui.router', 'flashnoteApp.resource'])
    .controller("PlaybackDeckController",
        function playbackDeckController($stateParams, Deck) {
            var self = this;

            self.showAnswer = false;

            self.deck = Deck.get({ id : $stateParams.id });

            self.title = "Playing back flashnotes from deck {{title}}";

            self.question = "This is an example question.";
            self.answer = "This is an answer.";

            self.show = function() { self.showAnswer = true; };
            self.next = function() { self.showAnswer = false; };
            self.prev = function() { console.log("prev!"); };

        });

