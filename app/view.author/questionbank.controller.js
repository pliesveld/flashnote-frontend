angular.module('flashnoteApp.view.author.questionbank', ['flashnoteApp.resource'])
    .controller("QuestionBankCreateCtrl",
        function questionBankCreateController($log, $state, QuestionBank) {
            var self = this;
            self.currentQuestion = { content: "" };
            self.questionBank = new QuestionBank();
            self.questionBank.category = { name: "TEST CATEGORY", id: 500};
            self.questionBank.description = "TEST DESCRIPTION";
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
                    $state.go('playback.questionbank', {id: questionBank.id});
                });
            };
        }
    );

