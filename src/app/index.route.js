(function() {
  'use strict';

  angular
    .module('respondon')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'app/home/index.html',
      controller: 'HomeController'
    });

    $stateProvider.state('book', {
        url: '/book/:bookId',
        templateUrl: 'app/books/index.html',
        controller: 'BooksController'
      })
      .state('home.newbook', {
        url: 'newbook',
        templateUrl: 'app/books/views/create.html',
        controller: 'BooksCreateController'
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
