(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('BooksController', controller);

  /** @ngInject */
  function controller($scope, $state, $timeout, Books, Questions, toastr) {
    Books.getById({id: $state.params.bookId}, function(response) {
      $scope.book = response;
    });
  }
})();
