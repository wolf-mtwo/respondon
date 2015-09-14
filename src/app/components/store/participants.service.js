(function() {
  'use strict';

  angular
    .module('respondon')
    .factory('Participants', service);

  function service($resource, Global) {
    var url = Global.PATH + '/api/persist/participants';
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
