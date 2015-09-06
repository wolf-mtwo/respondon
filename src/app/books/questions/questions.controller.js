(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('QuestionsController', controller);

  /** @ngInject */
  function controller($scope, $state, Questions) {
    Questions.query({bookId: $state.params.bookId}, function(response) {
      $scope.questions = response;
    });
  }
})();
