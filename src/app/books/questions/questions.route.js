(function() {
  'use strict';

  angular
    .module('respondon')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider.state('book.questions', {
      url: '/questions',
      templateUrl: 'app/books/questions/views/index.html',
      controller: 'QuestionsController'
    });
    $stateProvider.state('book.questions.create', {
      url: '/create',
      templateUrl: 'app/books/questions/views/create.html',
      controller: 'QuestionsCreateController'
    });
    $stateProvider.state('book.questions.edit', {
      url: '/:questionId/edit',
      templateUrl: 'app/books/questions/views/edit.html',
      controller: 'QuestionsCreateController'
    });
  }
})();
