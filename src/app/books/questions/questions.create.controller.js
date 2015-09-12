(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('QuestionsCreateController', controller);

  /** @ngInject */
  function controller($scope, $state, Questions, ResponseSerializer) {
    // Questions.query({bookId: $state.params.bookId}, function(response) {
    //   $scope.questions = response;
    // });

    $scope.saveQuestion = function(item) {
      if (!item) {
        throw new Error('item is not defined');
      }

      //setting bookId
      item.bookId = $state.params.bookId;
      item.response = ResponseSerializer.toString($scope.answers);

      Questions.save(item, function(response) {
        console.log(response);
        $scope.questions.push(response);
      });
    };

    $scope.answers = []
    $scope.addResponse = function(answer) {
      $scope.answers.push({value: answer, response: false});
    }

    $scope.removeQuestion = function(answer, idx) {
      $scope.answers.splice(idx, 1);
    }
  }
})();
