angular.module('flashnoteApp.debug.services',[])
  .factory('logInterceptor', ['$log', function($log) {

  var logInterceptor = {
    request: function(config) {
      $log.debug(config.method + ' ' + config.url, config);
      return config;
    },

    requestError: function(rejectReason) {
      $log.debug("http.requestError ", rejectReason);
      return rejectReason;
    },

    response: function(response) {
      $log.debug("http.response ", response);
      return response;
    }
/*
    responseError : function(response) {
      $log.debug("http.responseError ", response);
      return response;
    }
*/
  };

  return logInterceptor;
}]);
