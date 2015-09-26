(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('QuestionsCreateController', controller);

  /** @ngInject */
  function controller(Auth, $scope, $state, Questions, ResponseSerializer) {
    $scope.question = null;
    $scope.answers = [];

    if ($state.params.questionId) {
      Questions.get({id: $state.params.questionId}, function(response) {
        $scope.question = response;
        $scope.answers = ResponseSerializer.toJSON(response.response);
      });
    }

    $scope.saveQuestion = function(item) {
      if (!item) {
        throw new Error('item is not defined');
      }

      //setting bookId
      item.bookId = $state.params.bookId;
      item.userId = Auth.user.id;
      item.response = ResponseSerializer.toString($scope.answers);

      Questions.save(item, function(response) {
        $scope.questions.push(response);
      });
    };

    $scope.addResponse = function(answer) {
      $scope.answers.push({value: answer, response: false});
    }

    $scope.removeResponse = function(answer, idx) {
      $scope.answers.splice(idx, 1);
    }

    $scope.updateQuestion = function(question) {
      question.response = ResponseSerializer.toString($scope.answers);
      question.$update(function(response) {
        $state.go('book.questions', null, {reload: true});
      });
    }
  }
})();
