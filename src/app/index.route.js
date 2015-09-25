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

    $stateProvider.state('home.newbook', {
      url: 'newbook',
      templateUrl: 'app/books/views/create.html',
      controller: 'BooksCreateController'
    });



    $urlRouterProvider.otherwise('/');
  }

})();
