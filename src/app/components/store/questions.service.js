(function() {
  'use strict';

  angular
    .module('respondon')
    .factory('Questions', Questions);

  /** @ngInject */
  function Questions() {
    var service = {
      getAll: getAll
    };

    return service;

    function getAll() {
      return [
        {
          _id: 1000,
          bookId: 1000,
          question: '¡Question 1?',
          type: 'FoV',
          response: false
        },
        {
          _id: 1001,
          bookId: 1000,
          question: '¡Question 2?',
          type: 'MULTIPLE',
          response: [
            {
              value: 'response 1',
              response: false
            },
            {
              value: 'response 2',
              response: false
            },
            {
              value: 'response 3',
              response: true
            },
            {
              value: 'response 4',
              response: false
            }
          ]
        }
      ];
    }
  }
})();
