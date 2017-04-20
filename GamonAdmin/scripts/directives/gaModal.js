define(['directives/directives'],function(directives){
	directives.directive('gaModal',['$rootScope',function($rootScope){
		return {
			restrict:'AE',
			templateUrl:'./views/directiveTemplate/gaModal.html',
			scope:{
				name:'@',
				confirm: '&'
			}
		}
	}])
})