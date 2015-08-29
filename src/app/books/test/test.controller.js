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
    vm.buildAnswerOptions = buildAnswerOptions;
    vm.validateAnswer = validateAnswer;

    // cantities
    vm.answered = 0;
    vm.total = vm.questions.length;

    vm.startTest = startTest;

    vm.question = null;
    function startTest() {
      var limit = preProcesorRandom();
      // toastr.info('Pregunta "{0}"'.replace('{0}', limit + 1));
      var question = vm.questions.splice(limit, 1);
      vm.question = question[0];
      vm.question.options = buildAnswerOptions(vm.question);
    }

    function validateAnswer(option) {
      console.log(option);
      var toastrType = {};
      if (option.response == true) {
        option.state = true;
        toastrType.state = 'success';
        toastrType.response = 'Correcto!!';
      } else {
        option.state = false;
        toastrType.state = 'error';
        toastrType.response = 'Incorrecto!!';
      }
      toastr[toastrType.state](toastrType.response, option.value, {
        positionClass: 'toast-top-full-width',
      });
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

    function buildAnswerOptions(question) {
      if (!question) {
        throw new Error('question is not defined');
      }
      if (!question.response) {
        throw new Error('question.response is not defined');
      }
      var options = [];
      question.response.forEach(function(item) {
        if (!item.value) {
            throw new Error('value is not defined');
        }
        options.push({
          value: item.value,
          response: item.response,
          state: null
        });
      });
      return options;
    }
  }
})();
