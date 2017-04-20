define(['controllers/controllers','services/services'],function(controllers){
	controllers.controller('RootCtrl', ['$scope','$rootScope','$state','USER_ROLES','AUTH_EVENTS','AuthService',function($scope,$rootScope,$state,USER_ROLES,AUTH_EVENTS,AuthService){
		$scope.currentUser = null;
		$scope.userRole = USER_ROLES;
		$scope.isAuthorized = AuthService.isAuthorized;

		$scope.setCurrentUser = function(user) {
			$scope.currentUser = user;
		}
		$rootScope.$on(AUTH_EVENTS.loginSuccess,function(){
			$state.go('management.user');
		})
		$rootScope.$on(AUTH_EVENTS.loginFailed,function(event,data){
			$rootScope.errorMessage = data;
		})
	}])
})