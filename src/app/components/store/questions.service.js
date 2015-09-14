(function() {
  'use strict';

  angular
    .module('respondon')
    .factory('Questions', service);

  function service($resource, Global) {
    var url = Global.PATH + '/api/books/questions';
    return $resource(url, {
      id: '@id'
    }, {
      update: {
        url: url + '/id/:id',
        method: 'PUT'
      },
      delete: {
        url: url + '/id/:id',
        method: 'DELETE'
      }
    });
  }

})();
