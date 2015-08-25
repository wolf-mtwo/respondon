(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('TestController', controller);

  /** @ngInject */
  function controller($scope, $state, $timeout, Books, Questions, toastr) {
    var vm = this;
    vm.params = $state.params;
    $scope.book = Books.getById(vm.params.bookId);
    vm.name = 'Examen controller';
    vm.questions = Questions.getBooks(vm.params.bookId);
    console.log(vm.questions);

    // cantities
    vm.answered = 0;
    vm.total = vm.questions.length;

    vm.startTest = startTest;

    vm.question = null;
    function startTest() {
      var limit = preProcesorRandom();
      toastr.info('Pregunta "{0}"'.replace('{0}', limit + 1));
      var question = vm.questions.splice(limit, 1);
      vm.question = question[0];
    }

    function preProcesorRandom() {
      var limit = vm.questions.length;
      return getRandom(limit);
    }

    function getRandom(limit) {
      if (!limit) {
        throw new Error('limit is not defined');
      }
      return Math.floor(Math.random() * limit);
    }
  }
})();
