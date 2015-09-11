(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('OneController', controller);

  /** @ngInject */
  function controller($scope, $state, Participants, Books, Questions, toastr) {

    // var vm = this;
    // vm.name = 'Tomar examen';
    // vm.params = $state.params;
    // Books.getById({id: vm.params.bookId}, function(response) {
    //   $scope.book = response;
    // });
    // vm.questions = Questions.getBooks(vm.params.bookId);
    // vm.buildAnswerOptions = buildAnswerOptions;
    // vm.validateAnswer = validateAnswer;
    //
    // // cantities
    // vm.answered = [];
    // vm.total = vm.questions.length;
    // vm.startTest = startTest;
    // vm.question = null;
    // vm.participantName = null;
    //
    // var isQuerstionEnable = false;
    //
    // function startTest(participantName) {
    //   if (!participantName) {
    //     throw new Error('participantName is not defined');
    //   }
    //   vm.participantName = participantName;
    //   var limit = preProcesorRandom();
    //   var question = vm.questions.splice(limit, 1);
    //   vm.question = question[0];
    //   vm.question.options = buildAnswerOptions(vm.question);
    // }
    //
    // function validateAnswer(option) {
    //   var toastrType = {};
    //   if (option.response == true) {
    //     option.state = true;
    //     toastrType.state = 'success';
    //     toastrType.response = 'Correcto!!';
    //   } else {
    //     option.state = false;
    //     toastrType.state = 'error';
    //     toastrType.response = 'Incorrecto!!';
    //   }
    //   // %
    //   vm.answered.push({
    //     question: vm.question,
    //     result: option
    //   });
    //   console.log(vm.answered);
    //   // display results
    //   toastr[toastrType.state](toastrType.response, option.value, {
    //     positionClass: 'toast-top-full-width',
    //   });
    // }
    //
    // function preProcesorRandom() {
    //   var limit = vm.questions.length;
    //   return getRandom(limit);
    // }
    //
    // function getRandom(limit) {
    //   if (!limit) {
    //     throw new Error('limit is not defined');
    //   }
    //   return Math.floor(Math.random() * limit);
    // }
    //
    // function buildAnswerOptions(question) {
    //   if (!question) {
    //     throw new Error('question is not defined');
    //   }
    //   if (!question.response) {
    //     throw new Error('question.response is not defined');
    //   }
    //   var options = [];
    //   question.response.forEach(function(item) {
    //     if (!item.value) {
    //         throw new Error('value is not defined');
    //     }
    //     options.push({
    //       value: item.value,
    //       response: item.response,
    //       state: null
    //     });
    //   });
    //   return options;
    // }
  }
})();
