angular.module('auth.factory', ['auth.session']).factory(
		'auth',

		function($rootScope, $http, $location, $log, session) {

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

                    var rememberme = credentials.rememberme ? credentials.rememberme : false;

                    $http.post(auth.loginPath, JSON.stringify(payload))
                        .then(function authenticationSuccess(response) 
                                { 
                                    if( response.data && response.data.token )
                                    {
                                        var token = response.data.token;
                                        var permissions = auth.permissions(token, session.validateSession);

                                        session.saveSessionToken(token, rememberme);

						                $location.path(auth.path);
                                    } else {
                                        $log.debug("response did not have token property", response);
                                    }

                                },
                              function authenticationError(response) { $log.debug("auth error"); });
                },

                permissions : function(token, callback) {

                    var headers = token ? {
                        'X-AUTH-TOKEN' : token
                    } : {};


					$http.get(auth.userPath, {
                        headers : headers
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

					auth.homePath = homePath;
					auth.loginPath = loginPath;
					auth.logoutPath = logoutPath;
                    auth.userPath = userPath;

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
