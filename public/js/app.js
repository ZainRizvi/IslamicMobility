(function() {

  var app = angular.module('islamicMobility', ["ngRoute"]);

  app.config(function($routeProvider) {
    $routeProvider
    .when("/main", {
      templateUrl: "main",
      controller: "MainController"
    })
    .otherwise( {redirectTo: "/main"});
  });
}())
