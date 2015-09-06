(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('QuestionsController', controller);

  /** @ngInject */
  function controller($state, $timeout, Books, toastr) {
    var vm = this;
    vm.params = $state.params;
    toastr.info('Bienvenido!');
  }
})();
