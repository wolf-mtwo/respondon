(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('BooksController', controller);

  /** @ngInject */
  function controller($scope, $state, $timeout, Books, Questions, toastr) {
    Books.get({id: $state.params.bookId}, function(response) {
      $scope.book = response;
    });

    $scope.deleteBook = function() {
      if (confirm('Estas seguro que quieres eliminar este libro?')) {
        $scope.book.$delete(function() {
          $state.go('home');
        });
      }
    }

    $scope.loadBook = function() {
      Books.get({id: $state.params.bookId}, function(response) {
        $scope.item = response;
      });
    }

    $scope.updateBook = function(item) {
      item.$update({id: $state.params.bookId}, function(response) {
        $scope.book = response;
        $state.go('book.home.test');
      });
    }
  }

})();
