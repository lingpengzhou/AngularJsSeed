define(['directives/directives'],function(directives){
	directives.directive('ngPagination',['$rootScope','$window',function($rootScope,$window) {
		return {
			restrict:'AE',
			templateUrl:'./views/directiveTemplate/pagination.html',
			replace:true,
			scope:'&',
			link:function(scope,element,attrs) {
				var panelement = $(element);
				panelement.on('click',function(e){
					var $index = $(e.target).index();
					scope.tableData = [];
					scope.tableData.push(JSON.parse(window.sessionStorage.getItem('test'))[$index]);
					scope.$apply();
				}).bind(this)
			}
		};
	}])
})