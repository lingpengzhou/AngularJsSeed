define(['services/services','ApiDefines'],function(services,ApiDefines) {
	services.factory('AuthService', ['$http','Session','$q', function($http,Session,$q){
		var authService = {};
		var deferred = $q.defer();
		authService.login = function(credentials) {
			return $http.post(ApiDefines.adminLogin,credentials).then(function(res){
				if(res.data.code !=='0') {
					Session.create('123','123','admin');
					return res.data;
				} else {
					throw new Error(res.data.message);
				}
			})
		}

		authService.isAuthenticated = function() {
			return !!Session.userId;
		}

		authService.isAuthorized = function(authorizedRoles) {
			if(!angular.isArray(authorizedRoles)) {
				authorizedRoles = [authorizedRoles];
			}
			return (authService.isAuthenticated()&&authorizedRoles.indexOf(Session.userRole!==-1));
		}
		return authService;
	}])
})