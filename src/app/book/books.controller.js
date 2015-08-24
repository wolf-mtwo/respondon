(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('BookController', BookController);

  /** @ngInject */
  function BookController($state, $timeout, Books, toastr) {
    var vm = this;
    vm.params = $state.params;
    toastr.info('Bienvenido!');
  }
})();
