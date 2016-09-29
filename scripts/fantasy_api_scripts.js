(function(){
	
	var app = angular.module("fantasyApp", []);
	var api_key = "u8ds4snvdbxq";

	var MainCtrl = function($scope, $http){

		var vm = $scope;

		var callFailure = function(reason){
			console.log(reason);
		}

		var defaultSuccess = function(response){
			console.log(response.data);
		}

		$scope.getTop15 = function(position, week, ppr, callSuccess, callFailure){
			$http.get("http://www.fantasyfootballnerd.com/service/weekly-rankings/json/" + api_key + "/"
				+ position +"/" + week + "/" + ppr +"/").then(callSuccess, callFailure);
		}

		$scope.getTopQBs = function(week, ppr, success){
			if(success == null || typeof success == "undefined"){
				success = defaultSuccess;
			} 

			$scope.getTop15("QB", week, ppr, success, callFailure);
		}

		$scope.getTopRBs = function(week, ppr, success){
			if(success == null || typeof success == "undefined"){
				success = defaultSuccess;
			}

			$scope.getTop15("RB", week, ppr, success, callFailure);
		}

		$scope.getTopWRs = function(week, ppr, success){
			if(success == null || typeof success == "undefined"){
				success = defaultSuccess;
			}

			$scope.getTop15("WR", week, ppr, success, callFailure);
		}

		$scope.getTopTEs = function(week, ppr, success){
			if(success == null || typeof success == "undefined"){
				success = defaultSuccess;
			}

			$scope.getTop15("TE", week, ppr, success, callFailure);
		}

		$scope.getTopDefs = function(week, ppr, success){
			if(success == null || typeof success == "undefined"){
				success = defaultSuccess;
			}

			$scope.getTop15("DEF", week, ppr, success, callFailure);
		}

		$scope.getTopKs = function(week, ppr, success){
			if(success == null || typeof success == "undefined"){
				success = defaultSuccess;
			}

			$scope.getTop15("K", week, ppr, success, callFailure);
		}

		$scope.populateTop15 = function(week, ppr){
			var topRBsFunc = function(response){vm.topRBs = response.data;};
			var topQBsFunc = function(response){vm.topQBs = response.data;};
			var topWRsFunc = function(response){vm.topWRs = response.data;};
			var topTEsFunc = function(response){vm.topTEs = response.data;};
			var topDEFsFunc = function(response){vm.topDEFs = response.data;};
			var topKsFunc = function(response){vm.topKs = response.data;};

			$scope.getTopQBs(week, ppr, topQBsFunc);
			$scope.getTopRBs(week, ppr, topRBsFunc);
			$scope.getTopWRs(week, ppr, topWRsFunc);
			$scope.getTopDefs(week, ppr, topTEsFunc);
			$scope.getTopTEs(week, ppr, topDEFsFunc);
			$scope.getTopKs(week, ppr, topKsFunc);
		}

		$scope.populateTop15(4, 0); // simply populate data for Week 4 atm...


	}

	app.controller("MainCtrl", MainCtrl);

}());