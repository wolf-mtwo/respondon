(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('ParticipantsCreateController', controller);

  /** @ngInject */
  function controller($scope, $state, $timeout, Participants, toastr) {
    $scope.saveParticipants = function(item) {
      if (!item) {
        throw new Error('item is not defined');
      }
      if (!item.name) {
        throw new Error('item.name is not defined');
      }
      item.score = 0;
      Participants.save(item, function(response) {
        $scope.participants.push(response);
      });
    }

    if ($state.params.participantId) {
      Participants.get({id: $state.params.participantId}, function(response) {
        $scope.participant = response;
      });
    }

    $scope.updateParticipants = function(participant) {
      participant.$update(function(response) {
      });
    }
  }
})();
