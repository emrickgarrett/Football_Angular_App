fantasyApp = angular.module('fantasyApp', ['ngRoute']);
api_key = "u8ds4snvdbxq";

//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
fantasyApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Home', {
		templateUrl: 'pages/home.html',
		controller: 'MainCtrl'
	}).
      otherwise({
		redirectTo: '/Home'
      });
}]);