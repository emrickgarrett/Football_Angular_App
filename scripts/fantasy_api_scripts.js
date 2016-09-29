(function(){
	
	var app = angular.module("fantasyApp", []);

	var MainCtrl = function($scope, $http){

		var callFailure = function(reason){
			console.log(reason);
		}


	}

	app.controller("MainCtrl", MainCtrl);


}());