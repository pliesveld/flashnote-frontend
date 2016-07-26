angular.module('flashnoteApp.debug')
.config(function($stateProvider) {

  $stateProvider
    .state('debug', { 
      url: '/debug',
      template: "<div ui-view>",
      params: {reload: true},
    })

    .state('debug.theme', { 
      url : '/theme',
      templateUrl : 'main/debug/view/theme.html',
      controller : function() { return {};}, 
      controllerAs : 'controller',
      params: {reload: true}
    })

    .state('debug.grid', { 
      url : '/grid',
      templateUrl : 'main/debug/view/grid.html',
      controller : function() { return {}; }, 
      controllerAs : 'controller',
      params: {reload: true}
    })

    .state('debug.cache', {
      url: '/cache',
      templateUrl : 'main/debug/view/cache.html',
      controller: 'CacheController',
      controllerAs: 'controller',
      params: {reload: true},
    })
    .state('debug.highlight', {
      url: '/highlight',
      templateUrl : 'main/debug/view/highlight.html',
      controller: 'HighlightController',
      controllerAs: 'controller',
      params: {reload: true},
    })




      ;
});

