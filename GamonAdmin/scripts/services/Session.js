define(['services/services'],function(services){
	services.service('Session',  function($window){
		this.create = function(sessionId,userId,userRole) {
			this.id = sessionId;
			this.userId = userId;
			this.userRole = userRole;
			this.setSessionStorage();
		}
		this.destroy = function() {
			this.id = null;
			this.userId = null;
			this.userRole = null;
			this.setSessionStorage();
		}
		this.setSessionStorage = function(sessionId,userId,userRole){
			$window.sessionStorage.id = this.id;
			$window.sessionStorage.userId = this.userId;
			$window.sessionStorage.userRole = this.userRole;
		}
		this.getSessionStorage = function(sessionId,userId,userRole){
			this.id = $window.sessionStorage.id;
			this.userId = $window.sessionStorage.userId;
			this.userRole = $window.sessionStorage.userRole;
		}
		if($window.sessionStorage.userId!==null) {
			this.getSessionStorage();
		}
		return this;
	})
})