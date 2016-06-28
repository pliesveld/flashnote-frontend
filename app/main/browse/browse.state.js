angular.module('flashnoteApp.browse')
  .config(function($stateProvider) {
    $stateProvider
      .state('categories',
      {
        url : "/categories",
        templateUrl: 'main/browse/view/categories-root.html',
        controller: 'CategoryRootCtrl',
        controllerAs: 'controller'
      })
      .state('categories.list',
      {
        url : "/list",
        templateUrl: 'main/browse/view/categories-list.html',
        controller: 'CategoryListCtrl',
      })
      .state('categories.details',
      {
        url : "/:id",
        templateUrl: 'main/browse/view/categories-detail.html',
        controller: 'CategoryDetailsCtrl',
        controllerAs: 'controller',
        params: {id: null},
      });
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('search', {
        url : "/search",
        templateUrl : 'main/browse/view/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'controller',
        params : {
          search_query : { value : "" },
          search_results : { value : [] }
        }
      })
      .state('search.result', {
        templateUrl : 'main/browse/view/search-result.html',
        controller: 'SearchResultCtrl',
        controllerAs: 'controller',
        params : {
          search_query : { value : "" },
          search_results : { value : [] }
        }
      });
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('bank',
      {
        url: '/bank',
        template: '<div ui-view></div>'
      })
      .state('bank.details',
      {
        url : "/:id",
        templateUrl: 'main/browse/view/bank-detail.html',
        controller: 'BankDetailsCtrl',
        controllerAs: 'controller',
        params : { id : null },
      })
      .state('deck',
      {
        url: '/deck',
        template: '<div ui-view></div>'
      })
      .state('deck.details',
      {
        url : "/:id",
        templateUrl: 'main/browse/view/deck-detail.html',
        controller: 'DeckDetailsCtrl',
        controllerAs: 'controller',
        params : { id : null },
      });

  });
