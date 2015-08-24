(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('QuestionController', QuestionController);

  /** @ngInject */
  function QuestionController($state, $timeout, Books, toastr) {
    var vm = this;
    vm.params = $state.params;
    toastr.info('Bienvenido!');
  }
})();
