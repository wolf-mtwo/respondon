(function() {
  'use strict';

  angular
    .module('respondon')
    .factory('Participants', service);

  function service($resource) {
    var url = 'http://localhost:8080/pregunton-api/api/persist/participants';
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
