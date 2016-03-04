angular.module('BuscaMascotaApp', [
    'ngRoute','ngResource', 'ngCookies','ngAnimate', 'ui.bootstrap', 'angular-jwt'
  ]);/* .run(function($rootScope, $location, $cookies){
	  $rootScope.$on('$routeChangeStart', function(event, next, current){
		  if($cookies.get('estaConectado')==false||$cookies.get('estaConectado')==null){
				  $location.path('/');
			  
		  }else{
			  var usuario=$cookies.getObject('usuario');
			  //muestra la barra de navegación
			    $rootScope.navVisible=true;
			 //muestra o esconde elementos segun el rol
									if(usuario[0].rol!=0){
										$rootScope.visible=false;
									}else{
										$rootScope.visible=true;
									} 
			 
			   if(next.templateUrl=='views/listarUsuario.html'  && usuario[0].rol!=0){
				  $location.path("/inicio");
			  }  
		  }
			//esconde la barra de navegación
		   if(next.templateUrl=='views/login.html'){
			   $rootScope.navVisible=false;
		   }
		  
		  
		  
	  })
  }); */
