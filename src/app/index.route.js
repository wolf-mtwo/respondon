(function() {
  'use strict';

  angular
    .module('respondon')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('book', {
        url: '/book/:bookId',
        templateUrl: 'app/books/index.html',
        controller: 'BooksController',
        controllerAs: 'booksContainer'
      })
      .state('book.config', {
        url: '/config',
        templateUrl: 'app/books/config/index.html',
        controller: 'BooksConfigController',
        controllerAs: 'BooksConfigController'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
