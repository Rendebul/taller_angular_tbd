var app = angular.module('angularSpa', [
    'ngRoute'
    ])
  .service('actorsService', function($http){
        var urlBase = 'http://macbook-air-de-matias.local:8080/sakila-backend-master/actors';
        this.getActors = function(){
            return $http.get(urlBase);
        };
        this.create = function(data) {
            return $http.post(urlBase, data);
        };
  })
  .config(function($routeProvider){
    $routeProvider
    .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
    .when('/actors', {
        templateUrl: 'views/actors/index.html',
        controller: 'actorsListCtrl'
    })
    .when('/actors/create', {
        templateUrl: 'views/actors/form.html',
        controller: 'actorsAddCtrl'
    })
    .otherwise({
        redirectTo: '/home'
      });
});