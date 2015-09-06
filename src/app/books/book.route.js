(function() {
  'use strict';

  angular
    .module('respondon')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('book.participants', {
        url: '/participants',
        templateUrl: 'app/books/participants/index.html',
        controller: 'ParticipantsController'
      })
      .state('book.participants.create', {
        url: '/create',
        templateUrl: 'app/books/participants/create.html',
        controller: 'ParticipantsCreateController'
      })
      .state('book.participants.update', {
        url: '/update/:participantId',
        templateUrl: 'app/books/participants/update.html',
        controller: 'ParticipantsCreateController'
      });
  }
})();