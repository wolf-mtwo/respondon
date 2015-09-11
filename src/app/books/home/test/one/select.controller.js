(function() {
  'use strict';

  angular
    .module('respondon')
    .controller('SelectController', controller);

  /** @ngInject */
  function controller($scope, $state, Participants, Books, Questions, toastr) {

    $scope.loadParticipantList = function() {
      Participants.query(function(response) {
        $scope.participants = response;
      });
    }

    $scope.selectParticipant = function(participant) {
      localStorage.setItem('participant', JSON.stringify(participant));
      console.log(JSON.parse(localStorage.getItem('participant')));
      $state.transitionTo($state.current, $state.params, {
        reload: true,
        inherit: false,
        notify: true
      });
    }
  }
})();
