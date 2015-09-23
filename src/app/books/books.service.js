(function() {
  'use strict';

  angular
    .module('respondon')
    .factory('Books', service);

  function service($resource, Global) {

    var url = Global.PATH + '/rest/v1/books';
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
