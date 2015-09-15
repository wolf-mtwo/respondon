(function() {
  'use strict';

  angular
    .module('respondon')
    .factory('Books', service);

  function service($resource, Global) {

    var url = Global.PATH + '/api/persist/books';
    return $resource(url, {
      id: '@id'
    }, {
      update: {
        url: url + '/id/:id',
        method: 'PUT'
      },
       get: {
         url: url + '/id/:id',
         method: 'GET'
       },
       delete: {
         url: url + '/id/:id',
         method: 'DELETE'
       }
    });
  }
})();
