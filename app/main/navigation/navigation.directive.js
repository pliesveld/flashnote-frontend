angular.module('flashnoteApp.navigation.directives', [])
  .directive('validPasswordC', function () {
  return {
    require: 'ngModel',
    link: function (scope, elm, attrs, ctrl) {
      if(!(ctrl)) {
        return;
      }

      ctrl.$parsers.unshift(function (viewValue, $scope) {
        var noMatch = viewValue != scope.signupForm.password.$viewValue
        if(noMatch) {
          ctrl.$setValidity('noMatch', false)
          return undefined;
        } else { 
          ctrl.$setValidity('noMatch', true)
          return viewValue;
        }
      })
    }
  }
})

