angular.module('flashnoteApp.browse.controllers', ['ui.router'])
  .controller('CategoryRootCtrl', function($log, $scope, $state) {
  })
  .controller('CategoryListCtrl', function($log, $scope, $state, Category) {
    var self = this;
    $scope.categories = Category.query({"id" : null});
  })
  .controller('CategoryDetailsCtrl', function($log, $scope, $state, $stateParams, Category, Deck, QuestionBank) {
    var self = this;

    $scope.id = $state.params.id;
    $scope.categories = Category.query({"id" : $scope.id});
    $scope.decks = Deck.query({"categoryId": $scope.id});
    $scope.banks = QuestionBank.query({"categoryId": $scope.id});
  })
  .controller('SearchCtrl', function($state, $log) {
    var self = this;
    self.query = "";

    self.search = function() {
      $log.debug("searching for: " + self.query);
      $state.go('search.result', { search_query : self.query, search_results : ['a', 'b', 'c'] });
      
    }; 
  })
  .controller('SearchResultCtrl', function($state) {
    var self = this;
    self.search_query = $state.params.search_query;
    self.search_results = $state.params.search_results;
  })
  .controller('BankDetailsCtrl', function($log, $scope, $state, $stateParams, QuestionBank) {
    var self = this;

    self.id = $state.params.id;
    self.bank = QuestionBank.get({'id': self.id});

  })


;
