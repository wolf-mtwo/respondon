(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('BooksController', controller);

  /** @ngInject */
  function controller(Global, $scope, $state, $timeout, Books, Questions, toastr) {
    Books.get({id: $state.params.bookId}, function(response) {
      $scope.book = response;
    });

    $scope.deleteBook = function() {
      if (confirm('Estas seguro que quieres eliminar este libro?')) {
        if ($scope.validateAction($scope.book)) {
          $scope.book.$delete(function() {
            $state.go('home');
          });
        }
      }
    }

    $scope.loadBook = function() {
      Books.get({id: $state.params.bookId}, function(response) {
        $scope.item = response;
      });
    }

    $scope.updateBook = function(item) {
      if ($scope.validateAction(item)) {
        item.$update({id: $state.params.bookId}, function(response) {
          $scope.book = response;
          $state.go('book.home.test');
        });
      }
    }

    $scope.validateAction = function(book) {
      if (Global.user.id == book.userId) {
        return true;
      } else {
        var message = 'Usted no tiene acceso para realizar esta actividad';
        toastr.error(message, 'Accion');
        return false;
      }
    }
  }

})();
