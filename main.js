var app = angular.module('kvasir', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/home.html',
      controller: 'homeCont'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

app.controller('homeCont', function($scope){
  //... 
});
