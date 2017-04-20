require.config({
  paths: {
    angular: '../vendor/js/angular.min',
    jquery: '../vendor/js/jquery-2.1.1.min',
    domReady: '../vendor/js/domReady',
    angularroute:'../vendor/js/angular-route.min',
    angularresource:'../vendor/js/angular-resource',
    angularuiroute:'../vendor/js/angular-ui-router',
   	bootstrap:'../vendor/js/bootstrap.min',
   	ApiDefines:'../config/ApiDefines'
  },
  shim: {
    angular: {
      deps: [ 'jquery'],
      exports: 'angular'
    },
    angularroute:{
		deps: ["angular"],
		exports:"angularroute"
	},
	angularresource:{
		deps:["angular"],
		exports:"angularresource"
	},
	angularuiroute:{
		deps:["angular"],
		exports:"angularuiroute"
	},
	'bootstrap':{
		deps:["jquery"],
		exports:"bootstrap"
	}
  }
});

require([
	'angular',
	'bootstrap',
	'domReady',
	'angularroute',
	'angularresource',
	'angularuiroute',
	'app',
	'controllers/rootController',
	'controllers/userManController',
	'controllers/loginController',
	'directives/ngPagination',
	'directives/gaModal',
	'services/Session',
	'services/loginAuthConstants',
	'services/AuthService'
	],
	function(angular,bootstrap,domReady,angularroute,angularresource,angularuiroute,app){
		'use strict';
		 app.config(['$stateProvider','$urlRouterProvider','USER_ROLES',
		      function($stateProvider,$urlRouterProvider,USER_ROLES) {
		      	$urlRouterProvider.otherwise('/login');
		        $stateProvider
		        .state('login',{
		        	url:'/login',
		        	templateUrl:'views/login/login.html',
		        	controller:'loginCtr'
		        })
				.state('management', {
				    url: '/management',
				    templateUrl: 'views/mainManPage.html',
				    controller:"userManCtr",
				    data:{
				    	authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
				    }    
				})
				.state('management.user',{
					url:'/user',
					templateUrl:'views/managerPage/managerUser.html'
				})
				.state('management.venue',{
					url:'/venue',
					templateUrl:'views/managerPage/manVenue.html'
				})

		      }
		    ]);
		app.run(function ($rootScope, AUTH_EVENTS, AuthService,$state) {
		  $rootScope.$on('$stateChangeStart', function (event, next) {
		    var authorizedRoles = next.data.authorizedRoles;
		    if (!AuthService.isAuthorized(authorizedRoles)) {
		    	$state.go('login');
		      event.preventDefault();
		      if (AuthService.isAuthenticated()) {
		        $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
		      } else {
		        $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
		      }
		    }
		  });
		})
	    domReady(function() {
	      angular.bootstrap(document, ['GamonAdminApp']);
	      $('html').addClass('ng-app: GamonAdminApp');
	    });
	}
);