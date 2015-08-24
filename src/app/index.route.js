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
      .state('home.book', {
        url: 'book/:bookId',
        templateUrl: 'app/book/index.html',
        controller: 'BookController',
        controllerAs: 'book'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
