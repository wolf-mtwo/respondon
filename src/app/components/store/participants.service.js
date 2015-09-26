(function() {
  'use strict';

  angular
    .module('respondon')
    .factory('Participants', service);

  function service($resource, Global) {
    var url = Global.PATH + '/rest/v1/participants';
    return $resource(url, {
      id: '@id'
    }, {
      get: {
        url: url + '/id/:id',
        method: 'GET'
      },
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
