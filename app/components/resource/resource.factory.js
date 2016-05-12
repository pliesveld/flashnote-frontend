angular.module('flashnoteApp.resource.factory', ['ngResource'])
    .factory('QuestionBank', function($resource) {
            return $resource('http://localhost:9000/questionbanks/:id', { id: '@id' }, {
                update : {
                    method : 'PUT'
                }
            }, 
            {
                stripTrailingSlashes : true
            });
    })
    .factory('Deck', function($resource) {
            return $resource('http://localhost:9000/decks/:id', { id: '@id' }, {
                update : {
                    method : 'PUT'
                }
            }, 
            {
                stripTrailingSlashes : true
            });
    })
    .factory('Category', function($resource) {
            return $resource('http://localhost:9000/categories/root/:id', { id: '@id' }, {
                update : {
                    method : 'PUT'
                },
            },
            {
                stripTrailingSlashes : true
            })
    });
