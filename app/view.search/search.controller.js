angular.module('flashnoteApp.view.search', ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider
        .state('search', {
            url : "/search",
            templateUrl : 'view.search/search.html',
            controller: 'SearchCtrl',
            controllerAs: 'controller',
            params : {
                search_query : { value : "" },
                search_results : { value : [] }
            }
        })
        .state('search.result', {
            templateUrl : 'view.search/search-result.html',
            controller: 'SearchResultCtrl',
            controllerAs: 'controller',
            params : {
                search_query : { value : "" },
                search_results : { value : [] }
            }
        });

    })
    .controller('SearchCtrl', function($state, $log) {
        var self = this;
        self.query = "";

        self.search = function() {
            $log.debug("searching for: " + self.query);
            $state.go('search.result', { search_query : self.query, search_results : ['a', 'b', 'c'] });
            
        }; 
    })
    .controller('SearchResultCtrl', function($state, $log) {
        var self = this;
        self.search_query = $state.params.search_query;
        self.search_results = $state.params.search_results;

    });
;

