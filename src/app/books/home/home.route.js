(function() {
  'use strict';

  angular
    .module('respondon')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
    .state('book.home', {
      url: '/',
      templateUrl: 'app/books/home/index.html',
      controller: 'BooksHomeController'
    })
    .state('book.home.test', {
      url: 'test',
      templateUrl: 'app/books/home/test/index.html',
      controller: 'TestController',
      controllerAs: 'TestController'
    })
    .state('book.home.one', {
      url: 'single',
      templateUrl: function() {
        var participant = localStorage.getItem('participant');
        console.log(participant);
        if (participant) {
          return 'app/books/home/test/one/index.html';
        }
        return 'app/books/home/test/one/select-participant.html';
      },
      controller: 'OneController'
    });
  }
})();
