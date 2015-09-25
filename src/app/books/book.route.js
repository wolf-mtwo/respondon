(function() {
  'use strict';

  angular
    .module('respondon')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {

    $stateProvider.state('book', {
      url: '/book/:bookId',
      templateUrl: 'app/books/index.html',
      controller: 'BooksController'
    });
    $stateProvider.state('book.config', {
      url: '/config',
      templateUrl: 'app/books/config/index.html',
      controller: 'BooksConfigController',
      controllerAs: 'BooksConfigController'
    });
    $stateProvider.state('book.update', {
      url: '/update',
      templateUrl: 'app/books/views/update.html'
    });
    $stateProvider
      .state('book.participants', {
        url: '/participants',
        templateUrl: 'app/books/participants/index.html',
        controller: 'ParticipantsController'
      })
      .state('book.charts', {
        url: '/charts',
        templateUrl: 'app/books/charts/index.html',
        controller: 'ChartsController'
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
