(function() {
  'use strict';

  angular
    .module('respondon')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    var validateSession = function($q, $location, Global, Store, $state) {
      var deferred = $q.defer();
      var session = Store.get('session');
      if (!session) {
        deferred.resolve($location.path('/login'));
      } else {
        Global.user = isUser(session);
        deferred.resolve($location.path());
      }
      return deferred.promise;
    }

    var isUser = function(user) {
      if (!user) {
        throw new Error('user is not defined');
      }
      if (!user.name) {
        throw new Error('user.name is not defined');
      }
      if (!user.email) {
        throw new Error('user.email is not defined');
      }
      if (!user.password) {
        throw new Error('user.password is not defined');
      }
      if (!user.cel) {
        throw new Error('user.cel is not defined');
      }
      return user;
    }

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        resolve: {
          init: validateSession
        }
      })
      .state('book', {
        url: '/book/:bookId',
        templateUrl: 'app/books/index.html',
        controller: 'BooksController',
        resolve: {
          init: validateSession
        }
      })
      .state('home.newbook', {
        url: 'newbook',
        templateUrl: 'app/books/views/create.html',
        controller: 'BooksCreateController',
        resolve: {
          init: validateSession
        }
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
