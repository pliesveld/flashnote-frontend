angular.module('flashnoteApp.view.categories', ['ui.router'])
    .config( function($stateProvider) {
            $stateProvider
            .state('categories',
            {
                url : "/categories",
                templateUrl: 'view.categories/categories-list.html',
                controller: 'CategoryListCtrl',
                controllerAs: 'controller',
                params : { id : null },
            })

            .state('categories.details', 
            {
                url : "/:id",
                templateUrl: 'view.categories/categories-detail.html',
                controller: 'CategoryDetailsCtrl',
                controllerAs: 'controller'

            })
    })


    .controller('CategoryListCtrl', function categoryListController($log, $scope, $state, Category) {
        var self = this;

        $scope.id = $state.params.id;

        $scope.$watch("id", function() { $log.debug("changed id = ", $scope.id);});

        $scope.categories = Category.query({"id" : $scope.id});

        self.viewCategoryAsRoot = function(param) { $state.go('categories', param); };

        self.viewCategory = function(param) { $state.go('categories.details', param); };

    })
    .controller('CategoryViewCtrl', function categoryViewController($state, $stateParams, Category) {
    })
    .controller('CategoryDetailsCtrl', function categoryViewDetailsController($state, $stateParams, Category) {
        var self = this;
        self.cat_id = $stateParams.id;
    });

