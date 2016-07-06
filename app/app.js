angular.module('flashnoteApp', [
  'ngHolder',
  'ui.router', 
  'flashnoteApp.debug',
  'flashnoteApp.resource',
  'flashnoteApp.navigation',
  'flashnoteApp.auth',
  'flashnoteApp.profile',
  'flashnoteApp.playback',
  'flashnoteApp.author',
  'flashnoteApp.browse'
])
.value('API_ENDPOINT', 'http://##API_ENDPOINT##/')
  .run(function(auth, $rootScope, $log) {

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams, options) {
      $log.info('stateChangeSuccess', toState.name, { detail: {toState: toState, toParams: toParams, fromState: fromState, fromParams: fromParams, options: options} });
    });

    $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
      $log.error(event, unfoundState);
    });

    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      $log.error(event, toState.name, error);
    });

    /*
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
      $log.debug('$stateChangeStart', fromState.name + '=> ' + toState.name);
    });

    $rootScope.$on('$viewContentLoading', function(event, viewConfig) {
      $log.debug('$viewContentLoading', viewConfig, event);
    });

    $rootScope.$on('$viewContentLoaded', function(event) {
      $log.debug('$viewContentLoaded', event);
    });
    */

    auth.init('/', '/auth', '/account/logoff', '/user');
});


