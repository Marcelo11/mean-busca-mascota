  angular.module('BuscaMascotaApp')
  .config(function ($routeProvider, $httpProvider, jwtInterceptorProvider) {
	  
	  jwtInterceptorProvider.tokenGetter= function(){
		  return window.localStorage.getItem("token");
	  }
	  
	 $httpProvider.interceptors.push("jwtInterceptor");
	  
    $routeProvider
	  .when('/', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      })
	  .when('/login', {
        templateUrl: 'views/login.html',
		 controller: 'loginCtrl'
      })
	.when('/home', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
      })	  
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('loginCtrl',function($scope,loginService,$location ){
	  $scope.login =function(user){
		  
		  loginService.login(user).then(function(result)
		  {
			var token = JSON.stringify(result.data);
            if(!window.localStorage.getItem("token"))
			{
				window.localStorage.setItem("token",token);
			}
				$location.path("/home");			
		  });
	  }
  })
   .controller('homeCtrl',function($scope,requestService){
	  $scope.sendRequest = function()
	  {
		  var token = window.localStorage.getItem("token");
		  requestService.info().then(function(result){
			console.log(result.data);  
		  })
	  }
  })
  .service('loginService', function($http){
	var loginSvc = {};
	loginSvc.login = function(user)
	{
		return $http({
			method: "POST",
			skipAuthorization: true,
			url: "/login",
			data: user
		})
	}	
	return loginSvc;
  })
  .service('requestService', function($http){
	  var requestSvc={};
	  requestSvc.info = function()
	  {
		  return $http({
			method: "POST",
			skipAuthorization: false,
			url: "/info"
		})
	  }
	  return requestSvc;
  })	  