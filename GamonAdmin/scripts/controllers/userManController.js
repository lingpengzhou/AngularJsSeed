define(['controllers/controllers','services/services','ApiDefines'],function(controllers,services,ApiDefines){
	controllers.controller('userManCtr', ['$scope','$cacheFactory','AUTH_EVENTS',function($scope,$cacheFactory,AUTH_EVENTS){
            console.log(AUTH_EVENTS);
		  	$scope.nameUrl = [
	            {url:'management.user',name:'用户管理'},
	            {url:'management.venue',name:'场馆管理'},
	            {url:'management.venue',name:'订单管理'},
	            {url:'management.venue',name:'用户管理'},
	            {url:'management',name:'系统管理'}
            ];
            $scope.tableData = [{"goodsName":"旺旺仙贝","goodsInfo":{"price":"$26","date":"2018-08-10"}},
                    {"goodsName":"乐事薯片","goodsInfo":{"price":"$18","date":"2020-10-25"}},
                    {"goodsName":"勇闯天涯","goodsInfo":{"price":"$20","date":"2017-01-10"}}];
            var containerData =  $scope.tableData;
            window.sessionStorage.setItem('test',JSON.stringify(containerData))
            $scope.changeBackGroundColr = function(element){
            	var element = $(element.target).parent();
            	element.parent().siblings().find('li').removeClass('active');
            	element.addClass('active');
            } 
            $scope.confirm = function(name) {
                console.log(name);
                $('.modal').modal('hide');
            }
	}])
})