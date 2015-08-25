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
      .state('book.home', {
        url: '/',
        templateUrl: 'app/books/home.html',
        controller: 'BooksController'
      })
      .state('book.home.test', {
        url: 'test',
        templateUrl: 'app/books/test/index.html',
        controller: 'TestController',
        controllerAs: 'TestController'
      })
      .state('book.list', {
        url: '/list',
        templateUrl: 'app/books/list.html',
        controller: 'BooksController'
      })
      .state('book.config', {
        url: '/config',
        templateUrl: 'app/books/config/index.html',
        controller: 'BooksConfigController',
        controllerAs: 'BooksConfigController'
      })
      .state('book.newquestion', {
        url: '/new',
        templateUrl: 'app/books/new.html',
        controller: 'BooksController'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
