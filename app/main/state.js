angular.module('flashnoteApp')
  .config(function($httpProvider, $stateProvider, $urlRouterProvider, $logProvider, $controllerProvider, $provide, DEBUG_LOG, URL_LANDING) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    $logProvider.debugEnabled(DEBUG_LOG);

    console.log('landing: ', URL_LANDING);
    $urlRouterProvider.otherwise(URL_LANDING);
    $httpProvider.interceptors.push('authInjector');
    $controllerProvider.register('DefaultCtrl', function DefaultControllerConstructor($log) { $log.debug('Default Controller'); });
  })
  .config(function($provide) {
    $provide.decorator('$cacheFactory', function($delegate) {
      $delegate.debug = function() { 
          console.log($delegate); 
        };
      return $delegate;
    });

  });

