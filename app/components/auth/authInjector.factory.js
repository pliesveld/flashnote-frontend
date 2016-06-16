angular.module('flashnoteApp.auth.session-injector', []).factory(
        'authInjector', ['session', '$log',

        function(session, $log) {
            var authInjector = {

                request : function(config) {
                    if(session.valid) {
                        $log.debug("authenticated, adding header");
                        config.headers['X-AUTH-TOKEN'] = session.token;
                    } else {
                        $log.debug("not authenticated, not adding header");
                    }

                    return config;
                }
            };

            return authInjector;
        }]);
        
