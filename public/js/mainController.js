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

      $scope.currentBookLoadIndex = 0;
      $scope.infiniteScrollTriggerDisabled = false;
      $scope.infiniteScrollDistance = 1;
      $scope.books = [];
      $scope.busy = false;

      var booksToLoadPerRequest = 4;

      var resetGetBooks = function() {
        $scope.infiniteScrollTriggerDisabled = false;
        $scope.books = [];
        $scope.currentBookLoadIndex = 0;
      }

      var getBooks = function() {
        $scope.infiniteScrollTriggerDisabled = true;
        if ($scope.busy) {
          return;
        }
        $scope.busy = true;

        console.log("Calling startIndex/" + $scope.currentBookLoadIndex + "/count/" + booksToLoadPerRequest)
        $http.get('/api/books/startIndex/' + $scope.currentBookLoadIndex + '/count/' + booksToLoadPerRequest)
          .then(function(response) {
            $scope.books = $scope.books.concat(response.data);
            console.log("Books now contains " + $scope.books.length + " books");
            $scope.currentBookLoadIndex += booksToLoadPerRequest;
            $scope.infiniteScrollTriggerDisabled = false;
            $scope.busy = false;
          })
      }

      $scope.loadMoreBooks = function() {
        getBooks();
      }

      $scope.searchForBooks = function() {

        if (!$scope.search) {
          resetGetBooks();
          getBooks();
          return;
        }

        $scope.infiniteScrollTriggerDisabled = true; // no infinite scrolling once we start searching

        $http.get('/api/books/search/' + $scope.search)
          .then(function(response) {
            $scope.books = response.data;
          });
      }
    }
  ]);
}(window.angular));
