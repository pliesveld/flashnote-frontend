angular.module('flashnoteApp.resource.factory', ['ngResource', 'backend'])
    .factory('QuestionBank', function($resource, backend) {
            return $resource(backend.baseURL + '/questionbanks/:id', { id: '@id' }, {
                update: {
                    method: 'PUT'
                }
            }, 
            {
                stripTrailingSlashes: true
            });
    })
    .factory('Deck', function($resource, backend) {
            return $resource(backend.baseURL + '/decks/:id', { id: '@id' }, {
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
    .factory('Category', function($resource, backend) {
            return $resource(backend.baseURL + '/categories/root/:id', { id: '@id' }, {
                update: {
                    method: 'PUT'
                },
            },
            {
                stripTrailingSlashes: true
            });
    });
