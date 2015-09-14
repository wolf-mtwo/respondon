(function() {
  'use strict';

  angular
    .module('respondon')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    var base_url = 'app/session/views/';
    $stateProvider.state('home.login', {
      url: 'login',
      templateUrl: base_url + 'login.html',
      controller: 'SessionsController'
    });
    $stateProvider.state('home.register', {
      url: 'register',
      templateUrl: base_url + 'register.html',
      controller: 'SessionsController'
    });
    $stateProvider.state('home.forgot', {
      url: 'forgot',
      templateUrl: base_url + 'forgot.html',
      controller: 'SessionsController'
    });
  }

})();
