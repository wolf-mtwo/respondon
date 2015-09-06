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
      controller: 'BooksController'
    })
    .state('book.home.test', {
      url: 'test',
      templateUrl: 'app/books/home/test/index.html',
      controller: 'TestController',
      controllerAs: 'TestController'
    });
  }
})();
