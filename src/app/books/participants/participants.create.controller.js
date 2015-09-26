(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('ParticipantsCreateController', controller);

  /** @ngInject */
  function controller($scope, $state, $timeout, Participants, toastr, Auth) {

    if ($state.params.participantId) {
      Participants.get({id: $state.params.participantId}, function(response) {
        response.score = parseInt(response.score);
        $scope.participant = response;
      });
    }
    $scope.deleteParticipant = function(participant) {
      participant.$delete(function(response) {
        $state.go('book.participants', null, {
          reload: true});
      })
    }
    $scope.saveParticipants = function(item) {
      if (!item) {
        throw new Error('item is not defined');
      }
      if (!item.name) {
        throw new Error('item.name is not defined');
      }
      item.score = 0;
      item.userId = Auth.user.id;
      item.bookId = $state.params.bookId;
      Participants.save(item, function(response) {
        $scope.participants.push(response);
        $state.go('book.participants');
      });
    }

    $scope.updateParticipants = function(participant) {
      participant.$update(function(response) {
        $state.go('book.participants', null, {
          reload: true});
      });
    }
  }
})();
