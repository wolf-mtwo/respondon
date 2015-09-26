(function() {
  'use strict';

  angular
    .module('respondon')
    .factory('ParticipantLocal', service);

  function service($resource, Participants, Store, $state) {
    return {
      load: function(func) {
        console.info('init function throws');
        var participant = Store.load('participant');
        Participants.get({
          id: participant.id
        }, function(response) {
          func(response);
        })
      },
      remove: function() {
        $state.transitionTo($state.current, $state.params, {
          reload: true,
          inherit: false,
          notify: true
        });
        Store.remove('participant');
      }
    }
  }

})();
