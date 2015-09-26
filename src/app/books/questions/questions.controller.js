(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('QuestionsController', controller);

  /** @ngInject */
  function controller(Auth, $scope, $state, Questions) {
    Questions.query({bookId: $state.params.bookId}, function(response) {
      $scope.questions = response;
    });

    $scope.deleteQuestion = function(question, idx) {
      question.$delete(function() {
        $scope.questions.splice(idx, 1);
      });
    }

    $scope.isOwner = function(question) {
      if (Auth.user.id == question.userId) {
        return true;
      }
      return false;
    }
  }
})();
