(function() {
  'use strict';

  angular
    .module('respondon')
    .factory('Questions', Questions);

  /** @ngInject */
  function Questions() {
    var service = {
      getAll: getAll,
      getById: getById,
      getBooks: getBooks
    };

    return service;

    function getById(id) {
      if (!id) {
        throw new Error('id is not defined');
      }
      var result = [];
      getAll().forEach(function(item) {
        if (item._id == id) {
          result.push(item);
        }
      });
      return result;
    }

    function getBooks(bookId) {
      if (!bookId) {
        throw new Error('bookId is not defined');
      }
      var result = [];
      getAll().forEach(function(item) {
        if (item.bookId == bookId) {
          result.push(item);
        }
      });
      return result;
    }

    function getAll() {
      return [
        {
          _id: 1100,
          bookId: 1000,
          title: '¡Question chapter 1?',
          type: 'FoV',
          chapter: 1,
          response: [
            {
              value: 'Verdad',
              response: false
            },
            {
              value: 'Falso',
              response: true
            }
          ]
        },
        {
          _id: 1101,
          bookId: 1000,
          title: '¡Question chapter 1 1?',
          type: 'FoV',
          chapter: 3,
          response: [
            {
              value: 'Verdad',
              response: false
            },
            {
              value: 'Falso',
              response: true
            }
          ]
        },
        {
          _id: 1102,
          bookId: 1000,
          title: '¡Question chapter 1 2?',
          type: 'FoV',
          chapter: 3,
          response: [
            {
              value: 'Verdad',
              response: false
            },
            {
              value: 'Falso',
              response: true
            }
          ]
        },
        {
          _id: 1103,
          bookId: 1000,
          title: '¡Question chapter 1 3?',
          type: 'FoV',
          chapter: 3,
          response: [
            {
              value: 'Verdad',
              response: false
            },
            {
              value: 'Falso',
              response: true
            }
          ]
        },
        {
          _id: 2000,
          bookId: 1000,
          title: '¡Question 2?',
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
