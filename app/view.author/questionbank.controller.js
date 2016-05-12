angular.module('flashnoteApp.view.author.questionbank', ['flashnoteApp.resource'])
    .controller("QuestionBankCreateCtrl",
        function questionBankCreateController(QuestionBank) {
            var self = this;
            self.currentQuestion = { content : "" };
            self.questionBank = new QuestionBank();
            self.questionBank.category = { name : "TEST CATEGORY", id : 6 };
            self.questionBank.description = "TEST DESCRIPTION";
            self.questionBank.questions = [];

            self.addFile = function() {
                console.log("controller add file"); 
            };

            self.addQuestion = function() {
                self.questionBank.questions.push(self.currentQuestion);
                self.currentQuestion = { content : "" };
            };


            self.removeQuestion = function(index) {
                console.log("Removing index", index);
                delete self.questionBank.questions[index];
            };

            self.submit= function() { 
                self.questionBank.$save(function() {
                    console.log("saved!"); 
                });
            };
        }
    );

