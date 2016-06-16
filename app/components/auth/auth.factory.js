angular.module('flashnoteApp.auth.factory', ['flashnoteApp.auth.session']).factory(
		'auth',

		function($rootScope, $http, $location, $log, session, API_ENDPOINT) {

			enter = function() {
				if ($location.path() != auth.loginPath) {
					auth.path = $location.path();
					if (!auth.authenticated) {
						$location.path(auth.loginPath);
					}
				}					
			};

			var auth = {

				authenticated : false,

				homePath : '/',
				loginPath : '/login',
				logoutPath : '/logout',
                userPath : '/user',
				path : $location.path(),

				authenticate : function(credentials, callback) {

                    credentials.username = 'student@example.com';
                    credentials.password = 'password';

					var payload = credentials && credentials.username ? {
                        username : credentials.username,
                        password : credentials.password,
					} : {};

                    $log.debug("Authenticating", payload.username);

                    var rememberme = credentials.rememberme ? credentials.rememberme : false;

                    $http.post(auth.loginPath, JSON.stringify(payload))
                        .then(function authenticationSuccess(response) 
                                { 
                                    if( response.data && response.data.token )
                                    {
                                        var token = response.data.token;
                                        $log.debug("token", token);
                                        auth.permissions(token, session.validateSession);
                                        session.saveSessionToken(token, rememberme);

						                $location.path(auth.path);
                                    } else {
                                        $log.debug("Response did not have token property", response);
                                        session.invalidateSession();
                                    }

                                },
                              function authenticationError(response) { 
                                  $log.debug("authentication error", response); 
                                  session.invalidateSession();

                              });
                },

                permissions: function(token, callback) {

                    var headers = token ? {
                        'X-AUTH-TOKEN' : token
                    } : {};


					$http.get(auth.userPath, {
                        headers: headers
					}).success(function(data) {
						if (data.username) {
							auth.authenticated = true;
                            callback && callback(data);
						} else {
							auth.authenticated = false;
                            callback && callback(null);
						}
					}).error(function() {
						auth.authenticated = false;
                        callback && callback(null);
					});

				},

				clear : function() {
                    $log.debug("Clearing authentication tokens");
    				$location.path(auth.homePath);
					auth.authenticated = false;
                    session.invalidateSession();
                    /*
					$http.post(auth.logoutPath, {}).success(function() {
						$log.debug("Logout succeeded");
					}).error(function(data) {
						$log.debug("Logout failed");
					});*/
				},

				init : function(homePath, loginPath, logoutPath, userPath) {

                    $log.debug("auth init with base:", API_ENDPOINT);

					auth.homePath = API_ENDPOINT + homePath;
					auth.loginPath = API_ENDPOINT + loginPath;
					auth.logoutPath = API_ENDPOINT + logoutPath;
                    auth.userPath = API_ENDPOINT + userPath;

                    $log.debug("homePath", homePath);

					auth.authenticate({}, function(authenticated) {
						if (authenticated) {
							$location.path(auth.path);
						}
					});

					// Guard route changes and switch to login page if unauthenticated
                    /*
					$rootScope.$on('$stateChangeStart', function() {
						enter();
					});*/

				},

                username : function() {
                    return session.username;
                },

                handle : function() {
                    return session.handle;
                },


			};

			return auth;

		});
