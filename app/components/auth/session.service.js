angular.module('auth.session', []).service('session', 
        function($log) 
        {
            var self = this;

            self.reset = function resetSession() {
                self.token = null;
                self.valid = false;
                self.rememberme = false;
                self.authorities = [];
            }

            self.reset();

            self.saveSessionToken = function sessionSetJwtToken(token, permissions, rememberme)
            {
                self.token = token;
                self.rememberme;
            };

            self.validateSession = function sessionValidation(user) {
                if(user === undefined || user == null || !user.handle || !user.username || !user.authorities)
                {
                    self.reset();
                    return;

                }

                self.handle = user.handle;
                self.username = user.username;
                self.valid = true;
                self.authorities = user.authorities;

                $log.debug("now authenticated as ", self.handle);
            };

            self.invalidateSession = function sessionInvalidation() {
                $log.debug("session invalidated");
                self.reset();
            }

        });
