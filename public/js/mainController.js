(function(angular) {

  var myApp = angular.module('islamicMobility');

  myApp.controller('MainController', [
  '$scope',
  '$location',
  '$http',
  function(
    $scope,
    $location,
    $http) {

      var getBooks = function() {
        $http.get('/api/books')
          .then(function(response) {
            $scope.books = response.data;
          })
      }

      getBooks();
    }
    ]);

  }(window.angular));
