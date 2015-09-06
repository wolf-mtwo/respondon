(function() {
  'use strict';

  angular
    .module('respondon')
    .factory('Questions', service);

  function service($resource) {
    var url = 'http://localhost:8080/pregunton-api/api/books/questions';
    return $resource(url, {
      id: '@id'
    }, {
      update: {
        url: url + '/id/:id',
        method: 'PUT'
      }
    });
  }

})();
