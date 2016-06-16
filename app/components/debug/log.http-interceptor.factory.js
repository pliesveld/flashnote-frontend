angular.module('flashnoteApp.debug.logInterceptor',[]).factory('logInterceptor', ['$log', function($log) {
    $log.debug('$log is here to show you that this is a regular factory with injection');

        var logInterceptor = {
            request : function(config) {
                $log.debug(config.method + ' ' + config.url, config);
                return config;
            },

            requestError : function(rejectReason) {
                $log.debug("http.requestError ", rejectReason);
                return rejectReason;
            },

            response : function(response) {
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
