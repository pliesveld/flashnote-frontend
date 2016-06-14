angular.module('flashnoteApp.view.categories', ['ui.router'])
    .config( function($stateProvider) {
            $stateProvider
            .state('categories',
            {
                url : "/categories",
                templateUrl: 'view.categories/categories-root.html',
                controller: 'CategoryRootCtrl',
                controllerAs: 'controller'

            })
            .state('categories.list',
            {
                url : "/list",
                templateUrl: 'view.categories/categories-list.html',
                controller: 'CategoryListCtrl',

            })
            .state('categories.details', 
            {
                url : "/:id",
                templateUrl: 'view.categories/categories-detail.html',
                controller: 'CategoryDetailsCtrl',
                controllerAs: 'controller',
                params : { id : null },
            });
    })
    .controller('CategoryRootCtrl', function categoryRootController($log, $scope, $state) {
    })

    .controller('CategoryListCtrl', function categoryListController($log, $scope, $state, Category) {
        $log.debug("CategoryListCtl");
        var self = this;

        $scope.categories = Category.query({"id" : null});

    })
    .controller('CategoryDetailsCtrl', function categoryViewDetailsController($log, $scope, $state, $stateParams, Category, Deck) {
        $log.debug("CategoryDetailsCtl", $scope.id);
        var self = this;

        $scope.id = $state.params.id;
        $scope.categories = Category.query({"id" : $scope.id});

        $scope.decks = Deck.query({"categoryId": $scope.id});

    });

