(function() {

  var app = angular.module('islamicMobility', ["ngRoute", "infinite-scroll"]);

  app.config(function($routeProvider) {
    $routeProvider
    .when("/main", {
      templateUrl: "main",
      controller: "MainController"
    })
    .otherwise( {redirectTo: "/main"});
  });
}())
