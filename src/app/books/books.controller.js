(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('BooksController', controller);

  /** @ngInject */
  function controller($scope, $state, $timeout, Books, Questions, toastr) {
    var vm = this;
    vm.params = $state.params;
    console.log(Books.getById(vm.params.bookId));
    $scope.book = Books.getById(vm.params.bookId);
    // console.log($scope.book);
    vm.questions = Questions.getBooks(vm.params.bookId);
    toastr.info('Bienvenido!', 'info');
  }
})();
