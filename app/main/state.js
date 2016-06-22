angular.module('flashnoteApp')
.config(function($httpProvider, $stateProvider, $urlRouterProvider, $logProvider, $controllerProvider) {
  $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
  $logProvider.debugEnabled(true);

  $urlRouterProvider.otherwise('/welcome');
  $httpProvider.interceptors.push('authInjector');
  $controllerProvider.register('DefaultCtrl', function DefaultControllerConstructor($log) { $log.debug('Default Controller'); });
})

