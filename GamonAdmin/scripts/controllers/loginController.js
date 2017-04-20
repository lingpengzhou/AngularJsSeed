define(['controllers/controllers','services/services'],function(controllers,services){
	controllers.controller('loginCtr', ['$scope','$rootScope','AUTH_EVENTS','AuthService', function($scope,$rootScope,AUTH_EVENTS,AuthService){
		var credentials = $scope.queryModel;
		$scope.login = function(credentials){
			AuthService.login(credentials).then(function(user){
				$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
				$scope.setCurrentUser(user);
			},function(err){
				$rootScope.$broadcast(AUTH_EVENTS.loginFailed,err.message);
			})
		}		
	}])
})