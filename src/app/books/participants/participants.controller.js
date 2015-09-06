(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('ParticipantsController', QuestionController);

  /** @ngInject */
  function QuestionController($scope, $state, $timeout, Participants, toastr) {
    $scope.participants = [];
    Participants.query(function(response) {
      $scope.participants = response;
    });
  }
})();
