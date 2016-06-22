angular.module('flashnoteApp.resource.controllers', [])
  .controller('ResourceController', function($scope, QuestionBank) {
    var entry = QuestionBank.get({ id: $scope.id }, function() {
      console.log(entry);
    });

    var entries = QuestionBank.query(function() {
      console.log(entries);
    });

    var create = function() {
      $scope.questionBank = new QuestionBank();
      $scope.questionBank.data = 'some data';
      $scope.save($scope.questionBank, function() {
        console.log('saving data');
      });
    };

    var update = function() {
      $scope.questionBank = QuestionBank.get({ id: $scope.id }, function() {
      $scope.entry.data = 'something else';
        $scope.entry.$update(function() {
          console.log('updating questionbank');
        });
      });
    };

    var remove = function() {
      $scope.questionBank = QuestionBank.get({ id : $scope.id }, function() {
        $scope.questionBank.$delete(function() {
          console.log('item removed');
        });
      });
    };
});



