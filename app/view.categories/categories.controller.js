angular.module('flashnoteApp.view.categories', ['ui.router'])
    .controller('CategoryListCtrl', function categoryListController($log, $scope,$state, Category) {
        $scope.categories = Category.query();

    })
    .controller('CategoryViewCtrl', function categoryViewController($state, Category) {
    });

