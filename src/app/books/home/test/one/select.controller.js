(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('SelectController', controller);

  /** @ngInject */
  function controller(Auth, $scope, $state, Participants, Books, Questions, toastr, Store) {

    $scope.loadParticipantList = function() {
      Participants.query({
        bookId: $state.params.bookId,
        userId: Auth.user.id
      }, function(response) {
        $scope.participants = response;
      });
    }

    $scope.selectParticipant = function(participant) {
      Store.save('participant', participant);
      $state.transitionTo($state.current, $state.params, {
        reload: true,
        inherit: false,
        notify: true
      });
    }
  }
})();
