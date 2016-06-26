angular.module('flashnoteApp.resource.services', ['ngResource'])
  .factory('CategoryCache', function($cacheFactory, $log) {
    var cache = $cacheFactory('categoryCache', {options: 15});
    cache.debug = function() {
      $log.debug(cache.info());
    };
    return cache;
  })
  .factory('QuestionBank', function($resource, API_ENDPOINT) {
      return $resource(API_ENDPOINT + '/questionbanks/:id', { id: '@id' }, {
        update: {
          method: 'PUT'
        },
        query: {
          isArray: false,
        },
      }, 
      {
        stripTrailingSlashes: true
      });
  })
  .factory('Deck', function($resource, API_ENDPOINT) {
      return $resource(API_ENDPOINT + '/decks/:id', { id: '@id' }, {
        update: {
          method: 'PUT'
        },
        query: {
          isArray: false,
        },
      }, 
      {
        stripTrailingSlashes: true
      });
  })
  .factory('Category', function($resource, API_ENDPOINT) {
      return $resource(API_ENDPOINT + '/categories/root/:id', { id: '@id' }, {
        update: {
          method: 'PUT'
        },
      },
      {
        stripTrailingSlashes: true
      });
  });
