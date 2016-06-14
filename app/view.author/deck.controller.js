angular.module('flashnoteApp.view.author.deck', ['flashnoteApp.resource'])
    .controller("DeckCreateCtrl",
        function deckCreateController(Deck) {
            var self = this;
            self.currentFlashcard = { question: { content: "" }, answer: { content: "" } };
            self.deck = new Deck();
            self.deck.category = { name: "TEST CATEGORY", id: 500 };
            self.deck.description = "TEST DESCRIPTION";
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
                self.deck.$save(function() {
                    console.log("saved!"); 
                });
            };
        }
    );

