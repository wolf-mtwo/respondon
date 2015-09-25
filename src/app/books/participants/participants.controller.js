(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('ParticipantsController', QuestionController);

  /** @ngInject */
  function QuestionController(Auth, $scope, $state, $timeout, Participants, toastr) {
    $scope.participants = [];
    Participants.query({
      bookId: $state.params.bookId,
      userId: Auth.user.id
    } , function(response) {
      $scope.participants = response;
    });
  }
})();
