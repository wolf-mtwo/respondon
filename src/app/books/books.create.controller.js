(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('BooksCreateController', controller);

  /** @ngInject */
  function controller($scope, $state, $timeout, Books, Questions, toastr) {

    $scope.saveBook = function(item) {
      if (!item.title) {
        throw new Error('item.title is not defined');
      }
      if (!item.description) {
        throw new Error('item.description is not defined');
      }
      Books.save(item, function(response) {
        $state.go('book.home.test', {bookId: response.id});
      });
    }
  }
})();
