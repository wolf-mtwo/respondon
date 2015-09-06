(function() {
  'use strict';

  angular
    .module('respondon')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('book.questions', {
        url: '/questions',
        templateUrl: 'app/books/questions/index.html',
        controller: 'QuestionsController'
      });
  }
})();
