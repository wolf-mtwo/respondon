(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('BooksController', controller);

  /** @ngInject */
  function controller($scope, $state, $timeout, Books, Questions, toastr) {
    var vm = this;
    vm.params = $state.params;
    $scope.book = Books.getById(vm.params.bookId);
    vm.questions = Questions.getBooks(vm.params.bookId);
    toastr.info('Bienvenido!', 'info');
  }
})();
