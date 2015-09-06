(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('BooksController', controller);

  /** @ngInject */
  function controller($scope, $state, $timeout, Books, Questions, toastr) {
    var vm = this;
    vm.params = $state.params;
    Books.getById({id: vm.params.bookId}, function(response) {
      $scope.book = response;
    });
    vm.questions = Questions.get({bookId: vm.params.bookId}, function(response) {
      $scope.questions = response;
    });
    // toastr.info('Bienvenido!', 'info');
  }
})();
