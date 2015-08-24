(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('BooksController', controller);

  /** @ngInject */
  function controller($state, $timeout, Books, Questions, toastr) {
    var vm = this;
    vm.params = $state.params;
    vm.book = Books.getById(vm.params.bookId);
    vm.questions = Questions.getBooks(vm.params.bookId);
    toastr.info('Bienvenido!');
  }
})();
