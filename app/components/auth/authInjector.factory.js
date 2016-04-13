angular.module('auth.session-injector', []).factory(
        'authInjector', ['session',

        function(session) {
            var authInjector = {

                request : function(config) {
                    if(session.valid) {
                        console.log("authenticated, adding header");
                        config.headers['X-AUTH-TOKEN'] = session.token;
                    } else {
                        console.log("not authenticated, not adding header");
                    }

                    return config;
                }
            };

            return authInjector;
        }]);
        
