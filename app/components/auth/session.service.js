angular.module('auth.session', []).service('session', 
        function($log)
        {
            var self = this;

            self.reset = function resetSession() {
                self.token = null;
                self.valid = false;
                self.rememberme = false;
                self.authorities = [];
            };

            self.reset();

            self.saveSessionToken = function sessionSetJwtToken(token, permissions, rememberme) {
                self.token = token;
                self.rememberme = rememberme;
            };

            self.validateSession = function sessionValidation(user) {
                $log.debug("Validating user",user);
                if(user === undefined || user === null || !user.handle || !user.username || !user.authorities)
                {
                    $log.warn("Invalid user response", JSON.stringify(user,null,"  "));
                    self.reset();
                    return;

                }

                self.handle = user.handle;
                self.username = user.username;
                self.valid = true;
                self.authorities = user.authorities;

                $log.info("Successfully authenticated as", self.handle, "with", JSON.stringify(self.authorities));
            };

            self.invalidateSession = function sessionInvalidation() {
                $log.debug("Invalidating Session");
                self.reset();
            };

        });
