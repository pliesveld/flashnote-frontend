angular.module('flashnoteApp.playback.directives', [])
  .directive('springPagination', function() {
    return {
      //scope: false,
      scope: false,
      restrict: 'AEC',
      replace: false,
			template: '<ul class="pagination" spring-page></ul>'
	}})
  .directive('springPage', function() {
    return {
      scope: false,
      restrict: 'AEC',
      replace: false,
			template: '<li ng-repeat="n in controller.test track by $index"><a href>{{$index + 1}}</a></li>'
	}});


