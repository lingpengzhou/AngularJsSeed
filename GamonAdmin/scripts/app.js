define(['angular','bootstrap','controllers/controllers','services/services','directives/directives'],function(angular){
	return angular.module('GamonAdminApp',['ngRoute','controllers','services','directives','ui.router']);
});